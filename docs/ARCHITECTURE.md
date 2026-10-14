# TỔNG QUAN KIẾN TRÚC HỆ THỐNG MINDXASSET (ARCHITECTURE GUIDE)

> **Dành cho**: Thành viên mới tham gia dự án, giảng viên hoặc lập trình viên cần nắm nhanh kiến trúc tổng thể của MindX Game Asset Studio trong 5 phút.

---

## 1. Ngăn Xếp Công Nghệ (Tech Stack)

```
[ FRONTEND ]   React 19 (SPA) + Vite 8 + TailwindCSS v4 + Framer Motion
      │
      ▼ HTTP REST (Axios)
[ BACKEND ]    Node.js Express v5 (API Gateway, Multer, Static Server)
      │
      ▼ child_process.execFile (CLI IPC)
[ AI ENGINE ]  Python 3.14 (Pillow, Rembg U2Net, OpenCV, Argparse)
      │
      ▼ HTTPS
[ EXTERNAL ]   Pollinations.ai (AI Model Engine) + Cloudinary (CDN Fallback)
```

---

## 2. Bản Đồ Thành Phần (Components Overview)

Hệ thống được chia thành 3 khối mạch lạc:

1. **Frontend (`frontend/`)**:
   - Sử dụng React 19 chạy trên nền build siêu tốc của Vite 8.
   - Gồm 4 màn hình chính:
     - `/`: Trang chủ giới thiệu tính năng.
     - `/generator`: Bảng điều khiển sinh ảnh bằng AI (Background, Sprite, Tilesheet, Tileset, Image-to-Sprite).
     - `/character-builder`: Bàn làm việc lắp ráp quái vật thời gian thực từ vector Kenney CC0, có xuất AI animation.
     - `/gallery`: Kho lưu trữ và bộ lọc xem lại các sản phẩm đã tạo.
   - Thành phần đặc sắc: `AnimationPreview.jsx` — tự động phân tích metadata khung hình để tua vòng hoạt ảnh chuyển động ngay trên trình duyệt mà không cần cài phần mềm làm game.

2. **Backend API (`backend/server.js`)**:
   - Máy chủ Node.js Express đóng vai trò làm Orchestrator điều phối.
   - Tiếp nhận request từ frontend, kiểm tra tính hợp lệ của dữ liệu đầu vào.
   - Quản lý tệp tải lên (Multer, giới hạn 10MB) và dọn dẹp file tạm an toàn.
   - Gọi tiến trình Python thông qua `child_process.execFile`.
   - Lưu trữ danh mục ảnh vào `backend/output/gallery.json` và hỗ trợ đẩy ảnh lên Cloudinary CDN.

3. **AI Subsystem (`backend/ai_module/`)**:
   - Chạy độc lập dưới dạng CLI (`cli.py`) với virtualenv riêng (`venv/`).
   - Tương tác với Pollinations.ai API để sinh ảnh theo prompt đã được tinh chỉnh (prompt enrichment).
   - Tích hợp pipeline hậu kỳ đồ họa 2D:
     - Thuật toán `apply_pixel_art_effect`: Tạo hiệu ứng pixel retro 8-bit/16-bit.
     - Thuật toán `remove_background`: Tách nền tự động bằng mạng nơ-ron học sâu (U2Net/rembg).
     - Thuật toán `generate_tilesheet` & `generate_tileset`: Ghép dải hoạt ảnh và lưới ô gạch kèm metadata JSON.

---

## 3. Cấu Trúc Thư Mục Thực Tế

```
MindXAsset/
├── backend/                  # Server Node.js
│   ├── ai_module/            # Khối Python xử lý AI & Hậu kỳ
│   │   ├── asset_generator.py# Logic thuật toán cốt lõi
│   │   ├── cli.py            # Entry point dòng lệnh
│   │   └── requirements.txt  # Thư viện Python
│   ├── output/               # Chứa ảnh sinh ra & gallery.json
│   ├── server.js             # Entry point API Express
│   └── package.json          # Node dependencies
├── frontend/                 # Client React Vite
│   ├── public/assets/        # Thư viện mẫu quái vật và pixel art
│   ├── src/
│   │   ├── components/       # Header, Modal, AnimationPreview
│   │   ├── pages/            # Home, Generator, CharacterBuilder, Gallery
│   │   └── App.jsx           # Routing
│   └── package.json
└── docs/                     # Tài liệu kỹ thuật chi tiết
```

---

## 4. Cách Hệ Thống Vận Hành (Luồng Dữ Liệu Tóm Gọn)

1. **Người dùng yêu cầu**: Học sinh nhập mô tả trên màn hình `/generator` hoặc bấm "Xuất Hoạt Ảnh" trên `/character-builder`.
2. **Backend tiếp nhận**: `server.js` kiểm tra dữ liệu, chuẩn bị tham số và kích hoạt lệnh Python: `python cli.py <command> <args>`.
3. **AI sinh ảnh & Hậu kỳ**: Python gọi Pollinations.ai tạo ảnh, chạy qua bộ lọc tách nền và pixel art, sau đó lưu file PNG vào thư mục `backend/output/`.
4. **Phản hồi Frontend**: Node.js bắt luồng JSON từ Python, đọc file thành chuỗi Data URI (Base64) kèm siêu dữ liệu (Metadata số khung, kích thước), trả về cho React hiển thị tức thì.
5. **Lưu trữ**: Ảnh được tự động ghi nhận vào `gallery.json` để học sinh có thể vào `/gallery` xem và tải lại bất cứ lúc nào.

---

## 5. Tài Liệu Kỹ Thuật Chuyên Sâu Liên Quan

- Luồng dữ liệu chi tiết & Sơ đồ Mermaid Sequence: [`docs/analysis/03-architecture-and-dataflow.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/analysis/03-architecture-and-dataflow.md)
- Bảng từ điển dữ liệu & Schema: [`docs/analysis/04-data-dictionary.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/analysis/04-data-dictionary.md)
- Danh mục chi tiết các API: [`docs/analysis/05-api-inventory.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/analysis/05-api-inventory.md)
- Từ điển thuật ngữ miền: [`docs/GLOSSARY.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/GLOSSARY.md)
