import os, re

base = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru\app\products"

cats = {
    "Travel Iron": [
        ("ST-718", "/images/products/ST-718.jpg", "650g compact travel iron with ceramic soleplate"),
        ("ST-717", "/images/products/ST-717.jpg", "1200W portable travel iron with fast heating"),
        ("ST-588", "/images/products/ST-588.png", "Compact travel iron with dry & steam function"),
        ("ST-812", "/images/products/ST-812.png", "Lightweight travel iron with 160ml tank"),
        ("ST-8807", "/images/products/ST-8807.jpg", "1300W professional travel iron"),
        ("ST-8808", "/images/products/ST-8808.png", "Foldable travel iron with 190ml tank"),
        ("ST-817", "/images/products/ST-817.png", "Travel iron with digital LCD display"),
        ("ST-200A", "/images/products/ST-200A.jpg", "Portable iron with 180-degree rotating handle"),
    ],
    "Garment Steamer": [
        ("ST-815", "/images/products/ST-815.png", "1600W handheld steamer with 340ml tank"),
        ("6617", "/images/products/6617.jpg", "1800W steamer with ceramic panel"),
        ("900A", "/images/products/900A.png", "Compact steamer with stainless steel panel"),
        ("6618", "/images/products/6618.jpg", "Foldable steamer with 3 steam modes"),
    ],
    "Steam Iron": [
        ("ST-S1001", "/images/products/ST-S1001.jpg", "2800W steam iron with 330ml tank"),
        ("ST-S1002", "/images/products/ST-S1002.jpg", "3000W steam iron with 420ml tank"),
        ("ST-S1003", "/images/products/ST-S1003.jpg", "2800W with ceramic/non-stick soleplate"),
        ("ST-S1004", "/images/products/ST-S1004.jpg", "2800W self-clean steam iron"),
    ],
    "Vacuum Garment Steamer": [
        ("9002", "/images/products/9002.jpg", "1500W vacuum steamer with 400ml tank"),
        ("9003", "/images/products/9003.png", "3-in-1 with dual-level steam & suction"),
        ("9004", "/images/products/9004.jpg", "Rotatable head, compact 1300W"),
        ("9005", "/images/products/9005.jpg", "1500W with LED display & ceramic plate"),
    ],
}

dir_cat = {
    "st-718":"Travel Iron","st-717":"Travel Iron","st-588":"Travel Iron","st-812":"Travel Iron",
    "st-8807":"Travel Iron","st-8808":"Travel Iron","st-817":"Travel Iron","st-200a":"Travel Iron",
    "st-815":"Garment Steamer","6617":"Garment Steamer","900a":"Garment Steamer","6618":"Garment Steamer",
    "st-s1001":"Steam Iron","st-s1002":"Steam Iron","st-s1003":"Steam Iron","st-s1004":"Steam Iron",
    "9002":"Vacuum Garment Steamer","9003":"Vacuum Garment Steamer","9004":"Vacuum Garment Steamer","9005":"Vacuum Garment Steamer",
}

for d, cat in dir_cat.items():
    f = os.path.join(base, d, "page.tsx")
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()

    if "relatedItems" in content:
        print("SKIP(already):", d)
        continue

    # import
    if 'import RelatedProducts from "@/components/RelatedProducts";' not in content:
        content = content.replace(
            'import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";',
            'import { ArrowLeft, ArrowRight, Check, Download } from "lucide-react";\nimport RelatedProducts from "@/components/RelatedProducts";'
        )

    cur = d.upper().replace("-", "")
    related = [(m, img, desc) for (m, img, desc) in cats[cat] if m.replace("-", "") != cur][:4]
    related_json = "[" + ",".join(
        f'{{ model: "{m}", img: "{img}", desc: "{desc}" }}' for (m, img, desc) in related
    ) + "]"

    # anchor: final CTA section opening
    anchor = '<section className="border-t border-white/8 py-20 text-center px-6">'
    if anchor not in content:
        print("ANCHOR NOT FOUND:", d)
        continue
    insert = f'      <RelatedProducts title="Related Products" products={{relatedItems}} />\n\n'
    content = content.replace(anchor, insert + anchor, 1)

    content = content.replace(
        "  return (\n    <div className=\"bg-[#050507] text-white min-h-screen\">",
        f"  const relatedItems = {related_json};\n\n  return (\n    <div className=\"bg-[#050507] text-white min-h-screen\">"
    )
    with open(f, "w", encoding="utf-8") as fh:
        fh.write(content)
    print("OK:", d, f"({len(related)} related)")
print("Done")
