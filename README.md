# Landing Page Oficial · Voiren

Landing corporativa de **Voiren** construida con **Astro**.
Está orientada a presentar servicios, casos de éxito, equipo y canales de contacto, con páginas legales publicadas.

## Stack y base técnica

- **Framework:** Astro `^5.18.0`
- **Runtime:** Node.js (proyecto ESM)
- **Estilos:** CSS modular por secciones + estilos globales
- **JS cliente:** scripts vanilla para interacciones puntuales (modal de servicios)

## Qué incluye actualmente

- Home con secciones:
  - Hero
  - Servicios
  - Casos de éxito (Portfolio)
  - Sobre Voiren (misión, visión y equipo)
  - CTA final
- Header y Footer globales en layout base
- Modal/pestaña de detalle de paquetes de servicios (con datos por nivel)
- Enlaces directos a WhatsApp, correo y redes sociales
- Páginas legales:
  - Términos y condiciones
  - Política de privacidad
  - Política de cookies
- Página 404 personalizada

## Rutas

- `/` → Landing principal
- `/terminos` → Términos y condiciones
- `/privacidad` → Política de privacidad
- `/cookies` → Política de cookies
- `/404` → Página de error

## Estructura del proyecto

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   └── sections/
│       ├── Hero.astro
│       ├── Services.astro
│       ├── Portfolio.astro
│       ├── About.astro
│       └── CTA.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── terminos.astro
│   ├── privacidad.astro
│   ├── cookies.astro
│   └── 404.astro
├── scripts/
│   └── sections/
│       └── services-packages.js
└── styles/
    ├── global.css
    ├── variables.css
    ├── pages/
    └── sections/
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Desarrollo local

1. Instala dependencias con `npm install`.
2. Levanta el entorno con `npm run dev`.
3. Abre `http://localhost:4321`.

## Estado del proyecto

- `src/utils/seo.ts` y `src/utils/analytics.ts` existen como placeholders (vacíos).
- Existe una sección `Process.astro`, pero no está montada actualmente en `src/pages/index.astro`.
- Existe un script `services-carousel.js`, pero la interacción activa para servicios está implementada en `services-packages.js`.
