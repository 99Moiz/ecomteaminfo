/* ==========================================================================
   Ecom Designs Hub — Leadership Circle
   All people data lives in LEADERS below. Edit it to update the site.
   Names and details are sample (dummy) data — replace with real information.
   ========================================================================== */

const LEADERS = {
  talha: {
    name: 'Talha Mumtaz', initials: 'TM', photo: 'assets/ceo.jpg', color: '#6C5CFF',
    role: 'Chief Executive Officer', short: 'CEO', dept: 'Executive office', tier: 'ceo',
    reportsTo: null, since: '2019', location: 'Head office', email: 'support@ecomdesignshub.com',
    quote: 'We grow when every team knows exactly why its work matters to the client.',
    bio: 'Talha leads Ecom Designs Hub’s strategy, client partnerships and long-term growth. He works side by side with founder Shaleem Samar and co-founder Uneeb Ahmed, keeping sales, production and delivery moving in one direction.',
    responsibilities: ['Company strategy and annual direction', 'Key client partnerships and new business', 'Leadership hiring and team structure', 'Budget, pricing and growth targets'],
    expertise: ['E-commerce strategy', 'Client partnerships', 'Business development', 'Team building', 'Pricing'],
    meta: [['Leads', 'Strategy & growth'], ['Expertise', 'E-commerce, partnerships'], ['Direct reports', '2 founders, 2 leads']],
    worksWith: ['uneeb', 'shaleem', 'moiz', 'kashmala']
  },
  uneeb: {
    name: 'Uneeb Ahmed', initials: 'UA', photo: 'assets/uneebCo-founder.png', cutout: true, color: '#1FA98F',
    role: 'Co-Founder · Chief Production Officer', short: 'Co-Founder · CPO', dept: 'Production', tier: 'founder',
    reportsTo: 'talha', since: '2019', location: 'Head office', email: 'support@ecomdesignshub.com',
    quote: 'Great production is a calm team shipping work it is proud of.',
    bio: 'Uneeb oversees production across design, development and operations, turning every signed project into a finished store on schedule.',
    responsibilities: ['Production planning across all projects', 'Design and development quality reviews', 'Mentoring the team leads', 'Delivery timelines and capacity'],
    expertise: ['Production', 'Project delivery', 'Team leadership'],
    worksWith: ['talha', 'moiz']
  },
  shaleem: {
    name: 'Shaleem Samar', initials: 'SS', photo: 'assets/shaleem-portrait.jpg', color: '#E0622E',
    role: 'Founder · Chief Sales Officer', short: 'Founder · CSO', badge: 'Founder', dept: 'Sales', tier: 'founder',
    reportsTo: 'talha', since: '2019', location: 'Head office', email: 'support@ecomdesignshub.com',
    quote: 'We sell outcomes, not hours — and then we deliver them.',
    bio: 'Shaleem leads sales and client acquisition, building the relationships that bring new brands to Ecom Designs Hub and keeping every proposal honest about what the team can deliver.',
    responsibilities: ['New business and sales pipeline', 'Proposals and pricing with the CEO', 'Client relationships and renewals', 'Sales reporting'],
    expertise: ['Sales', 'Negotiation', 'Client relations'],
    worksWith: ['talha', 'uneeb', 'farooq', 'hamza']
  },
  hamza: {
    name: 'Ameer Hamza', initials: 'AH', photo: 'assets/Ameer Hamza.png', cutout: true, color: '#4152E0',
    role: 'Team Lead & Sales Director', short: 'Team Lead · Sales Director', dept: 'Sales', level: 'Team Lead', tier: 'team',
    reportsTo: 'shaleem', since: '2022', location: 'Head office', email: 'support@ecomdesignshub.com',
    teamLine: 'Leads the sales team',
    quote: 'Listen first — the right proposal is usually hiding in the client’s questions.',
    summary: 'Hamza leads the sales team day to day, from first call to signed proposal.',
    bio: 'Hamza leads the sales team day to day, coaching the team on discovery calls, lead qualification and proposals. Hamza works closely with the Floor Manager and founders to keep the pipeline moving and make sure every new client is handed over to production with clear expectations.',
    responsibilities: ['Daily sales team planning and follow-ups', 'Lead qualification and discovery calls', 'Proposals and client onboarding', 'Pipeline tracking and sales reporting'],
    expertise: ['Sales', 'Lead generation', 'Client communication', 'Proposals'],
    worksWith: ['shaleem', 'farooq']
  },
  farooq: {
    name: 'Muhammad Farooq', initials: 'FQ', photo: 'assets/farooq-TlandFloorManager.PNG', color: '#D2416F',
    role: 'Team Lead & Floor Manager', short: 'Team Lead · Floor Manager', dept: 'Sales', level: 'Team Lead', tier: 'team',
    reportsTo: 'shaleem', since: '2021', location: 'Head office', email: 'support@ecomdesignshub.com',
    teamLine: 'Runs the sales floor',
    quote: 'A focused floor closes more — clear targets, quick help, no one left guessing.',
    summary: 'Farooq runs the sales floor day to day, keeping the team focused, supported and on target.',
    bio: 'Farooq is a team lead and the floor manager, running the sales floor day to day. Farooq sets the daily targets, keeps an eye on every live conversation, steps in to help the team close and makes sure the floor runs smoothly from the first shift to the last.',
    responsibilities: ['Running the sales floor and daily operations', 'Daily targets, shift planning and attendance', 'Coaching agents and quality checks on calls', 'Escalations and support on live deals', 'Floor reporting to the founders'],
    expertise: ['Floor management', 'Team coaching', 'Sales operations', 'Performance tracking', 'Client relations'],
    worksWith: ['shaleem', 'hamza', 'moiz']
  },
  moiz: {
    name: 'Muhammad Moiz', initials: 'MM', photo: 'assets/MoizTL.jpg', color: '#2E8B6E',
    role: 'Senior Software Engineer', short: 'Team Lead · Development', dept: 'Development', level: 'Team Lead', tier: 'team',
    reportsTo: 'talha', since: '2022', location: 'Head office', email: 'support@ecomdesignshub.com',
    teamLine: 'Leads the development team',
    quote: 'Build it to scale on day one — the second million users should feel like the first.',
    summary: 'Moiz leads development, building large-scale .NET applications that stay fast as they grow.',
    bio: 'Moiz is a senior software engineer and leads the development team, specialising in .NET and large-scale applications. He designs and builds resilient back-end systems, APIs and distributed services that stay fast, secure and maintainable as traffic and data grow.',
    responsibilities: ['Leading the development team, planning and delivery', 'Architecture and design of large-scale .NET applications', 'High-performance APIs, services and integrations', 'Code reviews, engineering standards and mentoring', 'Performance tuning, scalability and reliability'],
    expertise: ['.NET / C#', 'ASP.NET Core', 'Large-scale systems', 'Microservices', 'SQL Server', 'Cloud & DevOps'],
    worksWith: ['talha']
  },
  kashmala: {
    name: 'Kashmala', initials: 'KM', photo: 'assets/kashmala.jpeg', color: '#B5478F',
    role: 'HR Manager & Marketing Head', short: 'HR Manager · Marketing Head', dept: 'HR & Marketing', level: 'Manager', tier: 'team',
    reportsTo: 'talha', since: '2022', location: 'Head office', email: 'support@ecomdesignshub.com',
    teamLine: 'Leads HR and marketing',
    quote: 'Look after the people and tell their story well — the brand follows.',
    summary: 'Kashmala manages HR and heads marketing, from hiring the team to growing the brand.',
    bio: 'Kashmala is the HR manager and marketing head at Ecom Designs Hub. On the HR side, Kashmala runs hiring, onboarding, policies and team wellbeing; on the marketing side, Kashmala leads the brand, social media and campaigns that bring new clients to the company.',
    responsibilities: ['Hiring, onboarding and HR policies', 'Attendance, performance reviews and team wellbeing', 'Brand, social media and content planning', 'Marketing campaigns and lead generation with sales'],
    expertise: ['HR management', 'Recruitment', 'Marketing strategy', 'Social media', 'Branding'],
    worksWith: ['talha', 'shaleem']
  }
};

