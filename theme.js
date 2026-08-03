const themeStorageKey = "sewieland-theme"
const root = document.documentElement
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const forcedColors = window.matchMedia("(forced-colors: active)")

function readStoredTheme() {
  try {
    const theme = window.localStorage.getItem(themeStorageKey)
    return theme === "light" || theme === "dark" ? theme : null
  } catch {
    return null
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(themeStorageKey, theme)
  } catch {
    // The selection still applies for this page when storage is unavailable.
  }
}

function activeTheme() {
  return root.dataset.theme || (systemTheme.matches ? "dark" : "light")
}

function applyTheme(theme) {
  root.dataset.theme = theme
  saveTheme(theme)
  updateToggle()
}

function setTheme(theme) {
  if (reducedMotion.matches || forcedColors.matches || typeof document.startViewTransition !== "function") {
    applyTheme(theme)
    return
  }

  try {
    document.startViewTransition(() => applyTheme(theme))
  } catch {
    applyTheme(theme)
  }
}

function updateToggle() {
  const darkMode = activeTheme() === "dark"

  for (const button of document.querySelectorAll(".theme-toggle")) {
    button.hidden = false
    button.setAttribute("aria-pressed", String(darkMode))
    button.title = `Use ${darkMode ? "light" : "dark"} mode`
  }
}

const storedTheme = readStoredTheme()
if (storedTheme) {
  root.dataset.theme = storedTheme
}

document.addEventListener("DOMContentLoaded", () => {
  updateToggle()

  for (const button of document.querySelectorAll(".theme-toggle")) {
    button.addEventListener("click", () => {
      const nextTheme = activeTheme() === "dark" ? "light" : "dark"
      setTheme(nextTheme)
    })
  }
})

systemTheme.addEventListener("change", () => {
  if (!root.dataset.theme) {
    updateToggle()
  }
})
