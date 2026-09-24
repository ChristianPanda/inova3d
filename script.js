const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("is-open");
  });
}
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => mobileNav.classList.remove("is-open"));
});

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const key = btn.dataset.filter;
    document.querySelectorAll(".tile").forEach((tile) => {
      const show = key === "all" || tile.dataset.cat === key;
      tile.classList.toggle("is-hidden", !show);
    });
  });
});

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const nome = data.get("nome");
    const email = data.get("email");
    const mensagem = data.get("mensagem");
    const subject = encodeURIComponent("Pedido Inova3D — " + nome);
    const body = encodeURIComponent(
      "Nome: " + nome + "\nEmail: " + email + "\n\n" + mensagem
    );
    window.location.href = "mailto:ola@inova3d.pt?subject=" + subject + "&body=" + body;
  });
}
