// Datos del Proyecto de Vida Colectivo - Ingeniería en Sistemas
export const lifeProjectData = {
  personalInfo: {
    name: "Ingeniería en Sistemas",
    title: "Proyecto de Vida Profesional Colectivo",
    subtitle: "Nuestro Mapa de Ruta hacia la Excelencia",
    tagline: "La tecnología es el medio; el crecimiento humano, científico y la sinergia colectiva son nuestro fin.",
    introText: "Este espacio representa la visión y planificación estratégica de nuestro equipo de Ingeniería en Sistemas. Diseñamos nuestras metas, analizamos nuestro FODA colectivo, equilibramos nuestras áreas de desarrollo y estructuramos un plan de acción para alcanzar el éxito profesional.",
    values: [
      { name: "Sinergia", icon: "users", desc: "Colaborar de manera efectiva para lograr un impacto colectivo superior." },
      { name: "Crecimiento", icon: "trending-up", desc: "Aprender constantemente y dominar nuevas fronteras tecnológicas." },
      { name: "Integridad", icon: "shield", desc: "Actuar con ética y coherencia en el diseño y desarrollo de soluciones." },
      { name: "Disciplina", icon: "activity", desc: "Mantener el enfoque y la constancia en el desarrollo de nuestras habilidades." }
    ]
  },
  members: [
    { name: "Bay Rodas, Douglas Josue", node: "NODE_C" },
    { name: "Flores Prado, José Andrés", node: "NODE_C" },
    { name: "Barrera Yanes, Andre Sofía", node: "NODE_A" },
    { name: "Gonzalez Gomez, Marisabel Saraí", node: "NODE_A" },
    { name: "Angel Berganza, Gabriel Antonio", node: "NODE_A" },
    { name: "Ramirez López, Luis Pedro", node: "NODE_E" },
    { name: "Alvarez Monzon, Hector Adrian", node: "NODE_B" },
    { name: "Paxtor Cordova, Yasmin del Rosario", node: "NODE_D" },
    { name: "López Rivera, María Jimena", node: "NODE_H" }
  ],
  
  foda: {
    fortalezas: {
      title: "Fortalezas",
      desc: "Aspectos internos positivos que poseemos como equipo y nos impulsan.",
      items: [
        "Sinergia de equipo y excelente complementariedad de perfiles técnicos.",
        "Autodisciplina, adaptabilidad y alto compromiso académico.",
        "Pensamiento analítico avanzado y capacidad colectiva de resolución de problemas.",
        "Habilidades de comunicación y empatía en el desarrollo cooperativo."
      ],
      color: "from-cyan-600/20 to-teal-600/20",
      borderColor: "border-cyan-500/30",
      glowColor: "rgba(6, 182, 212, 0.15)"
    },
    debilidades: {
      title: "Debilidades",
      desc: "Aspectos internos de mejora constante en nuestro rendimiento.",
      items: [
        "Tendencia al perfeccionismo que puede prolongar los tiempos de desarrollo.",
        "Distribución de cargas en periodos con alta concurrencia académica.",
        "Gestión inicial de la fatiga ante proyectos simultáneos de gran envergadura.",
        "Brechas individuales en lenguajes o herramientas emergentes muy específicos."
      ],
      color: "from-indigo-600/20 to-violet-600/20",
      borderColor: "border-indigo-500/30",
      glowColor: "rgba(99, 102, 241, 0.15)"
    },
    oportunidades: {
      title: "Oportunidades",
      desc: "Factores externos del entorno que podemos capitalizar.",
      items: [
        "Acceso a una amplia gama de certificaciones de primer nivel en línea.",
        "Alta demanda global de ingenieros de sistemas y arquitectos de software.",
        "Redes de contactos universitarios y eventos tecnológicos (Hackathons).",
        "Evolución acelerada de la IA para potenciar la productividad y el desarrollo."
      ],
      color: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.15)"
    },
    amenazas: {
      title: "Amenazas",
      desc: "Factores externos fuera de nuestro control que debemos mitigar.",
      items: [
        "Alta competitividad y saturación en el mercado de software junior.",
        "Obsolescencia vertiginosa de librerías, frameworks y lenguajes.",
        "Cambios rápidos en las dinámicas de contratación tecnológica.",
        "Distracciones digitales y fatiga por sobrecarga informática (infoxicación)."
      ],
      color: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30",
      glowColor: "rgba(59, 130, 246, 0.15)"
    }
  },

  ruedaDeLaVida: [
    { area: "Salud & Energía", score: 8, icon: "heart", desc: "Gestión colectiva del estrés, ergonomía en el trabajo y hábitos saludables." },
    { area: "Desarrollo Técnico", score: 9, icon: "cpu", desc: "Dominio de lenguajes, algoritmos, arquitectura de software y DevOps." },
    { area: "Proyectos & Negocios", score: 7, icon: "trending-up", desc: "Ideación de soluciones viables, presupuestos e innovación en productos." },
    { area: "Crecimiento Científico", score: 8, icon: "book-open", desc: "Lectura de documentación, cursos de especialización y certificaciones." },
    { area: "Entorno de Trabajo", score: 8, icon: "home", desc: "Optimización de estaciones de programación, hardware y software eficiente." },
    { area: "Sinergia Social", score: 8, icon: "users", desc: "Networking, colaboración activa en comunidades y marcas personales en GitHub." },
    { area: "Liderazgo & Cooperación", score: 9, icon: "award", desc: "Capacidad de guiar, inspirar, y organizar el trabajo en equipo con metodologías ágiles." },
    { area: "Recreación & Balance", score: 7, icon: "compass", desc: "Prevención del burnout mediante pasatiempos, descanso mental y desconexión activa." }
  ],

  metas: [
    {
      id: "corto-plazo",
      timeframe: "Corto Plazo (1 Año)",
      title: "Consolidación y Sinergia Académica",
      desc: "Sentar bases sólidas en metodologías de desarrollo, bases de datos y resolver problemas mediante código limpio y estructurado.",
      items: [
        { title: "Excelencia Académica Colectiva", detail: "Mantener un promedio grupal sobresaliente participando activamente en proyectos prácticos." },
        { title: "Certificaciones Técnicas", detail: "Obtener certificaciones en desarrollo web moderno, Git, y administración de bases de datos." },
        { title: "Inglés Técnico Profesional", detail: "Consolidar habilidades de lectura y comunicación técnica en inglés a nivel B2." },
        { title: "Portafolio de Repositorios", detail: "Desarrollar y publicar de forma cooperativa al menos 3 proyectos en GitHub con código limpio." }
      ]
    },
    {
      id: "mediano-plazo",
      timeframe: "Mediano Plazo (5 Años)",
      title: "Especialización e Inserción en la Industria",
      desc: "Lograr nuestra graduación profesional, insertarnos en el sector corporativo de alto valor y especializarnos en campos complejos.",
      items: [
        { title: "Egreso e Ingeniería", detail: "Culminar la carrera de Ingeniería en Sistemas con honores y desarrollar proyectos de tesis de alto impacto social." },
        { title: "Inserción Profesional Senior", detail: "Posicionarnos como Ingenieros de Software, DevOps o Arquitectos en empresas internacionales líderes." },
        { title: "Investigación aplicada", detail: "Colaborar en proyectos científicos orientados a resolver problemas reales mediante Inteligencia Artificial y Datos." },
        { title: "Modelos de Emprendimiento", detail: "Estructurar ideas de startups tecnológicas o consultoras de desarrollo de software a medida." }
      ]
    },
    {
      id: "largo-plazo",
      timeframe: "Largo Plazo (10 Años)",
      title: "Liderazgo, Innovación y Trascendencia",
      desc: "Convertirnos en referentes tecnológicos, liderar la transformación digital e impulsar el talento en futuras generaciones.",
      items: [
        { title: "Liderazgo Tecnológico (CTO / Principal)", detail: "Liderar departamentos de ingeniería como CTOs, arquitectos jefes o directores de innovación global." },
        { title: "Plataformas Sustentables", detail: "Lanzar soluciones de software con modelos de negocios viables e impacto social positivo sostenible." },
        { title: "Red de Colaboración Global", detail: "Establecer lazos internacionales para el desarrollo tecnológico multidisciplinario y la transferencia de conocimiento." },
        { title: "Mentoría e Impacto", detail: "Crear bootcamps, comunidades de código abierto y mentorías para empoderar a nuevos talentos en sistemas." }
      ]
    }
  ],

  misionVision: {
    mision: {
      title: "Misión del Equipo",
      text: "Formarnos como Ingenieros en Sistemas íntegros, de excelencia científica y humana, a través de la investigación constante, la disciplina y el trabajo cooperativo. Buscamos aplicar la lógica algorítmica y las tecnologías emergentes para diseñar y construir soluciones éticas y de alto rendimiento que impulsen la transformación digital y resuelvan problemas complejos de la sociedad moderna.",
      accent: "from-cyan-500 to-indigo-500"
    },
    vision: {
      title: "Visión del Equipo",
      text: "Ser una generación de profesionales líderes y referentes de innovación y excelencia en el ecosistema tecnológico global. Nos proyectamos liderando la arquitectura de software del futuro, promoviendo el equilibrio ético, el desarrollo digital sostenible y sirviendo como mentores e inspiradores para el crecimiento de nuevos talentos en la ingeniería del mañana.",
      accent: "from-indigo-500 to-emerald-500"
    }
  },

  planDeAccion: {
    dailyHabits: [
      { id: "habit-1", name: "Algoritmos y Planificación (15 min)", icon: "compass", time: "Mañana" },
      { id: "habit-2", name: "Ejercicio y Gestión de Energía", icon: "activity", time: "Mañana / Tarde" },
      { id: "habit-3", name: "Lectura de Documentación y API docs", icon: "book", time: "Tarde / Noche" },
      { id: "habit-4", name: "Programación y Code Review (1h)", icon: "code", time: "Cualquier momento" },
      { id: "habit-5", name: "Análisis Semanal y Sprints (Agile)", icon: "edit-3", time: "Noche" }
    ],
    strategies: [
      { title: "Estrategia de Enfoque Profundo (Deep Work)", desc: "Establecer bloques de 90 minutos de trabajo libre de interrupciones digitales para dominar arquitecturas complejas de software y algoritmos sofisticados." },
      { title: "Scrum y Tableros Kanban", desc: "Organizar nuestras tareas y responsabilidades en tableros visuales interactivos, evaluando el progreso individual y de equipo al final de cada ciclo." },
      { title: "Integración Continua y Calidad de Código", desc: "Ejecutar pruebas exhaustivas, revisar el código recíprocamente y mantener baja la deuda técnica mediante refactorización activa." }
    ]
  }
};
