const translations = {
  es: {
    'nav.projects': 'Proyectos Destacados',
    'nav.about': 'Sobre mí',
    'nav.stack': 'Stack',
    'nav.timeline': 'Formación Académica',
    'nav.cv': 'Descargar CV',

    'hero.subtitle': 'Desarrolladora Full-stack orientada a backend .NET',
    'hero.location': '📍Córdoba, Argentina',

    'about.title': 'Sobre mí',
    'about.text1': 'Desarrolladora <span class="resaltar">.NET</span> en formación, cursando segundo año de la carrera de Programación.',
    'about.text2': 'Trabajo principalmente con <span class="resaltar">C#</span>, <span class="resaltar">ASP.NET Core</span>, <span class="resaltar">Entity Framework</span> y <span class="resaltar">SQL Server</span>.',
    'about.text3': 'Actualmente me encuentro aprendiendo <span class="resaltar">Angular</span> y <span class="resaltar">TypeScript</span> de forma autodidacta, con el objetivo de complementar mi perfil backend y avanzar hacia un enfoque <span class="resaltar">full stack</span>.',
    'about.text4': 'Me enfoco en construir aplicaciones claras, mantenibles y bien estructuradas, aplicando buenas prácticas y <span class="resaltar">arquitectura en capas</span>.',
    'about.text5': 'Desarrollo proyectos personales para seguir fortaleciendo mi base técnica y profesional.',

    'projects.title': 'Proyectos Destacados',
    'projects.demo': 'Demo',
    'projects.repo': 'Repositorio',
    'projects.seeMore': 'Ver más',

    'projects.status.finished': 'Finalizado',
    'projects.status.dev': 'En desarrollo',
    'projects.logra.date': 'Dic 2025 - Ene 2026',
    'projects.arcadia.date': 'Sep 2025 - Dic 2025',
    'projects.tucredito.date': 'Ene 2026 - Actualidad',

    'stack.tools': 'Herramientas',

    'projects.logra.desc':
      'Plataforma de productividad minimalista diseñada para organizar tu día y gestionar <strong>hábitos</strong>. Construida con <strong>arquitectura limpia en .NET 8</strong> y un frontend ligero en <strong>Vanilla JS (SPA)</strong>, transforma intenciones en acciones.',

    'projects.arcadia.desc':
      'E-commerce integral para el mundo editorial que centraliza la venta de libros. Desarrollado con <strong>.NET y SQL Server</strong>, gestiona desde el <strong>catálogo navegable</strong> hasta el seguimiento de pedidos, aportando visibilidad y control al negocio.',

    'projects.tucredito.desc':
      'API backend para la <strong>gestión integral de préstamos y prestatarios</strong>. Implementa autenticación con <strong>JWT</strong>, auditoría de datos y consumo de APIs externas (BCRA y cotización de monedas) para ofrecer una <strong>visión confiable y en tiempo real</strong> del riesgo y de la cartera.',

    'modal.statusLabel': 'Estado',
    'modal.problemTitle': 'Sobre el proyecto',
    'modal.featuresTitle': 'Funcionalidades principales',
    'modal.techTitle': 'Tecnologías',
    'modal.moreTitle': 'Información adicional',
    'modal.close': 'Cerrar',
    'modal.carousel.prev': 'Anterior',
    'modal.carousel.next': 'Siguiente',
    'modal.carousel.imageAlt': 'Captura {index} de {project}',
    'modal.carousel.dotAlt': 'Ir a la captura {index}',

    'modal.logra.problem':
      'Nace de la necesidad de combinar planificación diaria y bienestar personal sin la complejidad de herramientas empresariales. Resuelve la dispersión mental transformando intenciones en acciones mediante una interfaz fluida y una arquitectura backend robusta que garantiza la <strong>sincronización y seguridad de los datos</strong>.',
    'modal.logra.features.1': '<strong>Planificación Diaria y Hábitos</strong>: Vista enfocada en el día actual con navegación intuitiva y categorización visual por colores.',
    'modal.logra.features.2': '<strong>Interacción Fluida (Drag & Drop)</strong>: Reorganización nativa de tareas y notas para una experiencia de usuario ágil y moderna.',
    'modal.logra.features.3': '<strong>Backend Robusto (.NET 8)</strong>: API RESTful con Clean Architecture, Patrón Repositorio y optimización de consultas (solución a N+1).',
    'modal.logra.features.4': '<strong>Frontend Ligero (Vanilla JS)</strong>: SPA sin frameworks pesados, utilizando Módulos ES6+ y gestión de estado centralizada.',
    'modal.logra.features.5': '<strong>Seguridad y Rendimiento</strong>: Autenticación JWT, validación de datos y proyección a DTOs para máxima eficiencia.',
    'modal.logra.extra': 'Estado: finalizado. Full Stack (.NET + Vanilla JS) desplegado y funcional.',

    'modal.arcadia.problem':
      'Centraliza el catálogo de libros en un único lugar y estandariza la toma de pedidos, evitando inconsistencias de stock. Aporta visibilidad al negocio mediante métricas clave, resolviendo la gestión manual y desordenada del flujo de ventas.',
    'modal.arcadia.features.1': '<strong>Catálogo y Filtros</strong>: Búsqueda avanzada y fichas detalladas pensadas para el usuario final.',
    'modal.arcadia.features.2': '<strong>Gestión de Pedidos</strong>: Control transaccional del ciclo de vida de la compra y seguimiento de estados.',
    'modal.arcadia.features.3': '<strong>Panel Administrativo (ABMC)</strong>: Gestión completa de libros, autores y editoriales con validaciones.',
    'modal.arcadia.features.4': '<strong>Seguridad y Auth</strong>: Registro, login seguro y autorización basada en roles mediante JWT.',
    'modal.arcadia.features.5': '<strong>Dashboard de Métricas</strong>: Visualización de datos de ventas para decisiones informadas.',
    'modal.arcadia.extra': 'Roadmap: Integración con MinIO para portadas, perfiles de usuario y mejoras en transaccionalidad.',

    'modal.tucredito.problem':
      'API backend en desarrollo orientada a pequeñas financieras y prestamistas que necesitan centralizar la gestión de créditos y prestatarios en un sistema único, <strong>auditable y seguro</strong>. Automatiza el ciclo completo del préstamo — desde la evaluación de riesgo hasta la cancelación — reduciendo planillas manuales, reprocesos y errores operativos.',
    'modal.tucredito.features.1':
      '<strong>Gestión integral de prestatarios y créditos</strong>, con datos personales, financieros y estados de préstamo.',
    'modal.tucredito.features.2':
      '<strong>Autenticación y autorización con JWT</strong>, más almacenamiento seguro de contraseñas mediante hashing.',
    'modal.tucredito.features.3':
      '<strong>Auditoría avanzada</strong> de operaciones sensibles (Préstamo, Pago, Prestatario, Garante) usando interceptores de Entity Framework.',
    'modal.tucredito.features.4':
      '<strong>Integración con servicios externos</strong>: consulta de situación crediticia en BCRA y cotización de dólar (oficial, blue, etc.) en tiempo real.',
    'modal.tucredito.features.5':
      '<strong>Gestión de documentación en MinIO</strong>, almacenando pagarés y archivos asociados de forma segura y desacoplada de la base de datos.',
    'modal.tucredito.extra':
      'Estado: en desarrollo activo. Actualmente está desplegado como API backend; la interfaz web administrativa se encuentra en rediseño.',

    'stack.title': 'Mi Stack Técnico',
    'stack.languages': 'Lenguajes',
    'stack.frameworks': 'Frameworks',
    'stack.databases': 'Bases de datos',
    'stack.vcs': 'Control de versiones',
    'stack.other': 'Otros',

    'timeline.title': 'Formación Académica',

    'timeline.item1.date': 'Diciembre 2025 – Actualidad',
    'timeline.item1.desc':
      'Finalicé el primer año de la Tecnicatura Universitaria en Programación (UTN) con un <span class="resaltar">promedio general de 9.00</span>, aprobando la totalidad de las materias.',

    'timeline.item2.date': 'Julio 2025 – Noviembre 2025',
    'timeline.item2.desc1':
      'Segundo cuatrimestre de la Tecnicatura Universitaria en Programación (UTN).',
    'timeline.item2.desc2':
      'En <span class="resaltar">Programación II</span> desarrollo APIs con <span class="resaltar">.NET, C# y Entity Framework</span>, aplicando POO avanzada, patrones de diseño, manejo de transacciones y consultas LINQ complejas.',
    'timeline.item2.desc3':
      'En <span class="resaltar">Bases de Datos II</span> trabajo con <span class="resaltar">SQL Server avanzado</span>: procedimientos almacenados, triggers, vistas, tablas temporales, consultas agregadas y subconsultas.',

    'timeline.item3.date': 'Marzo 2025 – Julio 2025',
    'timeline.item3.desc1':
      'Primer cuatrimestre de la Tecnicatura Universitaria en Programación (UTN).',
    'timeline.item3.desc2':
      'En <span class="resaltar">Programación I</span> construí aplicaciones de escritorio con <span class="resaltar">.NET Windows Forms</span>, aplicando POO desde sus fundamentos hasta conceptos intermedios.',
    'timeline.item3.desc3':
      'En <span class="resaltar">Bases de Datos I</span> adquirí una base sólida en <span class="resaltar">SQL Server</span>: normalización, modelado de datos, definición de tablas y consultas fundamentales.',

    'timeline.item4.date': 'Diciembre 2024 – Febrero 2025',
    'timeline.item4.desc':
      'Preparación para el ingreso a la carrera, enfocada en algoritmos, fundamentos de programación estructurada y resolución lógica de problemas.',

    'timeline.item5.date': 'Julio 2024 – Noviembre 2024',
    'timeline.item5.desc':
      'Primer acercamiento al desarrollo de software. Estudio autodidacta de backend con <span class="resaltar">Java Spring Boot</span> y bases de datos <span class="resaltar">MySQL</span> mediante cursos y material educativo online.',

    'contact.title': 'Contactame'
  },

  en: {
    'nav.projects': 'Featured Projects',
    'nav.about': 'About me',
    'nav.stack': 'Stack',
    'nav.timeline': 'Academic Background',
    'nav.cv': 'Download CV',

    'hero.subtitle': 'Full-stack Developer focused on .NET backend',
    'hero.location': '📍Córdoba, Argentina',

    'about.title': 'About me',
    'about.text1': '<span class="resaltar">.NET</span> Developer in training, currently in the second year of the Programming degree.',
    'about.text2': 'I work mainly with <span class="resaltar">C#</span>, <span class="resaltar">ASP.NET Core</span>, <span class="resaltar">Entity Framework</span>, and <span class="resaltar">SQL Server</span>.',
    'about.text3': 'I am currently learning <span class="resaltar">Angular</span> and <span class="resaltar">TypeScript</span> on my own, with the goal of complementing my backend profile and moving towards a <span class="resaltar">full stack</span> approach.',
    'about.text4': 'I focus on building clear, maintainable, and well-structured applications, applying best practices and <span class="resaltar">layered architecture</span>.',
    'about.text5': 'I develop personal projects to continue strengthening my technical and professional base.',

    'projects.title': 'Featured Projects',
    'projects.demo': 'Demo',
    'projects.repo': 'Repository',
    'projects.seeMore': 'See more',

    'projects.status.finished': 'Completed',
    'projects.status.dev': 'In development',
    'projects.logra.date': 'Dec 2025 - Jan 2026',
    'projects.arcadia.date': 'Sep 2025 - Dec 2025',
    'projects.tucredito.date': 'Jan 2026 - Present',

    'stack.tools': 'Tools',

    'projects.logra.desc':
      'Minimalist productivity platform designed to organize your day and manage <strong>habits</strong>. Built with <strong>clean architecture in .NET 8</strong> and a lightweight <strong>Vanilla JS (SPA)</strong> frontend, transforming intentions into actions.',

    'projects.arcadia.desc':
      'Comprehensive e-commerce for the publishing world that centralizes book sales. Developed with <strong>.NET and SQL Server</strong>, it manages everything from the <strong>browsable catalog</strong> to order tracking, providing visibility and control to the business.',

    'projects.tucredito.desc':
      'Backend API for <strong>end-to-end management of loans and borrowers</strong>. It implements <strong>JWT</strong> authentication, data auditing, and external API consumption (BCRA and currency rates) to provide a <strong>reliable, real-time view</strong> of risk and portfolio status.',

    'modal.statusLabel': 'Status',
    'modal.problemTitle': 'About the project',
    'modal.featuresTitle': 'Key features',
    'modal.techTitle': 'Technologies',
    'modal.moreTitle': 'Additional info',
    'modal.close': 'Close',
    'modal.carousel.prev': 'Previous',
    'modal.carousel.next': 'Next',
    'modal.carousel.imageAlt': 'Screenshot {index} of {project}',
    'modal.carousel.dotAlt': 'Go to screenshot {index}',

    'modal.logra.problem':
      'Born from the need to combine daily planning and personal well-being without the complexity of enterprise tools. It solves mental clutter by transforming intentions into actions through a fluid interface and a robust backend architecture that ensures <strong>data synchronization and security</strong>.',
    'modal.logra.features.1': '<strong>Daily Planning & Habits</strong>: Focus view on the current day with intuitive navigation and visual color categorization.',
    'modal.logra.features.2': '<strong>Fluid Interaction (Drag & Drop)</strong>: Native task and note reordering for an agile and modern user experience.',
    'modal.logra.features.3': '<strong>Robust Backend (.NET 8)</strong>: RESTful API with Clean Architecture, Repository Pattern, and query optimization (N+1 solution).',
    'modal.logra.features.4': '<strong>Lightweight Frontend (Vanilla JS)</strong>: SPA without heavy frameworks, using ES6+ Modules and centralized state management.',
    'modal.logra.features.5': '<strong>Security & Performance</strong>: JWT authentication, data validation, and DTO projection for maximum efficiency.',
    'modal.logra.extra': 'Status: completed. Full Stack (.NET + Vanilla JS) deployed and functional.',

    'modal.arcadia.problem':
      'Centralizes the book catalog in a single place and standardizes order taking, avoiding stock inconsistencies. It brings visibility to the business through key metrics, resolving the messy and manual management of sales flows.',
    'modal.arcadia.features.1': '<strong>Catalog & Filters</strong>: Advanced search and detailed product pages designed for the end user.',
    'modal.arcadia.features.2': '<strong>Order Management</strong>: Transactional control of the purchase lifecycle and status tracking.',
    'modal.arcadia.features.3': '<strong>Admin Panel (CRUD)</strong>: Complete management of books, authors, and publishers with validations.',
    'modal.arcadia.features.4': '<strong>Security & Auth</strong>: Registration, secure login, and role-based authorization using JWT.',
    'modal.arcadia.features.5': '<strong>Metrics Dashboard</strong>: Visualization of sales data for informed decision-making.',
    'modal.arcadia.extra': 'Roadmap: Integration with MinIO for covers, user profiles, and transactional improvements.',

    'modal.tucredito.problem':
      'Backend API in development aimed at small lenders and financial businesses that need to centralize loan and borrower management in a single, <strong>auditable and secure</strong> system. It automates the full loan lifecycle — from risk assessment to payoff — reducing manual spreadsheets, rework, and operational errors.',
    'modal.tucredito.features.1':
      '<strong>End-to-end management of borrowers and loans</strong>, including personal, financial data and loan status.',
    'modal.tucredito.features.2':
      '<strong>JWT-based authentication and authorization</strong>, plus secure password storage through hashing.',
    'modal.tucredito.features.3':
      '<strong>Advanced auditing</strong> of sensitive operations (Loan, Payment, Borrower, Guarantor) using Entity Framework interceptors.',
    'modal.tucredito.features.4':
      '<strong>External integrations</strong>: real-time BCRA credit report queries and dollar exchange rates (official, blue, etc.).',
    'modal.tucredito.features.5':
      '<strong>Document management with MinIO</strong>, storing promissory notes and related files securely and decoupled from the database.',
    'modal.tucredito.extra':
      'Status: in active development. Currently deployed as a backend API; the admin web interface is being redesigned.',

    'stack.title': 'My Tech Stack',
    'stack.languages': 'Languages',
    'stack.frameworks': 'Frameworks',
    'stack.databases': 'Databases',
    'stack.vcs': 'Version Control',
    'stack.other': 'Other',

    'timeline.title': 'Academic Background',

    'timeline.item1.date': 'December 2025 – Present',
    'timeline.item1.desc':
      'Completed the first year of the University Technical Degree in Programming (UTN) with a <span class="resaltar">GPA of 9.00</span>, passing all subjects.',

    'timeline.item2.date': 'July 2025 – November 2025',
    'timeline.item2.desc1':
      'Second semester of the University Technical Degree in Programming (UTN).',
    'timeline.item2.desc2':
      'In <span class="resaltar">Programming II</span>, I develop APIs using <span class="resaltar">.NET, C# and Entity Framework</span>, applying advanced OOP, design patterns, transactions and complex LINQ queries.',
    'timeline.item2.desc3':
      'In <span class="resaltar">Databases II</span>, I work with <span class="resaltar">advanced SQL Server features</span>: stored procedures, triggers, views, temporary tables, aggregated queries and subqueries.',

    'timeline.item3.date': 'March 2025 – July 2025',
    'timeline.item3.desc1':
      'First semester of the University Technical Degree in Programming (UTN).',
    'timeline.item3.desc2':
      'In <span class="resaltar">Programming I</span>, I built desktop applications using <span class="resaltar">.NET Windows Forms</span>, applying OOP from fundamentals to intermediate concepts.',
    'timeline.item3.desc3':
      'In <span class="resaltar">Databases I</span>, I gained a solid foundation in <span class="resaltar">SQL Server</span>: normalization, data modeling, table definitions and core queries.',

    'timeline.item4.date': 'December 2024 – February 2025',
    'timeline.item4.desc':
      'Preparation for entering the degree, focused on algorithms, structured programming fundamentals and logical problem solving.',

    'timeline.item5.date': 'July 2024 – November 2024',
    'timeline.item5.desc':
      'First approach to software development. Self-taught backend study with <span class="resaltar">Java Spring Boot</span> and <span class="resaltar">MySQL</span> databases through courses and online learning material.',

    'contact.title': 'Contact me'
  }
}

