(function() {
  'use strict';

  // ==============================================================
  // PAGE CONTENT - Loaded from separate HTML files
  // ==============================================================
  // Cache for loaded content
  const pageContentCache = {};

  async function loadPageContent(pageId) {
    if (pageContentCache[pageId]) {
      return pageContentCache[pageId];
    }
    const response = await fetch(`assets/pages/${pageId}.html`);
    if (!response.ok) {
      throw new Error(`Halaman tidak ditemukan: ${pageId}`);
    }
    const content = await response.text();
    pageContentCache[pageId] = content;
    return content;
  }

  // ==============================================================
  // LOADING SCREEN
  // ==============================================================
  const loadingScreen = document.getElementById('loadingScreen');

  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingScreen.classList.add('loaded');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 800);
  });

  // ==============================================================
  // PAGE SWITCHING (SPA with modular content)
  // ==============================================================
  const pageContainer = document.getElementById('pageContainer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  let currentPage = 'dashboard';
  let isTransitioning = false;

  window.switchPage = async function(pageId) {
    if (pageId === currentPage || isTransitioning) return;

    isTransitioning = true;

    try {
      const content = await loadPageContent(pageId);

      if (pageContainer) {
        pageContainer.style.opacity = '0';
        pageContainer.style.transform = 'translateY(10px)';
        pageContainer.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';

        await new Promise(resolve => setTimeout(resolve, 200));

        pageContainer.innerHTML = content;

        pageContainer.style.opacity = '1';
        pageContainer.style.transform = 'translateY(0)';
        pageContainer.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      }

      // Update active nav links
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
      });
      mobileNavLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
      });

      // Close mobile menu
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });

      currentPage = pageId;

      // Animate skill bars if switching to profile page
      if (pageId === 'profile') {
        setTimeout(animateSkillBars, 300);
      }

      // Re-observe scroll elements
      setTimeout(observeElements, 200);

    } catch (error) {
      console.error('Error memuat halaman:', error);
      if (pageContainer) {
        pageContainer.innerHTML = `
          <div class="py-20 text-center">
            <div class="text-6xl mb-4">⚠️</div>
            <h2 class="text-2xl font-bold mb-2">Gagal Memuat Halaman</h2>
            <p class="text-slate-500">Silakan refresh halaman.</p>
          </div>
        `;
      }
    } finally {
      setTimeout(() => {
        isTransitioning = false;
      }, 500);
    }
  };

  // Initialize: load dashboard by default
  (async function init() {
    try {
      const content = await loadPageContent('dashboard');
      if (pageContainer) {
        pageContainer.innerHTML = content;
      }
      navLinks.forEach(link => {
        if (link.dataset.page === 'dashboard') link.classList.add('active');
      });
      mobileNavLinks.forEach(link => {
        if (link.dataset.page === 'dashboard') link.classList.add('active');
      });
    } catch (error) {
      console.error('Error inisialisasi:', error);
    }

    const hash = window.location.hash.replace('#', '');
    if (hash && ['dashboard', 'projects', 'profile', 'resume'].includes(hash)) {
      switchPage(hash);
    }

    setTimeout(observeElements, 100);
  })();

  // ==============================================================
  // TYPING EFFECT
  // ==============================================================
  let typingInterval = null;

  function startTypingEffect() {
    const typingText = document.getElementById('typing-text');
    const typingCursor = document.getElementById('typing-cursor');

    if (!typingText) return;

    const words = [
      'scalable APIs.',
      'clean MVC backends.',
      'efisien databases.',
      'aplikasi desktop.',
      'computer vision.'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeEffect() {
      if (!typingText) return;

      const currentWord = words[wordIndex];

      if (isPaused) {
        typingInterval = setTimeout(typeEffect, 1500);
        isPaused = false;
        return;
      }

      if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
          isPaused = true;
          isDeleting = true;
          typingInterval = setTimeout(typeEffect, 2000);
          return;
        }
        typingInterval = setTimeout(typeEffect, 60 + Math.random() * 40);
      } else {
        typingText.textContent = currentWord.substring(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
          isDeleting = false;
          charIndex = 0;
          wordIndex = (wordIndex + 1) % words.length;
          typingInterval = setTimeout(typeEffect, 500);
          return;
        }
        typingInterval = setTimeout(typeEffect, 30 + Math.random() * 20);
      }
    }

    if (typingInterval) clearTimeout(typingInterval);
    setTimeout(typeEffect, 500);
  }

  // ==============================================================
  // THEME TOGGLE (Dark / Light)
  // ==============================================================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  function getPreferredTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    if (themeIcon) {
      themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
  }

  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // ==============================================================
  // MOBILE MENU TOGGLE
  // ==============================================================
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  }

  // ==============================================================
  // BACK TO TOP BUTTON
  // ==============================================================
  const backToTop = document.getElementById('backToTop');

  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.remove('opacity-0', 'invisible', 'translate-y-4');
        backToTop.classList.add('opacity-100', 'visible', 'translate-y-0');
      } else {
        backToTop.classList.add('opacity-0', 'invisible', 'translate-y-4');
        backToTop.classList.remove('opacity-100', 'visible', 'translate-y-0');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==============================================================
  // PROJECT FILTER (retained for future use)
  // ==============================================================
  window.filterProjects = function(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === category;
      btn.classList.toggle('active', isActive);
    });

    projectCards.forEach(card => {
      const cardCategory = card.dataset.category;
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        card.style.animation = 'none';
        void card.offsetWidth;
        card.style.animation = '';
      } else {
        card.style.display = 'none';
      }
    });
  };

  // ==============================================================
  // SKILL BAR ANIMATION
  // ==============================================================
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    skillBars.forEach(bar => {
      const width = bar.dataset.width;
      if (width) {
        bar.style.width = '0%';
        setTimeout(() => {
          bar.style.width = width + '%';
        }, 200);
      }
    });
  }

  // ==============================================================
  // NAVBAR SCROLL EFFECT
  // ==============================================================
  const navbar = document.getElementById('navbar');
  let lastScrollY = 0;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (scrollY > 80) {
        navbar.classList.add('shadow-sm');
      } else {
        navbar.classList.remove('shadow-sm');
      }

      lastScrollY = scrollY;
    });
  }

  // ==============================================================
  // SCROLL REVEAL (IntersectionObserver)
  // ==============================================================
  function observeElements() {
    const elements = document.querySelectorAll(
      '.stat-card, .skill-card, .project-card, .resume-section, .timeline-item, .info-card'
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(el);
    });

    if (document.getElementById('typing-text')) {
      startTypingEffect();
    }
  }

  // ==============================================================
  // KEYBOARD NAVIGATION
  // ==============================================================
  document.addEventListener('keydown', (e) => {
    const pageOrder = ['dashboard', 'projects', 'profile', 'resume'];
    const currentIndex = pageOrder.indexOf(currentPage);

    if (e.altKey && e.key === 'ArrowRight' && currentIndex < pageOrder.length - 1) {
      e.preventDefault();
      switchPage(pageOrder[currentIndex + 1]);
    }
    if (e.altKey && e.key === 'ArrowLeft' && currentIndex > 0) {
      e.preventDefault();
      switchPage(pageOrder[currentIndex - 1]);
    }
  });

  // ==============================================================
  // CONSOLE EASTER EGG
  // ==============================================================
  console.log('%c🚀 Hakkull.dev', 'font-size: 24px; font-weight: bold; color: #2563eb;');
  console.log('%cBackend Developer | Python Enthusiast', 'font-size: 14px; color: #64748b;');
  console.log('%c🔧 Built with vanilla JS, Tailwind CSS & lots of ☕', 'font-size: 12px; color: #94a3b8;');

})();