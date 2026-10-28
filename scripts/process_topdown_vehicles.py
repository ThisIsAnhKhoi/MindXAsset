import os
import math
import numpy as np
from PIL import Image, ImageDraw

TOPDOWN_DIR = 'frontend/public/assets/vehicles/topdown'
THUMBS_DIR = 'frontend/public/assets/vehicles/thumbs'
GROUND_DIR = 'frontend/public/assets/vehicles/ground'
ACC_DIR = 'frontend/public/assets/vehicles/accessories'

DIRECTIONS = ['SOUTHEAST', 'EAST', 'SOUTH', 'SOUTHWEST', 'WEST', 'NORTH']

def get_bbox(arr):
    ys, xs = np.where(arr[:, :, 3] > 20)
    if len(xs) == 0:
        return None
    return int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())

def center_and_scale_image(im, scale_factor=1.0):
    arr = np.array(im)
    bbox = get_bbox(arr)
    if bbox is None:
        return im, False
    x0, y0, x1, y1 = bbox
    crop = im.crop((x0, y0, x1 + 1, y1 + 1))
    if abs(scale_factor - 1.0) > 0.01:
        nw = max(1, int(round(crop.width * scale_factor)))
        nh = max(1, int(round(crop.height * scale_factor)))
        crop = crop.resize((nw, nh), Image.NEAREST)
    new_im = Image.new('RGBA', (160, 160), (0, 0, 0, 0))
    px = (160 - crop.width) // 2
    py = (160 - crop.height) // 2
    new_im.paste(crop, (px, py))
    return new_im, True

def step1_center_all_vehicles():
    print("=== Step 1: Centering & Scaling all 57 vehicles ===")
    vehicles = sorted([d for d in os.listdir(TOPDOWN_DIR) if os.path.isdir(os.path.join(TOPDOWN_DIR, d))])
    modified_vehicles = set()
    for v in vehicles:
        v_dir = os.path.join(TOPDOWN_DIR, v)
        # Check if bus or limo needs scaling so max dimension <= 112px
        scale_factor = 1.0
        if v == 'bus':
            scale_factor = 112.0 / 142.0  # ~0.788 -> max width 112px (24px margin on each side)
        elif v == 'limo':
            scale_factor = 112.0 / 129.0  # ~0.868 -> max width 112px

        entries = os.listdir(v_dir)
        has_png = any(e.endswith('.png') for e in entries)
        folders = ['.'] if has_png else [e for e in entries if os.path.isdir(os.path.join(v_dir, e))]

        for folder in folders:
            target_dir = v_dir if folder == '.' else os.path.join(v_dir, folder)
            for d in DIRECTIONS:
                f_path = os.path.join(target_dir, f'{d}.png')
                if not os.path.exists(f_path):
                    continue
                im = Image.open(f_path).convert('RGBA')
                arr = np.array(im)
                bbox = get_bbox(arr)
                if not bbox:
                    continue
                x0, y0, x1, y1 = bbox
                cx, cy = (x0 + x1) / 2.0, (y0 + y1) / 2.0
                if abs(cx - 79.5) > 1.2 or abs(cy - 79.5) > 1.2 or abs(scale_factor - 1.0) > 0.01:
                    new_im, _ = center_and_scale_image(im, scale_factor=scale_factor)
                    new_im.save(f_path)
                    modified_vehicles.add(v)

        # Update thumbnail in THUMBS_DIR from SOUTHEAST.png so all thumbs are centered
        ref_sub = '.' if has_png else ('Red' if 'Red' in folders else folders[0])
        se_path = os.path.join(v_dir if ref_sub == '.' else os.path.join(v_dir, ref_sub), 'SOUTHEAST.png')
        if os.path.exists(se_path):
            os.makedirs(THUMBS_DIR, exist_ok=True)
            thumb_path = os.path.join(THUMBS_DIR, f'{v}.png')
            Image.open(se_path).convert('RGBA').save(thumb_path)

    print(f"Centered/scaled {len(modified_vehicles)} vehicles: {sorted(list(modified_vehicles))}")

def rotate_ground_for_direction(base_south_im, direction):
    """
    Given a 160x160 vertical (SOUTH/NORTH) ground tile, produce a clean 160x160 directional tile.
    - SOUTH, NORTH: vertical road
    - EAST, WEST: rotated 90 degrees (horizontal road)
    - SOUTHEAST: rotated +45 degrees (top-left to bottom-right diagonal road)
    - SOUTHWEST: rotated -45 degrees (top-right to bottom-left diagonal road)
    """
    if direction == 'SOUTH':
        return base_south_im.copy()
    if direction == 'NORTH':
        return base_south_im.transpose(Image.FLIP_TOP_BOTTOM)
    if direction == 'EAST':
        return base_south_im.transpose(Image.ROTATE_90)
    if direction == 'WEST':
        return base_south_im.transpose(Image.ROTATE_270)
    return None