const themeToggle = document.getElementById('theme-toggle')
const langToggle = document.getElementById('lang-toggle')
const html = document.documentElement

function t(lang, key, vars) {
  const dict = translations[lang] || {}
  let text = dict[key] || ''
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      text = text.replaceAll(`{${k}}`, String(v))
    })
  }
  return text
}

function setTheme(t) {
  html.setAttribute('data-theme', t)
  localStorage.setItem('theme', t)
  themeToggle.textContent = t === 'dark' ? '☀️' : '🌙'
}

function applyTranslations(lang) {
  const dict = translations[lang]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    const text = dict[key]
    if (text) el.innerHTML = text
  })
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria')
    const text = dict[key]
    if (text) el.setAttribute('aria-label', text)
  })
  document.documentElement.lang = lang
  langToggle.textContent = lang === 'es' ? '🇦🇷' : '🇺🇸'
  localStorage.setItem('lang', lang)

  const cvBtn = document.getElementById('cv-download')
  if (cvBtn) {
    if (lang === 'es') {
      cvBtn.href = 'resumes/CV Camila Martín - 2026.pdf'
    } else {
      cvBtn.href = 'resumes/Camila Martin CV - 2026.pdf'
    }
  }
}

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  setTheme(next)
})

langToggle.addEventListener('click', () => {
  const next = document.documentElement.lang === 'es' ? 'en' : 'es'
  applyTranslations(next)
})

