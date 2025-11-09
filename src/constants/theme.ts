export const THEME = {
  colors: {
    accent: '#00E676',
  },
} as const;

export const SITE_DATA = {
  name: 'mrPeakStudio',
  tagline: 'Estrategia, IA y automatización para marcas que quieren crecer en serio.',
  description: 'Tecnología, creatividad y datos al servicio del crecimiento.',
  company: {
    linkedin: 'https://www.linkedin.com/company/mr-peak-studio/',
  },
  services: [
    {
      title: 'Estrategia y Crecimiento',
      desc: 'Definimos una hoja de ruta clara, medible y accionable. Sabes qué hacer, cuándo y con qué impacto.',
      invert: false,
    },
    {
      title: 'SEO Avanzado',
      desc: 'Visibilidad real y crecimiento orgánico con base en datos. Resultados sostenibles, no casuales.',
      invert: true,
    },
    {
      title: 'Automatizaciones',
      desc: 'Procesos inteligentes que ejecutan por ti. Más eficiencia, menos tareas repetitivas.',
      invert: true,
    },
    {
      title: 'Formación Ejecutiva',
      desc: 'Equipos que aplican IA y automatización desde el primer día. Aprendizaje práctico, orientado al negocio.',
      invert: false,
    },
  ],
  process: [
    { n: '01', t: 'Diagnóstico', d: 'Identificamos oportunidades y bloqueos reales en tu crecimiento.' },
    { n: '02', t: 'Plan', d: 'Diseñamos una estrategia clara, medible y orientada a resultados.' },
    { n: '03', t: 'Ejecución', d: 'Desarrollamos y activamos soluciones con tecnología y foco en impacto.' },
    { n: '04', t: 'Medición', d: 'Analizamos, optimizamos y escalamos con datos reales.' },
  ],
  kpis: [
    { number: '+150k', text: 'palabras clave indexadas' },
    { number: '+40%', text: 'crecimiento orgánico medio' },
    { number: '500', text: 'equipos formados en IA y automatización' },
    { number: '+20', text: 'proyectos ejecutados con impacto medible' },
  ],
  clients: ['Airbnb', 'Volkswagen', 'LaLiga', 'Skyscanner', 'ThePowerMBA', 'Factorial', 'Nuvola', 'Movimer', 'Muchos +'],
  cases: [
    { c: 'LALIGA', d: 'Integramos su Design System para escalar diseño y marca a nivel global.' },
    { c: 'MOVIMER', d: 'Detectamos y optimizamos procesos clave con IA aplicada.' },
    { c: 'UPSOCL', d: 'Definimos su estrategia de IA para acelerar contenidos y operaciones.' },
    { c: 'GILSA', d: 'Digitalizamos procesos de campo en construcción con automatizaciones personalizadas.' },
    { 
      c: 'THEPOWERMBA', 
      d: 'Diseñamos e implementamos programas de marketing, desarrollo de software e IA para potenciar su ecosistema digital.' 
    },
    { c: 'VOLKSWAGEN', d: 'Automatizamos su reporting operativo en solo 3 semanas.' },
    { c: 'AIRBNB', d: '+1,5 M de palabras indexadas con una estrategia SEO escalable.' },
    { c: 'GEA', d: 'Digitalizamos su Call Center con IA conversacional y analítica en tiempo real.' },
  ],
  tags: [
    'Estrategia digital',
    'IA aplicada',
    'SEO avanzado',
    'Automatización',
    'Formación ejecutiva',
  ],
  team: [
    {
      name: 'Alberto Rivera',
      description: 'Estrategia, IA y crecimiento empresarial. Transforma visión en impacto real con tecnología aplicada y foco en resultados.',
      invert: false,
      linkedin: 'https://www.linkedin.com/in/albertoriveramerida/',
    },
    {
      name: 'Albert Sort',
      description: 'Estrategia y SEO basado en datos. Convierte tráfico en crecimiento real con visión y método.',
      invert: true,
      linkedin: 'https://www.linkedin.com/in/albert-sort-martinez/',
    },
    {
      name: 'Oriol Delfau',
      description: 'Go-to-market, validación de negocio y estrategia digital. Enfoque ágil y data-driven para escalar con velocidad y criterio.',
      invert: false,
      linkedin: 'https://www.linkedin.com/in/orioldelfau/',
    },
    {
      name: 'David Dix',
      description: 'Especialista en IA, No-Code y automatización. Crea soluciones que optimizan procesos y aceleran resultados.',
      invert: true,
      linkedin: 'https://www.linkedin.com/in/david-dix-hidalgo-986a8a32b/',
    },
  ],
} as const;