def make_road_tile(road_type, direction):
    """
    Procedurally generate crisp pixel-art 160x160 ground tiles for any direction
    with 100% opaque surface (no grey hole!).
    """
    im = Image.new('RGBA', (160, 160), (0, 0, 0, 0))
    arr = np.zeros((160, 160, 4), dtype=np.uint8)
    yy, xx = np.mgrid[0:160, 0:160]

    # Deterministic pixel noise for texture
    noise = ((xx * 374761393 + yy * 668265263) ^ (xx * yy * 1274126177)) & 0xFF
    noise_norm = (noise.astype(np.int16) - 128) // 32  # -4 to +3

    # Coordinate transformation along driving axis:
    # u = longitudinal coordinate along road (-80..+80)
    # v = lateral distance from road centerline (-80..+80)
    dx = xx - 79.5
    dy = yy - 79.5
    if direction in ('SOUTH', 'NORTH'):
        u = dy if direction == 'SOUTH' else -dy
        v = dx
        half_w = 50.0
        curb_w = 6.0
        in_bounds = (xx >= 8) & (xx < 152) & (yy >= 8) & (yy < 152)
    elif direction in ('EAST', 'WEST'):
        u = dx if direction == 'EAST' else -dx
        v = dy
        half_w = 50.0
        curb_w = 6.0
        in_bounds = (xx >= 8) & (xx < 152) & (yy >= 8) & (yy < 152)
    elif direction == 'SOUTHEAST':
        # Driving direction is (+1, +1) / sqrt(2)
        u = (dx + dy) * 0.70710678
        v = (dx - dy) * 0.70710678
        half_w = 44.0
        curb_w = 5.5
        in_bounds = (xx >= 8) & (xx < 152) & (yy >= 8) & (yy < 152) & (np.abs(u) <= 72)
    else:  # SOUTHWEST: driving direction is (-1, +1) / sqrt(2)
        u = (-dx + dy) * 0.70710678
        v = (dx + dy) * 0.70710678
        half_w = 44.0
        curb_w = 5.5
        in_bounds = (xx >= 8) & (xx < 152) & (yy >= 8) & (yy < 152) & (np.abs(u) <= 72)

    abs_v = np.abs(v)
    on_road = in_bounds & (abs_v <= half_w)
    on_curb = in_bounds & (abs_v > half_w - curb_w) & (abs_v <= half_w)
    on_outer_edge = in_bounds & (abs_v > half_w - 1.5) & (abs_v <= half_w)

    if road_type == 'asphalt_road':
        # Dark asphalt surface
        r = np.clip(45 + noise_norm, 0, 255)
        g = np.clip(49 + noise_norm, 0, 255)
        b = np.clip(56 + noise_norm, 0, 255)
        arr[on_road, 0] = r[on_road]
        arr[on_road, 1] = g[on_road]
        arr[on_road, 2] = b[on_road]
        arr[on_road, 3] = 255

        # Concrete sidewalk/curb border
        arr[on_curb] = [107, 114, 128, 255]
        arr[on_outer_edge] = [75, 85, 99, 255]

        # White solid lane lines near edges
        lane_edge = on_road & (abs_v >= half_w - curb_w - 4.0) & (abs_v <= half_w - curb_w - 1.5)
        arr[lane_edge] = [229, 231, 235, 255]

        # Yellow dashed center line
        u_mod = np.mod(np.floor(u + 160), 22)
        center_dash = on_road & (abs_v <= 2.0) & (u_mod < 12)
        arr[center_dash] = [250, 204, 21, 255]

    elif road_type == 'race_track':
        # Smooth dark racing tarmac
        r = np.clip(34 + noise_norm, 0, 255)
        g = np.clip(38 + noise_norm, 0, 255)
        b = np.clip(46 + noise_norm, 0, 255)
        arr[on_road, 0] = r[on_road]
        arr[on_road, 1] = g[on_road]
        arr[on_road, 2] = b[on_road]
        arr[on_road, 3] = 255

        # FIA Red & White alternating curbs
        curb_band = on_road & (abs_v >= half_w - 8.0) & (abs_v <= half_w - 1.0)
        u_stripe = (np.floor((u + 160) / 10.0).astype(int) % 2) == 0
        arr[curb_band & u_stripe] = [239, 68, 68, 255]      # FIA Red
        arr[curb_band & (~u_stripe)] = [248, 250, 252, 255] # FIA White
        arr[on_outer_edge] = [30, 41, 59, 255]

        # Subtle twin tire groove lines on track
        groove = on_road & ((np.abs(abs_v - 16.0) <= 2.0))
        arr[groove, 0] = np.clip(arr[groove, 0] - 6, 0, 255)
        arr[groove, 1] = np.clip(arr[groove, 1] - 6, 0, 255)
        arr[groove, 2] = np.clip(arr[groove, 2] - 6, 0, 255)

        # Start/finish checkered line near u = +42 (front area)
        checker_zone = on_road & (abs_v < half_w - 8.0) & (u >= 38) & (u < 46)
        c_u = (np.floor((u - 38) / 4.0).astype(int))
        c_v = (np.floor((v + 80) / 4.0).astype(int))
        is_white_check = ((c_u + c_v) % 2) == 0
        arr[checker_zone & is_white_check] = [241, 245, 249, 255]
        arr[checker_zone & (~is_white_check)] = [15, 23, 42, 255]

    elif road_type == 'parking_lot':
        # Full parking lot concrete pad
        pad_half = half_w + 6.0
        on_pad = in_bounds & (abs_v <= pad_half)
        r = np.clip(55 + noise_norm, 0, 255)
        g = np.clip(65 + noise_norm, 0, 255)
        b = np.clip(81 + noise_norm, 0, 255)
        arr[on_pad, 0] = r[on_pad]
        arr[on_pad, 1] = g[on_pad]
        arr[on_pad, 2] = b[on_pad]
        arr[on_pad, 3] = 255

        # Outer border
        pad_edge = in_bounds & (abs_v >= pad_half - 2.0) & (abs_v <= pad_half)
        arr[pad_edge] = [107, 114, 128, 255]

        # Yellow parking bay box framing the car (left/right bay lines + front wheel stop)
        bay_side = on_pad & (np.abs(abs_v - 34.0) <= 1.5) & (u >= -54) & (u <= 54)
        bay_back = on_pad & (abs_v <= 35.5) & (np.abs(u + 54.0) <= 1.5)
        wheel_stop = on_pad & (abs_v <= 22.0) & (np.abs(u - 46.0) <= 2.5)
        arr[bay_side | bay_back] = [229, 231, 235, 255]
        arr[wheel_stop] = [250, 204, 21, 255]

    elif road_type == 'dirt_offroad':
        # Organic wavy edge for dirt trail
        wave = 2.5 * np.sin(u * 0.15) + 1.5 * np.cos(u * 0.27)
        on_dirt = in_bounds & (abs_v <= (half_w + wave))
        on_grass_border = in_bounds & (abs_v > (half_w + wave - 5.0)) & (abs_v <= (half_w + wave))

        r = np.clip(120 + noise_norm * 2, 0, 255)
        g = np.clip(85 + noise_norm * 2, 0, 255)
        b = np.clip(58 + noise_norm * 2, 0, 255)
        arr[on_dirt, 0] = r[on_dirt]
        arr[on_dirt, 1] = g[on_dirt]
        arr[on_dirt, 2] = b[on_dirt]
        arr[on_dirt, 3] = 255

        # Darker mud border
        arr[on_grass_border, 0] = np.clip(92 + noise_norm * 2, 0, 255)[on_grass_border]
        arr[on_grass_border, 1] = np.clip(64 + noise_norm * 2, 0, 255)[on_grass_border]
        arr[on_grass_border, 2] = np.clip(42 + noise_norm * 2, 0, 255)[on_grass_border]
        arr[on_grass_border, 3] = 255

        # Dual tire ruts along the trail
        ruts = on_dirt & (np.abs(abs_v - 16.0) <= 3.5)
        u_tread = (np.floor((u + 160) / 4.0).astype(int) % 2) == 0
        arr[ruts, 0] = np.clip(arr[ruts, 0] - 18, 0, 255)
        arr[ruts, 1] = np.clip(arr[ruts, 1] - 15, 0, 255)
        arr[ruts, 2] = np.clip(arr[ruts, 2] - 12, 0, 255)
        arr[ruts & u_tread, 0] = np.clip(arr[ruts & u_tread, 0] - 8, 0, 255)

    elif road_type == 'shadow_soft':
        # Directional soft oval drop shadow underneath the car
        dist_sq = (u / 48.0) ** 2 + (v / 28.0) ** 2
        mask = dist_sq <= 1.0
        alpha = np.zeros((160, 160), dtype=np.uint8)
        alpha[mask] = np.clip((1.0 - dist_sq[mask]) * 115, 0, 115).astype(np.uint8)
        arr[:, :, 0] = 15
        arr[:, :, 1] = 23
        arr[:, :, 2] = 42
        arr[:, :, 3] = alpha

    return Image.fromarray(arr, 'RGBA')

