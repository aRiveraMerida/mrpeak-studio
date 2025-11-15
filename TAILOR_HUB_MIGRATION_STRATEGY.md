# Estrategia de Migración - Estilo Tailor Hub

## Análisis de Estilos Tailor Hub vs mrPeakStudio Actual

### Similitudes (mantener)
- ✅ Lowercase en títulos principales
- ✅ Numeración tipo `s/ 01`, `p/ 01`
- ✅ Mix bilingüe inglés/español
- ✅ Mensajes directos sin fluff
- ✅ Uso moderado de color acento

### Diferencias Clave de Tailor Hub

#### 1. **Sistema de Espaciado Modular**
**Tailor Hub**: Variables CSS con sistema basado en `4px` (`--spacing: 0.25rem`)
```css
--spacing: 0.25rem;
--xxl: 200px;
--xl: 84px;
--l: 48px;
--m: 24px;
--s: 16px;
```

**mrPeakStudio Actual**: Tailwind CSS con utilidades inline
```jsx
className="py-14 md:py-20 px-4"
```

**Recomendación**: ✨ Mantener Tailwind pero agregar variables CSS para valores consistentes

---

#### 2. **Tipografía**
**Tailor Hub**: Sistema de clases semánticas
- `.text-style-mono` - Labels/kickerscon tracking extra wide
- `.text-style-title-1` - Títulos principales (66px desktop, 46px mobile)
- `.text-style-title-2` - Subtítulos (40px desktop, 28px mobile)
- `.text-style-text` - Cuerpo (16px, line-height 22px)

**mrPeakStudio Actual**: Tailwind inline
```jsx
className="text-3xl md:text-4xl font-black"
```

**Recomendación**: ⚠️ MANTENER Tailwind pero crear variantes más refinadas con mejores line-heights

---

#### 3. **Estructura de Componentes**
**Tailor Hub**: Clases semánticas tipo BEM
```html
<div class="box">
  <div class="box-content">
    <div class="box-content-header">
      <span class="text-style-mono">s/ 01</span>
      <span class="text-style-title-2">TITLE</span>
    </div>
    <span class="text-style-text box-content-description">Description</span>
  </div>
</div>
```

**mrPeakStudio Actual**: Componentes React + Tailwind
```jsx
<Card className="p-8">
  <div className="text-sm font-black opacity-30">s/ 01</div>
  <h3 className="text-2xl font-black">Title</h3>
  <p className="text-lg">Description</p>
</Card>
```

**Recomendación**: ✅ MANTENER estructura actual React + Tailwind (más mantenible)

---

#### 4. **Bordes y Sombras**
**Tailor Hub**: Sin bordes gruesos, todo limpio con `border-radius: 1rem`
```css
border-radius: var(--radius-2xl, 1rem);
```

**mrPeakStudio Actual**: Estilo "brutal" con bordes negros 4px
```css
border: 4px solid black;
box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
```

**Recomendación**: ⚠️ **DECISIÓN CRÍTICA** - El estilo brutal es tu identidad. ¿Mantener o suavizar?

---

#### 5. **Animaciones**
**Tailor Hub**: Muy sutiles, fade-in principalmente
```css
transition: opacity 1500ms ease-in-out;
```

**mrPeakStudio Actual**: Más dramáticas
```css
animate-slide-in-left
animate-fade-in-scale
```

**Recomendación**: ✨ Suavizar pero mantener personalidad

---

#### 6. **Layout y Espaciado**
**Tailor Hub**: Más aire, padding generoso
```css
padding: calc(var(--spacing) * 10); /* 40px */
gap: calc(var(--spacing) * 16); /* 64px */
```

**mrPeakStudio Actual**: Compacto
```jsx
className="py-14 md:py-20"  /* 56px / 80px */
```

**Recomendación**: ✨ Incrementar espaciado entre secciones (+20-30%)

---

## Plan de Migración Gradual

### Fase 1: Fundamentos (Sin romper nada) ✅
1. ✅ Agregar archivo `variables.css` con sistema de espaciado
2. ✅ Importar en `index.css` sin tocar componentes
3. ✅ Crear clases de utilidad opcionales (.text-style-mono, etc.)
4. ✅ Verificar que build funciona

### Fase 2: Refinamiento Visual (Opcional)
1. Incrementar `gap` entre secciones principales
2. Ajustar line-heights para mejor lectura
3. Suavizar animaciones (duration + 200ms)
4. Considerar: ¿Mantener bordes brutales o suavizar?

### Fase 3: Componentes Individuales (Si procede)
1. Refactorizar Hero con más espaciado
2. Mejorar Services grid
3. Pulir Footer
4. Peak Project alignments

---

## Recomendación Final

### ✅ **LO QUE DEBERÍAS HACER:**
1. **Agregar variables CSS** para consistencia futura
2. **Incrementar espaciado** entre secciones (+20%)
3. **Mejorar tipografía line-heights** para legibilidad
4. **Mantener tu identidad**: bordes, sombras, estilo "studio brutal"

### ❌ **LO QUE NO DEBERÍAS HACER:**
1. ❌ Reescribir todo con clases BEM (pierdes ventajas de Tailwind + React)
2. ❌ Eliminar bordes brutales (es tu identidad)
3. ❌ Cambiar colores o logo (ya están bien)

---

## Decisión: ¿Qué quieres priorizar?

**Opción A: Mantener identidad brutal + refinamientos sutiles** (RECOMENDADO)
- Agregar variables CSS
- Incrementar espaciado
- Mejorar tipografía
- **Tiempo**: 2-3 horas

**Opción B: Migración completa estilo Tailor Hub**
- Reescribir componentes con clases semánticas
- Eliminar bordes brutales
- Sistema completamente nuevo
- **Tiempo**: 8-12 horas
- **Riesgo**: Perder identidad actual

---

¿Cuál prefieres?
