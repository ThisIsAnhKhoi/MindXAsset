import glob, os
from PIL import Image
import numpy as np

def check_folder(folder):
    files = glob.glob(f"{folder}/*.png")
    black_corners = []
    total = len(files)
    for p in files:
        try:
            im = Image.open(p)
            arr = np.array(im)
            if arr.ndim == 3 and arr.shape[2] == 4:
                # check 4 corners
                corners = [arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1]]
                for c in corners:
                    if c[3] > 200 and c[0] < 20 and c[1] < 20 and c[2] < 20:
                        black_corners.append(os.path.basename(p))
                        break
        except Exception as e:
            print("Error checking", p, e)
    return total, black_corners

total_items, black_items = check_folder("frontend/public/assets/props/items")
print(f"Items: {len(black_items)} / {total_items} have black corners")
if black_items:
    print("Sample black items:", black_items[:10])

total_thumbs, black_thumbs = check_folder("frontend/public/assets/props/thumbs")
print(f"Thumbs: {len(black_thumbs)} / {total_thumbs} have black corners")
if black_thumbs:
    print("Sample black thumbs:", black_thumbs[:10])