const VALUES = ['Ownership', 'Craft first', 'Open doors', 'Grow people', 'Decide in the open'];

/* ---------- always start at the top on reload ---------- */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
window.scrollTo(0, 0);
window.addEventListener('beforeunload', () => window.scrollTo(0, 0));

/* ---------- helpers ---------- */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const pad = (n, len) => String(n).padStart(len, '0');

const arrow = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';

function face(p, alt = '') {
  return p.photo
    ? `<img src="${p.photo}" alt="${alt}" loading="lazy"${p.cutout ? ' class="cutout"' : ''}>`
    : `<span class="mono" style="background:${p.color}">${p.initials}</span>`;
}
function smallFace(p) {
  return p.photo
    ? `<span class="av"><img src="${p.photo}" alt=""${p.cutout ? ' class="cutout"' : ''}></span>`
    : `<span class="av" style="background:${p.color}">${p.initials}</span>`;
}
const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${t}</span>`).join('')}</div>`;

/* ---------- render ---------- */
// the big executive card shows the CEO by default; clicking a founder card swaps them in
let featured = 'talha';
const execBadge = (p) => p.badge || (p.tier === 'ceo' ? 'Chief Executive' : 'Co-Founder');
const execMeta = (p) => p.meta || [['Leads', p.dept], ['Expertise', p.expertise.slice(0, 2).join(', ')], ['With us since', p.since]];

