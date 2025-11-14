# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static HTML/CSS/JS marketing website** for Bell & Sons, a premium WPC (Wood Plastic Composite) flooring and wall cladding company in Querétaro, México. The site is heavily optimized for SEO and SGE (Search Generative Experience) with no build system - all files are served directly from Apache.

**Key characteristic**: This is a pure static site with modern appearance achieved through CDN-based dependencies (Tailwind CSS, Font Awesome) rather than build tools.

## Development Commands

### No Build System
This project has no package.json, no build step, and no transpilation. Files in `/public` are served directly by Apache.

### Development Workflow
```bash
# Make changes directly to files in /public/
# Test locally by opening HTML files in browser

# Commit and push changes
git add .
git commit -m "Description of changes"
git push
```

### Validation & Testing
Since there's no automated test suite, validation is manual:
- **HTML Validation**: https://validator.w3.org/
- **Structured Data**: https://search.google.com/test/rich-results
- **Performance**: https://pagespeed.web.dev/
- **Mobile-Friendly**: https://search.google.com/test/mobile-friendly
- **Manual browser testing**: Chrome, Firefox, Safari (desktop + mobile viewports)

## Architecture & File Structure

### Directory Layout
```
bellandsons2025/
├── public/                    # Web root (Apache DocumentRoot)
│   ├── index.html            # Main landing page (900+ lines, heavily optimized)
│   ├── .htaccess             # CRITICAL: 35+ redirects, caching, security headers
│   ├── robots.txt            # Crawler directives
│   ├── sitemap.xml           # Search engine sitemap
│   ├── manifest.json         # PWA manifest
│   ├── 404.html              # Custom error page
│   ├── gracias-por-tu-compra.html  # Thank you/conversion page
│   ├── sucursal-*.html       # Branch location pages
│   ├── blog/                 # SEO content hub (7 articles)
│   ├── catalogo/             # Product catalog
│   ├── cuidadoslambrin/      # Maintenance guide
│   └── proyectos/            # Image gallery
├── prompt-articles.md        # Template for generating blog content
├── OPTIMIZATION-SUMMARY.md   # SEO optimization documentation
├── Radix.md                  # Project changelog
└── project-reflection.md     # Project methodology notes
```

### Critical Files

**`.htaccess`**: Contains 35+ redirect rules for SEO (old Shopify URLs → new structure), HTTPS enforcement, security headers, caching policies, and compression. **Do not modify without understanding SEO implications.**

**`sitemap.xml`**: Must be updated when adding new pages. Contains absolute URLs for all public pages.

**`robots.txt`**: Crawler directives. Currently allows all bots.

## SEO/SGE Architecture Pattern

This site follows an **"SEO-First Static Architecture"** where every design decision prioritizes search engine and AI discoverability.

### Structured Data Pattern

Every page includes a comprehensive Schema.org `@graph` in JSON-LD format with multiple schema types:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Bell & Sons",
      "legalName": "Ahuehuete Digital",
      "url": "https://bellandsons.com.mx",
      "telephone": "+52-442-367-3942",
      "address": { /* NAP data */ }
    },
    {
      "@type": "LocalBusiness",
      "name": "Bell & Sons - Sucursal Los Arcos",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "20.5888",
        "longitude": "-100.3899"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [ /* 5-7 questions for SGE */ ]
    },
    // Additional types: Article, BreadcrumbList, HowTo, Product, etc.
  ]
}
</script>
```

**Required schema types per page type**:
- All pages: Organization, LocalBusiness, BreadcrumbList
- Blog articles: Article, FAQPage, HowTo
- Product pages: Product, AggregateRating
- Thank you page: Order (conversion tracking)

### Metadata Structure

Every page must include (in order):
1. **HTML lang**: `<html lang="es-MX">`
2. **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. **Title**: <60 chars, includes location and transactional keywords
4. **Meta description**: 150-160 chars with clear CTA
5. **Canonical URL**: Absolute URL with https://bellandsons.com.mx
6. **Open Graph**: All required og:* tags for social sharing
7. **Twitter Cards**: summary_large_image format
8. **Geographic tags**: geo.region, geo.placename, geo.position (Querétaro coordinates: 20.5888, -100.3899)
9. **hreflang**: es-MX (primary), es, x-default

### Performance Optimization Pattern

All pages follow this resource loading pattern:

```html
<!-- Preconnect for external fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- DNS prefetch for third-party resources -->
<link rel="dns-prefetch" href="//www.googletagmanager.com">

