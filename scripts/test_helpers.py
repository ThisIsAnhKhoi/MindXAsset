import os, sys, glob, zipfile
from PIL import Image
import numpy as np

def defringe_white(crop, t_low=175.0, t_high=248.0):
    arr = np.array(crop.convert('RGBA')).astype(np.float32)
    rgb = arr[:, :, :3]
    min_c = np.min(rgb, axis=2)
    
    alpha = np.ones_like(min_c) * 255.0
    
    # Pure white background
    alpha[min_c >= t_high] = 0.0
    
    # Transition zone: smooth alpha dropoff
    trans_mask = (min_c >= t_low) & (min_c < t_high)
    ratio = (min_c[trans_mask] - t_low) / (t_high - t_low)
    alpha[trans_mask] = 255.0 * (1.0 - ratio)
    
    # Un-multiply RGB
    a_norm = alpha / 255.0
    a_safe = np.maximum(a_norm, 0.01)[:, :, np.newaxis]
    clean_rgb = (rgb - (1.0 - a_safe) * 255.0) / a_safe
    clean_rgb = np.clip(clean_rgb, 0, 255)
    clean_rgb[alpha == 0] = 0
    
    out = np.dstack([clean_rgb, alpha]).astype(np.uint8)
    return Image.fromarray(out, 'RGBA')

def fit_to_canvas(im, canvas_size=48, target_inner=42):
    bbox = im.getbbox()
    if not bbox:
        return Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    cropped = im.crop(bbox)
    cw, ch = cropped.size
    scale = min(target_inner / cw, target_inner / ch)
    # If already pixel art, we can scale cleanly
    new_w = max(1, int(round(cw * scale)))
    new_h = max(1, int(round(ch * scale)))
    
    # Use Lanczos for smooth downscaling / clean crisp upscaling
    resample = Image.Resampling.LANCZOS if scale < 1.0 else Image.Resampling.NEAREST
    scaled = cropped.resize((new_w, new_h), resample)
    
    canvas = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
    ox = (canvas_size - new_w) // 2
    oy = (canvas_size - new_h) // 2
    canvas.paste(scaled, (ox, oy), scaled)
    return canvas

print("Helper functions ready.")
