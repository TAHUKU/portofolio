#!/usr/bin/env python3
"""
Generate CV PDF (CV_Hakkull_Qoull.pdf) for the portfolio website.
Uses fpdf2. Run: /tmp/portofolio-venv/bin/python scripts/generate_cv.py
"""

import os
from fpdf import FPDF

# ---------------------------------------------------------------
# Config & Palette
# ---------------------------------------------------------------
OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "files")
OUTPUT_PATH = os.path.join(OUTPUT_DIR, "CV_Hakkull_Qoull.pdf")

# Professional Color Palette
BLUE = (37, 99, 235)       # Primary Accent (#2563eb)
INDIGO = (79, 70, 229)     # Secondary Accent (#4f46e5)
DARK = (30, 41, 59)        # Main Text (#1e293b)
GRAY = (100, 116, 139)     # Subtitles & Secondary Text (#64748b)
LIGHT_BG = (241, 245, 249) # Background highlights (#f1f5f9)

# Font Resolver
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
BULLET_ICON = "›" if REGULAR_FONT else ">"


class ModernCV(FPDF):
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
        # Decorative top bar
        self.set_fill_color(*BLUE)
        self.rect(0, 0, 105, 5, "F")
        self.set_fill_color(*INDIGO)
        self.rect(105, 0, 105, 5, "F")

    def footer(self):
        self.set_y(-12)
        self.set_font(self.FONT_NAME, "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 10, f"Muhammad Hakkul Qoul  {EM_DASH}  Curriculum Vitae", align="C")

    def section_title(self, title):
        self.ln(3)
        self.set_font(self.FONT_NAME, "B", 11)
        self.set_text_color(*BLUE)
        self.cell(0, 6, title.upper(), new_x="LMARGIN", new_y="NEXT")
        
        # Subtle underline
        self.set_draw_color(*BLUE)
        self.set_line_width(0.5)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)

    def project_item(self, title, desc):
        self.set_x(self.l_margin)
        self.set_font(self.FONT_NAME, "B", 10)
        self.set_text_color(*DARK)
        self.cell(4, 5, BULLET_ICON)
        self.cell(0, 5, title, new_x="LMARGIN", new_y="NEXT")
        
        self.set_x(self.l_margin + 4)
        self.set_font(self.FONT_NAME, "", 9)
        self.set_text_color(*GRAY)
        self.multi_cell(0, 4.5, desc, align="L")
        self.ln(2)


# Initialize Document
pdf = ModernCV()
pdf.set_title("CV - Muhammad Hakkul Qoul")
pdf.set_author("Muhammad Hakkul Qoul")
pdf.set_margins(18, 15, 18)
pdf.add_page()

# ---------------------------------------------------------------
# Header Block (Name & Info)
# ---------------------------------------------------------------
pdf.ln(2)
pdf.set_font(pdf.FONT_NAME, "B", 22)
pdf.set_text_color(*DARK)
pdf.cell(0, 8, "Muhammad Hakkul Qoul", new_x="LMARGIN", new_y="NEXT")

pdf.set_font(pdf.FONT_NAME, "B", 10)
pdf.set_text_color(*BLUE)
pdf.cell(0, 6, "Mahasiswa Teknik Informatika  |  Python Enthusiast  |  IT Enthusiast", new_x="LMARGIN", new_y="NEXT")

pdf.set_font(pdf.FONT_NAME, "", 9)
pdf.set_text_color(*GRAY)
contact_info = (
    "20 Tahun   •"
    "Pasuruan, Jawa Timur   •"
    "hakkullqoull@gmail.com   •"
    "wa.me/6281515344063   •"
    "github.com/TAHUKU"
)
pdf.cell(0, 5, contact_info, new_x="LMARGIN", new_y="NEXT")

# Header Separator
pdf.ln(2)
pdf.set_draw_color(*LIGHT_BG)
pdf.set_line_width(1)
pdf.line(pdf.l_margin, pdf.get_y(), pdf.w - pdf.r_margin, pdf.get_y())
pdf.ln(2)

# ---------------------------------------------------------------
# Ringkasan Profile
# ---------------------------------------------------------------
pdf.section_title("Ringkasan Profil")
pdf.set_font(pdf.FONT_NAME, "", 9.5)
pdf.set_text_color(*DARK)
# Menyesuaikan deskripsi ringkasan profil dengan menyebutkan umur 20 tahun
pdf.multi_cell(
    0, 5,
    "Pengembang perangkat lunak berusia 20 tahun yang saat ini menempuh pendidikan "
    "Teknik Informatika di Universitas Yudharta Pasuruan. Berfokus pada pemrograman Python "
    "untuk menciptakan solusi inovatif, terbiasa bekerja dalam lingkungan Linux, serta terampil "
    "mengelola pustaka kode menggunakan Git & GitHub.",
    align="L",
)

