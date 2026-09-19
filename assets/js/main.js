(function () {
  const data = window.PORTFOLIO;
  if (!data) return;

  const homeView = document.getElementById("home-view");
  const caseView = document.getElementById("case-view");
  const header = document.getElementById("site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinksWrap = document.getElementById("nav-links");
  const navLinks = document.querySelectorAll(".nav-link");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlight(text, keywords) {
    let html = escapeHtml(text);
    (keywords || [])
      .slice()
      .sort((a, b) => b.length - a.length)
      .forEach((keyword) => {
        const safe = escapeHtml(keyword);
        const pattern = safe.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        html = html.replace(new RegExp(pattern, "g"), `<span class="keyword">${safe}</span>`);
      });
    return html;
  }

  function chips(items) {
    return `<div class="chips">${(items || [])
      .map((item) => `<span class="chip">${escapeHtml(item)}</span>`)
      .join("")}</div>`;
  }

  function metrics(items) {
    if (!items || !items.length) return "";
    return `<div class="metrics">${items
      .map((item) => `<span class="metric">${escapeHtml(item)}</span>`)
      .join("")}</div>`;
  }

  const covers = {
    tap: { from: "#0F80C9", to: "#13B981", label: "Shopify → Flutter" },
    aqar: { from: "#0E7490", to: "#38BDF8", label: "Maps · Listings" },
    forall: { from: "#1D4ED8", to: "#7C3AED", label: "50+ countries" },
    cards: { from: "#1E3A5F", to: "#D4A017", label: "Prepaid · Pay" },
    sakoon: { from: "#047857", to: "#34D399", label: "Pharmacy" },
    boat: { from: "#0F4C81", to: "#38BDF8", label: "Bookings" },
    honey: { from: "#B45309", to: "#F59E0B", label: "Payouts" },
    zego: { from: "#5B21B6", to: "#A78BFA", label: "Live calls" },
    rest: { from: "#C2410C", to: "#FB923C", label: "Ordering" },
    exp: { from: "#334155", to: "#94A3B8", label: "Finance" },
    shop: { from: "#BE185D", to: "#F472B6", label: "Storefronts" },
    web: { from: "#312E81", to: "#818CF8", label: "Web · Desktop" },
    furn: { from: "#7C2D12", to: "#D6B08A", label: "Catalog" },
  };

  let coverSeq = 0;

  function coverSvg(key, title) {
    const palette = covers[key] || covers.tap;
    const label = escapeHtml(palette.label);
    const name = escapeHtml(title);
    const gradId = `g-${key}-${++coverSeq}`;
    return `<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${name} cover">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${palette.from}"/>
          <stop offset="1" stop-color="${palette.to}"/>
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="url(#${gradId})"/>
      <circle cx="520" cy="70" r="120" fill="rgba(255,255,255,0.12)"/>
      <circle cx="80" cy="340" r="90" fill="rgba(255,255,255,0.1)"/>
      <rect x="68" y="86" width="168" height="228" rx="28" fill="rgba(255,255,255,0.16)"/>
      <rect x="88" y="112" width="128" height="176" rx="16" fill="rgba(255,255,255,0.88)"/>
      <rect x="104" y="132" width="96" height="12" rx="6" fill="${palette.from}"/>
      <rect x="104" y="156" width="72" height="8" rx="4" fill="#94A3B8"/>
      <rect x="104" y="176" width="96" height="8" rx="4" fill="#CBD5E1"/>
      <rect x="104" y="196" width="84" height="8" rx="4" fill="#CBD5E1"/>
      <text x="280" y="188" fill="#fff" font-size="28" font-family="Inter, sans-serif" font-weight="700">${name}</text>
      <text x="280" y="222" fill="rgba(255,255,255,0.82)" font-size="16" font-family="Inter, sans-serif">${label}</text>
    </svg>`;
  }

  function projectCover(project) {
    if (project.image) {
      return `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} screenshot" width="640" height="400" loading="lazy" />`;
    }
    return coverSvg(project.cover || "tap", project.title);
  }

  function projectLinks(project, opts) {
    const includeCase = opts && opts.includeCase;
    const links = [];
    if (project.projectUrl) {
      links.push(
        `<a class="btn btn-primary" href="${escapeHtml(project.projectUrl)}" target="_blank" rel="noopener noreferrer">View Project</a>`
      );
    }
    // TODO: Add verified Play Store / App Store URLs when provided.
    if (project.playStoreUrl) {
      links.push(
        `<a class="btn btn-secondary" href="${escapeHtml(project.playStoreUrl)}" target="_blank" rel="noopener noreferrer">Play Store</a>`
      );
    }
    if (project.appStoreUrl) {
      links.push(
        `<a class="btn btn-secondary" href="${escapeHtml(project.appStoreUrl)}" target="_blank" rel="noopener noreferrer">App Store</a>`
      );
    }
    if (includeCase) {
      links.push(`<a class="text-link" href="#/projects/${escapeHtml(project.slug)}">View Case Study →</a>`);
    }
    return links.length ? `<div class="project-actions">${links.join("")}</div>` : "";
  }

  function featuredCard(project) {
    const bullets = (project.contributions || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    return `<article class="card project-card">
      <div class="cover">${projectCover(project)}</div>
      <div class="project-body">
        ${project.company ? `<p class="project-company">${escapeHtml(project.company)}</p>` : ""}
        <h3>${escapeHtml(project.title)}</h3>
        ${project.subtitle ? `<p class="project-sub">${escapeHtml(project.subtitle)}</p>` : ""}
        <p>${escapeHtml(project.description)}</p>
        ${chips(project.technologies)}
        ${bullets ? `<ul class="project-list">${bullets}</ul>` : ""}
        ${metrics(project.metrics)}
        ${projectLinks(project, { includeCase: true })}
      </div>
    </article>`;
  }

  function moreCard(project) {
    const extra = project.projectUrl
      ? `<a class="text-link" href="${escapeHtml(project.projectUrl)}" target="_blank" rel="noopener noreferrer">View project →</a>`
      : "";
    return `<article class="card more-card">
      <h3>${escapeHtml(project.title)}</h3>
      ${project.subtitle ? `<p class="project-sub">${escapeHtml(project.subtitle)}</p>` : ""}
      <p>${escapeHtml(project.description)}</p>
      ${chips(project.technologies)}
      ${extra}
    </article>`;
  }

  function experienceCard(role) {
    const bullets = (role.bullets || [])
      .map((item) => `<li>${highlight(item.text, item.keywords)}</li>`)
      .join("");
    const tone = role.logoTone === "dark" ? " is-dark" : "";
    return `<article class="card exp-card">
      <div class="org-logo${tone}"><img src="${escapeHtml(role.logo)}" alt="${escapeHtml(role.company)} logo" /></div>
      <div>
        <div class="exp-top">
          <div>
            <h3>${escapeHtml(role.title)}</h3>
            <p class="exp-company">${escapeHtml(role.company)}</p>
            <p class="exp-place">${escapeHtml(role.place)}</p>
          </div>
          <p class="exp-dates">${escapeHtml(role.dates)}</p>
        </div>
        ${bullets ? `<ul>${bullets}</ul>` : ""}
      </div>
    </article>`;
  }

  function renderHome() {
    const stats = document.getElementById("stats");
    if (stats) {
      stats.innerHTML = data.stats
        .map(
          (stat) =>
            `<article class="card stat"><strong>${escapeHtml(stat.value)}</strong><span>${escapeHtml(stat.label)}</span></article>`
        )
        .join("");
    }

    const skills = document.getElementById("skill-groups");
    if (skills) {
      skills.innerHTML = data.skillGroups
        .map(
          (group) =>
            `<article class="card stack-card"><h3>${escapeHtml(group.title)}</h3>${chips(group.items)}</article>`
        )
        .join("");
    }

    const approach = document.getElementById("approach-grid");
    if (approach) {
      approach.innerHTML = data.approach
        .map(
          (item) =>
            `<article class="card approach-card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.copy)}</p>${chips(item.tags)}</article>`
        )
        .join("");
    }

    const featured = document.getElementById("featured-grid");
    if (featured) {
      featured.innerHTML = data.projects.filter((project) => project.featured).map(featuredCard).join("");
    }

    const more = document.getElementById("more-grid");
    if (more) {
      more.innerHTML = data.projects.filter((project) => !project.featured).map(moreCard).join("");
    }

    const experience = document.getElementById("experience-list");
    if (experience) {
      experience.innerHTML = data.experience.map(experienceCard).join("");
    }
  }

  function renderCase(project) {
    const live = project.projectUrl
      ? `<a class="btn btn-primary" href="${escapeHtml(project.projectUrl)}" target="_blank" rel="noopener noreferrer">View Live Project</a>`
      : "";
    const storeLinks = [];
    if (project.playStoreUrl) {
      storeLinks.push(
        `<a class="btn btn-secondary" href="${escapeHtml(project.playStoreUrl)}" target="_blank" rel="noopener noreferrer">Play Store</a>`
      );
    }
    if (project.appStoreUrl) {
      storeLinks.push(
        `<a class="btn btn-secondary" href="${escapeHtml(project.appStoreUrl)}" target="_blank" rel="noopener noreferrer">App Store</a>`
      );
    }
    const workedOn = (project.workedOn || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    const challenges = (project.challenges || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");
    // TODO: Add verified technical challenge when provided.
    const challengeBlock = challenges
      ? `<section class="card case-block"><h2>Technical Challenges</h2><ul>${challenges}</ul></section>`
      : "";
    const impact = metrics(project.metrics);

    caseView.innerHTML = `
      <div class="case-top">
        <a class="text-link" href="#projects">← Back to Projects</a>
        ${project.company ? `<p class="project-company">${escapeHtml(project.company)}</p>` : ""}
        <h1>${escapeHtml(project.title)}</h1>
        <p class="case-meta">${escapeHtml(project.subtitle || "")}${project.role ? ` · ${escapeHtml(project.role)}` : ""}</p>
        ${chips(project.technologies)}
      </div>
      <div class="card cover case-cover">${projectCover(project)}</div>
      <section class="card case-block"><h2>Overview</h2><p>${escapeHtml(project.overview || project.description)}</p></section>
      <section class="card case-block"><h2>My Role</h2><p>${escapeHtml(project.roleCopy || "I contributed as a Flutter developer on this production application.")}</p></section>
      <section class="card case-block"><h2>Architecture &amp; Technology</h2>${chips(project.technologies)}</section>
      ${workedOn ? `<section class="card case-block"><h2>What I Worked On</h2><ul>${workedOn}</ul></section>` : ""}
      ${challengeBlock}
      ${impact ? `<section class="card case-block"><h2>Impact</h2>${impact}</section>` : ""}
      <section class="card case-block"><h2>Technologies</h2>${chips(project.technologies)}</section>
      <div class="case-actions">
        <a class="btn btn-secondary" href="#projects">Back to Projects</a>
        ${live}
        ${storeLinks.join("")}
      </div>
    `;
  }

  function setResumeLinks() {
    const links = document.querySelectorAll(".resume-link");
    const url = (data.resumeUrl || "").trim();
    // TODO: Add Muhammad_Abubakar_Senior_Flutter_Resume.pdf when provided.
    links.forEach((link) => {
      if (url) {
        link.href = url;
        link.classList.remove("hidden");
      } else {
        link.removeAttribute("href");
        link.classList.add("hidden");
      }
    });
  }

  function closeNav() {
    if (!navLinksWrap || !navToggle) return;
    navLinksWrap.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  function setupNav() {
    if (navToggle && navLinksWrap) {
      navToggle.addEventListener("click", () => {
        const open = navLinksWrap.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(open));
        navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      navLinksWrap.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeNav();
      });
    }

    window.addEventListener("scroll", () => {
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    });

    const sectionIds = ["about", "skills", "projects", "experience", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle("is-active", link.dataset.section === entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  function setupReveal() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = document.querySelectorAll(".fade-in");
    if (reduce) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
  }

  function applyRoute() {
    const hash = location.hash || "";
    const match = hash.match(/^#\/projects\/([a-z0-9-]+)/i);
    if (match) {
      const project = data.projects.find((item) => item.slug === match[1]);
      if (project) {
        renderCase(project);
        homeView.classList.add("hidden");
        caseView.classList.remove("hidden");
        closeNav();
        window.scrollTo(0, 0);
        return;
      }
    }
    caseView.classList.add("hidden");
    caseView.innerHTML = "";
    homeView.classList.remove("hidden");
    if (hash && /^#[A-Za-z][\w-]*$/.test(hash)) {
      const target = document.querySelector(hash);
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    }
  }

  renderHome();
  setResumeLinks();
  setupNav();
  setupReveal();
  applyRoute();
  window.addEventListener("hashchange", applyRoute);
})();
