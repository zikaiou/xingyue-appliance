import os, glob

base = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru\app\products"
fixed = 0
for f in glob.glob(os.path.join(base, "*", "layout.tsx")):
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    if "`n" in content:
        content = content.replace("`n    category:", "\n    category:")
        with open(f, "w", encoding="utf-8") as fh:
            fh.write(content)
        fixed += 1
        print("FIXED:", os.path.basename(os.path.dirname(f)))
print("Total fixed:", fixed)