def step2_generate_all_grounds():
    print("=== Step 2: Generating 100% opaque directional ground tiles ===")
    os.makedirs(GROUND_DIR, exist_ok=True)
    ground_types = ['asphalt_road', 'race_track', 'parking_lot', 'dirt_offroad', 'shadow_soft']
    for gt in ground_types:
        # Base file (used as thumbnail in CustomizerInspector) = SOUTHEAST or SOUTH
        base_im = make_road_tile(gt, 'SOUTH')
        base_im.save(os.path.join(GROUND_DIR, f'{gt}.png'))
        for d in DIRECTIONS:
            d_im = make_road_tile(gt, d)
            d_im.save(os.path.join(GROUND_DIR, f'{gt}_{d}.png'))
    print("Generated all base and directional ground tiles cleanly.")

def generate_headlights(car_arr, direction):
    """
    Generate dual realistic headlight beams aligned to the vehicle's front bumper & lamps.
    """
    out = np.zeros((160, 160, 4), dtype=np.uint8)
    bbox = get_bbox(car_arr)
    if not bbox:
        return Image.fromarray(out, 'RGBA')
    x0, y0, x1, y1 = bbox
    cx, cy = (x0 + x1) / 2.0, (y0 + y1) / 2.0
    w, h = x1 - x0, y1 - y0
    yy, xx = np.mgrid[0:160, 0:160]

    def add_beam(lx, ly, dir_x, dir_y, length=28.0, spread=0.36):
        dx = xx - lx
        dy = yy - ly
        # Projection along beam direction (forward distance)
        proj = dx * dir_x + dy * dir_y
        # Perpendicular distance from beam axis
        perp = np.abs(-dx * dir_y + dy * dir_x)
        half_cone = 2.2 + proj * spread
        mask = (proj >= -1.5) & (proj <= length) & (perp <= half_cone)
        if not np.any(mask):
            return
        falloff_long = np.clip(1.0 - (proj[mask] / length), 0.0, 1.0) ** 1.15
        falloff_lat = np.clip(1.0 - (perp[mask] / half_cone[mask]), 0.0, 1.0) ** 1.3
        intensity = falloff_long * falloff_lat

        # Bright white-yellow core near lamp (proj < 5)
        is_core = (proj[mask] <= 4.5) & (perp[mask] <= 2.8)
        r = np.where(is_core, 255, 254).astype(np.uint8)
        g = np.where(is_core, 253, 240).astype(np.uint8)
        b = np.where(is_core, 235, 138).astype(np.uint8)
        a = np.clip(intensity * 225 + (is_core * 40), 0, 245).astype(np.uint8)

        # Alpha-max blend into out
        cur_a = out[mask, 3]
        better = a > cur_a
        idx_y, idx_x = np.where(mask)
        by, bx = idx_y[better], idx_x[better]
        out[by, bx, 0] = r[better]
        out[by, bx, 1] = g[better]
        out[by, bx, 2] = b[better]
        out[by, bx, 3] = a[better]

    if direction == 'SOUTH':
        sep = max(6.0, w * 0.27)
        ly = min(132.0, y1 - 3.0)
        beam_len = min(30.0, 158.0 - ly)
        add_beam(cx - sep, ly, 0.0, 1.0, length=beam_len, spread=0.34)
        add_beam(cx + sep, ly, 0.0, 1.0, length=beam_len, spread=0.34)
    elif direction == 'NORTH':
        sep = max(6.0, w * 0.27)
        ly = max(28.0, y0 + 3.0)
        beam_len = min(30.0, ly - 2.0)
        add_beam(cx - sep, ly, 0.0, -1.0, length=beam_len, spread=0.34)
        add_beam(cx + sep, ly, 0.0, -1.0, length=beam_len, spread=0.34)
    elif direction == 'EAST':
        lx = min(134.0, x1 - 3.0)
        beam_len = min(28.0, 158.0 - lx)
        # Side-3/4 view: two front lamps on lower half of front bumper
        add_beam(lx - 2.0, y1 - 12.0, 1.0, 0.0, length=beam_len, spread=0.28)
        add_beam(lx, y1 - 6.0, 1.0, 0.0, length=beam_len, spread=0.28)
    elif direction == 'WEST':
        lx = max(26.0, x0 + 3.0)
        beam_len = min(28.0, lx - 2.0)
        add_beam(lx + 2.0, y1 - 12.0, -1.0, 0.0, length=beam_len, spread=0.28)
        add_beam(lx, y1 - 6.0, -1.0, 0.0, length=beam_len, spread=0.28)
    elif direction == 'SOUTHEAST':
        # Find front bumper center along (+1, +1)
        ys_c, xs_c = np.where(car_arr[:, :, 3] > 40)
        s = xs_c + ys_c
        max_s = np.percentile(s, 97)
        front_pts = np.where(s >= max_s - 4)[0]
        fx = float(np.mean(xs_c[front_pts]))
        fy = float(np.mean(ys_c[front_pts]))
        d_xy = 0.70710678
        # Two lamps offset along perpendicular (-1, +1) and (+1, -1)
        add_beam(fx - 6.5, fy + 5.5, d_xy, d_xy, length=26.0, spread=0.32)
        add_beam(fx + 6.5, fy - 5.5, d_xy, d_xy, length=26.0, spread=0.32)
    elif direction == 'SOUTHWEST':
        ys_c, xs_c = np.where(car_arr[:, :, 3] > 40)
        s = (160 - xs_c) + ys_c
        max_s = np.percentile(s, 97)
        front_pts = np.where(s >= max_s - 4)[0]
        fx = float(np.mean(xs_c[front_pts]))
        fy = float(np.mean(ys_c[front_pts]))
        d_xy = 0.70710678
        add_beam(fx + 6.5, fy + 5.5, -d_xy, d_xy, length=26.0, spread=0.32)
        add_beam(fx - 6.5, fy - 5.5, -d_xy, d_xy, length=26.0, spread=0.32)

    return Image.fromarray(out, 'RGBA')

