// ─── ACCORDION ──────────────────────────────────
function toggle(btn) {
  const item = btn.closest(".faq-item");
  const isOpen = item.classList.contains("aberto");
  // fecha todos
  document.querySelectorAll(".faq-item.aberto").forEach((el) => {
    el.classList.remove("aberto");
    el.querySelector(".faq-pergunta").setAttribute("aria-expanded", "false");
  });
  if (!isOpen) {
    item.classList.add("aberto");
    btn.setAttribute("aria-expanded", "true");
  }
}

// ─── HAMBURGER ───────────────────────────────
const navToggle = document.querySelector(".nav-toggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", function () {
    const isOpen = navMobile.classList.toggle("open");
    this.setAttribute("aria-expanded", String(isOpen));
    this.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
  });

  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMobile.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Abrir menu de navegação");
    });
  });
}

// ─── FADE IN ON SCROLL ───────────────────────
const fadeEls = document.querySelectorAll(".fade-in");
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 40);
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeEls.forEach((el) => fadeObserver.observe(el));

// ─── ACTIVE NAV SECTION TRACKING ────────────
(function () {
  const sections = document.querySelectorAll("main section[id]");
  const desktopNav = document.querySelector("header .header-inner nav");
  const mobileNav = document.getElementById("navMobile");

  if (!sections.length || !desktopNav) return;

  function setActive(id) {
    const allLinks = [
      ...desktopNav.querySelectorAll("a"),
      ...(mobileNav ? mobileNav.querySelectorAll("a") : []),
    ];
    allLinks.forEach((link) => {
      if (link.getAttribute("href") === "#" + id) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
})();

// ─── BACK TO TOP ────────────────────────────
const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 600) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    },
    { passive: true }
  );

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
