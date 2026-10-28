# TỔNG QUAN KIẾN TRÚC HỆ THỐNG MINDXASSET (ARCHITECTURE GUIDE)

> **Dành cho**: Thành viên mới tham gia dự án, giảng viên hoặc lập trình viên cần nắm nhanh kiến trúc tổng thể của MindX Game Asset Studio trong 5 phút.

---

## 1. Ngăn Xếp Công Nghệ (Tech Stack)

```
[ FRONTEND ]   React 19 (SPA) + Vite 8 + TailwindCSS v4 + HTML5 Canvas Engine
      │
      ▼ HTTP REST (Fetch / FormData)
[ BACKEND ]    Node.js Express v5 (API Gateway, Multer, Static Server)
      │
      ▼ child_process.execFile (CLI IPC)
[ AI ENGINE ]  Python 3.14 (Pillow, Rembg U2Net, Argparse)
      │
      ▼ HTTPS
[ EXTERNAL ]   Pollinations.ai (AI Model Engine) + Cloudinary CDN Storage
```

---

## 2. Bản Đồ Thành Phần (Components Overview)

Hệ thống được chia thành 3 khối mạch lạc:

1. **Frontend (`frontend/`)**:
   - Sử dụng React 19 chạy trên nền build siêu tốc của Vite 8 kết hợp TailwindCSS v4.
   - Thiết kế **Responsive Đa Khung Hình (`280px` ➔ `1440px+`)**: hỗ trợ Mobile Bottom Navigation Bar, Split-Stage Studio trên điện thoại, 2 cột trên Tablet và 3 cột trên Desktop.
   - Gồm 4 màn hình chính:
     - `/`: Trang chủ giới thiệu tính năng và điều hướng nhanh.
     - `/generator`: Bảng điều khiển sinh ảnh bằng AI (Background, Sprite, Tilesheet, Tileset, Image-to-Sprite).
     - `/character-builder`: Bàn làm việc **Character Studio** thời gian thực hỗ trợ **7 dòng mô hình**:
       - 🧙 **Nhân Vật Fantasy**: Chibi RPG 48x48 với 30 chủng tộc, tóc, giáp, vũ khí, bóng đổ (1,480 asset).
       - 🧝 **RPG Pixel Cổ Điển**: Trang phục, mũ nón, cánh, kính mắt, tai thú, đuôi kèm hoạt ảnh `Đứng/Chạy/Đánh` trực tiếp (629 asset).
       - 🪖 **Chiến Binh Đặc Nhiệm**: Áo giáp đặc nhiệm, súng tác chiến, kính ban đêm NVG kèm hoạt ảnh trực tiếp (184 asset).
       - 🏎️ **Xe Cộ & Phương Tiện**: 57 mẫu xe Top-Down đồng bộ tâm `(80, 80)`, 6 góc nhìn, mặt đường xoay theo hướng xe, đèn pha đôi định hướng & 5 loại phụ kiện/họa tiết.
       - 💎 **Vật Phẩm In-Game**: 260+ trang bị, bình thuốc, rương báu, bục đỡ & hào quang (520 asset).
       - 👾 **Quái Vật Dị Biến**: Khung xương skeleton A-F, sừng, càng, nanh vuốt Kenney CC0 kèm bảng màu động (148 asset).
       - 👽 **Người Ngoài Hành Tinh**: Sinh vật vũ trụ, ăng-ten sóng não, xúc tu miệng kèm bảng màu sinh học (Kenney CC0).
     - `/gallery`: Kho lưu trữ và bộ lọc xem lại các sản phẩm đã tạo.
   - Thành phần đặc sắc:
     - `CanvasPreview.jsx`: Sắp xếp layer theo `z_index`, tính toán pivot, đảo hướng `scaleX`, nhuộm màu HSL động, vẽ bóng đổ silhouette tiếp đất và render ra `<canvas>` ở tốc độ 60 FPS.
     - `InlineSpritesheetStudio.jsx`: Xưởng cắt lưới sprite sheet tích hợp trực tiếp, hỗ trợ tách nền client-side (Smart Flood-Fill), tua hoạt ảnh chuyển động và tải ZIP frame.
     - **Eager Asset Preloader**: Nạp trước đồng loạt toàn bộ tài sản của model đang chọn, loại bỏ lazy load để chuyển đổi mượt mà tức thì.

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
├── backend/                  # Máy chủ Express & AI Subsystem
│   ├── ai_module/            # Python CLI & logic sinh ảnh cốt lõi
│   │   ├── asset_generator.py# Logic thuật toán xử lý ảnh
│   │   ├── cli.py            # Entry point dòng lệnh
│   │   └── requirements.txt  # Thư viện Python
│   ├── output/               # Chứa ảnh sinh ra & gallery.json
│   ├── uploads/              # Thư mục tạm nhận ảnh upload (tự động xóa)
│   ├── server.js             # Entry point API Express (Port 5000)
│   └── setup-python.js       # Script tự động dựng venv khi deploy
├── frontend/                 # Client React 19 SPA
│   ├── public/assets/        # 3,300+ sprite assets phân theo 7 model
│   ├── src/
│   │   ├── components/       # InlineSpritesheetStudio, Header, Modals...
│   │   ├── pages/            # Home, Generator, CharacterBuilder, Gallery
│   │   └── App.jsx           # Routing
│   └── package.json
├── scripts/                  # Công cụ bảo trì, xử lý asset & đồng bộ
│   ├── process_topdown_vehicles.py # Căn tâm 57 xe, sinh mặt đường & phụ kiện 6 hướng
│   ├── sync_to_cloudinary.py # Pipeline đồng bộ asset và output lên Cloudinary
│   └── _archive/             # Lưu trữ script debug và inspect nội bộ
└── docs/                     # Toàn bộ hồ sơ kiến trúc, kiểm toán & bảo trì
```

---

## 4. Cách Hệ Thống Vận Hành (Luồng Dữ Liệu Tóm Gọn)

1. **Người dùng yêu cầu**: Học sinh tùy biến nhân vật trên `/character-builder` hoặc nhập prompt trên `/generator`.
2. **Backend tiếp nhận**: `server.js` kiểm tra dữ liệu, chuẩn bị tham số và kích hoạt lệnh Python: `python cli.py <command> <args>`.
3. **AI sinh ảnh & Hậu kỳ**: Python gọi Pollinations.ai tạo ảnh, chạy qua bộ lọc tách nền và pixel art, sau đó lưu file PNG vào thư mục `backend/output/`.
4. **Phản hồi Frontend**: Node.js bắt luồng JSON từ Python, đọc file thành chuỗi Data URI (Base64) kèm siêu dữ liệu (Metadata số khung, kích thước), trả về cho React hiển thị tức thì.
5. **Lưu trữ**: Ảnh được tự động ghi nhận vào `gallery.json` để học sinh có thể vào `/gallery` xem và tải lại bất cứ lúc nào.

---

## 5. Kiến Trúc Triển Khai Dual-Host (Deployment Architecture)

Dự án được thiết kế theo mô hình **Dual-Host** tối ưu chi phí và hiệu năng:

1. **Frontend Hosting (Vercel)**:
   - Triển khai dưới dạng Single-Page Application (SPA).
   - File `frontend/vercel.json` định tuyến toàn bộ rewrite về `/index.html`.
   - Cấu hình header `Cache-Control: public, max-age=31536000, immutable` cho toàn bộ tài sản tĩnh trong `/assets/*` giúp nạp siêu tốc từ mạng Vercel Edge CDN.
   - Kết nối tới backend thông qua biến môi trường `VITE_API_BASE_URL`.

2. **Backend Orchestrator (Render)**:
   - Triển khai trên máy chủ container Render (Node.js + Python venv).
   - Script `setup-python.js` tự động tạo venv và cài `requirements.txt` trong bước `npm install`.
   - Cung cấp REST API cho toàn bộ tác vụ upload và AI generation.

3. **Cloudinary CDN (Asset & Media Storage)**:
   - Sử dụng script `scripts/sync_to_cloudinary.py` để đồng bộ toàn bộ tài sản hoặc thư viện sang Cloudinary CDN khi cần chuyển giao sang hạ tầng Cloud-native.

---

## 6. Tài Liệu Kỹ Thuật Chuyên Sâu Liên Quan

- Kế hoạch dọn dẹp & tối ưu hóa tiền triển khai: [`docs/CLEANUP_PLAN.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/CLEANUP_PLAN.md)
- Sổ tay bảo trì và quy trình thêm model: [`docs/MAINTENANCE_GUIDE.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/MAINTENANCE_GUIDE.md)
- Luồng dữ liệu chi tiết & Sơ đồ Sequence: [`docs/analysis/03-architecture-and-dataflow.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/analysis/03-architecture-and-dataflow.md)
- Bảng từ điển dữ liệu & Schema: [`docs/analysis/04-data-dictionary.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/analysis/04-data-dictionary.md)
- Danh mục chi tiết các API: [`docs/analysis/05-api-inventory.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/analysis/05-api-inventory.md)
- Từ điển thuật ngữ miền: [`docs/GLOSSARY.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/GLOSSARY.md)
