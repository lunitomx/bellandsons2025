# Radix - Bell & Sons 2025

## 📋 Documentación del Proyecto

### Descripción General
Bell & Sons es una marca premium de decoración en México especializada en pisos y muros WPC (Wood Plastic Composite) de alta durabilidad. El proyecto busca crear una presencia digital elegante que refleje los valores de lujo silencioso, sobriedad y escasez simbólica de la marca.

### Objetivos de Negocio
- **Primario**: Aumentar contactos vía WhatsApp
- **Secundario**: Incrementar descargas del catálogo digital
- **Terciario**: Preservar y fortalecer la estética premium de la marca

### Principios de Marca
1. **Lujo Silencioso**: Elegancia sin ostentación
2. **Sobriedad**: Diseño limpio y minimalista
3. **Escasez Simbólica**: Productos selectos y exclusivos
4. **Ritual de Compra**: Experiencia cuidada y personalizada
5. **Coherencia Visual**: Consistencia en todos los touchpoints

---

## 🏗️ Estructura del Proyecto

### Arquitectura de Archivos
```
bellandsons2025/
├── public/
│   ├── index.html                     # Página principal
│   ├── gracias-por-tu-compra.html     # Página de agradecimiento post-compra
│   ├── sucursal-arcos.html            # Landing sucursal Arcos
│   ├── sucursal-la-noria.html         # Landing sucursal La Noria
│   ├── cuidadoslambrin/
│   │   ├── index.html                 # Guía de cuidados del lambrín
│   │   ├── logo.png
│   │   ├── logoblancotransparente.png
│   │   └── [imágenes de productos]
│   └── proyectos/
│       └── [galería de imágenes de proyectos]
├── README.md
└── Radix.md                          # Este documento
```

### Páginas Principales
1. **index.html**: Homepage principal con hero, catálogo, proyectos y FAQ
2. **cuidadoslambrin/**: Página educativa sobre mantenimiento de productos WPC
3. **sucursal-[ubicación].html**: Landings específicas por sucursal
4. **gracias-por-tu-compra.html**: Página de confirmación post-compra

---

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primario**: `#a47e58` (latón envejecido) - representa elegancia y durabilidad
- **Acento**: `#3c8d7b` (verde esmeralda) - frescura y naturalidad del WPC
- **Neutros**: Blancos cálidos y grises suaves
- **Contraste**: Cumple estándares AA de accesibilidad

### Tipografía
- **Encabezados**: Lora/Fraunces (serif editorial)
- **Cuerpo**: Inter/Plus Jakarta (sans-serif limpio)
- **Implementación**: Tamaños fluidos con `clamp()`

### Componentes Clave
- Navegación sticky minimal
- Hero con overlay sutil
- Grid de proyectos responsive
- FAQ con acordeón accesible
- CTAs prominentes (WhatsApp y Catálogo)
- Video YouTube 9:16 responsivo

---

## 📱 Funcionalidades Actuales

### Navegación
- Header sticky con logo y menú
- Menú móvil hamburguesa
- Enlaces internos a secciones (#wpc, #proyectos, #catalogo, etc.)

### Secciones Principales
1. **Hero**: Imagen de fondo con claim y CTAs
2. **¿Qué es WPC?**: Explicación educativa con beneficios
3. **Catálogo**: Link a flipbook externo
4. **Proyectos**: Video YouTube + galería de casos
5. **FAQ**: Acordeón expandible
6. **Sucursales**: Información de ubicaciones
7. **Footer**: Contacto y redes sociales

### Integraciones
- **Google Tag Manager**: ID `GTM-KLZFFX73`
- **WhatsApp**: `qr.ahuehuetedigital.com/whatsappbands`
- **Catálogo Digital**: Heyzine flipbook
- **YouTube**: Video shorts de proyectos
- **Google Maps**: Enlaces a ubicaciones

---

## 🚀 Estado Actual vs. Mejoras Planificadas

### Fortalezas Actuales
✅ Estructura semántica correcta
✅ Responsive design básico
✅ Integración con herramientas de seguimiento
✅ Contenido educativo sobre WPC
✅ Galería de proyectos reales

### Áreas de Mejora Identificadas
🔄 **UX/UI Premium**: Elevar la estética a estándares de lujo
🔄 **Performance**: Optimizar LCP, CLS, INP
🔄 **Micro-interacciones**: Animaciones discretas y elegantes
🔄 **Tipografía Editorial**: Implementar sistema tipográfico más sofisticado
🔄 **Espaciado**: Ampliar espacios en blanco para respiración visual
🔄 **SEO/SGE**: Implementar structured data (JSON-LD)
🔄 **Accesibilidad**: Mejorar controles de teclado y ARIA

---

## 🎯 Próximas Mejoras (Hoja de Ruta)

### Fase 1: Refactorización UX/UI Premium
- [ ] Rediseño del hero con tipografía editorial
- [ ] Implementación de grid limpio y espacios amplios
- [ ] Micro-animaciones discretas con `prefers-reduced-motion`
- [ ] Optimización de la jerarquía visual
- [ ] Mejora del copy con microtextos premium

### Fase 2: Performance y SEO
- [ ] Optimización de imágenes con `srcset` y lazy loading
- [ ] Implementación de JSON-LD structured data
- [ ] Mejora de Core Web Vitals
- [ ] Preload de recursos críticos

### Fase 3: Funcionalidades Avanzadas
- [ ] Lightbox para galería de proyectos
- [ ] Formulario de contacto avanzado
- [ ] Sistema de muestras/cotizaciones
- [ ] Blog/recursos educativos

---

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5**: Semántico y accesible
- **CSS**: Tailwind CSS via CDN
- **JavaScript**: Vanilla JS (minimal)
- **Fuentes**: Google Fonts (Lora, Inter)
- **Iconos**: Font Awesome

### Herramientas
- **Analytics**: Google Tag Manager
- **Hosting**: A definir
- **Dominio**: bellandsons.com.mx
- **CDN**: Para imágenes y assets

---

## 📊 Métricas y KPIs

### Objetivos de Performance
- **LCP**: < 2.5 segundos
- **CLS**: < 0.1
- **INP**: < 200 ms
- **Accesibilidad**: Score > 95

### Objetivos de Negocio
- Incrementar clicks a WhatsApp en 40%
- Aumentar descargas de catálogo en 30%
- Mejorar tiempo de permanencia en sitio
- Reducir tasa de rebote

---

## 🔐 Configuración de Git Privado

Para hacer el repositorio privado en GitHub:

1. Ve a la página del repositorio en GitHub
2. Click en "Settings" (Configuración)
3. Scroll hasta la sección "Danger Zone"
4. Click en "Change repository visibility"
5. Selecciona "Make private"
6. Confirma escribiendo el nombre del repositorio

**Nota**: Esto limitará el acceso solo a colaboradores autorizados.

---

## 📝 Notas de Desarrollo

### Convenciones de Código
- Usar semantic HTML5
- Clases de Tailwind descriptivas
- JavaScript modular y comentado
- Imágenes optimizadas y con alt text descriptivo

### Assets
- Logo principal: `proyectos/xqsp3rnuzjqhnnscyg4u (1).png`
- Galería: Imágenes en carpeta `proyectos/`
- Optimización: Implementar lazy loading y responsive images

### Próximos Sprint Reviews
- Review semanal de métricas de performance
- Testing A/B de CTAs
- Análisis de conversión WhatsApp vs. Catálogo
- Feedback de usuarios y stakeholders

---

*Última actualización: Agosto 16, 2025*
*Versión: 1.0*
*Responsable: Lead UX/UI & Frontend Developer*