<!-- Preload hero image for LCP optimization -->
<link rel="preload" as="image" href="/proyectos/hero-image.jpg">

<!-- Tailwind CSS via CDN -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Inline Tailwind config (custom colors, fonts) -->
<script>
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': '#a47e58',        // Brand copper/bronze
        'accent': '#28a745',         // WhatsApp green
        'warm-white': '#fdfcfb'
      }
    }
  }
}
</script>
```

**Image optimization**:
- Hero images: NO lazy loading (LCP priority)
- All other images: `loading="lazy"` and `decoding="async"`
- Always include `width` and `height` attributes to prevent CLS
- Alt text: <120 chars, descriptive, natural keyword integration

## Content Creation Workflow

### Blog Article Template

New blog articles MUST follow the template documented in `prompt-articles.md`. Key requirements:

**Structure** (in order):
1. **TL;DR** (250-320 chars) - Optimized for featured snippets
2. **Introduction** (2-3 paragraphs) with value promise
3. **8-12 H2 sections** in question format (e.g., "¿Qué es el lambrín WPC?")
4. **Technical specifications** in tables
5. **Local use cases** (Querétaro-specific examples)
6. **Selection checklist** (5-7 items)
7. **Installation & maintenance guide** (HowTo schema)
8. **Pricing ranges** with disclaimers
9. **FAQ accordion** (5-7 questions, ARIA-accessible)
10. **Dual CTA** (WhatsApp + Catalog button)
11. **NAP block** with Google Maps link

**Required metadata per article**:
- JSON-LD with Article, FAQPage, HowTo, BreadcrumbList
- 3-5 internal links (contextual anchors)
- 2-3 external authority citations (rel="noopener")
- 8-12 unique alt texts for images
- Reading time estimate
- Article date: ISO 8601 format
- Author: Ahuehuete Digital

**After creating article**:
1. Add entry to `sitemap.xml`
2. Update blog index (`/blog/index.html`) with new card
3. Add redirect to `.htaccess` if changing slug
4. Test with Rich Results validator

### Style Guide

**Language**: Spanish (es-MX)
**Tone**: "Premium sobrio" - Luxury but understated, technical where appropriate, no hyperbole
**Voice**: Direct, educational, avoiding superlatives like "el mejor" or "increíble"

**Content conventions**:
- Use "lambrín WPC" (not "panel de pared" or "revestimiento")
- Geographic mentions: "Querétaro" naturally integrated, not forced
- Brand name: "Bell & Sons" (not "Bell and Sons" or "Bell&Sons")
- Measurements: Metric (m², mm, kg/m³)
- Pricing: Ranges with disclaimers (e.g., "$300-$500 MXN/m²* *Precio aproximado")

## Technical Patterns & Conventions

### HTML Structure Pattern

All pages follow this semantic structure:

```html
<!DOCTYPE html>
<html lang="es-MX">
<head>
  <!-- Meta tags (18-25 tags per page) -->
  <!-- Preconnects/Preloads -->
  <!-- Google Tag Manager -->
  <!-- Fonts -->
  <!-- Tailwind CSS + config -->
  <!-- Minimal inline CSS (animations, custom styles) -->
  <!-- JSON-LD @graph -->