def generate_nitro(car_arr, direction):
    """
    Generate twin nitro exhaust flames at the rear bumper shooting opposite to driving direction.
    """
    out = np.zeros((160, 160, 4), dtype=np.uint8)
    bbox = get_bbox(car_arr)
    if not bbox:
        return Image.fromarray(out, 'RGBA')
    x0, y0, x1, y1 = bbox
    cx, cy = (x0 + x1) / 2.0, (y0 + y1) / 2.0
    w, h = x1 - x0, y1 - y0
    yy, xx = np.mgrid[0:160, 0:160]

    def add_flame(nx, ny, dir_x, dir_y, length=20.0):
        dx = xx - nx
        dy = yy - ny
        proj = dx * dir_x + dy * dir_y
        perp = np.abs(-dx * dir_y + dy * dir_x)
        # Tapered flame width: widens quickly then narrows to a sharp tip
        norm_p = np.clip(proj / length, 0.0, 1.0)
        flame_w = 4.2 * np.sin(norm_p * math.pi * 0.85) + 1.2 * (1.0 - norm_p)
        mask = (proj >= -1.0) & (proj <= length) & (perp <= flame_w)
        if not np.any(mask):
            return
        p_val = norm_p[mask]
        l_val = perp[mask] / np.maximum(0.5, flame_w[mask])

        # Color zones: inner cyan/white core -> mid yellow -> outer orange/red
        r = np.zeros_like(p_val, dtype=np.uint8)
        g = np.zeros_like(p_val, dtype=np.uint8)
        b = np.zeros_like(p_val, dtype=np.uint8)
        a = np.clip((1.0 - p_val * 0.75) * (1.0 - l_val * 0.5) * 245, 0, 250).astype(np.uint8)

        # Outer flame (orange-red)
        r[:] = 249; g[:] = 115; b[:] = 22
        # Tip (red)
        tip = p_val > 0.65
        r[tip] = 239; g[tip] = 68; b[tip] = 68
        # Mid flame (bright yellow)
        mid = (p_val <= 0.6) & (l_val <= 0.65)
        r[mid] = 250; g[mid] = 204; b[mid] = 21
        # Blue plasma ring
        plasma = (p_val <= 0.38) & (l_val <= 0.55)
        r[plasma] = 56; g[plasma] = 189; b[plasma] = 248
        # White-hot core
        core = (p_val <= 0.22) & (l_val <= 0.4)
        r[core] = 240; g[core] = 249; b[core] = 255
        a[core] = 255

        cur_a = out[mask, 3]
        better = a >= cur_a
        idx_y, idx_x = np.where(mask)
        by, bx = idx_y[better], idx_x[better]
        out[by, bx, 0] = r[better]
        out[by, bx, 1] = g[better]
        out[by, bx, 2] = b[better]
        out[by, bx, 3] = a[better]

    if direction == 'SOUTH':
        # Rear is at top (y0)
        ny = max(22.0, y0 + 2.0)
        flen = min(20.0, ny - 2.0)
        add_flame(cx - 5.0, ny, 0.0, -1.0, length=flen)
        add_flame(cx + 5.0, ny, 0.0, -1.0, length=flen)
    elif direction == 'NORTH':
        # Rear is at bottom (y1)
        ny = min(138.0, y1 - 2.0)
        flen = min(20.0, 158.0 - ny)
        add_flame(cx - 5.0, ny, 0.0, 1.0, length=flen)
        add_flame(cx + 5.0, ny, 0.0, 1.0, length=flen)
    elif direction == 'EAST':
        # Rear is at left lower bumper
        nx = max(22.0, x0 + 2.0)
        flen = min(20.0, nx - 2.0)
        add_flame(nx, y1 - 9.0, -1.0, 0.0, length=flen)
        add_flame(nx, y1 - 5.0, -1.0, 0.0, length=flen * 0.85)
    elif direction == 'WEST':
        # Rear is at right lower bumper
        nx = min(138.0, x1 - 2.0)
        flen = min(20.0, 158.0 - nx)
        add_flame(nx, y1 - 9.0, 1.0, 0.0, length=flen)
        add_flame(nx, y1 - 5.0, 1.0, 0.0, length=flen * 0.85)
    elif direction == 'SOUTHEAST':
        # Rear is top-left (min x + y)
        ys_c, xs_c = np.where(car_arr[:, :, 3] > 40)
        s = xs_c + ys_c
        min_s = np.percentile(s, 3)
        rear_pts = np.where(s <= min_s + 4)[0]
        rx = float(np.mean(xs_c[rear_pts]))
        ry = float(np.mean(ys_c[rear_pts]))
        d_xy = -0.70710678
        add_flame(rx - 3.0, ry + 3.0, d_xy, d_xy, length=19.0)
        add_flame(rx + 3.0, ry - 3.0, d_xy, d_xy, length=19.0)
    elif direction == 'SOUTHWEST':
        ys_c, xs_c = np.where(car_arr[:, :, 3] > 40)
        s = (160 - xs_c) + ys_c
        min_s = np.percentile(s, 3)
        rear_pts = np.where(s <= min_s + 4)[0]
        rx = float(np.mean(xs_c[rear_pts]))
        ry = float(np.mean(ys_c[rear_pts]))
        d_xy = 0.70710678
        add_flame(rx + 3.0, ry + 3.0, d_xy, -d_xy, length=19.0)
        add_flame(rx - 3.0, ry - 3.0, d_xy, -d_xy, length=19.0)

    return Image.fromarray(out, 'RGBA')

