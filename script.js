// Scroll suave desde las cards de servicios hacia los bloques de detalle
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const targetSelector = card.getAttribute("data-target");
      if (!targetSelector) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