</head>
<body>
  <!-- GTM noscript -->
  <header class="sticky top-0">
    <nav>
      <!-- Logo + desktop menu + mobile hamburger -->
    </nav>
  </header>
  <main>
    <section class="hero"><!-- Hero with CTA --></section>
    <section><!-- Content sections --></section>
    <!-- 5-8 semantic sections -->
  </main>
  <footer>
    <!-- NAP, social links, copyright -->
  </footer>
  <!-- Vanilla JS for interactions (inline, <50 lines) -->
</body>
</html>
```

### Tailwind CSS Configuration

Every page includes an inline Tailwind config with this custom palette:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': '#a47e58',          // Copper/bronze (brand color)
        'primary-dark': '#8a6847',
        'accent': '#28a745',           // WhatsApp green
        'accent-dark': '#218838',
        'secondary': '#2c2c2c',        // Dark text
        'warm-white': '#fdfcfb',       // Background
        'text-muted': '#6b7280'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],    // Headlines
        'sans': ['Inter', 'sans-serif']             // Body text
      }
    }
  }
}
```

**Font pairing**:
- Main site: Playfair Display (headings) + Inter (body)
- Blog: Fraunces (headings) + Plus Jakarta Sans (body)

### JavaScript Philosophy

**Minimal JavaScript, Progressive Enhancement**:
- No frameworks (React, Vue, jQuery, etc.)
- Vanilla ES6 JavaScript only
- Inline scripts (no external .js files)
- Typical script length: 30-80 lines
- Always include `aria-*` attributes for accessibility

**Common patterns**:
```javascript
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenuBtn.setAttribute('aria-expanded',
    mobileMenu.classList.contains('hidden') ? 'false' : 'true'
  );
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
    button.setAttribute('aria-expanded',
      answer.classList.contains('hidden') ? 'false' : 'true'
    );
  });
});

// Lazy loading (if not using loading="lazy")
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
}
```

### Accessibility Standards

All interactive elements must be keyboard-accessible and screen-reader-friendly:

**Required ARIA attributes**:
- Buttons: `aria-label`, `aria-expanded` (if toggle)
- Navigation: `aria-current="page"` on active link
- Forms: `aria-required`, `aria-invalid`, `aria-describedby`
- Accordions: `aria-expanded`, `aria-controls`
- Images: Descriptive `alt` text (not "imagen de lambrín")

**Focus states**: All interactive elements must have visible focus indicators

**Color contrast**: Minimum WCAG AA (4.5:1 for normal text)

**Semantic HTML**: Use proper elements (`<nav>`, `<main>`, `<article>`, `<aside>`, `<button>` not `<div>`)

### Conversion Optimization

**WhatsApp CTA Strategy** - Primary conversion path:

```html
<!-- Primary CTA (appears 3-5 times per page) -->
<a href="https://wa.me/524423673942?text=Hola%2C%20me%20interesa%20cotizar%20un%20proyecto..."
   class="inline-flex items-center bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
   target="_blank"
   rel="noopener">
  <i class="fab fa-whatsapp mr-2"></i>
  Cotizar Proyecto
</a>
```

**CTA placement pattern**:
1. Hero section (above fold)
2. After value proposition
3. Mid-content (educational sections)
4. End of article/page
5. Footer (persistent)

**Message templates**: Pre-fill WhatsApp with context-specific messages (e.g., "me interesa el lambrín WPC para interiores...")

## Apache Configuration

The `.htaccess` file is **critical infrastructure** - do not modify without understanding implications.

**Current configuration includes**:

1. **Performance** (mod_deflate, mod_expires):
   - Gzip compression for HTML/CSS/JS
   - Browser caching: 1 year (images), 1 month (CSS/JS)
   - ETags optimization

2. **Security** (mod_headers):
   - X-XSS-Protection: 1; mode=block
   - X-Frame-Options: SAMEORIGIN
   - X-Content-Type-Options: nosniff
   - SQL injection pattern blocking
   - Malicious query string filtering

