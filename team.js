/* ==========================================================================
   Ecom Designs Hub — team data and card templates
   All people data lives in LEADERS below. Edit it, then run `npm run render`
   in tools/ so the cards, org chart, counts and JSON-LD in index.html update.
   This file is shared by the browser (script.js) and the build (tools/render.mjs),
   so it must not touch the DOM.
   ========================================================================== */
(function (root) {
  // width/height of each photo's largest WebP (from tools/photo-sizes.json, written by `npm run images`)
  const PHOTO_SIZES = {
    'talha-mumtaz': { w: 800, h: 1067 },
    'uneeb-ahmed': { w: 800, h: 1067 },
    'shaleem-samar': { w: 800, h: 1188 },
    'ameer-hamza': { w: 800, h: 1067 },
    'muhammad-farooq': { w: 800, h: 968 },
    'muhammad-moiz': { w: 800, h: 1067 },
    'muhammad-tasneem': { w: 800, h: 1067 },
    'zainab-siddiqui': { w: 512, h: 575 }
  };

  // linkedin: '' hides the link. TODO: add each person's LinkedIn profile URL.
  const LEADERS = {
    talha: {
      name: 'Talha Mumtaz', initials: 'TM', photo: 'talha-mumtaz', color: '#6C5CFF', linkedin: '',
      role: 'Chief Executive Officer', short: 'CEO', dept: 'Executive office', tier: 'ceo',
      reportsTo: null, since: '2021', location: 'Head office', email: 'support@ecomdesignshub.com',
      quote: 'We grow when every team knows exactly why its work matters to the client.',
      bio: 'Talha leads Ecom Designs Hub’s strategy, client partnerships and long-term growth. He works side by side with founder Shaleem Samar and co-founder Uneeb Ahmed, keeping sales, production and delivery moving in one direction.',
      responsibilities: ['Company strategy and annual direction', 'Key client partnerships and new business', 'Leadership hiring and team structure', 'Budget, pricing and growth targets'],
      expertise: ['E-commerce strategy', 'Client partnerships', 'Business development', 'Team building', 'Pricing'],
      meta: [['Leads', 'Strategy & growth'], ['Expertise', 'E-commerce, partnerships'], ['Direct reports', '2 founders']],
      worksWith: ['uneeb', 'shaleem']
    },
    uneeb: {
      name: 'Uneeb Ahmed', initials: 'UA', photo: 'uneeb-ahmed', cutout: true, color: '#1FA98F', linkedin: '',
      role: 'Co-Founder · Chief Production Officer', short: 'Co-Founder · CPO', dept: 'Production', tier: 'founder',
      reportsTo: 'talha', since: '2019', location: 'Head office', email: 'support@ecomdesignshub.com',
      quote: 'Great production is a calm team shipping work it is proud of.',
      bio: 'Uneeb oversees production across design, development and operations, turning every signed project into a finished store on schedule.',
      responsibilities: ['Production planning across all projects', 'Design and development quality reviews', 'Mentoring the team leads', 'Delivery timelines and capacity'],
      expertise: ['Production', 'Project delivery', 'Team leadership'],
      worksWith: ['talha', 'tasneem', 'moiz', 'zainab']
    },
    shaleem: {
      name: 'Shaleem Samar', initials: 'SS', photo: 'shaleem-samar', color: '#E0622E', linkedin: '',
      role: 'Founder · Chief Sales Officer', short: 'Founder · CSO', badge: 'Founder', dept: 'Sales', tier: 'founder',
      reportsTo: 'talha', since: '2019', location: 'Head office', email: 'support@ecomdesignshub.com',
      quote: 'We sell outcomes, not hours — and then we deliver them.',
      bio: 'Shaleem leads sales and client acquisition, building the relationships that bring new brands to Ecom Designs Hub and keeping every proposal honest about what the team can deliver.',
      responsibilities: ['New business and sales pipeline', 'Proposals and pricing with the CEO', 'Client relationships and renewals', 'Sales reporting'],
      expertise: ['Sales', 'Negotiation', 'Client relations'],
      worksWith: ['talha', 'uneeb', 'farooq', 'hamza']
    },
    hamza: {
      name: 'Ameer Hamza', initials: 'AH', photo: 'ameer-hamza', cutout: true, color: '#4152E0', linkedin: '',
      role: 'Sales Director', short: 'Sales Director', dept: 'Sales', level: 'Director', tier: 'team',
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
      name: 'Muhammad Farooq', initials: 'FQ', photo: 'muhammad-farooq', color: '#D2416F', linkedin: '',
      role: 'Floor Manager', short: 'Floor Manager', dept: 'Sales', level: 'Manager', tier: 'team',
      reportsTo: 'shaleem', since: '2021', location: 'Head office', email: 'support@ecomdesignshub.com',
      teamLine: 'Runs the sales floor',
      quote: 'A focused floor closes more — clear targets, quick help, no one left guessing.',
      summary: 'Farooq runs the sales floor day to day, keeping the team focused, supported and on target.',
      bio: 'Farooq is the floor manager, running the sales floor day to day. Farooq sets the daily targets, keeps an eye on every live conversation, steps in to help the team close and makes sure the floor runs smoothly from the first shift to the last.',
      responsibilities: ['Running the sales floor and daily operations', 'Daily targets, shift planning and attendance', 'Coaching agents and quality checks on calls', 'Escalations and support on live deals', 'Floor reporting to the founders'],
      expertise: ['Floor management', 'Team coaching', 'Sales operations', 'Performance tracking', 'Client relations'],
      worksWith: ['shaleem', 'hamza', 'moiz']
    },
    moiz: {
      name: 'Muhammad Moiz', initials: 'MM', photo: 'muhammad-moiz', color: '#2E8B6E', linkedin: '',
      role: 'Senior Software Engineer', short: 'Team Lead · Development', dept: 'Development', level: 'Team Lead', tier: 'team',
      reportsTo: 'uneeb', since: '2022', location: 'Head office', email: 'support@ecomdesignshub.com',
      teamLine: 'Leads the development team',
      quote: 'Build it to scale on day one — the second million users should feel like the first.',
      summary: 'Moiz leads development, building large-scale .NET applications that stay fast as they grow.',
      bio: 'Moiz is a senior software engineer and leads the development team, specialising in .NET and large-scale applications. He designs and builds resilient back-end systems, APIs and distributed services that stay fast, secure and maintainable as traffic and data grow.',
      responsibilities: ['Leading the development team, planning and delivery', 'Architecture and design of large-scale .NET applications', 'High-performance APIs, services and integrations', 'Code reviews, engineering standards and mentoring', 'Performance tuning, scalability and reliability'],
      expertise: ['.NET / C#', 'ASP.NET Core', 'Large-scale systems', 'Microservices', 'SQL Server', 'Cloud & DevOps'],
      worksWith: ['uneeb', 'tasneem']
    },
    tasneem: {
      name: 'Muhammad Tasneem', initials: 'MT', photo: 'muhammad-tasneem', color: '#C08A1E', linkedin: '',
      role: 'Senior Visual Designer', short: 'Senior Visual Designer', dept: 'Design', level: 'Senior Designer', tier: 'team',
      reportsTo: 'uneeb', since: '2022', location: 'Head office', email: 'support@ecomdesignshub.com',
      teamLine: 'Shapes the visual design',
      quote: 'Good design is the first promise a store makes to its customer.',
      summary: 'Tasneem leads visual design, from brand look and feel to polished store layouts.',
      bio: 'Tasneem is a senior visual designer at Ecom Designs Hub, working under co-founder Uneeb Ahmed in production. Tasneem shapes the look and feel of every client store, from brand identity and layouts to banners and product visuals, and keeps the design quality consistent across projects.',
      responsibilities: ['Visual design for client stores and landing pages', 'Brand identity, banners and product visuals', 'Design reviews and visual quality across projects', 'Working with development on pixel-perfect delivery'],
      expertise: ['Visual design', 'UI design', 'Branding', 'Figma', 'Adobe Photoshop', 'Illustrator'],
      worksWith: ['uneeb', 'moiz']
    },
    zainab: {
      name: 'Zainab Siddiqui', initials: 'ZS', photo: 'zainab-siddiqui', color: '#B5478F', linkedin: '',
      role: 'HR Manager & Marketing Head', short: 'HR Manager · Marketing Head', dept: 'HR & Marketing', level: 'Manager', tier: 'team',
      reportsTo: 'uneeb', since: '2022', location: 'Head office', email: 'support@ecomdesignshub.com',
      teamLine: 'Leads HR and marketing',
      quote: 'Look after the people and tell their story well — the brand follows.',
      summary: 'Zainab manages HR and heads marketing, from hiring the team to growing the brand.',
      bio: 'Zainab is the HR manager and marketing head at Ecom Designs Hub. On the HR side, Zainab runs hiring, onboarding, policies and team wellbeing; on the marketing side, Zainab leads the brand, social media and campaigns that bring new clients to the company.',
      responsibilities: ['Hiring, onboarding and HR policies', 'Attendance, performance reviews and team wellbeing', 'Brand, social media and content planning', 'Marketing campaigns and lead generation with sales'],
      expertise: ['HR management', 'Recruitment', 'Marketing strategy', 'Social media', 'Branding'],
      worksWith: ['uneeb', 'shaleem']
    }
  };

  const VALUES = ['Ownership', 'Craft first', 'Open doors', 'Grow people', 'Decide in the open'];

  /* ---------- helpers ---------- */
  const pad = (n, len) => String(n).padStart(len, '0');
  const arrow = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';
  const altFor = (p) => `${p.name}, ${p.role.replace(' · ', ' – ')}`;
  // every card has the same button text, so screen readers also hear whose profile it opens
  const whose = (label, p) => `aria-label="${label} of ${p.name}"`;

  // sizes hints per slot, matching the CSS layout at each breakpoint
  const SIZES = {
    hero: '(max-width: 960px) 88vw, 440px',
    exec: '(max-width: 960px) 92vw, 480px',
    founder: '(max-width: 600px) 92vw, (max-width: 1100px) 45vw, 210px',
    team: '(max-width: 600px) 92vw, (max-width: 1100px) 46vw, 400px',
    drawer: '(max-width: 600px) 100vw, 560px',
    small: '120px'
  };

  // responsive <img>: 160w / 400w / 600w / 800w WebP files in assets/team/
  function photo(p, { slot = 'team', alt = '', eager = false, cls = '' } = {}) {
    const s = PHOTO_SIZES[p.photo];
    const base = `assets/team/${p.photo}`;
    const big = Math.min(800, s.w);
    const srcset = `${base}-160.webp 160w, ${base}-400.webp ${Math.min(400, s.w)}w, ${base}-600.webp ${Math.min(600, s.w)}w, ${base}-800.webp ${big}w`;
    const classes = [cls, p.cutout ? 'cutout' : ''].filter(Boolean).join(' ');
    return `<img src="${base}-400.webp" srcset="${srcset}" sizes="${SIZES[slot]}" width="${big}" height="${Math.round(s.h * big / s.w)}" alt="${alt}"`
      + `${classes ? ` class="${classes}"` : ''} data-photo="${p.photo}"`
      + `${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async">`;
  }
  const face = (p, slot, alt = altFor(p)) => p.photo
    ? photo(p, { slot, alt })
    : `<span class="mono" style="background:${p.color}">${p.initials}</span>`;
  // small avatars always sit next to the person's name, so the image itself is decorative
  const smallFace = (p) => p.photo
    ? `<span class="av">${photo(p, { slot: 'small' })}</span>`
    : `<span class="av" style="background:${p.color}">${p.initials}</span>`;
  const tags = (list) => `<div class="tags">${list.map((t) => `<span class="tag">${t}</span>`).join('')}</div>`;
  const linkedin = (p) => p.linkedin
    ? `<a class="more" href="${p.linkedin}" target="_blank" rel="noopener">LinkedIn<span class="sr-only"> profile of ${p.name} (opens in a new tab)</span></a>`
    : '';

  /* ---------- cards ---------- */
  const execBadge = (p) => p.badge || (p.tier === 'ceo' ? 'Chief Executive' : 'Co-Founder');
  const execMeta = (p) => p.meta || [['Leads', p.dept], ['Expertise', p.expertise.slice(0, 2).join(', ')], ['With us since', p.since]];

  // the big executive card (the CEO by default; a founder when swapped in)
  function execCard(id, revealed = false) {
    const p = LEADERS[id];
    return `
    <div data-reveal${revealed ? ' class="is-in is-swapped"' : ''}>
      <article class="ceo card glass" data-open="${id}" data-cursor="Profile">
        <span class="avatar">${face(p, 'exec')}</span>
        <div class="ceo-body">
          <span class="badge badge-accent"><span class="pulse"></span>${p.role}</span>
          <h3 class="ceo-name">${p.name}</h3>
          <p class="quote">“${p.quote}”</p>
          <p class="ceo-bio">${p.bio}</p>
          <div class="meta-grid">${execMeta(p).map(([k, v]) => `<div class="meta"><small>${k}</small><span>${v}</span></div>`).join('')}</div>
          <div class="card-actions">
            <button type="button" class="btn btn-accent" data-open="${id}" ${whose('Read full profile', p)}>Read full profile ${arrow}</button>
            ${linkedin(p)}
          </div>
        </div>
      </article>
    </div>`;
  }

  // the smaller executive cards: everyone in the executive tier except the featured one
  function founderCards(featured, revealed = false) {
    return Object.entries(LEADERS)
      .filter(([id, p]) => (p.tier === 'founder' || p.tier === 'ceo') && id !== featured)
      .map(([id, p], i) => `
      <div data-reveal${revealed ? ' class="is-in is-swapped"' : ''} style="--d:${i * 0.12}s">
        <article class="fcard card glass" data-feature="${id}" data-cursor="View">
          <span class="avatar">
            <span class="badge badge-float">${execBadge(p)}</span>
            ${face(p, 'founder')}
            <span class="slide-up glass-dark"><span>“${p.quote}”</span></span>
          </span>
          <div class="fbody">
            <h3>${p.name}</h3>
            <span class="role">${p.role}</span>
            <p>${p.bio}</p>
            ${tags(p.expertise)}
            <div class="card-actions">
              <button type="button" class="more" data-open="${id}" ${whose('View profile', p)}>View profile ${arrow}</button>
              ${linkedin(p)}
            </div>
          </div>
        </article>
      </div>`).join('');
  }

  function teamCards() {
    return Object.entries(LEADERS)
      .filter(([, p]) => p.tier === 'team')
      .map(([id, p], i) => `
      <div class="team-item" data-dept="${p.dept}" data-reveal style="--d:${(i * 0.08).toFixed(2)}s">
        <article class="tcard card glass" data-open="${id}" data-cursor="View">
          <span class="avatar">
            <span class="badge badge-float">${p.dept}</span>
            ${face(p, 'team')}
            <span class="slide-up glass-dark"><span>${p.teamLine}</span><b>Profile →</b></span>
          </span>
          <div class="tbody">
            <span class="badge ${p.level === 'Manager' ? 'badge-orange' : 'badge-teal'}">${p.level}</span>
            <h3>${p.name}</h3>
            <span class="role-plain">${p.role}</span>
            <p>${p.summary || p.bio}</p>
            ${tags(p.expertise.slice(0, 3))}
            <div class="card-actions">
              <button type="button" class="more" data-open="${id}" ${whose('View profile', p)}>View profile ${arrow}</button>
              ${linkedin(p)}
            </div>
          </div>
        </article>
      </div>`).join('');
  }

  /* ---------- marquee ---------- */
  function marquee() {
    const stars = ['#6C5CFF', '#FF7A3D', '#22C7A9', '#E2487F'];
    const star = (i) => `<span class="mq-star" style="color:${stars[i % stars.length]}">✦</span>`;
    const names = Object.entries(LEADERS).map(([id, p], i) => `
      <span class="mq-item mq-person" data-open="${id}">${smallFace(p)}<span class="mq-name"><b>${p.name}</b><small>${p.short}</small></span></span>${star(i)}`).join('');
    const values = VALUES.map((t, i) => `<span class="mq-item">${t}</span>${star(i + 1)}`).join('');
    // two identical groups so the loop can wrap seamlessly at one group's width;
    // each group repeats its items so one group is always wider than the screen
    const group = (html) => `<div class="mq-group">${html}</div><div class="mq-group">${html}</div>`;
    return { names: group(names + names), values: group(values + values) };
  }

  /* ---------- org chart (built from reportsTo) ---------- */
  function tree() {
    const node = (id, lvl) => {
      const p = LEADERS[id];
      const kids = Object.keys(LEADERS).filter((k) => LEADERS[k].reportsTo === id);
      const cls = p.tier === 'ceo' ? 'node node-ceo' : p.tier === 'team' ? 'node node-team' : 'node';
      const av = smallFace(p).replace('class="av"', p.tier === 'team' ? 'class="av sq"' : 'class="av"');
      const label = p.tier === 'ceo' ? p.role : p.short;
      return `<li style="--lvl:${lvl}"><button type="button" class="${cls}" data-open="${id}">${av}<span class="nt"><strong>${p.name}</strong><small>${label}</small></span></button>`
        + (kids.length ? `<ul>${kids.map((k) => node(k, lvl + 1)).join('')}</ul>` : '') + '</li>';
    };
    const top = Object.keys(LEADERS).find((k) => !LEADERS[k].reportsTo);
    return node(top, 0);
  }

  /* ---------- counts for the hero stats ---------- */
  function counts() {
    const all = Object.values(LEADERS);
    return {
      ceo: all.filter((p) => p.tier === 'ceo').length,
      founders: all.filter((p) => p.tier === 'founder').length,
      team: all.filter((p) => p.tier === 'team').length
    };
  }

  root.TEAM = { LEADERS, VALUES, PHOTO_SIZES, pad, arrow, altFor, photo, face, smallFace, tags, linkedin, execCard, founderCards, teamCards, marquee, tree, counts };
})(typeof window !== 'undefined' ? window : globalThis);
