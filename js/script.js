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

// ─── HAMBURGER ───────────────────────────────────
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

// ─── FADE IN ON SCROLL ───────────────────────────
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