3. **SEO** (mod_rewrite) - **35+ redirect rules**:
   - HTTPS enforcement
   - www → non-www canonical
   - Old Shopify URLs → /catalogo/
   - Blog slug updates (2024 → 2025 versions)
   - Products/collections consolidation

4. **MIME types**:
   - WebP, WOFF2 font formats
   - Modern video formats

**When adding redirects**:
```apache
# Pattern: Old URL → New URL (301 permanent)
RewriteRule ^old-page\.html$ /new-page.html [R=301,L]
RewriteRule ^products/(.*)$ /catalogo/ [R=301,L]
```

Always use `R=301` (permanent) for SEO credit transfer and `L` flag to stop processing.

## Business Context

**Company**: Bell & Sons (Legal: Ahuehuete Digital)
**Industry**: Premium WPC flooring & wall cladding
**Location**: Querétaro, México (2 branches)
  - Sucursal Los Arcos: Av. Pie de la Cuesta 2520, Los Arcos, 76114
  - Sucursal La Noria: Calle La Noria 221, La Noria, 76169

**Products**:
- WPC wall panels (lambrín) - Primary product
- SPC flooring - Secondary
- Exterior decking
- PVC marble sheets

**Target market**: B2C high-end residential & commercial (homes, offices, restaurants, boutiques)

**Contact**:
- Phone: +52-442-367-3942
- WhatsApp: Same (primary channel)
- Email: contacto@bellandsons.com.mx

**Geographic targeting**: Querétaro municipality (coordinates: 20.5888, -100.3899)

## Common Development Tasks

### Adding a New Blog Article

1. Use `prompt-articles.md` as template
2. Create HTML file in `/public/blog/` (kebab-case naming)
3. Include all required metadata and JSON-LD schemas
4. Add 5-7 FAQ questions in accordion format
5. Include 3-5 internal links and 2-3 external citations
6. Update `/public/sitemap.xml` with new URL
7. Update `/public/blog/index.html` with new article card
8. Test with Rich Results validator
9. Check mobile responsiveness

### Adding a New Page

1. Copy structure from existing page (e.g., `index.html`)
2. Update all metadata (title, description, OG tags, canonical)
3. Update JSON-LD @graph (Organization, LocalBusiness, BreadcrumbList)
4. Update navigation in header
5. Add to `sitemap.xml`
6. Test all validation tools

### Updating .htaccess Redirects

1. Add new redirect rules at the bottom of SEO section
2. Format: `RewriteRule ^old-path$ /new-path [R=301,L]`
3. Test redirect works: `curl -I https://bellandsons.com.mx/old-path`
4. Monitor 404s in Google Search Console
5. Request reindexing of affected URLs

### Updating Contact Information

Contact info appears in **multiple locations** - update all:
- All page footers
- Organization schema (every page)
- LocalBusiness schema (location pages)
- `sitemap.xml` contact URLs
- Social media links

## Important Notes

- **No npm install**: This project has zero npm dependencies
- **No transpilation**: All code runs natively in browsers
- **CDN dependencies**: Changing Tailwind/Font Awesome versions requires updating CDN URLs on every page
- **Git workflow**: Simple add/commit/push, no pre-commit hooks or CI/CD configured
- **Deployment**: Manual (not documented in codebase)
- **Testing**: Entirely manual browser + online validator testing
- **Monitoring**: Google Search Console + Google Analytics via GTM

## Documentation Files

- `OPTIMIZATION-SUMMARY.md`: SEO optimization history and rationale
- `OPTIMIZACIONES-FINALES.md`: Final optimization checklist
- `prompt-articles.md`: Template for generating blog content
- `prompt-audit-blog.txt`: Blog audit prompt
- `Radix.md`: Project status, changelog, and roadmap
- `project-reflection.md`: Development methodology notes

When making changes that affect SEO, performance, or content structure, document them in the appropriate file.
