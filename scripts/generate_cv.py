#!/usr/bin/env python3
"""
Generate CV PDF (CV_Hakkull_Qoull.pdf) untuk Mahasiswa Teknik Informatika.
Menghasilkan CV 1 halaman A4 dengan tata letak bersih dan profesional.
"""

import os
from fpdf import FPDF

# ---------------------------------------------------------------
# Konfigurasi & Jalur File
# ---------------------------------------------------------------
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "files")
OUTPUT_PATH = os.path.join(OUTPUT_DIR, "CV_Hakkull_Qoull.pdf")

# Warna Tema (Sesuai nuansa modern IT)
PRIMARY = (37, 99, 235)      # Royal Blue (#2563eb)
SECONDARY = (79, 70, 229)    # Indigo (#4f46e5)
DARK = (30, 41, 59)         # Dark Slate Text (#1e293b)
GRAY = (100, 116, 139)      # Muted Gray (#64748b)

# Deteksi Font Font Unicode (DejaVu)
FONT_DIRS = [
    "/usr/share/fonts/TTF",
    "/usr/share/fonts/truetype/dejavu",
    "/usr/share/fonts/dejavu",
]
REGULAR_FONT, BOLD_FONT = None, None
for d in FONT_DIRS:
    r_path = os.path.join(d, "DejaVuSans.ttf")
    b_path = os.path.join(d, "DejaVuSans-Bold.ttf")
    if os.path.exists(r_path) and os.path.exists(b_path):
        REGULAR_FONT, BOLD_FONT = r_path, b_path
        break

EM_DASH = "—" if REGULAR_FONT else "-"

class ITCV(FPDF):
    def __init__(self):
        super().__init__(format="A4")
        self.set_auto_page_break(auto=True, margin=15)
        
        if REGULAR_FONT:
            self.add_font("DejaVu", "", REGULAR_FONT)
            self.add_font("DejaVu", "B", BOLD_FONT)
            self.FONT_NAME = "DejaVu"
        else:
            self.FONT_NAME = "Helvetica"

    def header(self):
        # Aksen warna tipis di bagian atas
        self.set_fill_color(*PRIMARY)
        self.rect(0, 0, 105, 4, "F")
        self.set_fill_color(*SECONDARY)
        self.rect(105, 0, 105, 4, "F")

    def footer(self):
        self.set_y(-15)
        self.set_font(self.FONT_NAME, "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 10, f"Muhammad Hakkul Qoul  {EM_DASH}  Curriculum Vitae", align="C")

    def section_title(self, title):
        self.ln(4)
        self.set_font(self.FONT_NAME, "B", 11)
        self.set_text_color(*PRIMARY)
        self.cell(0, 6, title.upper(), new_x="LMARGIN", new_y="NEXT")
        
        self.set_draw_color(*PRIMARY)
        self.set_line_width(0.6)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3.5)

pdf = ITCV()
pdf.set_title("CV - Muhammad Hakkul Qoul")
pdf.set_author("Muhammad Hakkul Qoul")
pdf.set_margins(20, 18, 20)
pdf.add_page()

# ---------------------------------------------------------------
# 1. Header & Kontak
# ---------------------------------------------------------------
pdf.ln(2)
pdf.set_font(pdf.FONT_NAME, "B", 22)
pdf.set_text_color(*DARK)
pdf.cell(0, 8, "Muhammad Hakkul Qoul", new_x="LMARGIN", new_y="NEXT")

pdf.set_font(pdf.FONT_NAME, "B", 10)
pdf.set_text_color(*PRIMARY)
pdf.cell(0, 6, "Mahasiswa Teknik Informatika  |  Python Developer  |  IT Enthusiast", new_x="LMARGIN", new_y="NEXT")

pdf.set_font(pdf.FONT_NAME, "", 9)
pdf.set_text_color(*GRAY)
contact = "20 Tahun  •  Pasuruan, Jawa Timur  •  hakkullqoull@gmail.com  •  wa.me/6281515344063  •  github.com/TAHUKU"
pdf.cell(0, 5, contact, new_x="LMARGIN", new_y="NEXT")

# ---------------------------------------------------------------
# 2. Ringkasan Profil
# ---------------------------------------------------------------
pdf.section_title("Ringkasan Profil")
pdf.set_font(pdf.FONT_NAME, "", 9.5)
pdf.set_text_color(*DARK)
pdf.multi_cell(
    0, 5.2,
    "Mahasiswa Teknik Informatika berusia 20 tahun di Universitas Yudharta Pasuruan dengan fokus pada pengembangan "
    "perangkat lunak dan pemrograman Python. Memiliki pengalaman praktis dalam membangun aplikasi desktop berbasis GUI, "
    "pemrosesan citra digital (Computer Vision), serta terbiasa mengoperasikan lingkungan Linux dan manajemen versi Git/GitHub.",
    align="L",
)

