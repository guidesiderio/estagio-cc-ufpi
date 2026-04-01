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

// ─── BUSCA ───────────────────────────────────────
const buscaInput = document.getElementById("buscaInput");
const semResultado = document.getElementById("semResultado");
const termoBusca = document.getElementById("termoBusca");

buscaInput.addEventListener("input", function () {
  const q = this.value.trim().toLowerCase();
  let algumVisivel = false;

  document.querySelectorAll(".faq-item").forEach((item) => {
    const texto = item.textContent.toLowerCase();
    const visivel = !q || texto.includes(q);
    item.style.display = visivel ? "" : "none";
    if (visivel) algumVisivel = true;
  });

  // mostra/esconde grupos vazios
  document.querySelectorAll(".faq-grupo").forEach((grupo) => {
    const itensVisiveis = [...grupo.querySelectorAll(".faq-item")].some(
      (i) => i.style.display !== "none"
    );
    grupo.style.display = itensVisiveis ? "" : "none";
  });

  semResultado.style.display = !algumVisivel && q ? "block" : "none";
  if (!algumVisivel && q) termoBusca.textContent = this.value.trim();
});

// ─── SIDEBAR + PILLS ACTIVE STATE ────────────────
const navLinks = document.querySelectorAll(".faq-nav-link");
const pillLinks = document.querySelectorAll(".faq-pill");
const grupos = document.querySelectorAll(".faq-grupo");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((l) => l.classList.remove("active"));
        pillLinks.forEach((l) => l.classList.remove("active"));
        const sideLink = document.querySelector(`.faq-nav-link[href="#${id}"]`);
        const pillLink = document.querySelector(`.faq-pill[href="#${id}"]`);
        if (sideLink) sideLink.classList.add("active");
        if (pillLink) pillLink.classList.add("active");
      }
    });
  },
  { rootMargin: "-20% 0px -60% 0px" }
);

grupos.forEach((g) => observer.observe(g));

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
