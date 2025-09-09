export const THEME = {
  colors: {
    accent: '#00E676', // Verde fosforescente
    white: '#ffffff',
    black: '#000000',
  },
  shadows: {
    brutal: '8px 8px 0px 0px #000',
    brutalSm: '4px 4px 0px 0px #000',
    brutalLg: '12px 12px 0px 0px #000',
  },
} as const;

export const SITE_DATA = {
  name: 'mrPeakStudio',
  tagline: 'Consultoría digital, IA y SEO que transforman tu negocio en semanas.',
  description: 'Sin humo. Sin promesas vacías.',
  company: {
    linkedin: 'https://www.linkedin.com/company/mr-peak-studio/',
  },
  services: [
    {
      title: 'Consultoría Estratégica',
      desc: 'Un plan claro y sin rodeos. Sabes qué hacer, cuándo y por qué.',
      invert: false,
    },
    {
      title: 'SEO Avanzado', 
      desc: 'Crecer en orgánico con datos, no discursos. +40 % en 6 meses.',
      invert: true,
    },
    {
      title: 'Automatizaciones',
      desc: 'Procesos que se hacen solos. Tú mandas, la IA ejecuta.',
      invert: true,
    },
    {
      title: 'Formación Ejecutiva',
      desc: 'Equipos que aprenden IA desde el día uno. Sin relleno, solo práctica.',
      invert: false,
    },
  ],
  process: [
    { n: '01', t: 'Diagnóstico', d: 'Detectamos qué frena tu crecimiento.' },
    { n: '02', t: 'Plan', d: 'Hoja de ruta en días, no meses.' },
    { n: '03', t: 'Ejecución', d: 'Ponemos en marcha soluciones reales.' },
    { n: '04', t: 'Medición', d: 'Resultados visibles desde el primer mes.' },
  ],
  kpis: [
    { number: '+150k', text: 'palabras clave indexadas' },
    { number: '+40%', text: 'tráfico orgánico' },
    { number: '500', text: 'talleres de adopción de IA' },
    { number: '+20', text: 'proyectos ejecutados' },
  ],
  clients: ['1', '2', '3', '4', '5', '6', '7', '8', 'Muchos +'],
  cases: [
    { c: 'LALIGA', d: 'Integramos su Design System a escala.' },
    { c: 'MOVIMER', d: 'Detectamos y optimizamos nuevos procesos clave.' },
    { c: 'UPSOCL', d: 'Consultoría estratégica en IA aplicada.' },
    { c: 'GILSA', d: 'Automatizamos procesos de campo en construcción.' },
    { c: 'THEPOWERMBA', d: 'Impulsamos su captación con funnels innovadores.' },
    { c: 'VOLKSWAGEN', d: 'Automatizamos su reporting en 3 semanas.' },
    { c: 'AIRBNB', d: '+1,5 M de palabras indexadas en buscadores.' },
    { c: 'GEA', d: 'Digitalizamos su Call Center con IA.' },
  ],
  tags: [
    'Consultoría digital',
    'IA aplicada',
    'SEO avanzado',
    'Automatizaciones',
    'Formación ejecutiva',
  ],
  team: [
    {
      name: 'Alberto Rivera',
      role: 'CEO',
      description: 'Lidera la innovación en IA, EdTech y crecimiento empresarial. Convierte ideas en impacto real con tecnología aplicada y resultados medibles.',
      invert: false,
      linkedin: 'https://www.linkedin.com/in/albertoriveramerida/',
    },
    {
      name: 'Albert Sort',
      role: 'CMO', 
      description: 'Estrategia, marketing digital y SEO basado en datos. Convierte tráfico en clientes con visión y precisión.',
      invert: true,
      linkedin: 'https://www.linkedin.com/in/albert-sort-martinez/',
    },
    {
      name: 'Oriol Delfau',
      role: 'Marketing Strategist',
      description: 'Estrategia digital y validación de negocios. Enfoque ágil y data-driven para escalar rápido y sin rodeos.',
      invert: false,
      linkedin: 'https://www.linkedin.com/in/orioldelfau/',
    },
    {
      name: 'David Dix',
      role: 'IA Specialist',
      description: 'Especialista en IA, No-Code y automatización. Crea soluciones que optimizan procesos y aceleran negocios.',
      invert: true,
      linkedin: 'https://www.linkedin.com/in/david-dix-hidalgo-986a8a32b/',
    },
  ],
} as const;