def generate_roof_beacon(car_arr, direction):
    """
    Generate a crisp Police/Emergency Red-Blue LED lightbar placed accurately on the cabin roof!
    """
    im = Image.new('RGBA', (160, 160), (0, 0, 0, 0))
    bbox = get_bbox(car_arr)
    if not bbox:
        return im
    x0, y0, x1, y1 = bbox
    cx, cy = int(round((x0 + x1) / 2.0)), int(round((y0 + y1) / 2.0))
    arr = np.zeros((160, 160, 4), dtype=np.uint8)
    yy, xx = np.mgrid[0:160, 0:160]

    # Determine roof center (bx, by) based on direction and car anatomy
    if direction == 'SOUTH':
        bx, by = cx, cy - 3
    elif direction == 'NORTH':
        bx, by = cx, cy + 1
    elif direction == 'EAST':
        # In side view (EAST), roof ridge is near top of bounding box, slightly behind center
        bx, by = cx - 3, y0 + 5
    elif direction == 'WEST':
        bx, by = cx + 3, y0 + 5
    elif direction == 'SOUTHEAST':
        bx, by = cx - 2, cy - 6
    else:  # SOUTHWEST
        bx, by = cx + 2, cy - 6

    # Draw soft red & blue glow halos around the two pods
    if direction in ('EAST', 'WEST'):
        rx, ry = bx - 3, by
        blx, bly = bx + 3, by
    elif direction == 'SOUTHEAST':
        rx, ry = bx - 3, by + 3
        blx, bly = bx + 3, by - 3
    elif direction == 'SOUTHWEST':
        rx, ry = bx - 3, by - 3
        blx, bly = bx + 3, by + 3
    else:
        rx, ry = bx - 5, by
        blx, bly = bx + 5, by

    dist_r = np.sqrt((xx - rx) ** 2 + (yy - ry) ** 2)
    dist_b = np.sqrt((xx - blx) ** 2 + (yy - bly) ** 2)

    # Red glow
    mask_rg = dist_r <= 9.0
    arr[mask_rg, 0] = 239
    arr[mask_rg, 1] = 68
    arr[mask_rg, 2] = 68
    arr[mask_rg, 3] = np.clip((1.0 - dist_r[mask_rg] / 9.0) * 135, 0, 135).astype(np.uint8)

    # Blue glow
    mask_bg = dist_b <= 9.0
    b_alpha = np.clip((1.0 - dist_b[mask_bg] / 9.0) * 135, 0, 135).astype(np.uint8)
    better_b = b_alpha > arr[mask_bg, 3]
    idx_y, idx_x = np.where(mask_bg)
    by_i, bx_i = idx_y[better_b], idx_x[better_b]
    arr[by_i, bx_i, 0] = 59
    arr[by_i, bx_i, 1] = 130
    arr[by_i, bx_i, 2] = 246
    arr[by_i, bx_i, 3] = b_alpha[better_b]

    # Solid pixel-art LED lightbar housing & pods
    # Center dark mount
    arr[max(0, by-1):min(160, by+2), max(0, bx-2):min(160, bx+3)] = [31, 41, 55, 255]
    # Red pod + white-red LED core
    arr[max(0, ry-2):min(160, ry+2), max(0, rx-2):min(160, rx+3)] = [220, 38, 38, 255]
    arr[ry, rx] = [254, 202, 202, 255]
    # Blue pod + white-blue LED core
    arr[max(0, bly-2):min(160, bly+2), max(0, blx-2):min(160, blx+3)] = [37, 99, 235, 255]
    arr[bly, blx] = [191, 219, 254, 255]

    return Image.fromarray(arr, 'RGBA')

