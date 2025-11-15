# Peak Project - Documentación

## 🎯 Concepto

Peak Project es un evento de un **finde** (viernes-sábado) dirigido a jóvenes de 17-18 años que están en el momento de decidir su futuro después de Bach. El tono es **directo, cercano y sin filosofías**, con mensajes bilingües (español/inglés) siguiendo el estilo "studio" que usa lowercase en títulos clave.

### Estilo de comunicación:
- Títulos principales en **lowercase** e **inglés/español mezclado**
- Formato de numeración: `p/ 01`, `p/ 02`, `w/ 01`, `w/ 02`
- Mensajes cortos, directos, sin motivación barata
- Verde neón (#00E676) solo para acentos clave

## 📍 Navegación

- **Home**: `/` - Página principal de mrPeakStudio
- **Peak Project**: `/peak-project` - Página del evento

### Enlaces de navegación:
- **Header**: Botón destacado "Peak Project" en home, botón "Inicio" en Peak Project
- **Footer**: Link a "Peak Project" desde home, link a "Inicio" desde Peak Project

## 📝 Copys Principales

### Hero
**Badge**: "Un finde · Mayo 2026 · Sin vender nada"

**Título**: "Un finde para hablar en serio de tu futuro sin agobios"

**Descripción**: Todo el mundo te habla de carreras, notas, futuro... y es normal que acabes saturado. Peak Project es un finde en mayo donde te juntas con gente de tu edad y profesionales de muchos campos para ordenar ideas, hacer preguntas y ver opciones reales, sin que nadie intente venderte nada.

**Card lateral - "why we do this"**: Porque a nosotros también nos habría venido bien un finde así: preguntar sin miedo, escuchar historias reales y bajar un poco la presión antes de la EBAU.

### Filosofía del evento
**Título**: "de qué va realmente peak project" (lowercase)

**Mensajes clave**:
- Va de quitarle drama a eso de "tienes que decidir tu futuro ya"
- Información que puedas entender y usar
- Sin frases motivacionales raras
- Historias de personas muy distintas: qué estudiaron, en qué trabajan, qué les gusta, qué no tanto

### ¿Para quién es?
**Título**: "esto es para ti si..." (lowercase)

**p/ 01 - No tienes ni idea (y es normal)**
- La mayoría está igual que tú
- Escucharás a personas que estuvieron igual y ahora hacen cosas que les encajan

**p/ 02 - Lo tienes medio claro, pero quieres verlo de cerca**
- IA, herramientas digitales, marca personal... cosas que puedes empezar a usar ahora
- Cómo es el trabajo de verdad en diferentes sectores

**p/ 03 - Te mola algo, pero no ves el camino**
- Ejemplos reales de gente que unió lo que le gustaba con algo que le da futuro
- Referentes aterrizados que empezaron sin tenerlo claro

**p/ 04 - ¿Eres padre o madre?** (con fondo verde)
- Caminos distintos a los de siempre
- Más información real = menos discusiones sobre "qué es lo correcto"

### Programa
**Título**: "what we'll do" (lowercase en inglés)
**Subtítulo**: "UN FINDE DE TALLERES PRÁCTICOS Y CHARLAS REALES" (uppercase)

**w/ 01 - IA y herramientas que te dan ventaja**
- ChatGPT, automatizaciones, productividad
- Sin ser ingeniero. Sin rollo técnico. Práctico desde ya

**w/ 02 - Cómo construir tu marca personal**
- LinkedIn, redes, visibilidad online
- Te servirá estudies lo que estudies o trabajes donde trabajes

**w/ 03 - Emprendimiento real**
- Cuándo tiene sentido emprender y cuándo no
- Sin motivación barata

**w/ 04 - Charlas de profesionales de todo tipo**
- Médicos, ingenieros, diseñadores, marketers, programadores, creativos
- Gente de verdad contando su día a día sin filtros

### Team
**Título**: "speakers & organizers" (lowercase en inglés)
**Subtítulo**: "Los que organizamos el evento y daremos algunos talleres. Pero vendrán muchísimos más: médicos, arquitectos, diseñadores, emprendedores, ingenieros... Gente real contando su día a día."

- **Alberto Rivera**: Estrategia, IA y crecimiento (LinkedIn)
- **Albert Sort**: SEO y estrategia digital (LinkedIn)
- **Oriol Delfau**: Go-to-market y validación de negocio (LinkedIn)
- **David Dix**: IA, no-code y automatización (LinkedIn)

## 🎨 Diseño

- **Componentes**: `HeroSection`, `Card`, custom sections
- **Color acento**: Verde neón `#00E676` (solo para acentos clave, no abusar)
- **Estilo brutal**: bordes negros gruesos de 4px, sombras [8px_8px_0px_0px]
- **Tipografía**: font-black para títulos, lowercase en títulos principales
- **Numeración**: formato `p/ 01`, `w/ 01` con opacidad 30%
- **Responsive**: mobile-first, totalmente adaptable

## 🚀 Características técnicas

- **React Router** para navegación entre home y Peak Project
- **Scroll to top** automático al cambiar de página
- **TypeScript** con constantes centralizadas en `/constants/peakProject.ts`
- **Tailwind CSS** con estilo "brutal" consistente
- **Animaciones**: fade-in-scale, slide-in-up, delays escalonados
- **Componentes reutilizables**: Card, HeroSection, PeakTeam

## 📧 Contacto
**Título**: "let's talk about it" (lowercase en inglés)

**Descripción**: Si te suena bien pero tienes dudas, escríbenos y hablamos. Sin compromiso y sin presión. Te contamos mejor de qué va el finde, horarios, precio y si encaja contigo.

**Email**: hola@mrpeakstudio.com
**Nota**: Respondemos en 48h (normalmente antes). Esto va en serio, pero sin agobios.
