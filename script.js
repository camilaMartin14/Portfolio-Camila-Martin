const translations = {
  es: {
    'nav.projects': 'Proyectos Destacados',
    'nav.stack': 'Stack',
    'nav.timeline': 'Formación Académica',
    'nav.cv': 'Descargar CV',

    'hero.subtitle': 'Desarrolladora Full-stack orientada a backend .NET',
    'hero.location': '📍Córdoba, Argentina',

    'projects.title': 'Proyectos Destacados',
    'projects.demo': 'Demo',
    'projects.repo': 'Repositorio',
    'projects.seeMore': 'Ver más',

    'projects.status.finished': 'Finalizado',
    'projects.status.dev': 'En desarrollo',

    'stack.tools': 'Herramientas',

    'projects.logra.desc':
      'Daily planner digital orientado a la organización personal y el seguimiento de <strong>hábitos</strong>. Permite planificar tareas diarias, registrar comidas, estados de ánimo y notas tipo post-it categorizadas, ofreciendo una <strong>visión clara</strong> del día a día para mejorar la <strong>productividad y bienestar</strong> personal de forma simple e intuitiva.',

    'projects.arcadia.desc':
      'E-commerce completo para la venta de libros, desarrollado con un <strong>enfoque integral</strong>. Incluye un panel administrador que permite gestionar catálogo, pedidos y clientes, además de visualizar estadísticas de ventas, facilitando la <strong>toma de decisiones</strong> y la administración del negocio.',

    'projects.tucredito.desc':
      'Aplicación <strong>orientada a prestamistas</strong> para la gestión y seguimiento de préstamos personales. Permite administrar clientes, cuotas, pagos y estados de deuda, con control de morosidad y una <strong>visión clara del estado financiero</strong> general, facilitando una <strong>gestión ordenada y confiable</strong> de los créditos.',

    'modal.statusLabel': 'Estado',
    'modal.problemTitle': 'Problema que resuelve',
    'modal.featuresTitle': 'Funcionalidades principales',
    'modal.techTitle': 'Tecnologías',
    'modal.moreTitle': 'Información adicional',
    'modal.close': 'Cerrar',
    'modal.carousel.prev': 'Anterior',
    'modal.carousel.next': 'Siguiente',
    'modal.carousel.imageAlt': 'Captura {index} de {project}',
    'modal.carousel.dotAlt': 'Ir a la captura {index}',

    'modal.logra.problem':
      'Centraliza la <strong>planificación diaria</strong> en una única aplicación, facilitando la <strong>organización personal</strong>, la gestión del tiempo y el seguimiento de <strong>hábitos</strong> cotidianos. El objetivo es brindar una <strong>visión clara</strong> del día a día y ayudar a detectar patrones que impactan en la <strong>productividad y el bienestar</strong>.',
    'modal.logra.features.1': '<strong>Planificación y gestión de tareas</strong> diarias, con seguimiento por fecha, estado y categorías personalizables.',
    'modal.logra.features.2': 'Gestión de <strong>notas estilo post-it</strong>, organizables por categorías, permitiendo agrupar ideas, recordatorios y apuntes rápidos de forma visual e intuitiva.',
    'modal.logra.features.3': '<strong>Registro de comidas</strong>, orientado al control y la organización alimentaria diaria.',
    'modal.logra.features.4': '<strong>Seguimiento del estado de ánimo</strong>, permitiendo identificar tendencias y patrones a lo largo del tiempo.',
    'modal.logra.features.5': '<strong>Persistencia de datos</strong> mediante backend y base de datos, garantizando almacenamiento seguro y consistente de la información.',
    'modal.logra.extra': 'Estado: finalizado. Alcance: aplicación web con backend y base de datos.',

    'modal.arcadia.problem':
      'Brinda una <strong>solución integral</strong> para la <strong>venta online</strong> de libros, centralizando la gestión del catálogo y el control de pedidos en una <strong>plataforma administrable</strong>. Facilita la <strong>administración del negocio</strong> y el seguimiento de las ventas de forma clara y ordenada.',
    'modal.arcadia.features.1': '<strong>Catálogo de libros</strong> con navegación intuitiva y vista de detalle del producto.',
    'modal.arcadia.features.2': '<strong>Carrito de compras</strong>, que permite seleccionar y gestionar los productos antes de confirmar la compra.',
    'modal.arcadia.features.3': '<strong>Panel administrador</strong> para la gestión completa del catálogo de libros.',
    'modal.arcadia.features.4': '<strong>Gestión de pedidos</strong>, orientada al seguimiento del estado de compra y procesamiento de órdenes.',
    'modal.arcadia.features.5': '<strong>Estadísticas de ventas</strong>, para el análisis y monitoreo del rendimiento del negocio.',
    'modal.arcadia.extra': 'Estado: finalizado. Incluye panel administrador y métricas.',

    'modal.tucredito.problem':
      'Aplicación en desarrollo <strong>orientada a prestamistas</strong> para organizar y gestionar préstamos personales, permitiendo visualizar de forma clara el <strong>estado de las deudas</strong>, los pagos realizados y los saldos pendientes, reduciendo errores y facilitando el <strong>control financiero</strong>.',
    'modal.tucredito.features.1': '<strong>Alta y gestión de clientes</strong>, con información centralizada.',
    'modal.tucredito.features.2': '<strong>Registro de préstamos y cuotas</strong>, con detalle de montos y vencimientos.',
    'modal.tucredito.features.3': '<strong>Registro de pagos</strong>, con actualización automática de saldos.',
    'modal.tucredito.features.4': '<strong>Seguimiento de morosidad</strong> y vencimientos, para un mejor control del cobro.',
    'modal.tucredito.features.5': '<strong>Vista general del estado de la deuda</strong>, que brinda una visión rápida y ordenada de la situación financiera.',
    'modal.tucredito.extra': 'Estado: en desarrollo. El alcance y las funcionalidades pueden cambiar.',

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
    'nav.stack': 'Stack',
    'nav.timeline': 'Academic Background',
    'nav.cv': 'Download CV',

    'hero.subtitle': 'Full-stack Developer focused on .NET backend',
    'hero.location': '📍Córdoba, Argentina',

    'projects.title': 'Featured Projects',
    'projects.demo': 'Demo',
    'projects.repo': 'Repository',
    'projects.seeMore': 'See more',

    'projects.status.finished': 'Completed',
    'projects.status.dev': 'In development',

    'stack.tools': 'Tools',

    'projects.logra.desc':
      'Digital daily planner oriented towards personal organization and <strong>habit</strong> tracking. It allows planning daily tasks, logging meals, moods, and categorized post-it notes, offering a <strong>clear view</strong> of the day-to-day to improve personal <strong>productivity and well-being</strong> in a simple and intuitive way.',

    'projects.arcadia.desc':
      'Complete e-commerce for book sales, developed with a <strong>comprehensive approach</strong>. It includes an admin panel to manage the catalog, orders, and clients, as well as visualize sales statistics, facilitating <strong>decision-making</strong> and business administration.',

    'projects.tucredito.desc':
      'Application <strong>oriented to lenders</strong> for the management and tracking of personal loans. It allows managing clients, installments, payments, and debt status, with delinquency control and a <strong>clear view of the overall financial status</strong>, facilitating <strong>organized and reliable management</strong> of credits.',

    'modal.statusLabel': 'Status',
    'modal.problemTitle': 'Problem it solves',
    'modal.featuresTitle': 'Key features',
    'modal.techTitle': 'Technologies',
    'modal.moreTitle': 'Additional info',
    'modal.close': 'Close',
    'modal.carousel.prev': 'Previous',
    'modal.carousel.next': 'Next',
    'modal.carousel.imageAlt': 'Screenshot {index} of {project}',
    'modal.carousel.dotAlt': 'Go to screenshot {index}',

    'modal.logra.problem':
      'Centralizes <strong>daily planning</strong> in a single application, facilitating <strong>personal organization</strong>, time management, and <strong>daily habit</strong> tracking. The goal is to provide a <strong>clear view</strong> of the day-to-day and help detect patterns that impact <strong>productivity and well-being</strong>.',
    'modal.logra.features.1': '<strong>Planning and management of daily tasks</strong>, with tracking by date, status, and customizable categories.',
    'modal.logra.features.2': 'Management of <strong>post-it style notes</strong>, organizable by categories, allowing ideas, reminders, and quick notes to be grouped in a visual and intuitive way.',
    'modal.logra.features.3': '<strong>Meal logging</strong>, oriented towards daily dietary control and organization.',
    'modal.logra.features.4': '<strong>Mood tracking</strong>, allowing identification of trends and patterns over time.',
    'modal.logra.features.5': '<strong>Data persistence</strong> via backend and database, ensuring secure and consistent information storage.',
    'modal.logra.extra': 'Status: completed. Scope: web app with backend and database.',

    'modal.arcadia.problem':
      'Provides a <strong>comprehensive solution</strong> for <strong>online book sales</strong>, centralizing catalog management and order control in a <strong>manageable platform</strong>. Facilitates <strong>business administration</strong> and sales tracking in a clear and organized way.',
    'modal.arcadia.features.1': '<strong>Book catalog</strong> with intuitive navigation and product detail view.',
    'modal.arcadia.features.2': '<strong>Shopping cart</strong>, allowing product selection and management before purchase confirmation.',
    'modal.arcadia.features.3': '<strong>Admin panel</strong> for complete book catalog management.',
    'modal.arcadia.features.4': '<strong>Order management</strong>, oriented towards purchase status tracking and order processing.',
    'modal.arcadia.features.5': '<strong>Sales statistics</strong>, for business performance analysis and monitoring.',
    'modal.arcadia.extra': 'Status: completed. Includes admin panel and metrics.',

    'modal.tucredito.problem':
      'Application in development <strong>oriented to lenders</strong> for organizing and managing personal loans, allowing clear visualization of <strong>debt status</strong>, payments made, and outstanding balances, reducing errors and facilitating <strong>financial control</strong>.',
    'modal.tucredito.features.1': '<strong>Client registration and management</strong>, with centralized information.',
    'modal.tucredito.features.2': '<strong>Registration of loans and installments</strong>, with details on amounts and due dates.',
    'modal.tucredito.features.3': '<strong>Payment registration</strong>, with automatic balance updates.',
    'modal.tucredito.features.4': '<strong>Delinquency and due date tracking</strong>, for better collection control.',
    'modal.tucredito.features.5': '<strong>Overview of debt status</strong>, providing a quick and organized view of the financial situation.',
    'modal.tucredito.extra': 'Status: in development. Scope and features may change.',

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
}

document.addEventListener('DOMContentLoaded', init)

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
      tech: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'SQL Server'],
      extraKey: 'modal.logra.extra',
      images: ['images/L1.png', 'images/L2.png', 'images/L3.png', 'images/L4.png'],
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
      tech: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'SQL Server'],
      extraKey: 'modal.arcadia.extra',
      images: ['images/A1.png', 'images/A (1).png', 'images/A (2).png', 'images/A (3).png', 'images/A (4).png', 'images/A (5).png'],
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
      tech: ['HTML', 'CSS', 'JavaScript', 'C#', 'ASP.NET', 'SQL Server'],
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

    // Actions (Demo/Repo)
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


