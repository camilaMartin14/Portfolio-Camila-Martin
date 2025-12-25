const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.stack': 'Stack',
    'nav.timeline': 'Formación Académica',
    'nav.contact': 'Contacto',
    'nav.cv': 'Descargar CV',
    'hero.subtitle': 'Desarrolladora Full-stack',
    'hero.location': '📍Córdoba, Argentina',
    'hero.cta': 'Ver proyectos',
    'stack.title': 'Stack',
    'stack.languages': 'Lenguajes',
    'stack.frameworks': 'Frameworks',
    'stack.databases': 'Bases de datos',
    'stack.vcs': 'Control de versiones',
    'stack.other': 'Otros',
    'about.title': 'Sobre mí',
    'about.lead': 'Me apasiona crear experiencias web útiles y accesibles.',
    'timeline.title': 'Línea de tiempo',
    'timeline.item1': 'Inicio en desarrollo web',
    'timeline.item2': 'Proyectos freelance y aprendizaje continuo',
    'timeline.item3': 'Enfoque en accesibilidad y performance',
    'projects.title': 'Proyectos',
    'projects.desc1': 'Landing page responsiva con animaciones sutiles.',
    'projects.desc2': 'SPA ligera con JS y componentes reutilizables.',
    'projects.desc3': 'Sistema de portfolio con modo oscuro y i18n.',
    'projects.cta': 'Ver proyecto',
    'projects.demo': 'Demo',
    'contact.title': 'Contactame',
    'footer.text': 'Hecho por Camila Martín'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.timeline': 'Timeline',
    'nav.contact': 'Contact',
    'nav.cv': 'Download CV',
    'hero.subtitle': 'Full-stack Developer',
    'hero.location': '📍Córdoba, Argentina',
    'hero.cta': 'View projects',
    'stack.title': 'Stack',
    'stack.languages': 'Languages',
    'stack.frameworks': 'Frameworks',
    'stack.databases': 'Databases',
    'stack.vcs': 'Version Control',
    'stack.other': 'Other',
    'about.title': 'About',
    'about.lead': 'I enjoy building useful and accessible web experiences.',
    'timeline.title': 'Timeline',
    'timeline.item1': 'Start in web development',
    'timeline.item2': 'Freelance projects and continuous learning',
    'timeline.item3': 'Focus on accessibility and performance',
    'projects.title': 'Projects',
    'projects.desc1': 'Responsive landing page with subtle animations.',
    'projects.desc2': 'Lightweight JS SPA with reusable components.',
    'projects.desc3': 'Portfolio system with dark mode and i18n.',
    'projects.cta': 'View project',
    'projects.demo': 'Demo',
    'projects.status.finished': 'Finished',
    'projects.status.dev': 'In development',
    'contact.title': 'Contact me',
    'footer.text': 'Built by Camila Martín'
  }
}

const themeToggle = document.getElementById('theme-toggle')
const langToggle = document.getElementById('lang-toggle')
const html = document.documentElement

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
    if (text) el.textContent = text
  })
  document.documentElement.lang = lang
  langToggle.textContent = lang === 'es' ? '🇦🇷' : '🇺🇸'
  localStorage.setItem('lang', lang)
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

const cvBtn = document.getElementById('cv-download')
if (cvBtn) {
  cvBtn.addEventListener('click', async (e) => {
    const proto = location.protocol
    if (proto === 'http:' || proto === 'https:') {
      try {
        const res = await fetch('cv.pdf', { method: 'HEAD' })
        if (!res.ok) {
          e.preventDefault()
          alert(document.documentElement.lang === 'es'
            ? 'No se encontró cv.pdf. Colócalo en la carpeta del proyecto.'
            : 'cv.pdf not found. Place it in the project folder.')
        }
      } catch (_) { /* ignore and let default download happen */ }
    }
  })
}