def generate_drift_smoke(car_arr, direction):
    """
    Generate crisp pixel-art tire smoke puffs billowing behind the rear wheels.
    """
    arr = np.zeros((160, 160, 4), dtype=np.uint8)
    bbox = get_bbox(car_arr)
    if not bbox:
        return Image.fromarray(arr, 'RGBA')
    x0, y0, x1, y1 = bbox
    cx, cy = (x0 + x1) / 2.0, (y0 + y1) / 2.0
    w, h = x1 - x0, y1 - y0
    yy, xx = np.mgrid[0:160, 0:160]

    puffs = []
    if direction == 'SOUTH':
        puffs = [
            (x0 - 2, y0 + 8, 6.5, 190), (x0 - 4, y0 - 1, 8.0, 160), (x0 - 6, y0 - 10, 9.5, 115),
            (x1 + 2, y0 + 8, 6.5, 190), (x1 + 4, y0 - 1, 8.0, 160), (x1 + 6, y0 - 10, 9.5, 115),
        ]
    elif direction == 'NORTH':
        puffs = [
            (x0 - 2, y1 - 8, 6.5, 190), (x0 - 4, y1 + 1, 8.0, 160), (x0 - 6, y1 + 10, 9.5, 115),
            (x1 + 2, y1 - 8, 6.5, 190), (x1 + 4, y1 + 1, 8.0, 160), (x1 + 6, y1 + 10, 9.5, 115),
        ]
    elif direction == 'EAST':
        puffs = [
            (x0 + 12, y1 + 1, 6.0, 200), (x0 + 3, y1 + 2, 7.5, 175),
            (x0 - 6, y1 + 1, 9.0, 145), (x0 - 15, y1 - 1, 10.5, 105),
        ]
    elif direction == 'WEST':
        puffs = [
            (x1 - 12, y1 + 1, 6.0, 200), (x1 - 3, y1 + 2, 7.5, 175),
            (x1 + 6, y1 + 1, 9.0, 145), (x1 + 15, y1 - 1, 10.5, 105),
        ]
    elif direction == 'SOUTHEAST':
        puffs = [
            (cx - 16, cy - 6, 6.5, 195), (cx - 24, cy - 13, 8.0, 165), (cx - 32, cy - 20, 9.5, 120),
            (cx - 4, cy - 20, 6.0, 175), (cx - 12, cy - 27, 7.5, 140),
        ]
    else:  # SOUTHWEST
        puffs = [
            (cx + 16, cy - 6, 6.5, 195), (cx + 24, cy - 13, 8.0, 165), (cx + 32, cy - 20, 9.5, 120),
            (cx + 4, cy - 20, 6.0, 175), (cx + 12, cy - 27, 7.5, 140),
        ]

    for px, py, rad, max_a in puffs:
        dist = np.sqrt((xx - px) ** 2 + (yy - py) ** 2)
        mask = dist <= rad
        # Quantized 3-step pixel-art smoke shading
        norm_d = dist[mask] / rad
        shade = np.where(norm_d < 0.45, 243, np.where(norm_d < 0.75, 209, 156)).astype(np.uint8)
        alpha = np.where(norm_d < 0.5, max_a, np.where(norm_d < 0.8, int(max_a * 0.75), int(max_a * 0.45))).astype(np.uint8)
        cur_a = arr[mask, 3]
        better = alpha > cur_a
        idx_y, idx_x = np.where(mask)
        by, bx = idx_y[better], idx_x[better]
        arr[by, bx, 0] = shade[better]
        arr[by, bx, 1] = shade[better]
        arr[by, bx, 2] = np.clip(shade[better] + 6, 0, 255)
        arr[by, bx, 3] = alpha[better]

    return Image.fromarray(arr, 'RGBA')

