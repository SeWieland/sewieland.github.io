const copyStatus = document.createElement("p")
copyStatus.className = "copy-status"
copyStatus.setAttribute("aria-live", "polite")
copyStatus.setAttribute("aria-atomic", "true")
document.body.append(copyStatus)

for (const code of document.querySelectorAll("pre > code")) {
  const panel = code.parentElement
  const block = document.createElement("div")
  const button = document.createElement("button")
  let resetTimer

  block.className = "code-block"
  button.type = "button"
  button.className = "copy-button"
  button.setAttribute("aria-label", "Copy code")
  button.title = "Copy code"
  panel.replaceWith(block)
  panel.classList.add("copy-enabled")
  block.append(panel, button)

  button.addEventListener("click", async () => {
    let state = "copied"
    let label = "Code copied"
    let message = "Code copied to clipboard."

    try {
      await navigator.clipboard.writeText(code.textContent)
    } catch {
      state = "failed"
      label = "Copy failed"
      message = "Could not copy code. Select it and copy manually."
    }

    button.dataset.copyState = state
    button.setAttribute("aria-label", label)
    button.title = label
    copyStatus.textContent = ""
    window.setTimeout(() => {
      copyStatus.textContent = message
    })
    window.clearTimeout(resetTimer)
    resetTimer = window.setTimeout(() => {
      delete button.dataset.copyState
      button.setAttribute("aria-label", "Copy code")
      button.title = "Copy code"
    }, 2000)
  })
}
