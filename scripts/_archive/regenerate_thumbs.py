import os, glob
from PIL import Image
import numpy as np

ITEMS_DIR = "frontend/public/assets/props/items"
THUMBS_DIR = "frontend/public/assets/props/thumbs"
os.makedirs(THUMBS_DIR, exist_ok=True)

def make_thumb(im, thumb_size=128):
    """Generates crisp high-res 128x128 thumbnail with 100% transparent background."""
    bbox = im.getbbox()
    if not bbox:
        return Image.new('RGBA', (thumb_size, thumb_size), (0, 0, 0, 0))
    cropped = im.crop(bbox)
    cw, ch = cropped.size
    target_inner = int(thumb_size * 0.88)
    scale = min(target_inner / cw, target_inner / ch)
    new_w = max(1, int(round(cw * scale)))
    new_h = max(1, int(round(ch * scale)))
    
    resample = Image.Resampling.NEAREST if scale >= 1.5 else Image.Resampling.LANCZOS
    scaled = cropped.resize((new_w, new_h), resample)
    
    thumb = Image.new('RGBA', (thumb_size, thumb_size), (0, 0, 0, 0))
    ox = (thumb_size - new_w) // 2
    oy = (thumb_size - new_h) // 2
    thumb.paste(scaled, (ox, oy), scaled)
    return thumb

item_files = glob.glob(f"{ITEMS_DIR}/*.png")
print(f"Regenerating {len(item_files)} thumbnails...")

count = 0
for p in item_files:
    item_id = os.path.splitext(os.path.basename(p))[0]
    im = Image.open(p).convert('RGBA')
    
    # Verify item has clean transparency
    arr = np.array(im)
    if arr[0, 0, 3] != 0:
        # If corner is not transparent, clear it!
        # Background is anything matching corner color
        c_bg = arr[0, 0]
        diff = np.abs(arr[:, :, :3] - c_bg[:3])
        match_mask = np.all(diff < 15, axis=2)
        arr[match_mask, 3] = 0
        im = Image.fromarray(arr, 'RGBA')
        im.save(p, "PNG", optimize=True)
    
    thumb = make_thumb(im, 128)
    thumb_path = os.path.join(THUMBS_DIR, f"{item_id}.png")
    thumb.save(thumb_path, "PNG", optimize=True)
    count += 1
    if count % 200 == 0:
        print(f"Processed {count}/{len(item_files)} thumbnails...")

print(f"Successfully generated all {count} transparent thumbnails!")
