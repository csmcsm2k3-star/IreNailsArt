# 📁 images/

Esta carpeta contiene **todas las imágenes del sitio web de Ire Nails Art**.

---

## Estructura de carpetas

```
images/
├── logo/          ← Logo, favicon e imagen Open Graph
├── hero/          ← Fotos de la sección principal (hero)
└── gallery/       ← Fotos de diseños para la galería
```

---

## 📂 images/logo/

| Archivo sugerido   | Uso                                  | Tamaño recomendado |
|--------------------|--------------------------------------|--------------------|
| `logo.png`         | Logo principal (barra de navegación) | ~200 × 60 px (PNG transparente) |
| `logo-white.png`   | Logo blanco para el footer           | ~200 × 60 px (PNG transparente) |
| `favicon.ico`      | Icono del navegador                  | 32 × 32 px |
| `og-image.jpg`     | Imagen para redes sociales (OG)      | 1200 × 630 px |

Para activar el logo en la web, abre `index.html` y **descomenta** las líneas marcadas
con `<!-- LOGO: ... -->`.

---

## 📂 images/hero/

Fotos de uñas que aparecen en la cuadrícula del hero (sección inicial de la página).

| Archivo       | Descripción sugerida              | Formato | Tamaño aprox. |
|---------------|-----------------------------------|---------|---------------|
| `hero-1.jpg`  | Foto 1 (columna izquierda, arriba)| JPG/WebP | 400 × 533 px |
| `hero-2.jpg`  | Foto 2 (columna derecha, arriba)  | JPG/WebP | 400 × 533 px |
| `hero-3.jpg`  | Foto 3 (columna izquierda, abajo) | JPG/WebP | 400 × 533 px |
| `hero-4.jpg`  | Foto 4 (columna derecha, abajo)   | JPG/WebP | 400 × 533 px |

> **Consejo:** usa fotos en formato **portrait** (vertical), relación 3:4.

---

## 📂 images/gallery/

Fotos que aparecen en la galería filtrable de la página.

| Archivo         | Categoría   | Descripción sugerida           |
|----------------|-------------|--------------------------------|
| `french-1.jpg` | French      | French clásico                 |
| `french-2.jpg` | French      | French moderno                 |
| `gel-1.jpg`    | Gel         | Semipermanente rosa            |
| `gel-2.jpg`    | Gel         | Gel rojo pasión                |
| `arte-1.jpg`   | Nail Art    | Arte floral                    |
| `arte-2.jpg`   | Nail Art    | Arte geométrico                |
| `acrilico-1.jpg` | Acrílico  | Acrílico nude                  |
| `acrilico-2.jpg` | Acrílico  | Efecto mármol                  |

> **Consejo:** usa imágenes en relación **3:4** (portrait) para que encajen bien
> en la cuadrícula. Un buen tamaño es **600 × 800 px** a 85 % de calidad JPG.

---

## ℹ️ Notas generales

- **Fallback automático**: mientras no existan las fotos locales, el sitio carga
  imágenes de Unsplash automáticamente. En cuanto coloques tus propias fotos con
  los nombres correctos, reemplazarán a las de Unsplash.
- **Optimización**: comprime las imágenes antes de subirlas (puedes usar
  [Squoosh](https://squoosh.app/) o [TinyPNG](https://tinypng.com/)).
- **Formato WebP**: si puedes, usa `.webp` en lugar de `.jpg` para mejor
  rendimiento; simplemente cambia la extensión también en `index.html`.
