# mrPeakStudio Landing Page

Un landing page one-page con diseño neo-brutalista para mrPeakStudio, desarrollado con React, TypeScript, Vite y Tailwind CSS.

## 🎨 Características del Diseño

- **Estilo Neo-brutalista**: Bordes gruesos, bloques sólidos, sombras duras
- **Paleta de colores**: Blanco/negro + verde fosforescente (#00E676) como acento
- **Tipografía**: Inter + Space Grotesk
- **Componentes modulares** con buenas prácticas de React
- **Totalmente responsivo**
- **Accesible** con semántica HTML correcta

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes principales de la página
│   ├── ui/             # Componentes UI reutilizables
│   │   ├── Button.tsx  # Botón con variantes brutal
│   │   ├── Card.tsx    # Tarjeta con estilo neo-brutalista
│   │   ├── Input.tsx   # Inputs, selects y textareas
│   │   └── index.ts    # Exports
│   ├── Header.tsx      # Navegación sticky
│   ├── Hero.tsx        # Sección principal
│   ├── Services.tsx    # Grid de servicios 2x2
│   ├── Process.tsx     # Proceso en 4 pasos
│   ├── Results.tsx     # KPIs y clientes
│   ├── Cases.tsx       # Casos de estudio
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   └── index.ts        # Exports
├── constants/
│   └── theme.ts        # Configuración de tema y datos
├── App.tsx             # Componente principal
└── index.css           # Estilos globales con Tailwind
```

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 20.19+ o 22.12+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
cd mrpeak-studio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Preview Estático
Debido a la versión de Node.js, se incluye un archivo `preview.html` que funciona directamente en cualquier navegador sin servidor de desarrollo.

```bash
# Abrir preview.html en el navegador
open preview.html
```

## 🎯 Componentes Principales

### Componentes UI Base

- **Button**: Botón con variantes primary/secondary y estilo neo-brutalista
- **Card**: Tarjeta con opción de invertir colores y sombras brutales
- **Input/TextArea/Select**: Formularios con estilo consistente

### Secciones

- **Header**: Navegación sticky con logo personalizado
- **Hero**: Sección principal con CTA y tags de servicios
- **Services**: Grid 2x2 con servicios alternando colores
- **Process**: Timeline de 4 pasos numerados
- **Results**: KPIs y logos de clientes
- **Cases**: Casos de estudio en grid
- **Contact**: Formulario funcional con validación
- **Footer**: Pie simple con navegación

## 🎨 Personalización del Tema

El tema se configura en `src/constants/theme.ts`:

```typescript
export const THEME = {
  colors: {
    accent: '#00E676', // Cambiar color de acento
    white: '#ffffff',
    black: '#000000',
  },
  shadows: {
    brutal: '8px 8px 0px 0px #000',
    brutalSm: '4px 4px 0px 0px #000',
    brutalLg: '12px 12px 0px 0px #000',
  },
} as const;
```

## 📝 Datos del Sitio

Todos los textos y contenidos se gestionan desde `SITE_DATA` en el mismo archivo:

- Servicios y descripciones
- Pasos del proceso
- KPIs y clientes
- Casos de estudio
- Tags y etiquetas

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build para producción
- `npm run lint` - Linting del código
- `npm run preview` - Preview del build

## 📱 Características Responsivas

- Diseño mobile-first
- Breakpoints optimizados para tablet y desktop
- Navegación adaptativa
- Grid flexible en servicios y proceso
- Formulario responsive

## ♿ Accesibilidad

- Semántica HTML correcta
- Labels asociados a inputs
- ARIA labels donde es necesario
- Contraste de colores accesible
- Navegación por teclado

## 🛠️ Tecnologías

- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **Google Fonts** (Inter + Space Grotesk)
- **ESLint** para linting

## 📄 Licencia

Este proyecto es una implementación de ejemplo para mrPeakStudio.

---

**Desarrollado con ❤️ y diseño neo-brutalista**
