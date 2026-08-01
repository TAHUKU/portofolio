/* ================================================================
   Hakkull Qoull Portfolio — Main JavaScript
   ================================================================ */

'use strict';

// ================================================================
// 1. LOADING SCREEN — safe version
// ================================================================
const loadingScreen = document.getElementById('loadingScreen');

function hideLoadingScreen() {
  if (!loadingScreen) return;
  loadingScreen.classList.add('loaded');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 500);
}

// Force hide loading screen after 3 seconds max (safety net)
const loadingTimer = setTimeout(hideLoadingScreen, 3000);

window.addEventListener('load', () => {
  clearTimeout(loadingTimer);
  setTimeout(hideLoadingScreen, 400);
});

// ================================================================
// 2. DASHBOARD HTML (pre-rendered fallback)
// ================================================================
// We keep a copy so we can restore dashboard without re-fetching
const DASHBOARD_HTML = document.getElementById('pageContainer').innerHTML;

// ================================================================
// 3. PAGE LOADER (SPA)
// ================================================================
const pageContainer = document.getElementById('pageContainer');

const pageCache = {
  dashboard: DASHBOARD_HTML // Pre-cached
};

let isTransitioning = false;

async function switchPage(pageName) {
  if (isTransitioning) return;
  isTransitioning = true;

  // Update active nav
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === pageName) {
      link.classList.add('active');
    }
  });

  // Close mobile menu
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) mobileMenu.classList.add('hidden');

  // Fade out
  pageContainer.style.opacity = '0';
  pageContainer.style.transform = 'translateY(10px)';
  pageContainer.style.transition = 'all 0.2s ease';

  setTimeout(async () => {
    try {
      let html;
      if (pageCache[pageName]) {
        html = pageCache[pageName];
      } else {
        const response = await fetch(`assets/pages/${pageName}.html`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        html = await response.text();
        pageCache[pageName] = html;
      }

      // Only replace content if it's different from what's already there
      // (prevents unnecessary DOM churn for dashboard which is pre-rendered)
      pageContainer.innerHTML = html;

      // Update URL hash
      history.pushState(null, '', `#${pageName}`);

      // Re-trigger animations
      requestAnimationFrame(() => {
        pageContainer.style.opacity = '1';
        pageContainer.style.transform = 'translateY(0)';
        pageContainer.style.transition = 'all 0.4s ease';

        // Run page-specific init
        initCurrentPage(pageName);
      });
    } catch (err) {
      // If fetch fails, show error in the container
      // But if we already have cached content, restore it instead
      if (pageCache[pageName]) {
        pageContainer.innerHTML = pageCache[pageName];
      } else {
        pageContainer.innerHTML = `
          <div class="flex flex-col items-center justify-center py-20 text-center">
            <div class="w-16 h-16 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 text-2xl mb-4">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
            <h2 class="text-xl font-bold mb-2">Gagal Memuat Halaman</h2>
            <p class="text-slate-400 text-sm mb-4">${err.message}</p>
            <button onclick="switchPage('dashboard')" class="px-5 py-2.5 rounded-xl bg-blue-500 text-white font-bold text-sm hover:bg-blue-600 transition-all">
              <i class="fas fa-home mr-1.5"></i>Kembali ke Dashboard
            </button>
          </div>
        `;
      }
      pageContainer.style.opacity = '1';
      pageContainer.style.transform = 'translateY(0)';
    }
    isTransitioning = false;
  }, 200);
}

// ================================================================
// 4. PAGE-SPECIFIC INITIALIZERS
// ================================================================
function initCurrentPage(pageName) {
  if (pageName === 'dashboard') {
    initTypingEffect();
  }
  if (pageName === 'profile' || pageName === 'resume') {
    initSkillBars();
  }
  if (pageName === 'projects') {
    // Future: init project filters if needed
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================================================================
// 5. TYPING EFFECT (Dashboard)
// ================================================================
let typingInterval = null;

function initTypingEffect() {
  const textEl = document.getElementById('typing-text');
  const cursor = document.getElementById('typing-cursor');
  if (!textEl || !cursor) return;

  // Clear any existing interval
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }

  const words = [
    'Python.',
    'Computer Vision.',
    'Desktop Application.',
    'Open Source.',
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  // Ensure cursor is visible
  cursor.style.visibility = 'visible';

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing forward
      textEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        // Pause at the end
        isDeleting = true;
        clearInterval(typingInterval);
        typingInterval = setInterval(typeEffect, 2000);
        return;
      }
    } else {
      // Deleting backward
      textEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        clearInterval(typingInterval);
        typingInterval = setInterval(typeEffect, 500);
        return;
      }
    }

    // Speed: typing faster (50ms), deleting slightly faster (30ms)
    clearInterval(typingInterval);
    const speed = isDeleting ? 30 : 50;
    typingInterval = setInterval(typeEffect, speed);
  }

  // Start typing after a short delay
  setTimeout(() => {
    typingInterval = setInterval(typeEffect, 100);
  }, 300);
}

// ================================================================
// 6. SKILL BAR ANIMATION
// ================================================================
function initSkillBars() {
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  skillBars.forEach(bar => {
    const width = bar.dataset.width || 0;
    // Reset first then animate
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width + '%';
    }, 200);
  });
}

// ================================================================
// 7. THEME TOGGLE
// ================================================================
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlEl = document.documentElement;

function getPreferredTheme() {
  const stored = localStorage.getItem('theme');
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
  if (theme === 'dark') {
    htmlEl.classList.add('dark');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    htmlEl.classList.remove('dark');
    if (themeIcon) themeIcon.textContent = '🌙';
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const isDark = htmlEl.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
}

// Init theme
setTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', toggleTheme);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

// ================================================================
// 8. MOBILE MENU TOGGLE
// ================================================================
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add('hidden');
    }
  });
}

// ================================================================
// 9. BACK TO TOP BUTTON
// ================================================================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove('opacity-0', 'invisible', 'translate-y-4');
    } else {
      backToTop.classList.add('opacity-0', 'invisible', 'translate-y-4');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================================================================
// 10. LOAD INITIAL PAGE
// ================================================================
function getInitialPage() {
  const hash = window.location.hash.replace('#', '');
  const validPages = ['dashboard', 'projects', 'profile', 'resume', 'cv'];
  if (hash && validPages.includes(hash)) return hash;
  return 'dashboard';
}

// Initialize: set active nav and start effects for initial page
function initialize() {
  const page = getInitialPage();
  
  // Set active nav
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });

  // Run initializers for the current page
  initCurrentPage(page);
}

// Load the initial page (content is already pre-rendered)
initialize();

// Handle browser back/forward navigation
window.addEventListener('popstate', () => {
  const page = getInitialPage();
  switchPage(page);
});

// ================================================================
// 11. NAVBAR SCROLL EFFECT
// ================================================================
const navbar = document.getElementById('navbar');
if (navbar) {
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      navbar.classList.add('shadow-sm');
      if (currentScroll > lastScroll && currentScroll > 150) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
    } else {
      navbar.classList.remove('shadow-sm');
      navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
  });
}