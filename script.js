/* ==========================================================================
   Ecom Designs Hub — Leadership Circle
   Behaviour only: every card, the org chart and the counts are already in
   index.html (rendered from team.js by tools/render.mjs). This file adds
   animation, filtering, the profile drawer, the menus and the sticky CTA.
   ========================================================================== */

const { LEADERS, pad, arrow, face, smallFace, tags, linkedin, execCard, founderCards } = window.TEAM;

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
// everything behind an open drawer or menu, made inert so focus and screen readers stay inside
const background = () => [$('#header'), $('main'), $('.footer'), $('#mobileCta')].filter(Boolean);
const setInert = (els, on) => els.forEach((el) => { el.inert = on; });

/* ---------- executive swap ---------- */
// the big executive card shows the CEO by default; clicking a founder card swaps them in
let featured = 'talha';

function featureExec(id) {
  if (id === featured || !LEADERS[id]) return;
  featured = id;
  $('#ceoFeature').innerHTML = execCard(id, true);
  $('#founders').innerHTML = founderCards(id, true);
  $('#ceoFeature').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

/* ---------- marquee motion: drifts on its own, speeds up and follows scroll direction ---------- */
function initMarquee() {
  if (reduceMotion) return;
  const rows = [
    { el: $('#mqNames'), speed: 55, x: 0, w: 0 },
    { el: $('#mqValues'), speed: -45, x: 0, w: 0 }
  ];
  // group widths are measured once (and on resize), not every frame, to avoid forced layouts
  const measure = () => rows.forEach((r) => { r.w = r.el.firstElementChild.offsetWidth; });
  measure();
  window.addEventListener('resize', measure);
  if (document.fonts) document.fonts.ready.then(measure);
  const band = $('.marquee');
  let dir = 1, boost = 0, hover = 1, hoverTarget = 1, prevY = window.scrollY, last = performance.now();
  let visible = false;
  // only animate while the band is on screen
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(band);
  band.addEventListener('pointerenter', () => { hoverTarget = 0.18; });
  band.addEventListener('pointerleave', () => { hoverTarget = 1; });
  window.addEventListener('scroll', () => {
    const dy = window.scrollY - prevY;
    prevY = window.scrollY;
    if (dy) dir = dy > 0 ? 1 : -1;
    boost = Math.min(boost + Math.abs(dy) * 0.06, 9);
  }, { passive: true });

  const frame = (now) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (visible) {
      boost *= 0.92;
      hover += (hoverTarget - hover) * 0.08;
      rows.forEach((r) => {
        const { w } = r;
        if (!w) return;
        r.x -= r.speed * dir * (1 + boost) * hover * dt;
        r.x = ((r.x % w) - w) % w; // keep within (-w, 0]
        r.el.style.transform = `translate3d(${r.x}px,0,0) skewX(${(-dir * boost * 0.6 * Math.sign(r.speed)).toFixed(2)}deg)`;
      });
    }
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* ---------- split text ---------- */
function splitText(el) {
  let i = 0;
  const frag = document.createDocumentFragment();
  const wrap = (node) => {
    const outer = document.createElement('span');
    const inner = document.createElement('span');
    outer.className = 'w';
    inner.className = 'wi';
    inner.style.setProperty('--i', i++);
    inner.append(node);
    outer.append(inner);
    return outer;
  };
  [...el.childNodes].forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) {
      n.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        frag.append(/^\s+$/.test(part) ? document.createTextNode(' ') : wrap(document.createTextNode(part)));
      });
    } else if (n.nodeName === 'BR') {
      frag.append(n);
    } else {
      frag.append(wrap(n));
    }
  });
  el.textContent = '';
  el.append(frag);
  el.classList.add('is-split');
}

/* ---------- counters ---------- */
// the real number is already in the markup; this only replays it as a count-up
function countUp(el) {
  const target = Number(el.dataset.count);
  const len = Number(el.dataset.pad || 0);
  if (reduceMotion) return;
  const start = performance.now();
  const dur = 1200;
  const tick = (now) => {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(2, -10 * t);
    el.textContent = pad(Math.round(target * (t === 1 ? 1 : eased)), len);
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- reveal on scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      if (e.target.dataset.count !== undefined) countUp(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], [data-split], [data-count]').forEach((el) => io.observe(el));
}

/* ---------- active nav link ---------- */
function initActiveNav() {
  const links = $$('.nav-link');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((l) => l.classList.toggle('is-active', l.dataset.section === e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => io.observe(s));
}

/* ---------- scroll: progress, header, parallax ---------- */
const header = $('#header');
const progress = $('.progress');
const shapes = $$('.shape').map((el) => ({ el, speed: Number(el.dataset.speed), depth: Number(el.dataset.depth) }));
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
let lastY = window.scrollY;
let menuOpen = false;

function updateShapes() {
  if (reduceMotion) return;
  const y = window.scrollY;
  shapes.forEach(({ el, speed, depth }) => {
    el.style.transform = `translate3d(${mouse.x * depth}px, ${y * speed + mouse.y * depth}px, 0)`;
  });
}

let scrollTicking = false;
function onScroll() {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty('--p', max > 0 ? (y / max).toFixed(4) : 0);
    header.classList.toggle('is-scrolled', y > 40);
    if (!menuOpen) {
      if (y > lastY + 4 && y > 320) header.classList.add('is-hidden');
      else if (y < lastY - 4) header.classList.remove('is-hidden');
    }
    lastY = y;
    if (!finePointer) updateShapes();
    scrollTicking = false;
  });
}

