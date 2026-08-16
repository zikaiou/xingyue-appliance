import os, re

base = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru\app\products"

# dir -> model lower (for pdf filename)
dirs = ["st-718","st-717","st-588","st-812","st-8807","st-8808","st-817","st-200a",
        "st-815","6617","900a","6618",
        "st-s1001","st-s1002","st-s1003","st-s1004",
        "9002","9003","9004","9005"]

for d in dirs:
    f = os.path.join(base, d, "page.tsx")
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    model = d.upper()
    pdf_path = f"/specs/{d}-spec.pdf"
    # Replace the Download Specification link href="#"
    pattern = r'(<Link href="#" className="px-5 py-3 border border-white/20[^"]*"[^>]*>)'
    m = re.search(pattern, content)
    if not m:
        # fallback: match any Download Specification link
        m = re.search(r'(<Link\s+href="#"[\s\S]*?Download Specification[\s\S]*?</Link>)', content)
    if not m:
        print("NOT FOUND:", d)
        continue
    old = m.group(1)
    new = f'<a href="{pdf_path}" download className="px-5 py-3 border border-white/20 text-white font-semibold rounded-full text-sm hover:border-white/50 transition inline-flex items-center gap-2">'
    # For fallback whole-link match, replace differently
    if "Download Specification" in old:
        new = old.replace('href="#"', f'href="{pdf_path}"').replace("</Link>", "</a>")
        content = content.replace(old, new, 1)
    else:
        content = content.replace(old, new, 1)
    with open(f, "w", encoding="utf-8") as fh:
        fh.write(content)
    print("OK:", d)
print("Done")
