# -*- coding: utf-8 -*-
"""Generate PDF spec sheets for all XINGYUE products."""
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image

BASE = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru"
OUT = os.path.join(BASE, "public", "specs")
os.makedirs(OUT, exist_ok=True)

BLACK = HexColor("#050507")
PINK = HexColor("#ff2f7d")
WHITE = HexColor("#ffffff")
GRAY = HexColor("#666666")
LIGHT = HexColor("#f5f5f5")

# product data: dir -> (model, category, image, specs list)
products = {
    "st-718": ("ST-718", "Travel Iron", "/images/products/st718/main.jpg", [
        ("Model", "ST-718"), ("Category", "Travel Iron"), ("Material", "Ceramic Base Plate"),
        ("Product Size", "232 x 79 x 98 mm"), ("Panel Size", "131 x 78 mm"), ("Net Weight", "650g"),
        ("Rated Power", "1000W"), ("Cable Length", "1.8m"), ("Plug", "EU Plug"),
        ("Water Tank", "140ml"), ("Steam Output", "14g / 15g / 17g / 20g"),
    ]),
    "st-717": ("ST-717", "Travel Iron", "/images/products/st717/main.jpg", [
        ("Model", "ST-717"), ("Category", "Travel Iron"), ("Material", "Ceramic Base Plate"),
        ("Product Size", "257 x 72 x 123 mm"), ("Net Weight", "795g"), ("Rated Power", "1200W"),
        ("Voltage", "AC 220-240V"), ("Water Tank", "140ml"), ("Working Time", "10 minutes"),
    ]),
    "st-588": ("ST-588", "Travel Iron", "/images/products/st588/main.jpg", [
        ("Model", "ST-588"), ("Category", "Travel Iron"), ("Material", "Ceramic Base Plate"),
        ("Product Size", "257 x 72 x 123 mm"), ("Net Weight", "795g"), ("Rated Power", "1200W"),
        ("Voltage", "AC 220-240V"), ("Water Tank", "140ml"), ("Function", "Dry / Steam"),
        ("Working Time", "8 minutes"),
    ]),
    "st-812": ("ST-812", "Travel Iron", "/images/products/st812/main.jpg", [
        ("Model", "ST-812"), ("Category", "Travel Iron"), ("Material", "Ceramic Base Plate"),
        ("Product Size", "20.8 x 8.5 x 13.3 cm"), ("Net Weight", "750g"), ("Rated Power", "1100-1300W"),
        ("Voltage", "AC 220-240V"), ("Water Tank", "160ml"), ("Steam Output", "Max 25g/min"),
        ("Working Time", "8 minutes"),
    ]),
    "st-8807": ("ST-8807", "Travel Iron", "/images/products/st8807/main.jpg", [
        ("Model", "ST-8807"), ("Category", "Travel Iron"), ("Material", "Colorful Non-stick / Ceramic Base Plate"),
        ("Product Size", "20.8 x 8.5 x 13.3 cm"), ("Panel Size", "16.3 x 7.6 cm"), ("Net Weight", "750g"),
        ("Rated Power", "1100-1300W"), ("Voltage", "AC 220-240V"), ("Frequency", "50/60Hz"),
        ("Water Tank", "160ml"), ("Plug", "EU Plug"), ("Cable", "1.7m"), ("Steam Time", "8-10 minutes"),
    ]),
    "st-8808": ("ST-8808", "Travel Iron", "/images/products/st8808/main.jpg", [
        ("Model", "ST-8808"), ("Category", "Travel Iron"), ("Material", "Colorful Non-stick / Ceramic Base Plate"),
        ("Product Size", "24.3 x 7.4 x 10.4 cm"), ("Panel Size", "16.3 x 7.6 cm"), ("Net Weight", "750g"),
        ("Rated Power", "1100-1300W"), ("Voltage", "AC 220-240V"), ("Frequency", "50/60Hz"),
        ("Water Tank", "190ml"), ("Plug", "EU Plug"), ("Cable", "1.7m"), ("Steam Time", "10-15 minutes"),
    ]),
    "st-817": ("ST-817", "Travel Iron", "/images/products/st817/main.png", [
        ("Model", "ST-817"), ("Category", "Travel Iron"), ("Material", "Colorful Ceramic Base Plate"),
        ("Product Size", "18.5 x 7 x 9.8 cm"), ("Panel Size", "180 x 68 mm"), ("Net Weight", "630g"),
        ("Packing Weight", "690g"), ("Rated Power", "1200W"), ("Voltage", "AC 220-240V"),
        ("Plug", "EU / US / BS"), ("Tank Capacity", "120ml"), ("Steam Output", "15g / 17g / 20g"),
        ("First Steam", "20 seconds"), ("Working Time", "8-10 minutes"),
    ]),
    "st-200a": ("ST-200A", "Travel Iron", "/images/products/st200a/main.jpg", [
        ("Model", "ST-200A"), ("Category", "Travel Iron"), ("Material", "Ceramic Base Plate"),
        ("Product Size", "16.8 x 8.1 x 11.8 cm"), ("Panel Size", "16.6 x 7.8 cm"), ("Net Weight", "650g"),
        ("Packing Weight", "850g"), ("Rated Power", "1200W"), ("Voltage", "AC 220-240V"),
        ("Water Tank", "190ml"), ("Steam Output", "14g / 15g / 17g / 20g"),
        ("Working Time", "8 minutes"), ("Functions", "Dry / Steam"),
    ]),
    "st-815": ("ST-815", "Garment Steamer", "/images/products/st815/main.jpg", [
        ("Model", "ST-815"), ("Category", "Garment Steamer"), ("Rated Power", "1600W"),
        ("Voltage", "AC 100-120V / 220-240V"), ("Water Tank", "340ml"), ("Product Size", "257 x 72 x 109 mm"),
        ("Soleplate Size", "130 x 77 mm"), ("Plug", "US / EU / BS"), ("Cable", "1.8m"),
        ("Modes", "1 Dry + 4 Steam"), ("First Steam", "20 seconds"), ("Working Time", "15 minutes"),
    ]),
    "6617": ("6617", "Garment Steamer", "/images/products/6617/main.jpg", [
        ("Model", "6617"), ("Category", "Garment Steamer"), ("Material", "Ceramic Base Plate"),
        ("Product Size", "288 x 126 x 140 mm"), ("Panel Size", "121 x 70 mm"), ("Power", "1800W"),
        ("Voltage", "AC 220-240V / 100-120V"), ("Water Tank", "260ml"), ("Steam", "3 Adjustments"),
        ("Steam Output", "30+5g/min MAX"), ("Heating Time", "20 seconds"), ("Working Time", "15 minutes"),
        ("Safety", "Auto Power Off"),
    ]),
    "900a": ("900A", "Garment Steamer", "/images/products/900a/main.jpg", [
        ("Model", "900A"), ("Category", "Garment Steamer"), ("Panel", "Stainless Steel"),
        ("Water Tank", "200ml"), ("Steam", "3 Gears"), ("Continuous Steam", "20±5g/min"),
        ("Steam Outlet", "6 Holes"), ("Product Size", "98.5 x 74 x 248 mm"),
        ("First Steam", "25 Seconds"), ("Working Time", "15 Minutes"),
    ]),
    "6618": ("6618", "Garment Steamer", "/images/products/6618/main.jpg", [
        ("Model", "6618"), ("Category", "Garment Steamer"), ("Panel", "Stainless Steel"),
        ("Product Size", "17 x 12 x 23 cm"), ("Water Tank", "150ml"), ("Frequency", "50/60Hz"),
        ("Plug", "EU Plug"), ("Cable", "1.5m"), ("Steam", "3 Gears"),
        ("Continuous Steam", "15±5g/min"), ("First Steam", "25 seconds"), ("Working Time", "18 minutes"),
    ]),
    "st-s1001": ("ST-S1001", "Steam Iron", "/images/products/sts1001/main.jpg", [
        ("Model", "ST-S1001"), ("Category", "Steam Iron"), ("Voltage", "110-127V / 220-240V"),
        ("Rated Power", "1200W / 2800W"), ("Water Tank", "330ml"), ("Soleplate", "Ceramic / Non-stick / Stainless"),
        ("Soleplate Size", "225 x 122 mm"), ("Product Size", "286 x 122 x 145 mm"),
        ("Gift Box", "300 x 125 x 160 mm"), ("Carton", "645 x 310 x 335 mm"), ("Qty/Carton", "10 pcs"),
        ("20GP", "4,100 pcs"), ("40GP", "8,600 pcs"), ("40HQ", "9,650 pcs"),
    ]),
    "st-s1002": ("ST-S1002", "Steam Iron", "/images/products/sts1002/main.jpg", [
        ("Model", "ST-S1002"), ("Category", "Steam Iron"), ("Voltage", "110-127V / 220-240V"),
        ("Rated Power", "1200W / 1800-3000W"), ("Water Tank", "420ml"), ("Soleplate", "Ceramic / Non-stick"),
        ("Soleplate Size", "251 x 125 mm"), ("Product Size", "304 x 129 x 150 mm"),
        ("Gift Box", "325 x 133 x 163 mm"), ("Carton", "552 x 335 x 340 mm"), ("Qty/Carton", "8 pcs"),
        ("20GP", "3,320 pcs"), ("40GP", "6,920 pcs"), ("40HQ", "8,000 pcs"),
    ]),
    "st-s1003": ("ST-S1003", "Steam Iron", "/images/products/sts1003/main.jpg", [
        ("Model", "ST-S1003"), ("Category", "Steam Iron"), ("Rated Power", "2800W"),
        ("Voltage", "220-240V 50/60Hz"), ("Water Tank", "330ml"), ("Soleplate", "Ceramic / Non-stick"),
        ("Functions", "Spray, Burst, Vertical Steam, Self-Clean"),
    ]),
    "st-s1004": ("ST-S1004", "Steam Iron", "/images/products/sts1004/main.jpg", [
        ("Model", "ST-S1004"), ("Category", "Steam Iron"), ("Rated Power", "2800W"),
        ("Voltage", "220-240V 50/60Hz"), ("Water Tank", "330ml"), ("Special Function", "Self-Clean, Anti-Calc"),
        ("Soleplate", "Ceramic"),
    ]),
    "9002": ("9002", "Vacuum Garment Steamer", "/images/products/9002.jpg", [
        ("Model", "9002"), ("Category", "Vacuum Garment Steamer"), ("Rated Power", "1500W (220V) / 1200W (120V)"),
        ("Voltage", "AC 220V 50Hz / 120V 60Hz"), ("Water Tank", "400ml Detachable"), ("Product Size", "160 x 105 x 260 mm"),
        ("Heat-Up Time", "≤30 Seconds"), ("Steam Output", "High 25±5 / Low 15±5 g/min"),
        ("Vacuum Pressure", "2.5-3.0 kPa"), ("Soleplate", "Ceramic"), ("Safety", "Overheat & Auto Shut-Off"),
        ("Power Cord", "1.9m"),
    ]),
    "9003": ("9003", "Vacuum Garment Steamer", "/images/products/9003.png", [
        ("Model", "9003"), ("Category", "Vacuum Garment Steamer"), ("Rated Power", "1500W"),
        ("Voltage", "AC 220-240V 50/60Hz"), ("Water Tank", "140ml"), ("Steam Levels", "2 (15±3 / 22±3 g/min)"),
        ("Suction Levels", "2 (2.5-3kPa / 5kPa)"), ("Vacuum Function", "Automatic Vacuum Grip"),
        ("Power Cord", "1.8m"), ("Functions", "Dry / Steam / Vacuum"),
    ]),
    "9004": ("9004", "Vacuum Garment Steamer", "/images/products/9004.jpg", [
        ("Model", "9004"), ("Category", "Vacuum Garment Steamer"), ("Rated Power", "1300W"),
        ("Water Tank", "80ml"), ("Steam Output", "15-20 g/min"), ("Heat-Up Time", "25 Seconds"),
        ("Suction Power", "3 kPa"), ("Power Cord", "2.0m"), ("Functions", "Dry / Steam / Vacuum / Rotatable Head"),
    ]),
    "9005": ("9005", "Vacuum Garment Steamer", "/images/products/9005.jpg", [
        ("Model", "9005"), ("Category", "Vacuum Garment Steamer"), ("Rated Power", "1500W (220V) / 1200W (120V)"),
        ("Voltage", "AC 220V 50Hz / 120V 60Hz"), ("Water Tank", "400ml Detachable"), ("Product Size", "160 x 105 x 260 mm"),
        ("Heat-Up Time", "≤30 Seconds"), ("Steam Output", "High 25±5 / Low 15±5 g/min"),
        ("Vacuum Pressure", "2.5-3.0 kPa"), ("Soleplate", "Ceramic"), ("Safety", "Overheat & Auto Shut-Off"),
        ("Power Cord", "1.9m"),
    ]),
}

