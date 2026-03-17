# IreNailsArt — Web Project

Sitio web de **Ire Nails Art**, Nail Studio en Valencia.

## Estructura del proyecto

```
IreNailsArt/
├── index.html          ← Página principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← JavaScript (menú, carrusel, galería, lightbox)
├── images/
│   ├── README.md       ← Guía de imágenes (leer antes de añadir fotos)
│   ├── logo/           ← Logo, favicon, og-image
│   ├── hero/           ← Fotos hero-1.jpg … hero-4.jpg
│   └── gallery/        ← Fotos french-1.jpg, gel-1.jpg, arte-1.jpg, acrilico-1.jpg…
└── README.md           ← Este archivo
```

## Cómo añadir imágenes

1. Consulta `images/README.md` para ver los nombres de archivo y tamaños recomendados.
2. Coloca tus fotos en la subcarpeta correspondiente (`logo/`, `hero/` o `gallery/`).
3. La web las cargará automáticamente en cuanto estén presentes (las imágenes de
   Unsplash son sólo el respaldo temporal mientras no existan las locales).

## Cómo activar el logo

En `index.html`, busca las líneas marcadas con `<!-- LOGO: ... -->` y descoméntalas.

## Personalización

| Qué cambiar              | Dónde                                   |
|--------------------------|-----------------------------------------|
| Nombre del estudio       | `index.html` — texto y meta tags        |
| Colores                  | `css/styles.css` — variables en `:root` |
| Número de WhatsApp       | `index.html` — todos los `href="https://wa.me/..."` |
| Dirección / horario      | `index.html` — sección `#location`     |
| Precios de servicios     | `index.html` — sección `#services`     |
| Reseñas                  | `index.html` — sección `#reviews`      |
| Estadísticas del hero    | `index.html` — `.hero-stats`           |

## Tecnologías

- HTML5 semántico
- CSS3 (variables, grid, flexbox, animaciones)
- JavaScript vanilla (sin dependencias)
- Google Fonts: Cormorant Garamond + Jost