function renderCEO(revealed = false) {
  const id = featured;
  const p = LEADERS[id];
  const [first, ...rest] = p.name.split(' ');
  $('#ceoFeature').innerHTML = `
    <div data-reveal${revealed ? ' class="is-in is-swapped"' : ''}>
      <article class="ceo card glass" data-open="${id}" data-cursor="Profile">
        <span class="avatar">${face(p, `Portrait of ${p.name}`)}</span>
        <div class="ceo-body">
          <span class="badge badge-accent"><span class="pulse"></span>${p.role}</span>
          <h3 class="ceo-name">${first}<br>${rest.join(' ')}</h3>
          <p class="quote">“${p.quote}”</p>
          <p class="ceo-bio">${p.bio}</p>
          <div class="meta-grid">${execMeta(p).map(([k, v]) => `<div class="meta"><small>${k}</small><span>${v}</span></div>`).join('')}</div>
          <button type="button" class="btn btn-accent" data-open="${id}">Read full profile ${arrow}</button>
        </div>
      </article>
    </div>`;
}

function renderFounders(revealed = false) {
  $('#founders').innerHTML = Object.entries(LEADERS)
    .filter(([id, p]) => (p.tier === 'founder' || p.tier === 'ceo') && id !== featured)
    .map(([id, p], i) => `
      <div data-reveal${revealed ? ' class="is-in is-swapped"' : ''} style="--d:${i * 0.12}s">
        <article class="fcard card glass" data-feature="${id}" data-cursor="View">
          <span class="avatar">
            <span class="badge badge-float">${execBadge(p)}</span>
            ${face(p)}
            <span class="slide-up glass-dark"><span>“${p.quote}”</span></span>
          </span>
          <div class="fbody">
            <h3>${p.name}</h3>
            <span class="role">${p.role}</span>
            <p>${p.bio}</p>
            ${tags(p.expertise)}
            <button type="button" class="more" data-open="${id}">View profile ${arrow}</button>
          </div>
        </article>
      </div>`).join('');
}

function featureExec(id) {
  if (id === featured || !LEADERS[id]) return;
  featured = id;
  renderCEO(true);
  renderFounders(true);
  $('#ceoFeature').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}

function renderTeam() {
  $('#teamGrid').innerHTML = Object.entries(LEADERS)
    .filter(([, p]) => p.tier === 'team')
    .map(([id, p], i) => `
      <div class="team-item" data-dept="${p.dept}" data-reveal style="--d:${i * 0.1}s">
        <article class="tcard card glass" data-open="${id}" data-cursor="View">
          <span class="avatar">
            <span class="badge badge-float">${p.dept}</span>
            ${face(p)}
            <span class="slide-up glass-dark"><span>${p.teamLine}</span><b>Profile →</b></span>
          </span>
          <div class="tbody">
            <span class="badge ${p.level === 'Manager' ? 'badge-orange' : 'badge-teal'}">${p.level}</span>
            <h3>${p.name}</h3>
            <span class="role-plain">${p.role}</span>
            <p>${p.summary || p.bio}</p>
            ${tags(p.expertise.slice(0, 3))}
            <button type="button" class="more" data-open="${id}">View profile ${arrow}</button>
          </div>
        </article>
      </div>`).join('');
}

