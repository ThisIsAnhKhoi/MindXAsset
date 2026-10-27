import re

with open("frontend/src/pages/CharacterBuilder/prop_config.js", "r", encoding="utf-8") as f:
    text = f.read()

pattern = re.compile(r'"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)"')
items = pattern.findall(text)
hash_names = [name for i_id, name in items if "#" in name]
print(f"Total items with # in name: {len(hash_names)}")
for n in hash_names[:15]:
    print("  ", n)
