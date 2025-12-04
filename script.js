// script.js - Mejorado para Scroll Suave y Enlaces Internos
document.addEventListener("DOMContentLoaded", () => {
    
    // Función central para manejar el scroll suave
    const smoothScrollToTarget = (selector) => {
        const target = document.querySelector(selector);
        if (!target) {
            console.warn(`Destino no encontrado para el selector: ${selector}`);
            return;
        }

        // 1. Aplicar scroll suave
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        // 2. Opcional: Añadir un efecto visual temporal al destino (highlight)
        target.classList.add('highlighted-target');
        setTimeout(() => {
            target.classList.remove('highlighted-target');
        }, 1500); // El highlight dura 1.5 segundos
    };

    // ----------------------------------------------------
    // 1. Manejar el click en las tarjetas de servicio (.service-card)
    // ----------------------------------------------------
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
        card.addEventListener("click", () => {
            const targetSelector = card.getAttribute("data-target");
            if (targetSelector) {
                smoothScrollToTarget(targetSelector);
            }
        });
    });

    // ----------------------------------------------------
    // 2. Manejar el click en los enlaces de navegación (a[href^="#"])
    // ----------------------------------------------------
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previene el salto instantáneo predeterminado del navegador
            e.preventDefault(); 
            const targetSelector = this.getAttribute('href');
            
            // Si el destino es solo '#', saltamos la lógica de scroll
            if (targetSelector.length > 1) { 
                smoothScrollToTarget(targetSelector);
            }
        });
    });
});
