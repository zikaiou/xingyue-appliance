import os, glob, re, json

base = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru\app\products"
site = "https://www.xingyue-appliance.com"

# Product dir -> (display model, category, video url or None)
products = {
    "st-718":   ("ST-718", "Travel Iron", "/videos/st718.mp4"),
    "st-717":   ("ST-717", "Travel Iron", "/videos/st717.mp4"),
    "st-588":   ("ST-588", "Travel Iron", "/videos/st588.mp4"),
    "st-812":   ("ST-812", "Travel Iron", None),
    "st-8807":  ("ST-8807", "Travel Iron", "/videos/st8807.mp4"),
    "st-8808":  ("ST-8808", "Travel Iron", "/videos/st8808.mp4"),
    "st-817":   ("ST-817", "Travel Iron", None),
    "st-200a":  ("ST-200A", "Travel Iron", None),
    "st-815":   ("ST-815", "Garment Steamer", "/videos/st815.mp4"),
    "6617":     ("6617", "Garment Steamer", "/videos/6617.mp4"),
    "900a":     ("900A", "Garment Steamer", None),
    "6618":     ("6618", "Garment Steamer", "/videos/6618.mp4"),
    "st-s1001": ("ST-S1001", "Steam Iron", "/videos/sts1001.mp4"),
    "st-s1002": ("ST-S1002", "Steam Iron", "/videos/sts1002.mp4"),
    "st-s1003": ("ST-S1003", "Steam Iron", None),
    "st-s1004": ("ST-S1004", "Steam Iron", None),
    "9002":     ("9002", "Vacuum Garment Steamer", None),
    "9003":     ("9003", "Vacuum Garment Steamer", None),
    "9004":     ("9004", "Vacuum Garment Steamer", None),
    "9005":     ("9005", "Vacuum Garment Steamer", None),
}

def esc(s):
    return s.replace("\\", "\\\\").replace('"', '\\"')

for d, (model, cat, video) in products.items():
    f = os.path.join(base, d, "layout.tsx")
    if not os.path.exists(f):
        print("MISSING:", d)
        continue
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()

    # Build breadcrumb schema constant
    breadcrumb_const = f'''  const breadcrumbSchema = {{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {{ "@type": "ListItem", position: 1, name: "Home", item: "{site}" }},
      {{ "@type": "ListItem", position: 2, name: "Products", item: "{site}/products" }},
      {{ "@type": "ListItem", position: 3, name: "{esc(model)}", item: "{site}/products/{d}" }}
    ],
  }};
'''

    video_const = ""
    video_script = ""
    if video:
        video_const = f'''  const videoSchema = {{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "{esc(model)} Product Demo Video",
    description: "{esc(model)} {cat} product demonstration by XINGYUE manufacturer.",
    thumbnailUrl: ["{site}/images/products/{d}/main.jpg"],
    contentUrl: "{site}{video}",
    uploadDate: "2026-07-01",
  }};
'''
        video_script = '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
'''

    # Insert constants after "const productSchema = {" opening? Simpler: insert before return
    # Replace the return block start to inject new constants + scripts
    if "const breadcrumbSchema" in content:
        print("SKIP(already):", d)
        continue

    # Insert constants right after the productSchema closing "};" — find the return
    new_content = content.replace(
        "  return (\n    <>",
        "  const breadcrumbSchema = " + breadcrumb_const.split("const breadcrumbSchema = ",1)[1] +
        (video_const if video else "") +
        "  return (\n    <>"
    )
    # Add scripts before {children}
    new_content = new_content.replace(
        "      />\n      {children}",
        "      />\n" +
        '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
''' + video_script +
        "      {children}"
    )
    with open(f, "w", encoding="utf-8") as fh:
        fh.write(new_content)
    print("OK:", d, ("+video" if video else ""))
print("Done")