# ---------------------------------------------------------------
# 3. Keahlian Teknis (Tech Stack)
# ---------------------------------------------------------------
pdf.section_title("Keahlian Teknis")

skills = [
    ("Bahasa Pemrograman", "Python, Bash / Shell Scripting"),
    ("Framework & Library", "OpenCV, CustomTkinter, MediaPipe, Google Drive API"),
    ("Alat & Lingkungan Kerja", "Linux CLI, Git, GitHub, VS Code"),
]

for category, items in skills:
    pdf.set_font(pdf.FONT_NAME, "B", 9.5)
    pdf.set_text_color(*DARK)
    pdf.cell(50, 5.5, f"•  {category}:")
    
    pdf.set_font(pdf.FONT_NAME, "", 9.5)
    pdf.set_text_color(*GRAY)
    pdf.cell(0, 5.5, items, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)

# ---------------------------------------------------------------
# 4. Proyek Portofolio
# ---------------------------------------------------------------
pdf.section_title("Proyek Portofolio")

projects = [
    (
        "Photobooth Desktop App",
        "CustomTkinter, OpenCV, Google Drive API",
        "Aplikasi desktop interaktif berbasis Python yang menyajikan antarmuka photobooth modern. Dilengkapi fitur otomatisasi pengunggahan dan integrasi penyimpanan Cloud via Google Drive API."
    ),
    (
        "Finger Detector & Dynamic Blur",
        "Python, OpenCV, Computer Vision",
        "Aplikasi pemrosesan citra real-time untuk mendeteksi posisi jari tangan melalui webcam dan mengaplikasikan efek pengaburan (blur) secara dinamis pada area tertentu."
    ),
    (
        "Visual Paint App",
        "Python, MediaPipe, OpenCV",
        "Aplikasi melukis kanvas digital interaktif yang dikontrol penuh menggunakan deteksi gerakan tangan (gesture recognition) tanpa memerlukan interaksi fisik."
    ),
]

for title, tech, desc in projects:
    pdf.set_font(pdf.FONT_NAME, "B", 10)
    pdf.set_text_color(*DARK)
    pdf.cell(100, 5.5, f"•  {title}")
    
    pdf.set_font(pdf.FONT_NAME, "B", 8.5)
    pdf.set_text_color(*PRIMARY)
    pdf.cell(0, 5.5, f"[{tech}]", new_x="LMARGIN", new_y="NEXT", align="R")
    
    pdf.set_x(pdf.l_margin + 4)
    pdf.set_font(pdf.FONT_NAME, "", 9)
    pdf.set_text_color(*GRAY)
    pdf.multi_cell(0, 4.8, desc, align="L")
    pdf.ln(2.5)

# ---------------------------------------------------------------
# 5. Pendidikan
# ---------------------------------------------------------------
pdf.section_title("Pendidikan")

educations = [
    ("Universitas Yudharta Pasuruan", "S1 Teknik Informatika", "2025 " + EM_DASH + " Sekarang"),
    ("SMK Darut Taqwa", "Teknik Komputer dan Jaringan (TKJ)", "2021 " + EM_DASH + " 2024"),
    ("SMP Bhineka Tunggal Ika", "Pendidikan Menengah Pertama", "2018 " + EM_DASH + " 2021"),
]

for school, major, period in educations:
    pdf.set_font(pdf.FONT_NAME, "B", 10)
    pdf.set_text_color(*DARK)
    pdf.cell(120, 5, school)
    
    pdf.set_font(pdf.FONT_NAME, "", 9)
    pdf.set_text_color(*GRAY)
    pdf.cell(0, 5, period, new_x="LMARGIN", new_y="NEXT", align="R")
    
    pdf.set_font(pdf.FONT_NAME, "", 9)
    pdf.cell(0, 4.5, major, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)

# ---------------------------------------------------------------
# 6. Tujuan Karir
# ---------------------------------------------------------------
pdf.section_title("Tujuan Karir")
pdf.set_font(pdf.FONT_NAME, "", 9.5)
pdf.set_text_color(*DARK)
pdf.multi_cell(
    0, 5,
    "Bertekad untuk terus memperdalam keahlian rekayasa perangkat lunak dan ekosistem Python. "
    "Siap berkontribusi aktif dalam tim pengembangan, proyek open-source, serta menciptakan solusi teknologi yang efisien dan berdampak positif.",
    align="L",
)

# Output Render
os.makedirs(OUTPUT_DIR, exist_ok=True)
pdf.output(OUTPUT_PATH)
print(f"✅ PDF CV Mahasiswa IT berhasil di-generate: {OUTPUT_PATH}")