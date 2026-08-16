# -*- coding: utf-8 -*-
import os, glob, re

base = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru\app\products"

# dir -> (title, description)
meta = {
    "st-718": ("ST-718 Travel Iron | Compact Ceramic Soleplate | XINGYUE",
        "ST-718 compact travel iron with ceramic soleplate, 1000W power and 140ml water tank. Professional garment care from XINGYUE manufacturer."),
    "st-717": ("ST-717 Travel Iron | Portable Steam Iron | XINGYUE",
        "ST-717 portable travel iron with 1200W fast heating and ceramic soleplate. Convenient travel ironing solution from XINGYUE."),
    "st-588": ("ST-588 Travel Iron | Dry & Steam Function | XINGYUE",
        "ST-588 compact travel iron with dry and steam function, 1200W power and 140ml water tank. Daily travel solution from XINGYUE."),
    "st-812": ("ST-812 Travel Iron | Lightweight Portable Iron | XINGYUE",
        "ST-812 lightweight travel iron with 160ml tank and powerful steam. Quick wrinkle removal for global travelers from XINGYUE."),
    "st-8807": ("ST-8807 Travel Iron | 1300W Powerful Steam | XINGYUE",
        "ST-8807 professional travel iron with 1300W powerful steam and ceramic soleplate. Compact design for global travelers from XINGYUE."),
    "st-8808": ("ST-8808 Travel Iron | Foldable Steam Iron | XINGYUE",
        "ST-8808 travel iron with 190ml water tank, ceramic soleplate and foldable travel design. Versatile ironing from XINGYUE."),
    "st-817": ("ST-817 Travel Iron | LCD Display & Sterilization | XINGYUE",
        "ST-817 travel iron with digital LCD display, 4-range fabric control and steam sterilization. Premium fabric care from XINGYUE."),
    "st-200a": ("ST-200A Travel Iron | Rotating Handle Iron | XINGYUE",
        "ST-200A portable garment iron with 180-degree rotating handle, 190ml tank and ceramic soleplate. Multi-angle steaming from XINGYUE."),
    "st-815": ("ST-815 Garment Steamer | 1600W Handheld Steamer | XINGYUE",
        "ST-815 handheld garment steamer with 1600W powerful steam, 340ml tank and dry/steam modes. Professional garment care from XINGYUE."),
    "6617": ("6617 Garment Steamer | 1800W Ceramic Panel | XINGYUE",
        "6617 garment steamer with ceramic steam panel, 1800W power, 260ml tank and auto power off. Professional care from XINGYUE."),
    "900a": ("900A Garment Steamer | Stainless Steel Panel | XINGYUE",
        "900A compact garment steamer with stainless steel panel, 200ml tank and 3 steam gears. Portable steam care from XINGYUE."),
    "6618": ("6618 Garment Steamer | Foldable 3-Mode Steamer | XINGYUE",
        "6618 foldable garment steamer with stainless steel panel, 150ml tank and 3 steam modes. Travel friendly design from XINGYUE."),
    "st-s1001": ("ST-S1001 Steam Iron | 2800W Powerful | XINGYUE",
        "ST-S1001 powerful steam iron with up to 2800W, 330ml water tank and adjustable steam. Professional household ironing from XINGYUE."),
    "st-s1002": ("ST-S1002 Steam Iron | 3000W Ultra Power | XINGYUE",
        "ST-S1002 ultra powerful 3000W steam iron with 420ml large water tank and auto shut-off. Premium garment care from XINGYUE."),
    "st-s1003": ("ST-S1003 Steam Iron | Ceramic Soleplate | XINGYUE",
        "ST-S1003 steam iron with 2800W power, 330ml tank and ceramic/non-stick soleplate options. Professional ironing from XINGYUE."),
    "st-s1004": ("ST-S1004 Steam Iron | Self-Clean System | XINGYUE",
        "ST-S1004 self-clean steam iron with 2800W power, 330ml tank and anti-calc system. Easy maintenance from XINGYUE."),
    "9002": ("9002 Vacuum Garment Steamer | 1500W LED Display | XINGYUE",
        "9002 vacuum garment steamer with 1500W power, 400ml detachable tank and LED display. Professional vacuum steam care from XINGYUE."),
    "9003": ("9003 Vacuum Garment Steamer | 3-in-1 Technology | XINGYUE",
        "9003 3-in-1 vacuum garment steamer with dry, steam and vacuum functions, dual-level suction up to 5kPa. Professional care from XINGYUE."),
    "9004": ("9004 Vacuum Garment Steamer | Rotatable Head | XINGYUE",
        "9004 vacuum garment steamer with rotatable ironing head, 1300W power and automatic vacuum grip. Professional care from XINGYUE."),
    "9005": ("9005 Vacuum Garment Steamer | Ceramic Soleplate | XINGYUE",
        "9005 vacuum garment steamer with 1500W power, 400ml detachable tank, LED display and ceramic soleplate. Professional care from XINGYUE."),
}

count = 0
for d, (title, desc) in meta.items():
    f = os.path.join(base, d, "layout.tsx")
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    if "export const metadata" in content:
        print("SKIP(already):", d)
        continue
    meta_block = f'''import type {{ Metadata }} from "next";

export const metadata: Metadata = {{
  title: "{title}",
  description: "{desc}",
}};

'''
    new_content = meta_block + content
    with open(f, "w", encoding="utf-8") as fh:
        fh.write(new_content)
    count += 1
    print("OK:", d)
print(f"Done - {count} layouts updated")
