// Datos del Proyecto de Vida - Edita este archivo para personalizar toda tu información
export const lifeProjectData = {
  personalInfo: {
    name: "Yankarlo Morán",
    title: "Mi Proyecto de Vida",
    subtitle: "Un viaje de crecimiento, autodescubrimiento y realización personal",
    tagline: "El éxito no se mide por lo que logras, sino por la persona en la que te conviertes en el proceso.",
    introText: "Este espacio representa mi mapa de ruta hacia el futuro. Es una recopilación consciente de quién soy, qué valoro, hacia dónde me dirijo y los pasos concretos que tomaré para alcanzar una vida plena, equilibrada e inspiradora. Aquí plasmo mis metas, mis principios y el compromiso conmigo mismo para el corto, mediano y largo plazo.",
    values: [
      { name: "Integridad", icon: "shield", desc: "Actuar con honestidad y coherencia entre mis pensamientos y acciones." },
      { name: "Crecimiento", icon: "trending-up", desc: "Aprender constantemente y salir de mi zona de confort." },
      { name: "Gratitud", icon: "heart", desc: "Apreciar cada experiencia y valorar a las personas que me rodean." },
      { name: "Disciplina", icon: "activity", desc: "Mantener el enfoque y la constancia en mis hábitos diarios." }
    ]
  },
  
  foda: {
    fortalezas: {
      title: "Fortalezas",
      desc: "Aspectos internos positivos que poseo y me impulsan.",
      items: [
        "Resiliencia ante situaciones adversas y capacidad de adaptación.",
        "Autodisciplina y alto nivel de compromiso con mis objetivos.",
        "Pensamiento analítico y facilidad para resolver problemas.",
        "Empatía y habilidades de comunicación efectivas."
      ],
      color: "from-cyan-600/20 to-teal-600/20",
      borderColor: "border-cyan-500/30",
      glowColor: "rgba(6, 182, 212, 0.15)"
    },
    debilidades: {
      title: "Debilidades",
      desc: "Aspectos internos que debo trabajar y mejorar.",
      items: [
        "Tendencia al perfeccionismo que puede retrasar mis entregas.",
        "Dificultad ocasional para delegar tareas en proyectos grupales.",
        "Gestión del estrés en temporadas de alta carga académica o laboral.",
        "Impaciencia por ver resultados inmediatos en mis procesos."
      ],
      color: "from-indigo-600/20 to-violet-600/20",
      borderColor: "border-indigo-500/30",
      glowColor: "rgba(99, 102, 241, 0.15)"
    },
    oportunidades: {
      title: "Oportunidades",
      desc: "Factores externos que puedo aprovechar para mi crecimiento.",
      items: [
        "Acceso a una amplia variedad de cursos de especialización en línea.",
        "Crecimiento del mercado laboral en áreas tecnológicas y digitales.",
        "Red de contactos académicos y profesionales en expansión.",
        "Posibilidades de becas e intercambios internacionales."
      ],
      color: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-500/30",
      glowColor: "rgba(16, 185, 129, 0.15)"
    },
    amenazas: {
      title: "Amenazas",
      desc: "Factores externos fuera de mi control que debo mitigar.",
      items: [
        "Alta competencia en el sector laboral y profesional.",
        "Cambios rápidos en los requerimientos tecnológicos globales.",
        "Situación económica inestable que puede impactar presupuestos.",
        "Distracciones digitales y sobrecarga de información."
      ],
      color: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30",
      glowColor: "rgba(59, 130, 246, 0.15)"
    }
  },

  ruedaDeLaVida: [
    { area: "Salud & Energía", score: 8, icon: "heart", desc: "Nutrición, ejercicio físico regular, descanso y energía diaria." },
    { area: "Desarrollo Profesional", score: 7, icon: "briefcase", desc: "Metas profesionales, estudios, habilidades técnicas y carrera." },
    { area: "Finanzas Personales", score: 6, icon: "dollar-sign", desc: "Ahorro, inversiones, presupuesto inteligente y libertad financiera." },
    { area: "Crecimiento Personal", score: 8, icon: "book-open", desc: "Autoconocimiento, lectura, cursos, meditación y espiritualidad." },
    { area: "Familia & Hogar", score: 9, icon: "home", desc: "Calidad de relación con padres, hermanos y ambiente en el hogar." },
    { area: "Amistad / Social", score: 7, icon: "users", desc: "Relaciones de amistad profundas, apoyo mutuo y vida social." },
    { area: "Amor & Pareja", score: 6, icon: "smile", desc: "Relación afectiva, comunicación íntima, crecimiento conjunto." },
    { area: "Ocio & Recreación", score: 7, icon: "compass", desc: "Hobbies, viajes, diversión, desconexión y disfrute del presente." }
  ],

  metas: [
    {
      id: "corto-plazo",
      timeframe: "Corto Plazo (1 Año)",
      title: "Consolidación y Crecimiento Académico",
      desc: "Enfocarme en el desarrollo de bases sólidas, hábitos saludables y mis primeras experiencias prácticas.",
      items: [
        { title: "Excelencia Académica", detail: "Mantener un promedio sobresaliente en mis estudios universitarios y participar en proyectos de investigación." },
        { title: "Inglés Profesional", detail: "Certificar mi nivel de inglés a nivel B2/C1 mediante un examen internacional reconocido." },
        { title: "Bienestar Físico", detail: "Hacer ejercicio por lo menos 4 veces por semana y establecer un horario de sueño consistente de 7-8 horas." },
        { title: "Creación de Portafolio", detail: "Desarrollar y publicar 3 proyectos web significativos que muestren mis habilidades de programación." }
      ]
    },
    {
      id: "mediano-plazo",
      timeframe: "Mediano Plazo (5 Años)",
      title: "Especialización e Inserción Profesional",
      desc: "Lograr mi graduación, insertarme en el mercado profesional de alto nivel y comenzar a construir mi independencia financiera.",
      items: [
        { title: "Graduación y Título", detail: "Obtener mi título profesional con honores y realizar una especialización en desarrollo de software moderno." },
        { title: "Primer Empleo Senior", detail: "Posicionarme como desarrollador Full-Stack en una empresa internacional de tecnología con trabajo remoto." },
        { title: "Independencia Habitacional", detail: "Mudarme a mi propio departamento y amueblarlo de forma sostenible y minimalista." },
        { title: "Fondo de Emergencia", detail: "Consolidar un fondo de ahorro equivalente a 6 meses de mis gastos y empezar a invertir en fondos indexados." }
      ]
    },
    {
      id: "largo-plazo",
      timeframe: "Largo Plazo (10 Años)",
      title: "Liderazgo, Libertad Financiera y Trascendencia",
      desc: "Convertirme en un referente en mi área de especialización, diversificar mis ingresos y aportar valor a la sociedad.",
      items: [
        { title: "Emprendimiento Propio o Rol de Liderazgo", detail: "Fundar mi propia consultora de tecnología o liderar equipos de desarrollo como Principal Engineer." },
        { title: "Libertad Financiera", detail: "Tener múltiples fuentes de ingresos pasivos (bienes raíces, inversiones) que cubran mi estilo de vida básico." },
        { title: "Viaje y Aventura Global", detail: "Haber visitado al menos 10 países y tener la capacidad de trabajar como nómada digital desde cualquier parte." },
        { title: "Impacto y Mentoría", detail: "Crear una iniciativa de mentoría gratuita o canal educativo para jóvenes que desean iniciarse en el mundo de la tecnología." }
      ]
    }
  ],

  misionVision: {
    mision: {
      title: "Mi Misión Personal",
      text: "Convertirme cada día en mi mejor versión a través del aprendizaje constante, la disciplina y la empatía. Aspiro a utilizar mis habilidades lógicas y tecnológicas para resolver problemas reales del mundo, aportando valor a la sociedad y construyendo relaciones humanas profundas y honestas basadas en el respeto y el apoyo mutuo.",
      accent: "from-cyan-500 to-indigo-500"
    },
    vision: {
      title: "Mi Visión de Futuro",
      text: "Ser un profesional líder y un ser humano íntegro, reconocido por mi capacidad de innovación y empatía. Visualizo una vida de plenitud y libertad donde mi salud, carrera, finanzas y relaciones estén en equilibrio, permitiéndome explorar el mundo como nómada digital y servir de inspiración y mentor para futuras generaciones de creativos y programadores.",
      accent: "from-indigo-500 to-emerald-500"
    }
  },

  planDeAccion: {
    dailyHabits: [
      { id: "habit-1", name: "Meditación y Enfoque (10 min)", icon: "compass", time: "Mañana" },
      { id: "habit-2", name: "Ejercicio Físico Regular", icon: "activity", time: "Mañana / Tarde" },
      { id: "habit-3", name: "Lectura de Crecimiento (20 págs)", icon: "book", time: "Tarde / Noche" },
      { id: "habit-4", name: "Estudio y Práctica de Código (1h)", icon: "code", time: "Cualquier momento" },
      { id: "habit-5", name: "Agradecimiento y Planificación Diaria", icon: "edit-3", time: "Noche" }
    ],
    strategies: [
      { title: "Estrategia de Enfoque Profundo (Deep Work)", desc: "Establecer bloques de 90 minutos de trabajo ininterrumpido sin teléfono ni redes sociales para maximizar mi aprendizaje académico y de desarrollo." },
      { title: "Estrategia Financiera 50-30-20", desc: "Asignar un 50% de mis ingresos a necesidades básicas, un 30% a metas personales/deseos y ahorrar o invertir el 20% religiosamente todos los meses." },
      { title: "Reunión de Crecimiento Semanal", desc: "Cada domingo evaluar mis metas de la semana, reajustar mi agenda, actualizar la Rueda de la Vida y celebrar mis victorias, sin importar cuán pequeñas sean." }
    ]
  }
};