def generate_racing_stripes(car_arr, direction):
    """
    Generate twin GT racing stripes strictly masked to the vehicle's painted body pixels
    (excluding windows, tires, and outlines).
    """
    out = np.zeros((160, 160, 4), dtype=np.uint8)
    bbox = get_bbox(car_arr)
    if not bbox:
        return Image.fromarray(out, 'RGBA')
    x0, y0, x1, y1 = bbox
    cx, cy = (x0 + x1) / 2.0, (y0 + y1) / 2.0
    yy, xx = np.mgrid[0:160, 0:160]

    r = car_arr[:, :, 0].astype(np.int16)
    g = car_arr[:, :, 1].astype(np.int16)
    b = car_arr[:, :, 2].astype(np.int16)
    a = car_arr[:, :, 3]

    # Identify painted body pixels (exclude dark outlines/tires and grey-blue windshield glass)
    lum = (r + g + b) / 3.0
    max_c = np.maximum(np.maximum(r, g), b)
    min_c = np.minimum(np.minimum(r, g), b)
    sat = max_c - min_c
    is_glass = (b >= r) & (b >= g - 5) & (sat < 42) & (lum > 45) & (lum < 185)
    is_dark = lum < 38
    is_body = (a > 200) & (~is_glass) & (~is_dark)

    dx = xx - cx
    dy = yy - cy
    if direction in ('SOUTH', 'NORTH'):
        perp = np.abs(dx)
    elif direction in ('EAST', 'WEST'):
        # Side stripe along mid-door + roof stripe
        perp = np.minimum(np.abs(dy - 2.0), np.abs(yy - (y0 + 5.0)))
    elif direction == 'SOUTHEAST':
        perp = np.abs(dx - dy) * 0.70710678
    else:  # SOUTHWEST
        perp = np.abs(dx + dy) * 0.70710678

    # Twin GT stripes: two 2.2px bands separated by a 1.6px center gap
    stripe_mask = is_body & (perp >= 1.2) & (perp <= 3.8)
    if np.any(stripe_mask):
        # Preserve original body shading lighting multiplier
        shade_mult = np.clip(lum[stripe_mask] / 170.0, 0.55, 1.05)
        out[stripe_mask, 0] = np.clip(248 * shade_mult, 0, 255).astype(np.uint8)
        out[stripe_mask, 1] = np.clip(250 * shade_mult, 0, 255).astype(np.uint8)
        out[stripe_mask, 2] = np.clip(252 * shade_mult, 0, 255).astype(np.uint8)
        out[stripe_mask, 3] = 235

    return Image.fromarray(out, 'RGBA')