function renderMarquee() {
  const stars = ['#6C5CFF', '#FF7A3D', '#22C7A9', '#E2487F'];
  const star = (i) => `<span class="mq-star" style="color:${stars[i % stars.length]}">✦</span>`;
  const names = Object.entries(LEADERS).map(([id, p], i) => `
    <span class="mq-item mq-person" data-open="${id}">${smallFace(p)}<span class="mq-name"><b>${p.name}</b><small>${p.short}</small></span></span>${star(i)}`).join('');
  const values = VALUES.map((t, i) => `<span class="mq-item">${t}</span>${star(i + 1)}`).join('');
  // two identical groups so the loop can wrap seamlessly at one group's width
  const group = (html) => `<div class="mq-group">${html}</div><div class="mq-group">${html}</div>`;
  // each group repeats its items so one group is always wider than the screen
  $('#mqNames').innerHTML = group(names + names);
  $('#mqValues').innerHTML = group(values + values);
}

/* ---------- marquee motion: drifts on its own, speeds up and follows scroll direction ---------- */
function initMarquee() {
  if (reduceMotion) return;
  const rows = [
    { el: $('#mqNames'), speed: 55, x: 0 },
    { el: $('#mqValues'), speed: -45, x: 0 }
  ];
  const band = $('.marquee');
  let dir = 1, boost = 0, hover = 1, hoverTarget = 1, prevY = window.scrollY, last = performance.now();
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
    boost *= 0.92;
    hover += (hoverTarget - hover) * 0.08;
    rows.forEach((r) => {
      const w = r.el.firstElementChild.offsetWidth;
      if (!w) return;
      r.x -= r.speed * dir * (1 + boost) * hover * dt;
      r.x = ((r.x % w) - w) % w; // keep within (-w, 0]
      r.el.style.transform = `translate3d(${r.x}px,0,0) skewX(${(-dir * boost * 0.6 * Math.sign(r.speed)).toFixed(2)}deg)`;
    });
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
}

