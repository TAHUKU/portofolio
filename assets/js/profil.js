/* ===== Dark Mode Toggle ===== */
function toggleDark() {
  const html = document.documentElement;
  html.classList.toggle("dark");

  // if (html.classList.contains("dark")) {
  //   localStorage.setItem("theme", "dark");
  // } else {
  //   localStorage.setItem("theme", "light");
  // }
}

/* ===== Load Theme Preference ===== */
(function loadTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  }
})();

/* ===== Scroll Animation ===== */
const sections = document.querySelectorAll(".section-fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

// sections.forEach((section) => observer.observe(section));

// function toggleDark() {
//   const html = document.documentElement;
//   html.classList.toggle("dark");

//   if (html.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// }

// (function () {
//   const theme = localStorage.getItem("theme");
//   if (theme === "dark") {
//     document.documentElement.classList.add("dark");
//   }
// })();