def step3_generate_all_accessories():
    print("=== Step 3: Generating pixel-accurate accessories for all 57 vehicles ===")
    vehicles = sorted([d for d in os.listdir(TOPDOWN_DIR) if os.path.isdir(os.path.join(TOPDOWN_DIR, d))])
    for v in vehicles:
        v_dir = os.path.join(TOPDOWN_DIR, v)
        entries = os.listdir(v_dir)
        has_png = any(e.endswith('.png') for e in entries)
        ref_sub = '.' if has_png else ('Red' if 'Red' in entries else entries[0])
        ref_dir = v_dir if ref_sub == '.' else os.path.join(v_dir, ref_sub)

        v_acc_dir = os.path.join(ACC_DIR, v)
        os.makedirs(v_acc_dir, exist_ok=True)

        for d in DIRECTIONS:
            car_path = os.path.join(ref_dir, f'{d}.png')
            if not os.path.exists(car_path):
                continue
            car_im = Image.open(car_path).convert('RGBA')
            car_arr = np.array(car_im)

            hl_im = generate_headlights(car_arr, d)
            hl_im.save(os.path.join(v_acc_dir, f'headlights_{d}.png'))

            nt_im = generate_nitro(car_arr, d)
            nt_im.save(os.path.join(v_acc_dir, f'nitro_{d}.png'))

            rb_im = generate_roof_beacon(car_arr, d)
            rb_im.save(os.path.join(v_acc_dir, f'roof_beacon_{d}.png'))

            ds_im = generate_drift_smoke(car_arr, d)
            ds_im.save(os.path.join(v_acc_dir, f'drift_smoke_{d}.png'))

            rs_im = generate_racing_stripes(car_arr, d)
            rs_im.save(os.path.join(v_acc_dir, f'racing_stripes_{d}.png'))

    print(f"Generated 5 accessory types x 6 directions for {len(vehicles)} vehicles.")

if __name__ == '__main__':
    step1_center_all_vehicles()
    step2_generate_all_grounds()
    step3_generate_all_accessories()
