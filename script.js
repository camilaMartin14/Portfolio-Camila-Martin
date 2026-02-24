const translations = {
  es: {
    'nav.projects': 'Proyectos Destacados',
    'nav.about': 'Sobre mí',
    'nav.experience': 'Experiencia Laboral',
    'nav.stack': 'Stack',
    'nav.formation': 'Formación',
    'nav.academic': 'Académica',
    'nav.certificates': 'Certificados',
    'nav.timeline': 'Formación Académica',
    'nav.cv': 'Descargar CV',

    'hero.subtitle': 'Desarrolladora Full-stack orientada a backend .NET',
    'hero.location': '📍Córdoba, Argentina',

    'about.title': 'Sobre mí',
    'about.text1':
      'Estudiante de 2º año de la Tecnicatura Universitaria en Programación (UTN).',
    'about.text2':
      'Actualmente formo parte del equipo de <span class="resaltar">Mercado Libre</span>, donde diseño e implemento soluciones escalables utilizando <span class="resaltar">Go</span>, bajo arquitecturas de <span class="resaltar">microservicios</span> y principios de <span class="resaltar">Domain-Driven Design (DDD)</span>.',
    'about.text3':
      'En paralelo, fortalezco mi perfil técnico mediante proyectos en el ecosistema <span class="resaltar">.NET</span> (<span class="resaltar">C#</span>, <span class="resaltar">ASP.NET Core</span>, <span class="resaltar">Entity Framework</span> y <span class="resaltar">SQL Server</span>).',
    'about.text5':
      'Mi enfoque principal es el desarrollo de software robusto y mantenible, priorizando siempre el <span class="resaltar">código limpio</span> y buenas prácticas de <span class="resaltar">arquitectura</span>.',
    'current.title': 'Experiencia Laboral',
    'current.role': 'Software Backend Developer Jr',
    'current.company': 'Mercado Libre',
    'current.location': 'Híbrido · Córdoba, Argentina · Marzo 2026 – Actualidad',
    'current.bullet1': 'Desarrollo de microservicios en <strong>Go</strong> con Gin framework.',
    'current.bullet2': 'Arquitectura de microservicios bajo principios <strong>DDD</strong>.',
    'projects.title': 'Proyectos Destacados',
    'projects.demo': 'Demo',
    'projects.repo': 'Repositorio',
    'projects.seeMore': 'Ver más',

    'projects.status.finished': 'Finalizado',
    'projects.status.dev': 'En desarrollo',
    'projects.logra.date': 'Dic 2025 - Ene 2026',
    'projects.arcadia.date': 'Sep 2025 - Dic 2025',
    'projects.tucredito.date': 'Ene 2026 - Feb 2026',
    'projects.rssp.date': 'Feb 2026 - Actualidad',

    'stack.tools': 'Herramientas',

    'projects.logra.desc':
      'Plataforma de productividad minimalista diseñada para organizar tu día y gestionar <strong>hábitos</strong>. Construida con <strong>arquitectura limpia en .NET 8</strong> y un frontend ligero en <strong>Vanilla JS (SPA)</strong>, transforma intenciones en acciones.',

    'projects.arcadia.desc':
      'E-commerce integral para el mundo editorial que centraliza la venta de libros. Desarrollado con <strong>.NET y SQL Server</strong>, gestiona desde el <strong>catálogo navegable</strong> hasta el seguimiento de pedidos, aportando visibilidad y control al negocio.',

    'projects.tucredito.desc':
      'Plataforma moderna de <strong>gestión de préstamos</strong> con Dashboard ejecutivo y evaluación crediticia. Construida con <strong>.NET 10</strong> y <strong>React 18</strong>, ofrece simulación de créditos, integración con BCRA y gestión documental segura con <strong>MinIO</strong>.',

    'projects.rssp.desc':
      'Plataforma de <strong>simulación quirúrgica renal</strong> en 3D que ofrece un entorno inmersivo y libre de riesgos donde cirujanos y residentes pueden practicar habilidades psicomotoras con <strong>feedback inmediato</strong> sobre precisión, exactitud y eficiencia antes de llegar al paciente real.',

    'modal.statusLabel': 'Estado',
    'modal.featuresTitle': 'Funcionalidades principales',
    'modal.techTitle': 'Tecnologías',
    'modal.moreTitle': 'Información adicional',
    'modal.close': 'Cerrar',
    'modal.carousel.prev': 'Anterior',
    'modal.carousel.next': 'Siguiente',
    'modal.carousel.imageAlt': 'Captura {index} de {project}',
    'modal.carousel.dotAlt': 'Ir a la captura {index}',

    'modal.logra.features.1': '<strong>Planificación Diaria</strong>: Interfaz intuitiva para organizar tu agenda día a día, con navegación fluida entre fechas y visualización clara del progreso personal.',
    'modal.logra.features.2': '<strong>Gestión de Tareas</strong>: Sistema completo para crear, editar y categorizar tareas, permitiendo filtrar por estado (pendientes/completadas) para una organización eficiente.',
    'modal.logra.features.3': '<strong>Monitor de Bienestar</strong>: Módulos integrados para el seguimiento de hábitos saludables, incluyendo registro de hidratación, horas de sueño, comidas y estado de ánimo diario.',
    'modal.logra.features.4': '<strong>Sistema de Notas</strong>: Espacio dedicado para capturar ideas rápidas, reflexiones del día actual y recordatorios importantes para planificar la jornada siguiente.',
    'modal.logra.features.5': '<strong>Autenticación Segura</strong>: Gestión de usuarios protegida con registro e inicio de sesión mediante tokens JWT, asegurando la privacidad de la información personal.',
    'modal.logra.features.6': '<strong>Vista de Calendario</strong>: Visualización mensual de la actividad y planificación, con capacidad de generar reportes exportables en formato PDF.',
    'modal.logra.features.7': '<strong>Backend Robusto</strong>: Arquitectura basada en una API RESTful con .NET 8 y Entity Framework, garantizando un rendimiento sólido y la integridad de los datos.',
    'modal.logra.extra': 'Estado: finalizado. Full Stack (.NET + Vanilla JS) desplegado y funcional.',

    'modal.arcadia.features.1': '<strong>Catálogo Centralizado</strong>: Exploración de libros con fichas detalladas, filtros y navegación intuitiva para el usuario final.',
    'modal.arcadia.features.2': '<strong>Gestión de Pedidos</strong>: Estandarización del flujo de venta, asegurando consistencia entre el stock real y las transacciones realizadas.',
    'modal.arcadia.features.3': '<strong>Dashboard Analítico</strong>: Métricas en tiempo real sobre autores más vendidos, formas de pago y tipos de envío para la toma de decisiones.',
    'modal.arcadia.features.4': '<strong>Seguridad Robusta</strong>: Autenticación y autorización mediante JWT con validaciones server-side para proteger el acceso y registro de usuarios.',
    'modal.arcadia.features.5': '<strong>Administración Integral</strong>: ABMC completo para la gestión de libros, autores y editoriales, soportado por una arquitectura en capas.',
    'modal.arcadia.features.6': '<strong>Infraestructura Escalable</strong>: Backend desarrollado en .NET Web API y SQL Server, diseñado para alta mantenibilidad y crecimiento futuro.',
    'modal.arcadia.extra': 'Roadmap: Integración con MinIO para portadas, perfiles de usuario y mejoras en transaccionalidad.',

    'modal.tucredito.features.1': '<strong>Dashboard Ejecutivo 360°</strong>: Tablero de control en tiempo real con KPIs financieros críticos (Rentabilidad, Capital Pendiente, Morosidad %), proyecciones de flujo de caja semanal y análisis evolutivo de colocación y cobranzas.',
    'modal.tucredito.features.2': '<strong>Motor de Simulación Multi-Sistema</strong>: Calculadora de préstamos avanzada con soporte para sistemas de amortización Francés, Alemán, Americano y Directo, permitiendo proyecciones exactas de cuotas, intereses y saldos.',
    'modal.tucredito.features.3': '<strong>Evaluación de Riesgo Inteligente</strong>: Algoritmo de decisión automatizado que integra consultas al BCRA para verificar antecedentes, analiza la relación Cuota/Ingreso (regla del 30%) y sugiere montos máximos o rechazos justificados.',
    'modal.tucredito.features.4': '<strong>Gestión Documental</strong>: Bóveda digital integrada (con soporte MinIO/S3) para la carga, validación y almacenamiento seguro de archivos (DNI, Recibos, Garantías) en formatos PDF e imágenes, vinculados directamente al perfil del cliente.',
    'modal.tucredito.features.5': '<strong>Cobranzas Flexibles y Potentes</strong>: Módulo de caja que admite pagos parciales, cancelaciones totales anticipadas, refinanciación y aplicación automática de punitorios o descuentos, actualizando el estado del préstamo en tiempo real.',
    'modal.tucredito.features.6': '<strong>Perfilamiento Completo de Prestatarios</strong>: Gestión integral de clientes y garantes con validaciones de identidad, historial de comportamiento de pago y restricciones de seguridad para preservar datos sensibles.',
    'modal.tucredito.features.7': '<strong>Seguridad Corporativa</strong>: Arquitectura con autenticación vía JWT (JSON Web Tokens), encriptación de credenciales y roles de usuario para garantizar que solo el personal autorizado acceda a información sensible.',
    'modal.tucredito.features.8': '<strong>Infraestructura Escalable</strong>: Backend en .NET 10 diseñado con Clean Architecture y Frontend en React 18 optimizado, asegurando alto rendimiento, mantenibilidad y una experiencia de usuario fluida.',
    'modal.tucredito.extra': 'Demo disponible: Usuario <strong>demo</strong> / Contraseña <strong>demo</strong>. Despliegue en Vercel y Backend en .NET 10.',

    'modal.rssp.features.1': '<strong>Telemetría en Tiempo Real</strong>: Registro continuo de eventos y muestras (posición, estado) durante cada intento, visualizable mediante mapas de calor.',
    'modal.rssp.features.2': '<strong>Métricas de Precisión</strong>: El backend calcula puntajes detallados de Trayectoria, Suavidad y Precisión, además del conteo de errores y duración.',
    'modal.rssp.features.3': '<strong>Panel de Resultados</strong>: Interfaz gráfica con filtros avanzados (por fecha, dificultad, juego) y gráficos de evolución para visualizar el progreso del usuario.',
    'modal.rssp.features.4': '<strong>Reportes Exportables</strong>: Capacidad de generar y descargar informes detallados de las sesiones en formato PDF para revisión externa.',
    'modal.rssp.features.5': '<strong>Sutura de Vena Renal</strong>: Práctica de sutura de alta precisión sobre la vena renal, evaluando la exactitud del trazo en un entorno virtual.',
    'modal.rssp.features.6': '<strong>Control de Hemorragia</strong>: Escenario donde el usuario debe identificar y controlar puntos de sangrado, poniendo a prueba sus reflejos y tiempo de reacción.',
    'modal.rssp.features.7': '<strong>Disección de Arteria</strong>: Desafío de estabilidad manual ("Steady Hand") que requiere diseccionar la arteria renal sin tocar los bordes del tejido circundante.',
    'modal.rssp.features.8': '<strong>Ablación de Tumor</strong>: Procedimiento complejo para Cirujanos Jefes que consiste en eliminar un carcinoma de células renales preservando el máximo tejido sano posible.',
    'modal.rssp.extra': 'Estado: en desarrollo. Demo técnica orientada al entrenamiento y evaluación de competencias quirúrgicas renales.',

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

    'certificates.title': 'Certificados',
    'certificates.c1': 'C1 English EF SET',
    'certificates.csharp': 'C# Basic HackerRank',
    'certificates.dotnet.adv': '.NET Advanced',
    'certificates.dotnet.fund': '.NET Fundamentals',
    'certificates.springboot.ess': 'SpringBoot Essentials',
    'certificates.springboot.api': 'SpringBoot APIs',
    'certificates.github': 'Introducción a GitHub',
    'certificates.sql': 'Bases de Datos Relacionales',

    'contact.title': 'Contactame'
  },

  en: {
    'nav.projects': 'Featured Projects',
    'nav.about': 'About me',
    'nav.experience': 'Work Experience',
    'nav.stack': 'Stack',
    'nav.formation': 'Education',
    'nav.academic': 'Academic',
    'nav.certificates': 'Certificates',
    'nav.timeline': 'Academic Background',
    'nav.cv': 'Download CV',

    'hero.subtitle': 'Full-stack Developer focused on .NET backend',
    'hero.location': '📍Córdoba, Argentina',

    'about.title': 'About me',
    'about.text1':
      'Second-year student of the University Technical Degree in Programming (UTN - Argentina).',
    'about.text2':
      'Currently part of the <span class="resaltar">Mercado Libre</span> team, where I design and implement scalable solutions using <span class="resaltar">Go</span>, under <span class="resaltar">microservices</span> architectures and <span class="resaltar">Domain-Driven Design (DDD)</span> principles.',
    'about.text3':
      'In parallel, I strengthen my technical profile through projects in the <span class="resaltar">.NET</span> ecosystem (<span class="resaltar">C#</span>, <span class="resaltar">ASP.NET Core</span>, <span class="resaltar">Entity Framework</span> and <span class="resaltar">SQL Server</span>).',
    'about.text5':
      'My main focus is building robust and maintainable software, always prioritizing <span class="resaltar">clean code</span> and solid <span class="resaltar">architecture</span> practices.',
    'current.title': 'Work Experience',
    'current.role': 'Software Backend Developer Jr',
    'current.company': 'Mercado Libre',
    'current.location': 'Hybrid · Córdoba, Argentina · March 2026 – Present',
    'current.bullet1': 'Go microservices development with Gin framework',
    'current.bullet2': 'Distributed architecture with DDD principles',
    'current.bullet3': 'Cross-functional collaboration in agile teams',

    'projects.title': 'Featured Projects',
    'projects.demo': 'Demo',
    'projects.repo': 'Repository',
    'projects.seeMore': 'See more',

    'projects.status.finished': 'Completed',
    'projects.status.dev': 'In development',
    'projects.logra.date': 'Dec 2025 - Jan 2026',
    'projects.arcadia.date': 'Sep 2025 - Dec 2025',
    'projects.tucredito.date': 'Jan 2026 - Feb 2026',
    'projects.rssp.date': 'Feb 2026 - Present',

    'stack.tools': 'Tools',

    'projects.logra.desc':
      'Minimalist productivity platform designed to organize your day and manage <strong>habits</strong>. Built with <strong>clean architecture in .NET 8</strong> and a lightweight <strong>Vanilla JS (SPA)</strong> frontend, transforming intentions into actions.',

    'projects.arcadia.desc':
      'Comprehensive e-commerce for the publishing world that centralizes book sales. Developed with <strong>.NET and SQL Server</strong>, it manages everything from the <strong>browsable catalog</strong> to order tracking, providing visibility and control to the business.',

    'projects.tucredito.desc':
      'Modern <strong>loan management platform</strong> with Executive Dashboard and credit evaluation. Built with <strong>.NET 10</strong> and <strong>React 18</strong>, featuring loan simulation, BCRA integration, and secure document management with <strong>MinIO</strong>.',

    'projects.rssp.desc':
      '3D <strong>renal surgical simulation platform</strong> that provides an immersive, risk-free environment where surgeons and residents can practice psychomotor skills with <strong>instant feedback</strong> on precision, accuracy, and efficiency before operating on real patients.',

    'modal.statusLabel': 'Status',
    'modal.featuresTitle': 'Key features',
    'modal.techTitle': 'Technologies',
    'modal.moreTitle': 'Additional info',
    'modal.close': 'Close',
    'modal.carousel.prev': 'Previous',
    'modal.carousel.next': 'Next',
    'modal.carousel.imageAlt': 'Screenshot {index} of {project}',
    'modal.carousel.dotAlt': 'Go to screenshot {index}',
    'modal.logra.features.1': '<strong>Daily Planning</strong>: Intuitive interface to organize your agenda day by day, with fluid navigation between dates and clear visualization of personal progress.',
    'modal.logra.features.2': '<strong>Task Management</strong>: Complete system to create, edit and categorize tasks, allowing filtering by status (pending/completed) for efficient organization.',
    'modal.logra.features.3': '<strong>Wellness Monitor</strong>: Integrated modules for tracking healthy habits, including hydration log, sleep hours, meals and daily mood.',
    'modal.logra.features.4': '<strong>Notes System</strong>: Dedicated space to capture quick ideas, reflections of the current day and important reminders to plan the next day.',
    'modal.logra.features.5': '<strong>Secure Authentication</strong>: Protected user management with registration and login via JWT tokens, ensuring the privacy of personal information.',
    'modal.logra.features.6': '<strong>Calendar View</strong>: Monthly visualization of activity and planning, with the ability to generate exportable reports in PDF format.',
    'modal.logra.features.7': '<strong>Robust Backend</strong>: Architecture based on a RESTful API with .NET 8 and Entity Framework, guaranteeing solid performance and data integrity.',
    'modal.logra.extra': 'Status: completed. Full Stack (.NET + Vanilla JS) deployed and functional.',

    'modal.arcadia.features.1': '<strong>Centralized Catalog</strong>: Book exploration with detailed sheets, filters and intuitive navigation for the end user.',
    'modal.arcadia.features.2': '<strong>Order Management</strong>: Standardization of the sales flow, ensuring consistency between real stock and transactions made.',
    'modal.arcadia.features.3': '<strong>Analytical Dashboard</strong>: Real-time metrics on best-selling authors, payment methods and shipping types for decision making.',
    'modal.arcadia.features.4': '<strong>Robust Security</strong>: Authentication and authorization via JWT with server-side validations to protect user access and registration.',
    'modal.arcadia.features.5': '<strong>Integral Administration</strong>: Complete CRUD for the management of books, authors and publishers, supported by a layered architecture.',
    'modal.arcadia.features.6': '<strong>Scalable Infrastructure</strong>: Backend developed in .NET Web API and SQL Server, designed for high maintainability and future growth.',
    'modal.arcadia.extra': 'Roadmap: Integration with MinIO for covers, user profiles, and transactional improvements.',

    'modal.tucredito.features.1': '<strong>360° Executive Dashboard</strong>: Real-time control board with critical financial KPIs (Profitability, Outstanding Capital, Delinquency %), weekly cash flow projections and evolutionary analysis of placement and collections.',
    'modal.tucredito.features.2': '<strong>Multi-System Simulation Engine</strong>: Advanced loan calculator with support for French, German, American and Direct amortization systems, allowing exact projections of installments, interest and balances.',
    'modal.tucredito.features.3': '<strong>Intelligent Risk Assessment</strong>: Automated decision algorithm that integrates BCRA inquiries to verify background, analyzes the Installment/Income ratio (30% rule) and suggests maximum amounts or justified rejections.',
    'modal.tucredito.features.4': '<strong>Document Management</strong>: Integrated digital vault (with MinIO/S3 support) for secure upload, validation and storage of files (ID, Receipts, Guarantees) in PDF and image formats, linked directly to the client profile.',
    'modal.tucredito.features.5': '<strong>Flexible and Powerful Collections</strong>: Cashier module supporting partial payments, early total cancellations, refinancing and automatic application of penalties or discounts, updating loan status in real-time.',
    'modal.tucredito.features.6': '<strong>Complete Borrower Profiling</strong>: Comprehensive management of clients and guarantors with identity validations, payment behavior history and security restrictions to preserve sensitive data.',
    'modal.tucredito.features.7': '<strong>Corporate Security</strong>: Architecture with authentication via JWT (JSON Web Tokens), credential encryption and user roles to ensure only authorized personnel access sensitive information.',
    'modal.tucredito.features.8': '<strong>Scalable Infrastructure</strong>: Backend in .NET 10 designed with Clean Architecture and Frontend in React 18 optimized, ensuring high performance, maintainability and a fluid user experience.',
    'modal.tucredito.extra': 'Demo available: User <strong>demo</strong> / Password <strong>demo</strong>. Deployed on Vercel with .NET 10 Backend.',

    'modal.rssp.features.1': '<strong>Real-Time Telemetry</strong>: Continuous recording of events and samples (position, status) during each attempt, visualizable via heat maps.',
    'modal.rssp.features.2': '<strong>Precision Metrics</strong>: The backend calculates detailed scores for Trajectory, Smoothness and Precision, in addition to error count and duration.',
    'modal.rssp.features.3': '<strong>Results Panel</strong>: Graphical interface with advanced filters (by date, difficulty, game) and evolution charts to visualize user progress.',
    'modal.rssp.features.4': '<strong>Exportable Reports</strong>: Ability to generate and download detailed session reports in PDF format for external review.',
    'modal.rssp.features.5': '<strong>Renal Vein Suture</strong>: High-precision suture practice on the renal vein, evaluating stroke accuracy in a virtual environment.',
    'modal.rssp.features.6': '<strong>Hemorrhage Control</strong>: Scenario where the user must identify and control bleeding points, testing their reflexes and reaction time.',
    'modal.rssp.features.7': '<strong>Artery Dissection</strong>: Manual stability challenge ("Steady Hand") requiring dissection of the renal artery without touching the surrounding tissue edges.',
    'modal.rssp.features.8': '<strong>Tumor Ablation</strong>: Complex procedure for Chief Surgeons consisting of removing a renal cell carcinoma while preserving as much healthy tissue as possible.',
    'modal.rssp.extra': 'Status: in development. Technical demo focused on training and assessing renal surgical competencies.',

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

    'certificates.title': 'Certificates',
    'certificates.c1': 'C1 English EF SET',
    'certificates.csharp': 'C# Basic HackerRank',
    'certificates.dotnet.adv': '.NET Advanced',
    'certificates.dotnet.fund': '.NET Fundamentals',
    'certificates.springboot.ess': 'SpringBoot Essentials',
    'certificates.springboot.api': 'SpringBoot APIs',
    'certificates.github': 'GitHub Introduction',
    'certificates.sql': 'Relational Databases',

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
  setupCertificatesCarousel()
  setupProjectsCarousel()
  setupImageModal()
  setupCustomCursor()
}

document.addEventListener('DOMContentLoaded', init)

function setupMobileMenu() {
  const menuBtn = document.getElementById('menu-toggle')
  const navMenu = document.getElementById('nav-menu')

  if (!menuBtn || !navMenu) return

  menuBtn.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active')
    document.body.classList.toggle('menu-open', isActive)
    menuBtn.innerHTML = isActive 
      ? '<i class="fa-solid fa-xmark"></i>' 
      : '<i class="fa-solid fa-bars"></i>'
  })

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active')
      document.body.classList.remove('menu-open')
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
  const featuresEl = document.getElementById('project-modal-features')
  const techEl = document.getElementById('project-modal-tech')

  const imageEl = document.getElementById('project-modal-image')
  const dotsEl = document.getElementById('project-modal-dots')
  const prevBtn = modal.querySelector('[data-carousel-prev]')
  const nextBtn = modal.querySelector('[data-carousel-next]')

  const projects = {
    rssp: {
      title: 'Renal Surgical Simulation Platform',
      statusKey: 'projects.status.dev',
      featuresKeys: [
        'modal.rssp.features.1',
        'modal.rssp.features.2',
        'modal.rssp.features.3',
        'modal.rssp.features.4',
        'modal.rssp.features.5',
        'modal.rssp.features.6',
        'modal.rssp.features.7',
        'modal.rssp.features.8'
      ],
      tech: [
        'React 18',
        'Vite',
        'Three.js / R3F',
        'Recharts',
        'TailwindCSS',
        '.NET 10 Web API',
        'Entity Framework Core',
        'SQL Server',
        'Clean Architecture'
      ],
      images: ['images/RS1.jpg', 'images/RS2.jpg', 'images/RS3.jpg', 'images/RS4.jpg', 'images/RS5.jpg', 'images/RS6.jpg'],
      demoUrl: 'https://renal-surgical-simulation-platform.vercel.app/',
      repoUrl: 'https://github.com/camilaMartin14/Renal-Surgical-Simulation-Platform--RSSP'
    },
    logra: {
      title: 'Logra',
      statusKey: 'projects.status.finished',
      featuresKeys: [
        'modal.logra.features.1',
        'modal.logra.features.2',
        'modal.logra.features.3',
        'modal.logra.features.4',
        'modal.logra.features.5',
        'modal.logra.features.6',
        'modal.logra.features.7'
      ],
      tech: ['.NET 8 Web API', 'C#', 'SQL Server', 'Entity Framework Core', 'Vanilla JS (ES6+)', 'CSS3', 'JWT'],
      images: ['images/L1.png', 'images/L2.png', 'images/L3.png', 'images/L4.png', 'images/L5.png'],
      demoUrl: 'https://logra-psi.vercel.app/',
      repoUrl: 'https://github.com/camilaMartin14/Logra--Daily-Planner'
    },
    arcadia: {
      title: 'Arcadia',
      statusKey: 'projects.status.finished',
      featuresKeys: [
        'modal.arcadia.features.1',
        'modal.arcadia.features.2',
        'modal.arcadia.features.3',
        'modal.arcadia.features.4',
        'modal.arcadia.features.5',
        'modal.arcadia.features.6'
      ],
      tech: ['.NET Web API', 'SQL Server', 'JWT', 'HTML', 'CSS', 'JavaScript'],
      images: ['images/A3.png', 'images/A2.png', 'images/A1.png', 'images/A4.png', 'images/A5.png', 'images/A6.png', 'images/A7.png'],
      demoUrl: 'https://arcadia-mu-five.vercel.app/',
      repoUrl: 'https://github.com/camilaMartin14/Arcadia-Web'
    },
    tucredito: {
      title: 'Tu Crédito',
      statusKey: 'projects.status.finished',
      featuresKeys: [
        'modal.tucredito.features.1',
        'modal.tucredito.features.2',
        'modal.tucredito.features.3',
        'modal.tucredito.features.4',
        'modal.tucredito.features.5',
        'modal.tucredito.features.6',
        'modal.tucredito.features.7',
        'modal.tucredito.features.8'
      ],
      tech: ['.NET 10 Web API', 'React 18', 'TypeScript', 'SQL Server', 'Tailwind CSS', 'MinIO', 'JWT'],
      images: ['images/TC1.png', 'images/TC2.png', 'images/TC3.png', 'images/TC4.png', 'images/TC5.png'],
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

function setupCustomCursor() {
  if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return

  const cursor = document.getElementById('custom-cursor')
  if (!cursor) return

  document.body.classList.add('has-custom-cursor')

  const move = (e) => {
    const x = e.clientX
    const y = e.clientY
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
    cursor.style.opacity = '1'

    const el = document.elementFromPoint(x, y)
    let clickable = false
    if (el) {
      const tag = el.tagName
      if (tag === 'A' || tag === 'BUTTON') {
        clickable = true
      } else if (el.closest('a,button,[role="button"]')) {
        clickable = true
      }
    }
    cursor.classList.toggle('is-clickable', clickable)
  }

  const hide = () => {
    cursor.style.opacity = '0'
  }

  document.addEventListener('mousemove', move)
  document.addEventListener('mouseleave', hide)
  document.addEventListener('mousedown', () => {
    cursor.classList.add('is-clicked')
  })
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('is-clicked')
  })
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

function setupCertificatesCarousel() {
  const container = document.querySelector('.cert-carousel-container')
  if (!container) return

  const track = container.querySelector('.cert-carousel-track')
  const prevBtn = container.querySelector('.cert-prev-btn')
  const nextBtn = container.querySelector('.cert-next-btn')
  
  if (!track || !prevBtn || !nextBtn) return

  let currentIndex = 0
  
  function getVisibleItems() {
    if (window.matchMedia('(max-width: 400px)').matches) return 1
    if (window.matchMedia('(max-width: 600px)').matches) return 2
    if (window.matchMedia('(max-width: 900px)').matches) return 3
    return 5
  }

  function updateCarousel() {
    const visibleItems = getVisibleItems()
    const totalItems = track.children.length
    const maxIndex = Math.max(0, totalItems - visibleItems)

    const card = track.querySelector('.cert-card')
    if (!card) return
    
    const cardWidth = card.getBoundingClientRect().width
    const gap = 20 // consistent with CSS
    const moveAmount = cardWidth + gap

    const translateX = -(currentIndex * moveAmount)
    track.style.transform = `translateX(${translateX}px)`
  }

  prevBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems()
    const totalItems = track.children.length
    const maxIndex = Math.max(0, totalItems - visibleItems)

    currentIndex--
    if (currentIndex < 0) {
      currentIndex = maxIndex // Go to end
    }
    updateCarousel()
  })

  nextBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems()
    const totalItems = track.children.length
    const maxIndex = Math.max(0, totalItems - visibleItems)

    currentIndex++
    if (currentIndex > maxIndex) {
      currentIndex = 0 // Go to start
    }
    updateCarousel()
  })

  window.addEventListener('resize', () => {
    // Reset index on resize to avoid weird offsets if needed, or just update
    updateCarousel()
  })
  
  // Initial update
  setTimeout(updateCarousel, 100)
}

