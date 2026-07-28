// Profile page content
const profileContent = `<!-- Profile Section -->
<div class="py-8 md:py-12">
    <div class="mb-8 sm:mb-12">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2 sm:mb-3">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Profil</span>
        </h1>
        <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base">Tentang saya, latar belakang, dan keahlian teknis.</p>
    </div>

    <div class="grid lg:grid-cols-3 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
        <!-- Profile Photo -->
        <div class="flex justify-center lg:justify-start">
            <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-xl opacity-40 animate-pulse-slow"></div>
                <div class="relative w-52 h-52 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-2xl shadow-blue-500/20">
                    <div class="w-full h-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div id="photo-placeholder" class="w-full h-full flex items-center justify-center text-6xl text-slate-400">
                            <i class="fas fa-user-circle"></i>
                        </div>
                        <img src="assets/images/profile.jpg" alt="Hakkul Qoul" 
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
        <div class="lg:col-span-2 space-y-5 sm:space-y-6">
            <div>
                <p class="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    Saya adalah Mahasiswa <span class="text-blue-500 font-bold">Teknik Informatika</span> yang bersemangat dalam mempelajari dan mengembangkan solusi berbasis teknologi. Berfokus pada Python untuk menciptakan berbagai proyek inovatif. Terbiasa dengan environment Linux dan version control menggunakan Git & GitHub.
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
                        <p class="text-xs text-slate-400">Teknik Informatika</p>
                    </div>
                </div>
                <div class="info-card">
                    <div class="info-icon">
                        <i class="fas fa-map-marker-alt text-blue-500"></i>
                    </div>
                    <div>
                        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Lokasi</p>
                        <p class="font-semibold">Pasuruan, Jawa Timur</p>
                        <p class="text-xs text-slate-400">Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Skills Section -->
    <section class="mb-12 sm:mb-16">
        <h2 class="section-title">
            <i class="fas fa-cogs text-blue-500"></i> Tech Stack & Tools
        </h2>
        <div class="grid sm:grid-cols-1 max-w-md gap-4">

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

        </div>
    </section>

    <!-- Goals & Contact -->
    <div class="grid md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
        <div class="p-5 sm:p-7 lg:p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10 border border-blue-200/50 dark:border-blue-800/50">
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 text-sm sm:text-base">
                    <i class="fas fa-bullseye"></i>
                </div>
                <h2 class="text-lg sm:text-xl font-bold">Tujuan Karir</h2>
            </div>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Menjadi lulusan Teknik Informatika yang handal dalam membangun aplikasi yang inovatif menggunakan Python, serta berkontribusi pada proyek-proyek open-source dan kolaborasi tim untuk menciptakan solusi yang bermanfaat.
            </p>
        </div>

        <div class="p-5 sm:p-7 lg:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div class="flex items-center gap-3 mb-3 sm:mb-4">
                <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500 text-sm sm:text-base">
                    <i class="fas fa-address-card"></i>
                </div>
                <h2 class="text-lg sm:text-xl font-bold">Hubungi Saya</h2>
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
                        <i class="fas fa-briefcase mr-1"></i> Siap Bekerja
                    </p>
                </div>
            </div>
        </div>
    </div>

</div>`;

export default profileContent;