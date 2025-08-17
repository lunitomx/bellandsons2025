ACTÚA COMO: Editor SEO senior + Estratega SGE + Local SEO + UX Writer.

MARCA: Bell & Sons — pisos y muros WPC premium (lujo silencioso).
OBJETIVO: Escribe un ARTÍCULO PILAR que capte demanda informativa → transaccional para {{tema_principal}} en {{ciudad}}, México.

ENTREGABLE (OBLIGATORIO):
- Devuelve UN SOLO archivo HTML5 (<!DOCTYPE html>…</html>) listo para producción.
- Incluye solo lo necesario: <head> con metadatos/OG/Twitter/canonical y JSON-LD @graph; <body> con <main><article>…</article></main>.
- No dependencias extras (sin frameworks). CSS mínimo enlined (solo utilidades de tipografía/espaciado). JS solo para acordeón FAQ (accesible).
- Idioma: español MX. Tono: premium sobrio, directo, sin superlativos vacíos.

CONTEXTOS CLAVE:
- URL final del artículo: {{url_canonica}}
- Ciudad: {{ciudad}} (incluir de forma natural, no keyword stuffing).
- WhatsApp CTA: {{url_whatsapp}}
- Página Catálogo/Contacto (internos): {{url_catalogo}} · {{url_contacto}}
- Autor (E-E-A-T): {{autor_nombre}}, {{autor_rol}}, {{autor_url}}
- Logo: {{url_logo}}
- Imagen hero: {{url_hero}} (1200×630 o más, peso optimizado)
- 4–8 imágenes internas: {{urls_imagenes_json}} (array con {src, alt_sugerido})

REGLAS DE SEO/SGE:
- Title ≤ 60 chars con entidad + intención + ciudad.
- Meta description 150–160 chars con beneficio + CTA.
- Canonical absoluto = {{url_canonica}}. No duplicar canonicals.
- H1 ÚNICO claro. H2 en formato pregunta para respuestas directas (SGE).
- TL;DR (250–320 chars) al inicio, legible como snippet destacado.
- Enlaces internos: 3–5 (categoría, 2 relacionados, contacto/WhatsApp). Anchors descriptivos.
- 2–3 citas externas confiables (normas, asociaciones, papers) con rel="noopener".
- Evitar “lo mejor”; usar “diseñado para…”, “ideal cuando…”.

REGLAS GEO (Local SEO):
- NAP visible en el artículo (nombre, teléfono, ciudad): Bell & Sons · +52 442 475 1433 · Querétaro, México.
- Enlace a mapa (texto): “Ver ubicación en Google Maps” → {{url_maps}}.
- Mencionar cobertura de servicio (“{{ciudad}} y alrededores”) de forma natural.

ACCESIBILIDAD & WEB VITALS:
- Imágenes con width/height, loading="lazy" (salvo hero), decoding="async", alt descriptivo ≤120 chars, srcset/sizes para responsive.
- Semántica: header/nav/main/article/aside/footer, lista y tablas con <caption>.
- Acordeón FAQ con aria-expanded, region, foco visible.
- Preserva CLS < 0.10 (reservar espacios), LCP < 2.5s (optimizar hero), INP < 200ms (JS mínimo).

ESTRUCTURA DEL ARTÍCULO (en <article>):
1) Header
   - H1: claro y corto.
   - Meta del artículo: autor, fecha publicación y actualización (ISO), tiempo de lectura.
   - TL;DR (párrafo).
2) Introducción (contexto + promesa de valor).
3) ¿Qué es {{entidad_principal}}? (H2 en pregunta) — respuesta en 2–4 oraciones + bullets.
4) Beneficios tangibles (H2) — 5–7 bullets (durabilidad, bajo mantenimiento, antiderrapante, interior/exterior).
5) Especificaciones técnicas (H2) — tabla comparativa (WPC vs madera) y ficha técnica corta (densidad, UV, humedad, instalación).
6) Casos de uso en {{ciudad}} (H2) — 2–3 mini-casos con imágenes y alt text útiles.
7) Cómo elegir el modelo adecuado (H2) — checklist (espacio, humedad, tránsito, presupuesto).
8) Instalación y mantenimiento (H2) — pasos breves (HowTo embebido en texto) y periodicidad de limpieza.
9) Precios orientativos y tiempos (H2) — rangos y factores; disclaimer de variabilidad.
10) FAQ (H2) — 5–7 preguntas reales (mantenimiento, antiderrapante, interior/exterior, garantía, plazos).
11) CTA final dual — “Cotizar por WhatsApp” + “Descargar catálogo”, con microcopy.
12) Bloque NAP + cobertura.

JSON-LD (@graph en <head>):
- Organization (logo, sameAs si procede).
- LocalBusiness (NAP, geo aproximado de {{ciudad}} si hay; areaServed).
- Article (autor Person, datePublished y dateModified, headline, description, image, inLanguage "es-MX", mainEntityOfPage).
- BreadcrumbList (Home → Blog → Artículo).
- FAQPage (las 5–7 preguntas).
- (Opcional si hay video) VideoObject.

ENTREGAR CON:
- <head> completo (title, meta, OG/Twitter, canonical, preconnect a fonts si usas).
- <style> mínimo para tipografía (serif para títulos, sans para cuerpo; usa clamp()).
- <main><article>…</article></main> con la estructura arriba.
- 8–12 ALT TEXT generados (lista visible al final en un <aside> “Descripciones de imágenes”).
- Sin comentarios ni explicaciones fuera del HTML.

CHECKLIST (marcado internamente por ti antes de devolver):
- [ ] Title/Meta/Canonical correctos.
- [ ] H1 único; H2 en preguntas; TL;DR 250–320 chars.
- [ ] 3–5 enlaces internos + 2–3 referencias externas.
- [ ] JSON-LD válido (Rich Results Test).
- [ ] Imágenes con width/height, srcset, alt ≤120 chars; hero sin lazy.
- [ ] NAP + link a Maps visibles.
- [ ] Acordeón FAQ con aria-expanded.
- [ ] LCP/CLS/INP dentro de umbrales (técnicas aplicadas).

DATOS PARA RELLENAR (si falta, invéntalo con realismo sobrio):
- {{tema_principal}} = “WPC para muros interiores” (ejemplo)
- {{entidad_principal}} = “WPC (Wood Plastic Composite)”
- {{ciudad}} = “Querétaro”
- {{url_canonica}} = "https://bellandsons.com.mx/blog/{{slug}}/"
- {{slug}} = "wpc-muros-interiores-queretaro"
- {{url_whatsapp}} = "https://wa.me/524424751433?text=Quiero%20cotizar%20WPC"
- {{url_catalogo}} = "https://bellandsons.com.mx/catalogo/"
- {{url_contacto}} = "https://bellandsons.com.mx/contacto/"
- {{url_maps}} = "https://maps.google.com/?q=Bell%20%26%20Sons%20Queretaro"
- {{autor_nombre}} = "Nombre Apellido"
- {{autor_rol}} = "Especialista en WPC"
- {{autor_url}} = "https://bellandsons.com.mx/nosotros/autor"
- {{url_logo}} = "https://bellandsons.com.mx/img/logo.png"
- {{url_hero}} = "https://bellandsons.com.mx/img/hero-wpc.jpg"
- {{urls_imagenes_json}} = '[{"src":"/img/caso1.webp"},{"src":"/img/caso2.webp"}]'
