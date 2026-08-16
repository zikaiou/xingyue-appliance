# -*- coding: utf-8 -*-
import os

base = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru\app\blog"

# dir -> (new title, new description)
meta = {
    "travel-iron-guide": (
        "How to Choose a Travel Iron for Global Markets | Travel Iron Manufacturer XINGYUE",
        "Travel iron manufacturer guide: voltage compatibility, ceramic soleplate, tank capacity and OEM options. Source professional travel irons factory-direct from XINGYUE China.",
    ),
    "oem-guide": (
        "How OEM Garment Care Manufacturing Works | OEM Supplier XINGYUE",
        "OEM garment care manufacturing guide for brands: concept, design, prototype, mass production and shipping. Partner with XINGYUE, a factory-direct OEM supplier in China.",
    ),
    "garment-steamer-guide": (
        "How to Choose a Garment Steamer | Garment Steamer Manufacturer XINGYUE",
        "Garment steamer sourcing guide: power, water tank, steam output and vacuum steamer trends. Buy wholesale garment steamers factory-direct from XINGYUE China.",
    ),
    "vacuum-steamer-guide": (
        "Vacuum Garment Steamer: The Next Big Category | XINGYUE Manufacturer",
        "What is a vacuum garment steamer and why it is growing fast. Discover 3-in-1 vacuum steamers with OEM customization from XINGYUE garment care manufacturer.",
    ),
    "factory-verification-guide": (
        "How to Verify a Garment Care Factory in China | XINGYUE",
        "Buyer's checklist to verify Chinese garment care factories: licenses, video tours, capacity, certifications and samples. Trust a verified travel iron factory - XINGYUE.",
    ),
    "steam-iron-guide": (
        "How to Choose a Steam Iron for Your Market | XINGYUE China",
        "Steam iron sourcing guide: power, soleplate, tank, steam functions and container planning. Source steam irons from XINGYUE, professional China manufacturer.",
    ),
}

for d, (title, desc) in meta.items():
    f = os.path.join(base, d, "page.tsx")
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    # Replace title and description in metadata block
    lines = content.split("\n")
    new_lines = []
    in_meta = False
    replaced_title = False
    replaced_desc = False
    for line in lines:
        if "export const metadata" in line:
            in_meta = True
            new_lines.append(line)
            continue
        if in_meta:
            if 'title: "' in line and not replaced_title:
                new_lines.append(f'  title: "{title}",')
                replaced_title = True
                continue
            if 'description: "' in line and not replaced_desc:
                new_lines.append(f'  description: "{desc}",')
                replaced_desc = True
                continue
            if line.strip() == "};" and replaced_title and replaced_desc:
                in_meta = False
        new_lines.append(line)
    with open(f, "w", encoding="utf-8") as fh:
        fh.write("\n".join(new_lines))
    print("OK:", d, "title_replaced:", replaced_title, "desc_replaced:", replaced_desc)
print("Done")
