// ===== Dark Mode Toggle =====
function toggleDark() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// ===== Load Theme Preference =====
(function () {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
})();

// ===== Fade In Sections =====
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section, index) => {
    section.classList.add("fade-in");
    section.style.animationDelay = `${index * 0.1}s`;
  });
});
// Fade in saat halaman load
window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

// Fade out saat pindah halaman
document.querySelectorAll("a").forEach(link => {
  const url = link.getAttribute("href");

  if (url && !url.startsWith("#") && !url.startsWith("http")) {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.remove("page-loaded");

      setTimeout(() => {
        window.location.href = url;
      }, 300);
    });
  }
});

  function toggleSidebar() {
    document.getElementById('sidebar')
      .classList.toggle('-translate-x-full')
  }