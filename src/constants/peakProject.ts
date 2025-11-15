export const PEAK_PROJECT_DATA = {
  name: 'Peak Project',
  tagline: 'Un finde donde el futuro no da tanto agobio',
  description: 'Mayo 2026. Juntamos a jóvenes de 17-18 años con profesionales de campos distintos para ordenar ideas sobre qué hacer después de Bach. Sin vender carreras. Sin presión. Con historias reales.',
  
  hero: {
    badge: 'Un finde · Mayo 2026 · Sin vender nada',
    title: 'Un finde para hablar en serio de tu futuro sin agobios',
    description: 'Todo el mundo te habla de carreras, notas, futuro... y es normal que acabes saturado. Peak Project es un finde en mayo donde te juntas con gente de tu edad y profesionales de muchos campos para ordenar ideas, hacer preguntas y ver opciones reales, sin que nadie intente venderte nada.',
    tags: ['200 plazas', 'Un finde completo', 'Padres bienvenidos', 'Mayo 2026'] as string[],
    sideCard: {
      title: 'why we do this',
      description: 'Porque a nosotros también nos habría venido bien un finde así: preguntar sin miedo, escuchar historias reales y bajar un poco la presión antes de la EBAU.',
    },
  },

  forYou: {
    title: 'esto es para ti si...',
    items: [
      {
        number: 'p/ 01',
        title: 'No tienes ni idea (y es normal)',
        description: 'Estás en 2º de Bach y hay días que no sabes si hacer carrera, FP, trabajar o tomarte un año sabático. Te suena todo, pero nada claro.',
        bullets: [
          {
            label: 'Respira',
            text: 'La mayoría está igual que tú. No tenerlo claro a los 17-18 es más normal que raro.',
          },
          {
            label: 'Gente como tú',
            text: 'Escucharás a personas que estuvieron igual y ahora están haciendo cosas que les encajan.',
          },
        ],
      },
      {
        number: 'p/ 02',
        title: 'Lo tienes medio claro, pero quieres verlo de cerca',
        description: 'Ya tienes una idea de lo que quieres estudiar o hacer, pero quieres ver cómo es el día a día real y qué puedes ir haciendo desde ya.',
        bullets: [
          {
            label: 'Ponte por delante',
            text: 'IA, herramientas digitales, marca personal... cosas que puedes empezar a usar ahora.',
          },
          {
            label: 'Realidad sin filtros',
            text: 'Cómo es el trabajo de verdad en diferentes sectores, qué valoran empresas y equipos.',
          },
        ],
      },
      {
        number: 'p/ 03',
        title: 'Te mola algo, pero no ves el camino',
        description: 'Te encanta el deporte, el diseño, la música, los videojuegos, la tecnología... pero no sabes cómo convertir eso en tu trabajo o proyecto.',
        bullets: [
          {
            label: 'Conectar lo que te gusta',
            text: 'Ejemplos reales de gente que ha unido lo que le gustaba con algo que le da futuro.',
          },
          {
            label: 'Referentes aterrizados',
            text: 'Personas que empezaron sin tenerlo claro y construyeron su camino poco a poco.',
          },
        ],
      },
      {
        number: 'p/ 04',
        title: '¿Eres padre o madre?',
        description: 'También es para ti. Puedes venir, escuchar y entender mejor en qué mundo van a tomar decisiones tus hijos y qué opciones reales tienen.',
        backgroundColor: '#00E676' as string,
        bullets: [
          {
            label: 'Acompañar mejor',
            text: 'Caminos distintos a los de siempre. El mundo laboral de ahora no es el que te tocó a ti.',
          },
          {
            label: 'Menos tensión',
            text: 'Más información real = menos discusiones sobre "qué es lo correcto".',
          },
        ],
      },
    ],
  },

  about: {
    title: 'de qué va realmente peak project',
    content: [
      'Va de quitarle drama a eso de "tienes que decidir tu futuro ya" y darte información que puedas entender y usar. Sin frases motivacionales raras y sin que nadie te diga qué tienes que hacer.',
      'En vez de venderte una carrera, un trabajo o un camino, vas a escuchar historias de personas muy distintas: qué estudiaron, en qué trabajan ahora, qué les gusta, qué no tanto, qué harían igual y qué cambiarían.',
    ],
  },

  program: {
    title: "what we'll do",
    subtitle: 'UN FINDE DE TALLERES PRÁCTICOS Y CHARLAS REALES',
    items: [
      {
        number: 'w/ 01',
        title: 'IA y herramientas que te dan ventaja',
        description: 'ChatGPT, automatizaciones, productividad... Herramientas que ya puedes usar hoy. Sin ser ingeniero. Sin rollo técnico. Práctico desde ya.',
        invert: true,
      },
      {
        number: 'w/ 02',
        title: 'Cómo construir tu marca personal',
        description: 'LinkedIn, redes, visibilidad online... Cómo posicionarte antes de entrar al mercado. Te servirá estudies lo que estudies o trabajes donde trabajes.',
        invert: false,
      },
      {
        number: 'w/ 03',
        title: 'Emprendimiento real',
        description: 'Cuándo tiene sentido emprender y cuándo no. Errores comunes. Casos de éxito y fracaso. Sin motivación barata.',
        invert: false,
      },
      {
        number: 'w/ 04',
        title: 'Charlas de profesionales de todo tipo',
        description: 'Médicos, ingenieros, diseñadores, marketers, programadores, creativos... Gente de verdad contando su día a día sin filtros.',
        invert: true,
      },
    ],
  },

  team: {
    title: 'speakers & organizers',
    subtitle: 'Los que organizamos el evento y daremos algunos talleres. Pero vendrán muchísimos más: médicos, arquitectos, diseñadores, emprendedores, ingenieros... Gente real contando su día a día.',
  },

  contact: {
    title: "let's talk about it",
    description: 'Si te suena bien pero tienes dudas, escríbenos y hablamos. Sin compromiso y sin presión. Te contamos mejor de qué va el finde, horarios, precio y si encaja contigo.',
    email: 'hola@mrpeakstudio.com',
    note: 'Respondemos en 48h (normalmente antes). Esto va en serio, pero sin agobios.',
  },
} as const;