def make_pdf(d, model, cat, img, specs):
    filepath = os.path.join(OUT, f"{model.lower()}-spec.pdf")
    doc = SimpleDocTemplate(filepath, pagesize=A4, leftMargin=20*mm, rightMargin=20*mm, topMargin=20*mm, bottomMargin=20*mm)
    styles = getSampleStyleSheet()

    title_style = ParagraphStyle("Title2", parent=styles["Title"], fontSize=26, textColor=BLACK, spaceAfter=2)
    sub_style = ParagraphStyle("Sub2", parent=styles["Normal"], fontSize=11, textColor=PINK, spaceAfter=8)
    h2 = ParagraphStyle("H2", parent=styles["Heading2"], fontSize=13, textColor=BLACK, spaceBefore=12, spaceAfter=6)
    cell_l = ParagraphStyle("CellL", parent=styles["Normal"], fontSize=10, textColor=BLACK)
    cell_r = ParagraphStyle("CellR", parent=styles["Normal"], fontSize=10, textColor=BLACK, alignment=2)

    story = []
    # Header band
    hdr = Table([[Paragraph(f"XINGYUE", title_style)], [Paragraph(f"{model} - {cat} Specification Sheet", sub_style)]], colWidths=[170*mm])
    hdr.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), BLACK),
        ("TEXTCOLOR", (0,0), (-1,-1), WHITE),
        ("LEFTPADDING", (0,0), (-1,-1), 14),
        ("RIGHTPADDING", (0,0), (-1,-1), 14),
        ("TOPPADDING", (0,0), (-1,-1), 12),
        ("BOTTOMPADDING", (0,0), (-1,-1), 12),
    ]))
    story.append(hdr)
    story.append(Spacer(1, 10))

    # Product image
    img_abs = os.path.join(BASE, "public", img.lstrip("/"))
    if os.path.exists(img_abs):
        try:
            im = Image(img_abs, width=60*mm, height=60*mm)
            im.hAlign = "CENTER"
            story.append(im)
            story.append(Spacer(1, 10))
        except Exception:
            pass

    # Specs table
    rows = [[Paragraph(k, cell_l), Paragraph(v, cell_r)] for k, v in specs]
    t = Table(rows, colWidths=[60*mm, 110*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), WHITE),
        ("GRID", (0,0), (-1,-1), 0.5, GRAY),
        ("ROWBACKGROUNDS", (0,0), (-1,-1), [LIGHT, WHITE]),
        ("VALIGN", (0,0), (-1,-1), "MIDDLE"),
        ("TOPPADDING", (0,0), (-1,-1), 6),
        ("BOTTOMPADDING", (0,0), (-1,-1), 6),
        ("LEFTPADDING", (0,0), (-1,-1), 8),
    ]))
    story.append(t)
    story.append(Spacer(1, 14))

    # Footer
    footer = Table([[Paragraph(
        "Huizhou Xingyue Technology Co., Ltd.<br/>Website: www.xingyue-appliance.com | Email: amy@xingyue.store | OEM / ODM Customization Available",
        ParagraphStyle("Foot", parent=styles["Normal"], fontSize=9, textColor=GRAY)
    )]], colWidths=[170*mm])
    footer.setStyle(TableStyle([
        ("BACKGROUND", (0,0), (-1,-1), BLACK),
        ("TEXTCOLOR", (0,0), (-1,-1), WHITE),
        ("LEFTPADDING", (0,0), (-1,-1), 12),
        ("RIGHTPADDING", (0,0), (-1,-1), 12),
        ("TOPPADDING", (0,0), (-1,-1), 10),
        ("BOTTOMPADDING", (0,0), (-1,-1), 10),
    ]))
    story.append(footer)

    doc.build(story)
    return filepath

for d, (model, cat, img, specs) in products.items():
    try:
        p = make_pdf(d, model, cat, img, specs)
        print("OK:", model, os.path.basename(p))
    except Exception as e:
        print("FAIL:", model, e)
print("Done -", len(products), "PDFs")
