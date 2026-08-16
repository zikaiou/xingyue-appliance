import os

base = r"C:\Users\asus\AccioWork\2026-07-17-14-23-26\xru\app\products"
dirs = ["st-718","st-717","st-588","st-812","st-8807","st-8808","st-817","st-200a",
        "st-815","6617","900a","6618",
        "st-s1001","st-s1002","st-s1003","st-s1004",
        "9002","9003","9004","9005"]
for d in dirs:
    f = os.path.join(base, d, "page.tsx")
    with open(f, "r", encoding="utf-8") as fh:
        content = fh.read()
    # fix: <a ... Download Specification ... </Link> -> </a>
    # find the specific block
    if "Download Specification" in content and "</Link>" in content:
        # replace the whole block ending
        import re
        content = re.sub(
            r'(<a href="/specs/[^"]+" download[\s\S]*?Download Specification[\s\S]*?)</Link>',
            r'\1</a>',
            content
        )
        with open(f, "w", encoding="utf-8") as fh:
            fh.write(content)
        print("FIXED:", d)
    else:
        print("SKIP:", d)
print("Done")