function setupProjectsCarousel() {
  const container = document.querySelector('.project-carousel-container')
  if (!container) return

  const track = container.querySelector('.project-carousel-track')
  const prevBtn = container.querySelector('.project-prev-btn')
  const nextBtn = container.querySelector('.project-next-btn')
  
  if (!track || !prevBtn || !nextBtn) return

  let currentIndex = 0
  
  function getVisibleItems() {
    if (window.matchMedia('(max-width: 600px)').matches) return 1
    if (window.matchMedia('(max-width: 900px)').matches) return 2
    return 3
  }

  function updateCarousel() {
    const visibleItems = getVisibleItems()
    const totalItems = track.children.length
    const maxIndex = Math.max(0, totalItems - visibleItems)

    const card = track.querySelector('.project-card')
    if (!card) return
    
    const cardWidth = card.getBoundingClientRect().width
    const gap = 20 // consistent with CSS
    const moveAmount = cardWidth + gap

    // Clamp index
    if (currentIndex > maxIndex) currentIndex = maxIndex
    if (currentIndex < 0) currentIndex = 0

    const translateX = -(currentIndex * moveAmount)
    track.style.transform = `translateX(${translateX}px)`
  }

  prevBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems()
    const totalItems = track.children.length
    const maxIndex = Math.max(0, totalItems - visibleItems)

    currentIndex--
    if (currentIndex < 0) {
      currentIndex = maxIndex // Go to end
    }
    updateCarousel()
  })

  nextBtn.addEventListener('click', () => {
    const visibleItems = getVisibleItems()
    const totalItems = track.children.length
    const maxIndex = Math.max(0, totalItems - visibleItems)

    currentIndex++
    if (currentIndex > maxIndex) {
      currentIndex = 0 // Go to start
    }
    updateCarousel()
  })

  window.addEventListener('resize', () => {
    updateCarousel()
  })
  
  // Initial update
  setTimeout(updateCarousel, 100)
}



function setupImageModal() {
  const modal = document.getElementById('image-modal')
  const fullImage = document.getElementById('modal-full-image')
  const closeBtn = document.querySelector('.modal-close-image')
  const backdrop = document.querySelector('.modal-backdrop[data-image-modal-close]')
  
  if (!modal || !fullImage) return

  const openModal = (src) => {
    fullImage.src = src
    modal.classList.add('is-open')
    modal.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    modal.classList.remove('is-open')
    modal.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
    setTimeout(() => {
      fullImage.src = ''
    }, 300)
  }

  // Add click event to all certificate images (excluding PDFs)
  const certImages = document.querySelectorAll('.cert-card .cert-img-wrapper img')
  certImages.forEach(img => {
    
    const wrapper = img.closest('.cert-img-wrapper')
    if (wrapper) {
      wrapper.style.cursor = 'zoom-in'
      wrapper.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        openModal(img.src)
      })
    }
    
    // Also add to image itself just in case
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', (e) => {
      e.preventDefault() 
      e.stopPropagation()
      openModal(img.src)
    })
  })

  // Close events
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault()
      closeModal()
    })
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal()
    })
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal()
    }
  })
}