/* ---------- cursor + mouse parallax (fine pointers) ---------- */
function initPointerFx() {
  if (!finePointer || reduceMotion) return;
  document.body.classList.add('has-cursor');
  const ring = $('.cursor-ring');
  const label = $('.cursor-label');
  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const ringPos = { ...pos };

  window.addEventListener('mousemove', (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
    mouse.tx = (e.clientX / innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / innerHeight - 0.5) * 2;
  }, { passive: true });

  // ring shows only over interactive elements; cards with data-cursor get a text label
  document.addEventListener('mouseover', (e) => {
    const labelled = e.target.closest('[data-cursor]');
    // the logo has its own hover, so the ring stays hidden there
    const inner = e.target.closest('.brand') ? null : e.target.closest('a, button, .tab, .tag, .node');
    const showLabel = labelled && (!inner || inner === labelled || (inner.matches('.more') && labelled.contains(inner)));
    if (!ring.classList.contains('is-hover') && !ring.classList.contains('is-label')) {
      ringPos.x = pos.x; // appear at the pointer, not fly in from the last spot
      ringPos.y = pos.y;
    }
    ring.classList.toggle('is-label', Boolean(showLabel));
    ring.classList.toggle('is-hover', Boolean(inner) && !showLabel);
    label.textContent = showLabel ? labelled.dataset.cursor : '';
  });
  document.addEventListener('mouseleave', () => ring.classList.remove('is-hover', 'is-label'));

  const loop = () => {
    ringPos.x += (pos.x - ringPos.x) * 0.18;
    ringPos.y += (pos.y - ringPos.y) * 0.18;
    ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
    mouse.x += (mouse.tx - mouse.x) * 0.06;
    mouse.y += (mouse.ty - mouse.y) * 0.06;
    updateShapes();
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  // magnetic elements
  $$('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
      const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // 3D tilt
  $$('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1100px) rotateX(${(-y * 10).toFixed(2)}deg) rotateY(${(x * 12).toFixed(2)}deg)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });
}

/* ---------- team filter: shows/hides the cards already in the page ---------- */
function initTabs() {
  const bar = $('.tabs');
  const tabs = $$('.tab');
  const indicator = $('.tab-indicator');
  const status = $('#filterStatus');
  const place = (btn) => {
    indicator.style.width = `${btn.offsetWidth}px`;
    indicator.style.height = `${btn.offsetHeight}px`;
    indicator.style.transform = `translate(${btn.offsetLeft}px, ${btn.offsetTop}px)`;
  };
  const active = () => $('.tab.is-active');
  // edge fades only while there is more to scroll in that direction
  const edges = () => {
    bar.classList.toggle('more-left', bar.scrollLeft > 8);
    bar.classList.toggle('more-right', bar.scrollLeft + bar.clientWidth < bar.scrollWidth - 8);
  };
  tabs.forEach((btn) => btn.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.toggle('is-active', t === btn);
      t.setAttribute('aria-pressed', String(t === btn));
    });
    place(btn);
    btn.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest', inline: 'nearest' });
    const f = btn.dataset.filter;
    let i = 0;
    $$('.team-item').forEach((item) => {
      const show = f === 'all' || item.dataset.dept === f;
      item.classList.toggle('is-hidden', !show);
      item.classList.remove('pop');
      if (show) {
        item.classList.add('is-in'); // a filtered-in card may not have been revealed yet
        void item.offsetWidth; // restart animation
        item.style.setProperty('--i', i++);
        item.classList.add('pop');
      }
    });
    status.textContent = `${i} ${i === 1 ? 'person' : 'people'} shown`;
  }));
  bar.addEventListener('scroll', edges, { passive: true });
  place(active());
  edges();
  window.addEventListener('resize', () => { place(active()); edges(); });
  if (document.fonts) document.fonts.ready.then(() => { place(active()); edges(); });
}

/* ---------- profile drawer ---------- */
const drawer = $('#drawer');
const drawerBody = $('#drawerBody');
const drawerPanel = $('.drawer-panel');
let lastFocus = null;