function init() {
  const savedTheme = localStorage.getItem('theme')
  const savedLang = localStorage.getItem('lang')
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  setTheme(savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light'))
  applyTranslations(savedLang ? savedLang : 'es')
  setupProjectModal()
  setupScrollAnimations()
  setupConfetti()
  setupMobileMenu()
}

document.addEventListener('DOMContentLoaded', init)

function setupMobileMenu() {
  const menuBtn = document.getElementById('menu-toggle')
  const navLinks = document.querySelector('.nav-links')

  if (!menuBtn || !navLinks) return

  menuBtn.addEventListener('click', () => {
    const isActive = navLinks.classList.toggle('active')
    menuBtn.innerHTML = isActive 
      ? '<i class="fa-solid fa-xmark"></i>' 
      : '<i class="fa-solid fa-bars"></i>'
  })

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active')
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>'
    })
  })
}

function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible-scroll')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.hidden-scroll').forEach(el => {
    observer.observe(el)
  })
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href')
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

function setupProjectModal() {
  const modal = document.getElementById('project-modal')
  if (!modal) return

  const titleEl = document.getElementById('project-modal-title')
  const statusEl = document.getElementById('project-modal-status')
  const problemEl = document.getElementById('project-modal-problem')
  const featuresEl = document.getElementById('project-modal-features')
  const techEl = document.getElementById('project-modal-tech')
  const extraEl = document.getElementById('project-modal-extra')

  const imageEl = document.getElementById('project-modal-image')
  const dotsEl = document.getElementById('project-modal-dots')
  const prevBtn = modal.querySelector('[data-carousel-prev]')
  const nextBtn = modal.querySelector('[data-carousel-next]')

  const projects = {
    logra: {
      title: 'Logra',
      statusKey: 'projects.status.finished',
      problemKey: 'modal.logra.problem',
      featuresKeys: [
        'modal.logra.features.1',
        'modal.logra.features.2',
        'modal.logra.features.3',
        'modal.logra.features.4',
        'modal.logra.features.5'
      ],
      tech: ['.NET 8 Web API', 'C#', 'SQL Server', 'Entity Framework Core', 'Vanilla JS (ES6+)', 'CSS3', 'JWT'],
      extraKey: 'modal.logra.extra',
      images: ['images/L1.png', 'images/L2.png', 'images/L3.png', 'images/L4.png', 'images/L5.png'],
      demoUrl: 'https://logra-psi.vercel.app/',
      repoUrl: 'https://github.com/camilaMartin14/Logra--Daily-Planner'
    },
    arcadia: {
      title: 'Arcadia',
      statusKey: 'projects.status.finished',
      problemKey: 'modal.arcadia.problem',
      featuresKeys: [
        'modal.arcadia.features.1',
        'modal.arcadia.features.2',
        'modal.arcadia.features.3',
        'modal.arcadia.features.4',
        'modal.arcadia.features.5'
      ],
      tech: ['.NET Web API', 'SQL Server', 'JWT', 'HTML', 'CSS', 'JavaScript'],
      extraKey: 'modal.arcadia.extra',
      images: ['images/A3.png', 'images/A2.png', 'images/A1.png', 'images/A4.png', 'images/A5.png', 'images/A6.png', 'images/A7.png'],
      demoUrl: 'https://arcadia-mu-five.vercel.app/',
      repoUrl: 'https://github.com/camilaMartin14/Arcadia-Web'
    },
    tucredito: {
      title: 'Tu Crédito',
      statusKey: 'projects.status.dev',
      problemKey: 'modal.tucredito.problem',
      featuresKeys: [
        'modal.tucredito.features.1',
        'modal.tucredito.features.2',
        'modal.tucredito.features.3',
        'modal.tucredito.features.4',
        'modal.tucredito.features.5'
      ],
      tech: ['.NET 8 Web API', 'C#', 'Entity Framework Core', 'SQL Server', 'JWT', 'MinIO', 'External APIs'],
      extraKey: 'modal.tucredito.extra',
      images: ['images/app-in-development.png'],
      demoUrl: 'https://tu-credito.vercel.app/',
      repoUrl: 'https://github.com/camilaMartin14/Tu-Credito'
    }
  }

  let currentProjectId = null
  let currentIndex = 0
  let lastFocused = null

  function setModalOpen(open) {
    if (open) {
      modal.classList.add('is-open')
      modal.setAttribute('aria-hidden', 'false')
      document.body.classList.add('modal-open')
    } else {
      modal.classList.remove('is-open')
      modal.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('modal-open')
    }
  }

  function renderCarousel() {
    const project = projects[currentProjectId]
    if (!project) return
    const images = project.images || []
    if (!images.length) return

    const lang = document.documentElement.lang || 'es'
    const safeIndex = ((currentIndex % images.length) + images.length) % images.length
    currentIndex = safeIndex

    imageEl.src = images[safeIndex]
    imageEl.alt = t(lang, 'modal.carousel.imageAlt', { index: safeIndex + 1, project: project.title })

    dotsEl.innerHTML = ''
    images.forEach((_, idx) => {
      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'carousel-dot' + (idx === safeIndex ? ' is-active' : '')
      btn.setAttribute('aria-label', t(lang, 'modal.carousel.dotAlt', { index: idx + 1 }))
      btn.addEventListener('click', () => {
        currentIndex = idx
        renderCarousel()
      })
      dotsEl.appendChild(btn)
    })
  }

  function renderProject(projectId) {
    const project = projects[projectId]
    if (!project) return

    currentProjectId = projectId
    currentIndex = 0

    titleEl.textContent = project.title
    statusEl.setAttribute('data-i18n', project.statusKey)
    problemEl.setAttribute('data-i18n', project.problemKey)
    extraEl.setAttribute('data-i18n', project.extraKey)

    featuresEl.innerHTML = ''
    project.featuresKeys.forEach(key => {
      const li = document.createElement('li')
      li.setAttribute('data-i18n', key)
      featuresEl.appendChild(li)
    })

    techEl.innerHTML = ''
    project.tech.forEach(label => {
      const span = document.createElement('span')
      span.className = 'chip'
      span.textContent = label
      techEl.appendChild(span)
    })

    
    const actionsEl = document.getElementById('project-modal-actions')
    if (actionsEl) {
      actionsEl.innerHTML = ''
      const currentLang = document.documentElement.lang || 'es'
      
      if (project.demoUrl) {
        const demoBtn = document.createElement('a')
        demoBtn.href = project.demoUrl
        demoBtn.className = 'modal-action-btn'
        demoBtn.target = '_blank'
        demoBtn.rel = 'noopener noreferrer'
        demoBtn.innerHTML = `<i class="fa-solid fa-desktop"></i> <span data-i18n="projects.demo">${t(currentLang, 'projects.demo')}</span>`
        actionsEl.appendChild(demoBtn)
      }

      if (project.repoUrl) {
        const repoBtn = document.createElement('a')
        repoBtn.href = project.repoUrl
        repoBtn.className = 'modal-action-btn'
        repoBtn.target = '_blank'
        repoBtn.rel = 'noopener noreferrer'
        repoBtn.innerHTML = `<i class="fa-brands fa-github"></i> <span data-i18n="projects.repo">${t(currentLang, 'projects.repo')}</span>`
        actionsEl.appendChild(repoBtn)
      }
    }

    applyTranslations(document.documentElement.lang || 'es')
    renderCarousel()
  }

  function openModal(projectId) {
    lastFocused = document.activeElement
    renderProject(projectId)
    setModalOpen(true)
    const closeBtn = modal.querySelector('.modal-close')
    if (closeBtn) closeBtn.focus()
  }

  function closeModal() {
    setModalOpen(false)
    currentProjectId = null
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus()
  }

  document.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project')
      if (projectId) openModal(projectId)
    })
  })

  modal.querySelectorAll('[data-modal-close]').forEach(el => {
    el.addEventListener('click', closeModal)
  })

  modal.addEventListener('click', e => {
    const target = e.target
    if (target && target instanceof HTMLElement && target.hasAttribute('data-modal-close')) closeModal()
  })

  document.addEventListener('keydown', e => {
    if (modal.classList.contains('is-open') && e.key === 'Escape') closeModal()
  })

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const project = projects[currentProjectId]
      if (!project) return
      currentIndex = currentIndex - 1
      renderCarousel()
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const project = projects[currentProjectId]
      if (!project) return
      currentIndex = currentIndex + 1
      renderCarousel()
    })
  }
}

function setupConfetti() {
  const cvBtn = document.getElementById('cv-download')
  if (cvBtn) {
    cvBtn.addEventListener('mousedown', (e) => {
      
      const rect = cvBtn.getBoundingClientRect()
      
      const x = (rect.left + rect.width / 2) / window.innerWidth
      const y = (rect.top + rect.height / 2) / window.innerHeight

      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x, y },
        zIndex: 9999,
        startVelocity: 60, 
        gravity: 1.2,      
        scalar: 0.9        
      })
    })
  }
}
