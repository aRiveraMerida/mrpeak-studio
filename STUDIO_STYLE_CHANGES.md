# Resumen de Cambios - Estilo Studio

## 🎨 Concepto General

Se ha aplicado un estilo "studio" inspirado en Tailor-hub a todo el sitio web (mrPeakStudio y Peak Project), con las siguientes características:

- **Títulos en lowercase** con mezcla inglés/español
- **Numeración tipo**: `s/ 01`, `p/ 01`, `w/ 01` (con opacidad 30%)
- **Mensajes directos y cercanos**, sin filosofías ni motivación barata
- **Verde (#00E676) solo para acentos clave**, no como fondo general
- **Tipografía bold y brutal** manteniendo el estilo de bordes y sombras

---

## 📄 Página Principal (Home) - mrPeakStudio

### 1. Header & Footer
- **Logo**: ahora en lowercase → `mrpeakstudio`
- **Footer tagline**: "strategy, ai & seo studio"

### 2. Hero Section
**Antes**: Mensaje largo y descriptivo
**Ahora**:
- Label superior: `STRATEGY · AI · SEO STUDIO`
- Tagline: "Un studio pequeño para proyectos que quieren tomarse en serio el crecimiento"
- Descripción corta y directa sobre encaje, go-to-market, IA, SEO y automatización
- Card lateral: sin fondo verde, mensaje directo sobre resultados

### 3. Services Section
**Título**: `services` (lowercase)
**Subtítulo**: "WE BUILD STRATEGY, AI & SEO SYSTEMS THAT HELP YOUR BUSINESS MOVE FASTER."

**Servicios con numeración**:
- `s/ 01` - Go-to-market
- `s/ 02` - AI & ADOPTION (diferenciado de automatización)
- `s/ 03` - SEO (sin "escalable", solo "SEO")
- `s/ 04` - Automatización

### 4. Process Section
**Título**: `how we work` (lowercase en inglés)
**Intro**: "No vendemos 'paquetes'. Cada proyecto es distinto y necesita un enfoque propio..."

**Pasos actualizados**:
- 01 - Encaje
- 02 - Estrategia
- 03 - Ejecución
- 04 - **Evolución** (antes: Medición)

### 5. Results Section
**KPIs**: eliminado "3 sem de media, de la idea al primer despliegue"
**Casos reales**: 
- Intro añadida: "Algunos proyectos en los que tenía sentido que estuviéramos:"
- Sin background verde en la sección de casos
- Diferenciación clara: **Adopción de IA** (identificar procesos, formación, gestión del cambio) vs **Automatización**

### 6. Team Section
**Título**: `AN ELITE TEAM OF STRATEGY, AI & SEO PRACTITIONERS` (uppercase en inglés)
**Subtítulo**: "Personas que se sienten más cómodas trabajando que presentando slides."

### 7. Contact Section
**Título**: `Let's talk about your project` (lowercase en inglés)
**Resto**: mantiene español para descripción y nota

---

## 🎯 Página Peak Project

### Estructura de datos
Creado nuevo archivo: `src/constants/peakProject.ts` con toda la data centralizada.

### 1. Hero
- **Badge**: "Un finde · Mayo 2026 · Sin vender nada"
- **Side card title**: `why we do this` (lowercase en inglés)

### 2. Para quién es
**Título**: `esto es para ti si...` (lowercase)
**Items con numeración**:
- `p/ 01` - No tienes ni idea (y es normal)
- `p/ 02` - Lo tienes medio claro, pero quieres verlo de cerca
- `p/ 03` - Te mola algo, pero no ves el camino
- `p/ 04` - ¿Eres padre o madre? (con fondo verde)

### 3. About Section
**Título**: `de qué va realmente peak project` (lowercase)
Mensajes más directos, menos filosóficos

### 4. Program Section
**Título**: `what we'll do` (lowercase en inglés)
**Subtítulo**: "UN FINDE DE TALLERES PRÁCTICOS Y CHARLAS REALES" (uppercase)

**Workshops con numeración**:
- `w/ 01` - IA y herramientas que te dan ventaja
- `w/ 02` - Cómo construir tu marca personal
- `w/ 03` - Emprendimiento real
- `w/ 04` - Charlas de profesionales de todo tipo

### 5. Team Section
**Título**: `speakers & organizers` (lowercase en inglés)
**Subtítulo**: más directo y realista

### 6. Contact Section
**Título**: `let's talk about it` (lowercase en inglés)

---

## 📁 Archivos Creados/Modificados

### Nuevos archivos:
- `src/constants/peakProject.ts` - Constantes centralizadas para Peak Project
- `STUDIO_STYLE_CHANGES.md` - Este documento

### Archivos modificados:
**Home (mrPeakStudio)**:
- `src/constants/theme.ts` - Actualizado SITE_DATA completo
- `src/components/Hero.tsx` - Label, mensajes, botones
- `src/components/Services.tsx` - Títulos lowercase, numeración s/
- `src/components/Process.tsx` - Título "how we work", intro text
- `src/components/Results.tsx` - Separación KPIs/Casos, intro text
- `src/components/Team.tsx` - Título inglés uppercase
- `src/components/Contact.tsx` - Título inglés lowercase
- `src/components/Header.tsx` - Logo lowercase
- `src/components/Footer.tsx` - Tagline actualizado, lowercase

**Peak Project**:
- `src/components/PeakProject.tsx` - Refactorizado con constantes
- `src/components/PeakTeam.tsx` - Títulos lowercase
- `PEAK_PROJECT.md` - Documentación actualizada

---

## 🎯 Principios del Estilo Studio

1. **Directo y cercano**: Sin filosofías, sin motivación barata
2. **Bilingüe estratégico**: Inglés en títulos clave, español en contenido
3. **Lowercase para impacto**: Títulos principales en minúsculas
4. **Numeración visible**: Formato `s/`, `p/`, `w/` con opacidad
5. **Verde con moderación**: Solo para acentos críticos
6. **Brutal pero elegante**: Mantiene bordes y sombras, pero más refinado

---

## ✅ Checklist Completado

- [x] Actualizar SITE_DATA con nuevos copys
- [x] Adaptar Hero con label STRATEGY·AI·SEO STUDIO
- [x] Services con formato s/01 y subtítulo
- [x] Process con "how we work" lowercase
- [x] Results con intro a casos y sin verde
- [x] Team con título inglés uppercase
- [x] Contact con "Let's talk" lowercase
- [x] Header y Footer con lowercase
- [x] Peak Project con constantes centralizadas
- [x] Documentación actualizada
- [x] Build exitoso

---

## 🚀 Resultado Final

El sitio mantiene su identidad "brutal" (bordes gruesos, sombras, tipografía bold) pero ahora tiene un tono más profesional, directo y "studio". Los mensajes son más cercanos, menos filosóficos, y la mezcla bilingüe le da un aire internacional sin perder la cercanía en español.

**Acceso local**: http://localhost:5175/
- `/` - Home (mrPeakStudio)
- `/peak-project` - Peak Project
