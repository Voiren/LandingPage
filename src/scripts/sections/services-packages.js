// Datos de los paquetes con sus subniveles
const packagesData = {
  automation: {
    title: "Automatización de procesos",
    description: "Optimiza y automatiza tus flujos de trabajo para ahorrar tiempo y reducir errores.",
    levels: [
      {
        name: "Menos trabajo manual (Pack Inicio)",
        description: "Menos tareas repetitivas, y menos errores humanos",
        features: ["Diagnóstico de 1 proceso", "Automatización de envio de correos u otros procesos", "Documentación básica"]
      },
      {
        name: "Procesos ordenados (Pack Crecimiento)",
        description: "Procesos más rápidos, trazables y confiables",
        features: ["Diagnóstico de 2-3 procesos", "Automatización encadenada (flujo completo)", "Integraciones con otras herramientas (Zapier, APIs)"]
      },
      {
        name: "Automatización inteligente (Pack Premium)",
        description: "Operación estable, escalable y con alta disponibilidad",
        features: ["Análisis profundo del flujo operativo", "Automatizaciones múltiples", "Despliegue en la nube"]
      }
    ]
  },
  systems: {
    title: "Sistemas internos a medida",
    description: "Desarrollamos sistemas internos personalizados que se adaptan perfectamente a tus procesos.",
    levels: [
      {
        name: "Sistema simple (Pack Básico)",
        description: "Ej: Control de pedidos, registro de clientes, etc.",
        features: ["Backend y CRUD simples", "Autenticación", "Interfaz funcional"]
      },
      {
        name: "Herramienta de trabajo (Pack Operativo)",
        description: "Sistema de uso diarío para tu equipo.",
        features: ["Roles de usuario", "Integraciones básicas", "Despliegue productivo"]
      },
      {
        name: "Sistema Crítico (Pack Premium)",
        description: "Para los procesos más importantes de tu negocio, con alta demanda y necesidad de estabilidad.",
        features: ["Arquitectura Robusta", "Monitoreo", "Backups y recuperación"]
      }
    ]
  },
  data: {
    title: "Datos, reportes y calidad",
    description: "Transforma tus datos en información valiosa con reportes actionables y visualizaciones.",
    levels: [
      {
        name: "Diagnóstico de Datos",
        description: "Saber que datos sirven, cuales no, y cómo mejorarlos",
        features: ["Auditoría de datos", "Detección de errores", "Informe claro"]
      },
      {
        name: "Control y reportes",
        description: "Gestión y análisis de tus datos con reportes claros",
        features: ["Limpieza y validación automática", "Dashboards simples", "Métricas clave"]
      },
      {
        name: "Data en Producción",
        description: "Tus datos siempre listos, confiables y con reportes en tiempo real",
        features: ["Validaciones continuas", "Reportes en tiempo real", "Insights automáticos"]
      }
    ]
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  const packageButtons = document.querySelectorAll('[data-package-btn]');
  const modalOverlay = document.getElementById('packagesOverlay');
  const modal = document.getElementById('packagesModal');
  const closeButton = document.getElementById('packagesModalClose');

  // Abrir modal al hacer click en los botones
  packageButtons.forEach(button => {
    button.addEventListener('click', function() {
      const packageId = this.dataset.packageBtn;
      openPackageModal(packageId);
    });
  });

  // Cerrar modal
  closeButton?.addEventListener('click', closePackageModal);
  modalOverlay?.addEventListener('click', closePackageModal);

  // Evitar cerrar modal al hacer click en el contenido
  modal?.addEventListener('click', function(e) {
    if (e.target === modal) {
      closePackageModal();
    }
  });

  // Cerrar con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closePackageModal();
    }
  });
});

// Función para abrir la pseudo-pestaña (modal flotante)
function openPackageModal(packageId) {
  const packageData = packagesData[packageId];
  if (!packageData) return;

  const modal = document.getElementById('packagesModal');
  const overlay = document.getElementById('packagesOverlay');
  const titleEl = document.getElementById('packageModalTitle');
  const descriptionEl = document.getElementById('packageModalDescription');
  const levelsContainer = document.getElementById('packageModalLevels');

  // Actualizar contenido del modal
  if (titleEl) titleEl.textContent = packageData.title;
  if (descriptionEl) descriptionEl.textContent = packageData.description;

  // Limpiar y rellenar los niveles
  if (levelsContainer) {
    levelsContainer.innerHTML = '';
    packageData.levels.forEach((level, index) => {
      const levelCard = createLevelCard(level, index);
      levelsContainer.appendChild(levelCard);
    });
  }

  // Mostrar modal con animación
  overlay?.classList.add('active');
  modal?.classList.add('active');

  // Prevenir scroll en el body
  document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closePackageModal() {
  const modal = document.getElementById('packagesModal');
  const overlay = document.getElementById('packagesOverlay');

  overlay?.classList.remove('active');
  modal?.classList.remove('active');

  // Restaurar scroll en el body
  document.body.style.overflow = 'auto';
}

// Función para crear una card de nivel
function createLevelCard(level, index) {
  const card = document.createElement('div');
  card.className = 'package-level';
  card.innerHTML = `
    <h3 class="package-level__name">${level.name}</h3>
    <p class="package-level__description">${level.description}</p>
    <ul class="package-level__features">
      ${level.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
  `;
  return card;
}
