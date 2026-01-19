function toggleDark() {
  document.documentElement.classList.toggle('dark')
}

// document.addEventListener("DOMContentLoaded", () => {
//   document.body.classList.add("page-enter")
  
//   requestAnimationFrame(() => {
//     document.body.classList.add("page-enter-active")
//   })
// })

document.querySelectorAll("a").forEach(link => {
  if (link.hostname === window.location.hostname) {
    link.addEventListener("click", e => {
      e.preventDefault()
      const href = link.href

      document.body.classList.add("fade-out")

      setTimeout(() => {
        window.location.href = href
      }, 300)
    })
  }
})
