/**
 * Hakkull Qoull Portfolio — Main JavaScript
 * Single Page Application with embedded pages (no fetch needed)
 */

(function() {
  'use strict';

  // ==============================================================
  // EMBEDDED PAGE CONTENT (no fetch requests needed)
  // ==============================================================
  const embeddedPages = {
    dashboard: `<!-- Hero Section -->
          <section class="min-h-[calc(100vh-8rem)] flex flex-col justify-center py-12 md:py-0">
            <div class="max-w-2xl">
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in">
                <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse-slow"></span>
                Available for Collaboration
              </div>
              
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 animate-fade-in">
                Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">Hakkull</span>
                <br />
                <span class="text-slate-700 dark:text-slate-300">Backend Developer</span>
              </h1>

              <div class="h-8 mb-8">
                <p class="text-lg sm:text-xl text-slate-500 dark:text-slate-400">
                  I build <span class="text-blue-500 font-semibold" id="typing-text"></span><span class="border-r-2 border-blue-500 animate-blink" id="typing-cursor">|</span>
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4 animate-fade-in" style="animation-delay: 0.3s;">
                <a href="#projects" onclick="switchPage('projects'); return false;" class="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all active:scale-95">
                  <i class="fas fa-eye mr-2"></i>View Projects
                </a>
                <a href="https://wa.me/6281515344063" target="_blank" class="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95">
                  <i class="fab fa-whatsapp mr-2 text-green-500"></i>Let's Talk
                </a>
                <a href="https://github.com/TAHUKU" target="_blank" class="px-4 py-3 rounded-xl text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-all" title="GitHub">
                  <i class="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>

            <!-- Tech Stack Marquee -->
            <div class="mt-16 animate-fade-in" style="animation-delay: 0.5s;">
              <p class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Tech Stack</p>
              <div class="flex flex-wrap gap-3">
                <span class="tech-badge bg-blue-100/80 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/50">
                  <i class="fab fa-python"></i> Python
                </span>
                <span class="tech-badge bg-orange-100/80 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200/50 dark:border-orange-800/50">
                  <i class="fas fa-flask"></i> Flask
                </span>
                <span class="tech-badge bg-yellow-100/80 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 border-yellow-200/50 dark:border-yellow-800/50">
                  <i class="fab fa-js"></i> JavaScript
                </span>
                <span class="tech-badge bg-indigo-100/80 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-800/50">
                  <i class="fab fa-html5"></i> Tailwind
                </span>
                <span class="tech-badge bg-green-100/80 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200/50 dark:border-green-800/50">
                  <i class="fas fa-database"></i> SQL
                </span>
                <span class="tech-badge bg-slate-100/80 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-700/50">
                  <i class="fab fa-git-alt"></i> Git
                </span>
                <span class="tech-badge bg-cyan-100/80 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-800/50">
                  <i class="fab fa-linux"></i> Linux
                </span>
              </div>
            </div>
          </section>

          <!-- Stats Section -->
          <section class="mb-24">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="stat-card">
                <div class="stat-icon bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <i class="fas fa-folder-open"></i>
                </div>
                <p class="stat-number">4+</p>
                <p class="stat-label">Projects</p>
              </div>
              <div class="stat-card">
                <div class="stat-icon bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                  <i class="fas fa-code"></i>
                </div>
                <p class="stat-number">7</p>
                <p class="stat-label">Tech Stack</p>
              </div>
              <div class="stat-card">
                <div class="stat-icon bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                  <i class="fas fa-rocket"></i>
                </div>
                <p class="stat-number">Junior</p>
                <p class="stat-label">Experience</p>
              </div>
              <div class="stat-card">
                <div class="stat-icon bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <p class="stat-number">Univ.</p>
                <p class="stat-label">Education</p>
              </div>
            </div>
          </section>

          <!-- Quick Actions -->
          <section class="mb-24">
            <h2 class="section-title">
              <i class="fas fa-bolt text-blue-500"></i> Quick Actions
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="card-gradient-blue p-8 rounded-2xl relative overflow-hidden group cursor-pointer" onclick="switchPage('projects')">
                <div class="relative z-10">
                  <h3 class="text-2xl font-bold mb-2 text-white">Showcase Projects</h3>
                  <p class="text-blue-100/80 mb-6 text-sm">Lihat detail teknis dari aplikasi yang telah saya bangun.</p>
                  <span class="inline-flex items-center px-5 py-2.5 bg-white text-blue-600 rounded-xl font-bold text-sm hover:shadow-lg transition-all active:scale-95">
                    <i class="fas fa-arrow-right mr-2"></i>Lihat Semua Project
                  </span>
                </div>
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              </div>

              <div class="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-lg transition-all">
                <div>
                  <h3 class="text-2xl font-bold mb-2 text-blue-500">Let's Connect</h3>
                  <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Tertarik berkolaborasi atau sekadar bertanya? Hubungi saya via WhatsApp.</p>
                </div>
                <a href="https://wa.me/6281515344063" target="_blank" class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-green-500/20">
                  <i class="fab fa-whatsapp mr-2"></i> Chat via WhatsApp
                </a>
              </div>
            </div>
          </section>`,

    projects: `<div class="py-8 md:py-12">
            <div class="mb-12">
              <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-3">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Projects</span>
              </h1>
              <p class="text-slate-500 dark:text-slate-400 text-lg">Kumpulan karya dan eksperimen pengembangan perangkat lunak.</p>
            </div>

            <!-- Filter Tags -->
            <div class="flex flex-wrap gap-2 mb-10">
              <button class="filter-btn active" data-filter="all" onclick="filterProjects('all')">
                <i class="fas fa-th-large mr-1.5"></i> All
              </button>
              <button class="filter-btn" data-filter="backend" onclick="filterProjects('backend')">
                <i class="fas fa-server mr-1.5"></i> Backend
              </button>
              <button class="filter-btn" data-filter="frontend" onclick="filterProjects('frontend')">
                <i class="fas fa-palette mr-1.5"></i> Frontend
              </button>
              <button class="filter-btn" data-filter="storage" onclick="filterProjects('storage')">
                <i class="fas fa-database mr-1.5"></i> Storage
              </button>
              <button class="filter-btn" data-filter="ecommerce" onclick="filterProjects('ecommerce')">
                <i class="fas fa-shopping-cart mr-1.5"></i> E-Commerce
              </button>
            </div>

            <!-- Project Grid -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="projectsGrid">
              
              <!-- Project 1 -->
              <div class="project-card" data-category="backend">
                <div class="project-card-inner">
                  <div class="project-card-front">
                    <div class="project-thumb bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5">
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/20">
                        <i class="fas fa-layer-group"></i>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center gap-2 mb-3">
                        <span class="project-tag tag-backend">Backend</span>
                        <span class="text-[10px] font-mono text-slate-400">Python</span>
                      </div>
                      <h3 class="font-bold text-lg mb-2">CRUD Application</h3>
                      <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Logika sistem manajemen data terstruktur menggunakan arsitektur MVC (Model-View-Controller).</p>
                      <div class="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <a href="https://github.com/TAHUKU/CRUD-" target="_blank" class="text-xs font-bold hover:text-blue-500 transition-colors flex items-center gap-1.5">
                          <i class="fab fa-github"></i> Repo
                        </a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <span class="text-xs text-slate-400 italic flex items-center gap-1">
                          <i class="fas fa-terminal"></i> CLI Project
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Project 2 -->
              <div class="project-card" data-category="frontend">
                <div class="project-card-inner">
                  <div class="project-card-front">
                    <div class="project-thumb bg-gradient-to-br from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5">
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-500/20">
                        <i class="fas fa-check-double"></i>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center gap-2 mb-3">
                        <span class="project-tag tag-frontend">Frontend</span>
                        <span class="text-[10px] font-mono text-slate-400">JS / Tailwind</span>
                      </div>
                      <h3 class="font-bold text-lg mb-2">Noted. Task Manager</h3>
                      <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Pengelola jadwal interaktif dengan fitur Undo, Edit, dan Local Storage.</p>
                      <div class="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <a href="https://github.com/TAHUKU/noted" target="_blank" class="text-xs font-bold hover:text-blue-500 transition-colors flex items-center gap-1.5">
                          <i class="fab fa-github"></i> Repo
                        </a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <a href="https://hakkul23.vercel.app/" target="_blank" class="text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">
                          <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Project 3 -->
              <div class="project-card" data-category="storage">
                <div class="project-card-inner">
                  <div class="project-card-front">
                    <div class="project-thumb bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5">
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/20">
                        <i class="fas fa-brain"></i>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center gap-2 mb-3">
                        <span class="project-tag tag-storage">Storage</span>
                        <span class="text-[10px] font-mono text-slate-400">JS / WebAPI</span>
                      </div>
                      <h3 class="font-bold text-lg mb-2">MemoryBank</h3>
                      <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Penyimpanan kenangan digital dengan fitur drag & drop dan detail modal.</p>
                      <div class="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <a href="https://github.com/TAHUKU/memory" target="_blank" class="text-xs font-bold hover:text-blue-500 transition-colors flex items-center gap-1.5">
                          <i class="fab fa-github"></i> Repo
                        </a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <a href="https://memort.pages.dev/" target="_blank" class="text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">
                          <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Project 4 -->
              <div class="project-card" data-category="ecommerce">
                <div class="project-card-inner">
                  <div class="project-card-front">
                    <div class="project-thumb bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-500/5 dark:to-red-500/5">
                      <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-orange-500/20">
                        <i class="fas fa-shopping-bag"></i>
                      </div>
                    </div>
                    <div class="p-5">
                      <div class="flex items-center gap-2 mb-3">
                        <span class="project-tag tag-ecommerce">E-Commerce</span>
                        <span class="text-[10px] font-mono text-slate-400">JS / WebAPI</span>
                      </div>
                      <h3 class="font-bold text-lg mb-2">E-Commerce</h3>
                      <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Platform belanja online interaktif dengan manajemen katalog produk.</p>
                      <div class="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <a href="https://github.com/TAHUKU/onlineshopp.git" target="_blank" class="text-xs font-bold hover:text-blue-500 transition-colors flex items-center gap-1.5">
                          <i class="fab fa-github"></i> Repo
                        </a>
                        <span class="text-slate-300 dark:text-slate-700">|</span>
                        <a href="https://ouu23.vercel.app/" target="_blank" class="text-xs font-bold text-blue-500 hover:underline flex items-center gap-1">
                          <i class="fas fa-external-link-alt"></i> Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>`,

    profile: `<div class="py-8 md:py-12">
            <div class="mb-12">
              <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-3">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Profile</span>
              </h1>
              <p class="text-slate-500 dark:text-slate-400 text-lg">Tentang saya, latar belakang, dan keahlian teknis.</p>
            </div>

            <div class="grid lg:grid-cols-3 gap-12 items-start mb-16">
              <!-- Profile Photo -->
              <div class="flex justify-center lg:justify-start">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-xl opacity-40 animate-pulse-slow"></div>
                  <div class="relative w-52 h-52 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20">
                    <div class="w-full h-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <div id="photo-placeholder" class="w-full h-full flex items-center justify-center text-6xl text-slate-400">
                        <i class="fas fa-user-circle"></i>
                      </div>
                      <img src="assets/images/profile.jpg" alt="Hakkull Qoull" 
                           class="w-full h-full object-cover hidden"
                           id="profileImage"
                           onerror="this.classList.add('hidden'); document.getElementById('photo-placeholder').classList.remove('hidden');">
                    </div>
                  </div>
                  <div class="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-sm shadow-lg shadow-emerald-500/20">
                    <i class="fas fa-check"></i>
                  </div>
                </div>
              </div>

              <!-- Profile Info -->
              <div class="lg:col-span-2 space-y-6">
                <div>
                  <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    Saya adalah seorang <span class="text-blue-500 font-bold">Junior Backend Developer</span> yang bersemangat dalam membangun logika server yang efisien. Berfokus pada Python dan ekosistem Flask untuk menciptakan solusi web yang handal.
                  </p>
                </div>
                
                <div class="grid sm:grid-cols-2 gap-4">
                  <div class="info-card">
                    <div class="info-icon">
                      <i class="fas fa-graduation-cap text-blue-500"></i>
                    </div>
                    <div>
                      <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Pendidikan</p>
                      <p class="font-semibold">Universitas Yudharta Pasuruan</p>
                      <p class="text-xs text-slate-400 italic">Informatics Engineering</p>
                    </div>
                  </div>
                  <div class="info-card">
                    <div class="info-icon">
                      <i class="fas fa-map-marker-alt text-blue-500"></i>
                    </div>
                    <div>
                      <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Lokasi</p>
                      <p class="font-semibold">Pasuruan, Jawa Timur</p>
                      <p class="text-xs text-slate-400 italic">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Skills Section -->
            <section class="mb-16">
              <h2 class="section-title">
                <i class="fas fa-cogs text-blue-500"></i> Tech Stack & Tools
              </h2>
              <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div class="skill-card">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <i class="fab fa-python text-blue-500"></i>
                      <span class="font-bold text-sm">Python</span>
                    </div>
                    <span class="text-xs font-bold text-blue-500">85%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-bar-fill bg-gradient-to-r from-blue-500 to-indigo-500" style="width: 0%;" data-width="85"></div>
                  </div>
                </div>

                <div class="skill-card">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-flask text-orange-500"></i>
                      <span class="font-bold text-sm">Flask</span>
                    </div>
                    <span class="text-xs font-bold text-orange-500">80%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-bar-fill bg-gradient-to-r from-orange-500 to-red-500" style="width: 0%;" data-width="80"></div>
                  </div>
                </div>

                <div class="skill-card">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <i class="fab fa-js text-yellow-500"></i>
                      <span class="font-bold text-sm">JavaScript</span>
                    </div>
                    <span class="text-xs font-bold text-yellow-500">70%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-bar-fill bg-gradient-to-r from-yellow-500 to-orange-500" style="width: 0%;" data-width="70"></div>
                  </div>
                </div>

                <div class="skill-card">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <i class="fas fa-database text-green-500"></i>
                      <span class="font-bold text-sm">SQL & Databases</span>
                    </div>
                    <span class="text-xs font-bold text-green-500">75%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-bar-fill bg-gradient-to-r from-green-500 to-emerald-500" style="width: 0%;" data-width="75"></div>
                  </div>
                </div>

                <div class="skill-card">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <i class="fab fa-git-alt text-orange-600"></i>
                      <span class="font-bold text-sm">Git & GitHub</span>
                    </div>
                    <span class="text-xs font-bold text-orange-600">80%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-bar-fill bg-gradient-to-r from-orange-500 to-amber-500" style="width: 0%;" data-width="80"></div>
                  </div>
                </div>

                <div class="skill-card">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <i class="fab fa-linux text-slate-500"></i>
                      <span class="font-bold text-sm">Linux CLI</span>
                    </div>
                    <span class="text-xs font-bold text-slate-500">70%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-bar-fill bg-gradient-to-r from-slate-500 to-slate-400" style="width: 0%;" data-width="70"></div>
                  </div>
                </div>

                <div class="skill-card">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-2">
                      <i class="fab fa-html5 text-indigo-500"></i>
                      <span class="font-bold text-sm">Tailwind CSS</span>
                    </div>
                    <span class="text-xs font-bold text-indigo-500">65%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-bar-fill bg-gradient-to-r from-indigo-500 to-purple-500" style="width: 0%;" data-width="65"></div>
                  </div>
                </div>

              </div>
            </section>

            <!-- Goals & Contact -->
            <div class="grid md:grid-cols-2 gap-6 mb-16">
              <div class="p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 border border-blue-200/50 dark:border-blue-800/50">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                    <i class="fas fa-bullseye"></i>
                  </div>
                  <h2 class="text-xl font-bold">Career Goal</h2>
                </div>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Menjadi Backend Developer profesional yang mampu membangun sistem yang scalable, aman, dan menerapkan standar penulisan kode yang bersih (clean code).
                </p>
              </div>

              <div class="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500">
                    <i class="fas fa-address-card"></i>
                  </div>
                  <h2 class="text-xl font-bold">Get in Touch</h2>
                </div>
                <div class="grid grid-cols-2 gap-3">
                  <a href="mailto:hakkullqoull@gmail.com" class="contact-btn hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 group">
                    <p class="text-xs font-bold text-blue-500 uppercase tracking-wider group-hover:scale-105 transition-transform">
                      <i class="fas fa-envelope mr-1"></i> Email
                    </p>
                  </a>
                  <a href="https://wa.me/6281515344063" target="_blank" class="contact-btn hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-500 group">
                    <p class="text-xs font-bold text-green-500 uppercase tracking-wider group-hover:scale-105 transition-transform">
                      <i class="fab fa-whatsapp mr-1"></i> WhatsApp
                    </p>
                  </a>
                  <a href="https://github.com/TAHUKU" target="_blank" class="contact-btn hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-400 group">
                    <p class="text-xs font-bold uppercase tracking-wider group-hover:scale-105 transition-transform">
                      <i class="fab fa-github mr-1"></i> GitHub
                    </p>
                  </a>
                  <div class="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <p class="text-[10px] font-bold text-white uppercase text-center leading-tight">
                      <i class="fas fa-briefcase mr-1"></i> Hiring Ready
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>`,

    resume: `<div class="py-8 md:py-12">
            <div class="mb-12">
              <h1 class="text-4xl md:text-5xl font-black tracking-tight mb-3">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Resume</span>
              </h1>
              <div class="flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400">
                <span class="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">Junior Backend Developer</span>
                <span class="text-slate-300 dark:text-slate-700">•</span>
                <span class="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold">Python Enthusiast</span>
                <span class="text-slate-300 dark:text-slate-700">•</span>
                <span class="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold">Flask Specialist</span>
              </div>
            </div>

            <div class="space-y-8 max-w-4xl">

              <!-- Summary -->
              <section class="resume-section">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm shadow-lg shadow-blue-500/20">
                    <i class="fas fa-user"></i>
                  </div>
                  <h2 class="text-xl font-bold">Summary</h2>
                </div>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed pl-[3.25rem]">
                  Seorang Backend Developer yang berdedikasi tinggi dalam membangun struktur server yang efisien. Memiliki pemahaman kuat tentang konsep MVC, database relasional, dan integrasi API. Sangat antusias dalam mempelajari arsitektur microservices dan optimasi database.
                </p>
              </section>

              <!-- Technical Skills -->
              <section class="resume-section">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-sm shadow-lg shadow-orange-500/20">
                    <i class="fas fa-tools"></i>
                  </div>
                  <h2 class="text-xl font-bold">Technical Skills</h2>
                </div>
                <div class="flex flex-wrap gap-2 pl-[3.25rem]">
                  <span class="skill-tag bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                    <i class="fab fa-python mr-1"></i> Python
                  </span>
                  <span class="skill-tag bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                    <i class="fas fa-flask mr-1"></i> Flask
                  </span>
                  <span class="skill-tag bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700">
                    <i class="fab fa-git-alt mr-1"></i> Git / GitHub
                  </span>
                  <span class="skill-tag bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700">
                    <i class="fab fa-linux mr-1"></i> Linux CLI
                  </span>
                  <span class="skill-tag bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700">
                    <i class="fas fa-database mr-1"></i> SQLite & MySQL
                  </span>
                </div>
              </section>

              <!-- Experience Timeline -->
              <section class="resume-section">
                <div class="flex items-center gap-3 mb-8">
                  <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm shadow-lg shadow-emerald-500/20">
                    <i class="fas fa-briefcase"></i>
                  </div>
                  <h2 class="text-xl font-bold">Experience</h2>
                </div>

                <div class="relative pl-[3.25rem]">
                  <!-- Timeline Line -->
                  <div class="absolute left-[1.625rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent"></div>

                  <!-- Timeline Item -->
                  <div class="timeline-item relative pb-12 last:pb-0">
                    <div class="absolute -left-[1.625rem] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white dark:ring-slate-900 shadow-sm"></div>
                    <div class="ml-6">
                      <div class="flex flex-wrap items-center gap-2 mb-1">
                        <h3 class="text-lg font-bold">Personal Projects & Learning</h3>
                        <span class="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">2025 — Present</span>
                      </div>
                      <ul class="space-y-2 text-slate-600 dark:text-slate-400 text-sm mt-3">
                        <li class="flex items-start gap-2">
                          <i class="fas fa-chevron-right text-blue-500 mt-0.5 text-xs"></i>
                          Membangun aplikasi CRUD dengan arsitektur MVC untuk pengelolaan data.
                        </li>
                        <li class="flex items-start gap-2">
                          <i class="fas fa-chevron-right text-blue-500 mt-0.5 text-xs"></i>
                          Implementasi database SQLite dan MySQL dalam lingkungan pengembangan Flask.
                        </li>
                        <li class="flex items-start gap-2">
                          <i class="fas fa-chevron-right text-blue-500 mt-0.5 text-xs"></i>
                          Mengelola siklus pengembangan kode menggunakan Git & GitHub.
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </section>

              <!-- CTA Buttons -->
              <div class="grid sm:grid-cols-2 gap-6 pt-4">
                <div class="p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:shadow-blue-500/20 transition-all active:scale-[0.98]">
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <i class="fas fa-download"></i>
                      <h3 class="font-bold">Download CV</h3>
                    </div>
                    <p class="text-xs text-blue-100/80 mb-4">Dapatkan versi PDF terbaru</p>
                  </div>
                  <span class="text-sm font-bold flex items-center gap-2">
                    Unduh Sekarang <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </span>
                </div>
                <div class="p-6 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col justify-between hover:border-blue-500/50 transition-all">
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <i class="fas fa-handshake text-blue-500"></i>
                      <h3 class="font-bold">Butuh Backend?</h3>
                    </div>
                    <p class="text-xs text-slate-500 mb-4">Saya siap untuk kolaborasi projek</p>
                  </div>
                  <a href="mailto:hakkullqoull@gmail.com" class="text-sm font-bold text-blue-500 hover:text-blue-600 flex items-center gap-2">
                    Hubungi Saya <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>

            </div>
          </div>`
  };

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
  // PAGE SWITCHING (SPA with embedded content)
  // ==============================================================
  const pageContainer = document.getElementById('pageContainer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  let currentPage = 'dashboard';
  let isTransitioning = false;

  function loadPage(pageId) {
    // Get content from embedded object (sync, no fetch needed)
    const content = embeddedPages[pageId];
    if (!content) {
      throw new Error(`Page not found: ${pageId}`);
    }
    return content;
  }

  window.switchPage = async function(pageId) {
    if (pageId === currentPage || isTransitioning) return;
    
    isTransitioning = true;

    try {
      // Load the page content (synchronous, from embedded object)
      const content = loadPage(pageId);

      // Fade out current content
      if (pageContainer) {
        pageContainer.style.opacity = '0';
        pageContainer.style.transform = 'translateY(10px)';
        pageContainer.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';

        await new Promise(resolve => setTimeout(resolve, 200));

        // Inject new content
        pageContainer.innerHTML = content;

        // Fade in new content
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

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });

      currentPage = pageId;

      // Animate skill bars if switching to profile page
      if (pageId === 'profile') {
        setTimeout(animateSkillBars, 300);
      }

      // Re-observe scroll elements
      setTimeout(observeElements, 200);

    } catch (error) {
      console.error('Page load error:', error);
      // Fallback: show empty state or keep current page
      if (pageContainer) {
        pageContainer.innerHTML = `
          <div class="py-20 text-center">
            <div class="text-6xl mb-4">⚠️</div>
            <h2 class="text-2xl font-bold mb-2">Failed to Load Page</h2>
            <p class="text-slate-500">Please try refreshing the page.</p>
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
  (function init() {
    try {
      const content = loadPage('dashboard');
      if (pageContainer) {
        pageContainer.innerHTML = content;
      }
      // Set active nav to dashboard
      navLinks.forEach(link => {
        if (link.dataset.page === 'dashboard') link.classList.add('active');
      });
      mobileNavLinks.forEach(link => {
        if (link.dataset.page === 'dashboard') link.classList.add('active');
      });
    } catch (error) {
      console.error('Initial page load error:', error);
    }

    // Check URL hash for initial page
    const hash = window.location.hash.replace('#', '');
    if (hash && ['dashboard', 'projects', 'profile', 'resume'].includes(hash)) {
      switchPage(hash);
    }

    // Observe elements after initial render
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
      'efficient databases.',
      'microservices architecture.',
      'secure applications.'
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

    // Clear any existing interval before starting
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

  // Initialize theme
  setTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  // Listen for system theme changes
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
  // PROJECT FILTER
  // ==============================================================
  window.filterProjects = function(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Update active button
    filterButtons.forEach(btn => {
      const isActive = btn.dataset.filter === category;
      btn.classList.toggle('active', isActive);
    });

    // Filter cards
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

    // Start typing effect if typing elements exist on this page
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
  console.log('%cBackend Developer | Python Enthusiast | Flask Specialist', 'font-size: 14px; color: #64748b;');
  console.log('%c🔧 Built with vanilla JS, Tailwind CSS & lots of ☕', 'font-size: 12px; color: #94a3b8;');

})();