function profileHTML(id) {
  const p = LEADERS[id];
  const boss = p.reportsTo ? LEADERS[p.reportsTo].name : 'Founding team';
  let i = 0;
  const z = () => `class="dz" style="--i:${i++}"`;
  return `
    <div class="d-hero dz" style="--i:${i++}">
      ${face(p, 'drawer')}
      <span class="badge badge-float">${p.dept}</span>
    </div>
    <div class="d-content">
      <span class="badge badge-accent dz" style="--i:${i++}">${p.role}</span>
      <h2 class="d-name dz" id="dName" style="--i:${i++}">${p.name}</h2>
      <p class="quote dz" style="--i:${i++}">“${p.quote}”</p>
      <div class="d-facts dz" style="--i:${i++}">
        <div class="meta"><small>Department</small><span>${p.dept}</span></div>
        <div class="meta"><small>Reports to</small><span>${boss}</span></div>
        <div class="meta"><small>Location</small><span>${p.location}</span></div>
        <div class="meta"><small>With us since</small><span>${p.since}</span></div>
      </div>
      <div class="d-section" ${z()}><h3>Biography</h3><p>${p.bio}</p></div>
      <div class="d-section" ${z()}><h3>Responsibilities</h3>
        <ol class="d-list">${p.responsibilities.map((r, n) => `<li><b>${pad(n + 1, 2)}</b><span>${r}</span></li>`).join('')}</ol>
      </div>
      <div class="d-section" ${z()}><h3>Expertise</h3>${tags(p.expertise)}</div>
      <div class="d-section" ${z()}><h3>Works closest with</h3>
        <div class="d-people">${p.worksWith.map((wid) => {
          const w = LEADERS[wid];
          return `<button type="button" class="d-person" data-open="${wid}">${smallFace(w)}<span><strong>${w.name}</strong><small>${w.short}</small></span></button>`;
        }).join('')}</div>
      </div>
      <div class="d-actions" ${z()}>
        <a class="btn btn-light" href="mailto:${p.email}">Send an email ${arrow}</a>
        ${linkedin(p)}
        <button type="button" class="btn btn-ghost" data-close>Close</button>
      </div>
    </div>`;
}

function openProfile(id) {
  if (!LEADERS[id]) return;
  const wasOpen = drawer.classList.contains('is-open');
  if (!wasOpen) lastFocus = document.activeElement;
  closeMenu();
  drawerBody.innerHTML = profileHTML(id);
  drawerPanel.scrollTop = 0;
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-locked');
  setInert(background(), true);
  if (!wasOpen) setTimeout(() => $('.drawer-close').focus({ preventScroll: true }), 60);
}

function closeProfile() {
  if (!drawer.classList.contains('is-open')) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
  setInert(background(), false);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

function trapFocus(e) {
  if (e.key !== 'Tab' || !drawer.classList.contains('is-open')) return;
  const items = $$('button, a[href]', drawerPanel);
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ---------- mobile menu ---------- */
const burger = $('#burger');
const mobileMenu = $('#mobileMenu');

function setMenu(open) {
  menuOpen = open;
  mobileMenu.classList.toggle('is-open', open);
  mobileMenu.setAttribute('aria-hidden', String(!open));
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('is-locked', open);
  // keep the header (with the close button) usable; everything else goes inert
  setInert([$('main'), $('.footer'), $('#mobileCta')], open);
  if (open) {
    header.classList.remove('is-hidden');
    setTimeout(() => $('.mm-link').focus({ preventScroll: true }), 80);
  }
}
function closeMenu(returnFocus = false) {
  if (!menuOpen) return;
  setMenu(false);
  if (returnFocus) burger.focus({ preventScroll: true });
}

/* ---------- sticky call to action (phones) ---------- */
function initMobileCta() {
  const bar = $('#mobileCta');
  let dismissed = false;
  try { dismissed = sessionStorage.getItem('ctaHidden') === '1'; } catch (e) { /* storage blocked */ }
  if (dismissed) return;
  const seen = { hero: true, contact: false };
  const update = () => bar.classList.toggle('is-on', !seen.hero && !seen.contact);
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { seen[e.target.id === 'contact' ? 'contact' : 'hero'] = e.isIntersecting; });
    update();
  });
  io.observe($('#top'));
  io.observe($('#contact'));
  $('#mobileCtaClose').addEventListener('click', () => {
    bar.classList.remove('is-on');
    io.disconnect();
    try { sessionStorage.setItem('ctaHidden', '1'); } catch (e) { /* storage blocked */ }
  });
}

/* ---------- boot ---------- */
if ('scrollRestoration' in history && !location.hash) history.scrollRestoration = 'manual';
$$('[data-split]').forEach(splitText);
$('#year').textContent = new Date().getFullYear();

document.addEventListener('click', (e) => {
  const closer = e.target.closest('[data-close]');
  if (closer) { closeProfile(); return; }
  const opener = e.target.closest('[data-open]');
  if (opener) { e.preventDefault(); openProfile(opener.dataset.open); }
  else {
    const feature = e.target.closest('[data-feature]');
    if (feature) featureExec(feature.dataset.feature);
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeProfile(); closeMenu(true); }
  trapFocus(e);
});

burger.addEventListener('click', () => setMenu(!menuOpen));
$$('.mm-link, .mm-foot a').forEach((a) => a.addEventListener('click', () => closeMenu()));
window.addEventListener('resize', () => { if (innerWidth > 960) closeMenu(); });
window.addEventListener('scroll', onScroll, { passive: true });

initTabs();
initPointerFx();
initMarquee();
initMobileCta();

document.documentElement.classList.add('ready');
// one frame later so the reveal transitions run from their start state
requestAnimationFrame(() => {
  initReveal();
  initActiveNav();
  onScroll();
});
