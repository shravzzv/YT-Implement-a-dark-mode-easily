const themeSelect = document.querySelector('select')
const rootElement = document.documentElement
const defaultTheme = localStorage.getItem('theme')

if (defaultTheme) {
  rootElement.dataset.theme = defaultTheme
  themeSelect.value = defaultTheme
} else {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    rootElement.dataset.theme = 'dark'
    localStorage.setItem('theme', 'dark')
    themeSelect.value = 'dark'
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    rootElement.dataset.theme = 'light'
    localStorage.setItem('theme', 'light')
    themeSelect.value = 'light'
  } else {
    rootElement.dataset.theme = 'system'
    localStorage.setItem('theme', 'system')
    themeSelect.value = 'system'
  }
}

themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value
  rootElement.dataset.theme = selectedTheme
  localStorage.setItem('theme', selectedTheme)
})
