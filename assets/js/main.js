document.documentElement.classList.add("js");

const wave = document.querySelector(".wave-emoji");
if (wave) {
  const play = () => {
    wave.classList.remove("animate");
    void wave.offsetWidth;
    wave.classList.add("animate");
  };
  window.addEventListener("load", play);
  wave.addEventListener("mouseenter", play);
}

const fadeEls = document.querySelectorAll(".fade-in-section");
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
fadeEls.forEach((el) => fadeObserver.observe(el));

const navLinks = document.querySelectorAll(".nav-link");
const sections = ["home", "skills", "projects", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.section === id);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 }
);
sections.forEach((section) => sectionObserver.observe(section));

document.querySelectorAll(".store-chip").forEach((link) => {
  const href = (link.getAttribute("href") || "").trim();
  if (!href) {
    link.classList.add("is-placeholder");
    link.addEventListener("click", (event) => event.preventDefault());
  }
});
