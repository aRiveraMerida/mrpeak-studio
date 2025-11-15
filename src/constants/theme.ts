export const THEME = {
  colors: {
    accent: '#00E676',
  },
} as const;

export const SITE_DATA = {
  name: 'mrPeakStudio',
  tagline: 'Un studio pequeño para proyectos que quieren tomarse en serio el crecimiento',
  description: 'Entendemos tu proyecto, vemos si encajamos y nos metemos a fondo. Trabajamos donde podemos aportar mucho: go-to-market, adopción de IA, SEO y automatización.',
  company: {
    linkedin: 'https://www.linkedin.com/company/mr-peak-studio/',
  },
  services: [
    {
      number: 's/ 01',
      title: 'Go-to-market',
      desc: 'Te ayudamos a llevar tu producto al mercado sin adivinar: entender al cliente, elegir canales, conseguir los primeros clientes y saber qué está funcionando.',
      invert: false,
    },
    {
      number: 's/ 02',
      title: 'AI & ADOPTION',
      desc: 'Identificamos procesos donde la IA tiene sentido, diseñamos casos de uso, formamos al equipo y acompañamos la gestión del cambio.',
      invert: true,
    },
    {
      number: 's/ 03',
      title: 'SEO',
      desc: 'SEO que se puede mantener en el tiempo: estructura, contenidos y sistemas para crecer sin depender solo de anuncios.',
      invert: true,
    },
    {
      number: 's/ 04',
      title: 'Automatización',
      desc: 'Automatizamos procesos que hoy consumen tiempo del equipo: reporting, operaciones, comunicación interna y flujos comerciales.',
      invert: false,
    },
  ],
  process: [
    { n: '01', t: 'Encaje', d: 'Entendemos tu proyecto y vemos si tiene sentido que trabajemos juntos.' },
    { n: '02', t: 'Estrategia', d: 'Decidimos qué hacer, en qué orden y cómo sabremos si va bien.' },
    { n: '03', t: 'Ejecución', d: 'Sprints cortos, pruebas, ajustes y decisiones con el equipo.' },
    { n: '04', t: 'Evolución', d: 'Vemos resultados, mejoramos lo que funciona y paramos lo que no aporta.' },
  ],
  kpis: [
    { number: '+1,5M', text: 'palabras clave indexadas en proyectos SEO' },
    { number: '+40%', text: 'crecimiento orgánico medio' },
    { number: '100%', text: 'proyectos con objetivos definidos desde el inicio' },
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
    'Go-to-market',
    'IA aplicada',
    'SEO',
    'Automatización',
  ],
  team: [
    {
      name: 'Alberto Rivera',
      description: 'Estrategia, IA y crecimiento. Ayuda a que las ideas se conviertan en proyectos que avanzan y se pueden medir.',
      invert: false,
      linkedin: 'https://www.linkedin.com/in/albertoriveramerida/',
    },
    {
      name: 'Albert Sort',
      description: 'SEO y estrategia digital. Convierte tráfico en crecimiento y decisiones basadas en datos.',
      invert: true,
      linkedin: 'https://www.linkedin.com/in/albert-sort-martinez/',
    },
    {
      name: 'Oriol Delfau',
      description: 'Go-to-market y validación de negocio. Centrado en no escalar lo que aún no está preparado para crecer.',
      invert: false,
      linkedin: 'https://www.linkedin.com/in/orioldelfau/',
    },
    {
      name: 'David Dix',
      description: 'IA, no-code y automatización. Monta sistemas que quitan carga al equipo y reducen errores.',
      invert: true,
      linkedin: 'https://www.linkedin.com/in/david-dix-hidalgo-986a8a32b/',
    },
  ],
} as const;