#!/usr/bin/env python3
"""
MindXAsset - Cloudinary Asset Uploader & Sync Script
Uploads public static assets or generated outputs to Cloudinary CDN folder.
"""

import os
import sys
import argparse
from pathlib import Path

try:
    from dotenv import load_dotenv
    import requests
except ImportError:
    print("Vui lòng cài đặt requests và python-dotenv: pip install requests python-dotenv")
    sys.exit(1)

# Load environment variables from backend/.env
env_path = Path(__file__).resolve().parent.parent / "backend" / ".env"
if env_path.exists():
    load_dotenv(env_path)

CLOUD_NAME = os.getenv("CLOUDINARY_CLOUD_NAME")
API_KEY = os.getenv("CLOUDINARY_API_KEY")
API_SECRET = os.getenv("CLOUDINARY_API_SECRET")

def check_credentials():
    if not CLOUD_NAME or not API_KEY or not API_SECRET:
        print("[!] Lỗi: Chưa cấu hình đầy đủ CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET trong backend/.env")
        return False
    
    # Ping Cloudinary API
    try:
        res = requests.get(
            f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/ping",
            auth=(API_KEY, API_SECRET),
            timeout=10
        )
        if res.status_code == 200:
            print(f"[✓] Kết nối Cloudinary thành công với Cloud Name: '{CLOUD_NAME}'")
            return True
        else:
            print(f"[!] Lỗi xác thực Cloudinary ({res.status_code}): {res.text}")
            print(f"    Gợi ý: Kiểm tra lại tên Cloud Name chính xác trên https://console.cloudinary.com/")
            return False
    except Exception as e:
        print(f"[!] Lỗi kết nối Cloudinary: {e}")
        return False

def upload_file(file_path, folder="mindx_assets"):
    url = f"https://api.cloudinary.com/v1_1/{CLOUD_NAME}/image/upload"
    try:
        with open(file_path, "rb") as f:
            res = requests.post(
                url,
                data={"folder": folder},
                files={"file": f},
                auth=(API_KEY, API_SECRET),
                timeout=30
            )
            if res.status_code == 200:
                data = res.json()
                return data.get("secure_url")
            else:
                print(f"[-] Lỗi upload {file_path}: {res.text}")
                return None
    except Exception as e:
        print(f"[-] Lỗi: {e}")
        return None

def main():
    parser = argparse.ArgumentParser(description="Upload asset lên Cloudinary")
    parser.add_argument("--dir", default="backend/output", help="Thư mục cần upload (mặc định: backend/output)")
    parser.add_argument("--folder", default="mindx_assets", help="Tên thư mục trên Cloudinary")
    args = parser.parse_args()

    print("=== MINDXASSET CLOUDINARY SYNC ===")
    if not check_credentials():
        sys.exit(1)

    target_dir = Path(args.dir)
    if not target_dir.exists():
        print(f"[!] Thư mục '{args.dir}' không tồn tại.")
        sys.exit(1)

    image_files = list(target_dir.glob("**/*.png")) + list(target_dir.glob("**/*.jpg"))
    print(f"[*] Tìm thấy {len(image_files)} ảnh cần đồng bộ.")

    success_count = 0
    for idx, img in enumerate(image_files, 1):
        rel = img.relative_to(target_dir)
        print(f"[{idx}/{len(image_files)}] Đang upload {rel}...")
        url = upload_file(str(img), folder=f"{args.folder}/{img.parent.name}")
        if url:
            success_count += 1
            print(f"    -> {url}")

    print(f"\n[✓] Hoàn tất: {success_count}/{len(image_files)} tệp đã tải lên Cloudinary thành công!")

if __name__ == "__main__":
    main()