/* ---------- counters ---------- */
function countUp(el) {
  const target = Number(el.dataset.count);
  const len = Number(el.dataset.pad || 0);
  if (reduceMotion) { el.textContent = pad(target, len); return; }
  const start = performance.now();
  const dur = 1400;
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
  $$('[data-reveal], [data-split]:not([data-hero-split]), [data-count]').forEach((el) => io.observe(el));
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

/* ---------- team filter ---------- */
function initTabs() {
  const tabs = $$('.tab');
  const indicator = $('.tab-indicator');
  const place = (btn) => {
    indicator.style.width = `${btn.offsetWidth}px`;
    indicator.style.height = `${btn.offsetHeight}px`;
    indicator.style.transform = `translate(${btn.offsetLeft}px, ${btn.offsetTop}px)`;
  };
  const active = () => $('.tab.is-active');
  tabs.forEach((btn) => btn.addEventListener('click', () => {
    tabs.forEach((t) => {
      t.classList.toggle('is-active', t === btn);
      t.setAttribute('aria-pressed', String(t === btn));
    });
    place(btn);
    const f = btn.dataset.filter;
    let i = 0;
    $$('.team-item').forEach((item) => {
      const show = f === 'all' || item.dataset.dept === f;
      item.classList.toggle('is-hidden', !show);
      item.classList.remove('pop');
      if (show) {
        void item.offsetWidth; // restart animation
        item.style.setProperty('--i', i++);
        item.classList.add('pop');
      }
    });
  }));
  place(active());
  window.addEventListener('resize', () => place(active()));
  if (document.fonts) document.fonts.ready.then(() => place(active()));
}

/* ---------- profile drawer ---------- */
const drawer = $('#drawer');
const drawerBody = $('#drawerBody');
const drawerPanel = $('.drawer-panel');
let lastFocus = null;

function profileHTML(id) {
  const p = LEADERS[id];
  const [first, ...rest] = p.name.split(' ');
  const boss = p.reportsTo ? LEADERS[p.reportsTo].name : 'Founding team';
  let i = 0;
  const z = () => `class="dz" style="--i:${i++}"`;
  return `
    <div class="d-hero dz" style="--i:${i++}">
      ${face(p, `Portrait of ${p.name}`)}
      <span class="badge badge-float">${p.dept}</span>
    </div>
    <div class="d-content">
      <span class="badge badge-accent dz" style="--i:${i++}">${p.role}</span>
      <h2 class="d-name dz" id="dName" style="--i:${i++}">${first}<br>${rest.join(' ')}</h2>
      <p class="quote dz" style="--i:${i++}">“${p.quote}”</p>
      <div class="d-facts dz" style="--i:${i++}">
        <div class="meta"><small>Department</small><span>${p.dept}</span></div>
        <div class="meta"><small>Reports to</small><span>${boss}</span></div>
        <div class="meta"><small>Location</small><span>${p.location}</span></div>
        <div class="meta"><small>With us since</small><span>${p.since}</span></div>
      </div>
      <div class="d-section" ${z()}><h4>Biography</h4><p>${p.bio}</p></div>
      <div class="d-section" ${z()}><h4>Responsibilities</h4>
        <ol class="d-list">${p.responsibilities.map((r, n) => `<li><b>${pad(n + 1, 2)}</b><span>${r}</span></li>`).join('')}</ol>
      </div>
      <div class="d-section" ${z()}><h4>Expertise</h4>${tags(p.expertise)}</div>
      <div class="d-section" ${z()}><h4>Works closest with</h4>
        <div class="d-people">${p.worksWith.map((wid) => {
          const w = LEADERS[wid];
          return `<button type="button" class="d-person" data-open="${wid}">${smallFace(w)}<span><strong>${w.name}</strong><small>${w.short}</small></span></button>`;
        }).join('')}</div>
      </div>
      <div class="d-actions" ${z()}>
        <a class="btn btn-light" href="mailto:${p.email}">Send an email ${arrow}</a>
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
  if (!wasOpen) setTimeout(() => $('.drawer-close').focus({ preventScroll: true }), 60);
}

function closeProfile() {
  if (!drawer.classList.contains('is-open')) return;
  drawer.classList.remove('is-open');
  drawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-locked');
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
  if (open) header.classList.remove('is-hidden');
}
function closeMenu() { if (menuOpen) setMenu(false); }

/* ---------- preloader ---------- */
// wraps every letter of the wordmark so it can rise in and out
function splitChars(root) {
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType !== Node.TEXT_NODE) { walk(n); return; }
      const frag = document.createDocumentFragment();
      [...n.textContent].forEach((ch) => {
        if (ch === ' ') { frag.append(' '); return; }
        const outer = document.createElement('span');
        const inner = document.createElement('span');
        outer.className = 'c';
        inner.className = 'ci';
        inner.style.setProperty('--i', i++);
        inner.textContent = ch;
        outer.append(inner);
        frag.append(outer);
      });
      n.replaceWith(frag);
    });
  };
  walk(root);
  root.setAttribute('aria-label', 'Ecom Designs Hub');
  root.classList.add('is-split');
}

function runPreloader() {
  splitChars($('#plWord'));
  return new Promise((resolve) => {
    const countEl = $('#plCount');
    const bar = $('#plBar');
    const dur = reduceMotion ? 200 : 2300;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      countEl.textContent = Math.round(eased * 100);
      bar.style.transform = `scaleX(${eased})`;
      if (t < 1) requestAnimationFrame(tick);
      else resolve();
    };
    requestAnimationFrame(tick);
  });
}

const pageLoaded = new Promise((resolve) => {
  if (document.readyState === 'complete') resolve();
  else window.addEventListener('load', resolve, { once: true });
  setTimeout(resolve, 4000); // never wait forever
});

/* ---------- boot ---------- */
renderCEO();
renderFounders();
renderTeam();
renderMarquee();
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
  if (e.key === 'Escape') { closeProfile(); closeMenu(); }
  trapFocus(e);
});

burger.addEventListener('click', () => setMenu(!menuOpen));
$$('.mm-link').forEach((a) => a.addEventListener('click', closeMenu));
window.addEventListener('resize', () => { if (innerWidth > 960) closeMenu(); });
window.addEventListener('scroll', onScroll, { passive: true });

initTabs();
initPointerFx();
initMarquee();

Promise.all([runPreloader(), pageLoaded]).then(() => {
  window.scrollTo(0, 0);
  document.body.classList.remove('is-loading');
  document.body.classList.add('loaded');
  $$('[data-hero-split]').forEach((el) => el.classList.add('is-in'));
  initReveal();
  initActiveNav();
  onScroll();
});