# ---------------------------------------------------------------
# Two-Column Layout: Keahlian (Kiri) & Pendidikan (Kanan)
# ---------------------------------------------------------------
start_y = pdf.get_y() + 2
col_width = (pdf.w - pdf.l_margin - pdf.r_margin - 8) / 2

# --- Kolom Kiri: Keahlian ---
pdf.set_y(start_y)
pdf.section_title("Keahlian Teknis")

skills = [
    ("Python", "85%"),
    ("Git / GitHub", "80%"),
    ("AI & Computer Vision", "75%"),
    ("Linux CLI", "70%"),
]

for name, pct in skills:
    pdf.set_font(pdf.FONT_NAME, "B", 9)
    pdf.set_text_color(*DARK)
    pdf.cell(col_width - 15, 5, name)
    
    pdf.set_font(pdf.FONT_NAME, "", 8.5)
    pdf.set_text_color(*GRAY)
    pdf.cell(15, 5, pct, new_x="LMARGIN", new_y="NEXT", align="R")
    
    # Clean Progress Line
    x_curr = pdf.l_margin
    y_curr = pdf.get_y()
    pdf.set_draw_color(*LIGHT_BG)
    pdf.set_line_width(1.5)
    pdf.line(x_curr, y_curr, x_curr + col_width, y_curr)
    
    pdf.set_draw_color(*BLUE)
    progress_w = col_width * (int(pct.strip("%")) / 100)
    pdf.line(x_curr, y_curr, x_curr + progress_w, y_curr)
    pdf.ln(3)

left_final_y = pdf.get_y()

# --- Kolom Kanan: Pendidikan ---
pdf.set_y(start_y)
pdf.set_left_margin(pdf.l_margin + col_width + 8)
pdf.section_title("Pendidikan")

educations = [
    ("Universitas Yudharta Pasuruan", "S1 Teknik Informatika", "2025 " + EM_DASH + " Sekarang"),
    ("SMK Darut Taqwa", "TKJ", "2021 " + EM_DASH + " 2024"),
    ("SMP Bhineka Tunggal Ika", "Pendidikan Menengah", "2018 " + EM_DASH + " 2021"),
]

for school, major, period in educations:
    pdf.set_font(pdf.FONT_NAME, "B", 9)
    pdf.set_text_color(*DARK)
    pdf.cell(col_width, 4.5, school, new_x="LMARGIN", new_y="NEXT")
    
    pdf.set_font(pdf.FONT_NAME, "", 8.5)
    pdf.set_text_color(*GRAY)
    pdf.cell(col_width, 4, f"{major} ({period})", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(2)

right_final_y = pdf.get_y()

# Reset Margin & Y Position
pdf.set_left_margin(18)
pdf.set_y(max(left_final_y, right_final_y) + 2)

# ---------------------------------------------------------------
# Proyek
# ---------------------------------------------------------------
pdf.section_title("Proyek Utama")

projects = [
    ("Photobooth Desktop App", "Aplikasi photobooth desktop modern dibangun menggunakan CustomTkinter dan OpenCV, terintegrasi otomatis dengan Google Drive API untuk penyimpanan foto."),
    ("Finger Detector & Blur", "Aplikasi pemrosesan citra real-time untuk mendeteksi gestur jari dan mengaplikasikan efek blur dinamis pada area target berbasis OpenCV."),
    ("Visual Paint", "Aplikasi melukis kanvas digital interaktif yang dikontrol menggunakan deteksi gerakan tangan melalui webcam secara real-time."),
]

for title, desc in projects:
    pdf.project_item(title, desc)

# ---------------------------------------------------------------
# Tujuan Karir
# ---------------------------------------------------------------
pdf.section_title("Tujuan Karir")
pdf.set_font(pdf.FONT_NAME, "", 9.5)
pdf.set_text_color(*DARK)
pdf.multi_cell(
    0, 5,
    "Bertekad mengembangkan karir sebagai pengembang perangkat lunak yang berfokus pada ekosistem Python. "
    "Siap berkontribusi aktif dalam proyek kolaboratif, open-source, dan membangun aplikasi bernilai guna tinggi.",
    align="L",
)

# Output Render
os.makedirs(OUTPUT_DIR, exist_ok=True)
pdf.output(OUTPUT_PATH)
print(f"✅ PDF berhasil diperbarui & dirapikan (dengan Umur): {OUTPUT_PATH}")