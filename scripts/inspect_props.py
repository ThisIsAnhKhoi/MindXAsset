import re

with open("frontend/src/pages/CharacterBuilder/prop_config.js", "r", encoding="utf-8") as f:
    text = f.read()

pattern = re.compile(r'"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"src":\s*"([^"]+)",\s*"thumbSrc":\s*"([^"]+)",\s*"forType":\s*"([^"]+)"')
items = pattern.findall(text)
print(f"Total items found: {len(items)}")

cats = {}
for i_id, name, src, thumb, for_type in items:
    cats.setdefault(for_type, []).append((i_id, name, src))

for c, lst in cats.items():
    print(f"Category: {c} -> {len(lst)} items")
    for i_id, name, src in lst[:4]:
        print(f"   {i_id}: {name} ({src})")
    print(f"   ... last: {lst[-1][0]}: {lst[-1][1]} ({lst[-1][2]})")
