# ĐẶC TẢ HIỆN TRẠNG HỆ THỐNG (SYSTEM SPECIFICATION - AS-BUILT & AS-INTENDED)

- **Dự án**: MindX Game Asset Generator & Character Builder
- **Mã định danh**: MindXAsset
- **Trạng thái tài liệu**: Đã xác minh qua kiểm toán mã nguồn thực tế
- **Phiên bản hiện tại**: `0.3.0` (Giai đoạn Prototype / Alpha MVP)
- **Cam kết nguyên tắc**: Tách bạch tuyệt đối giữa **Thực tế mã nguồn (as-built)** và **Ý đồ thiết kế (as-intended)**.

---

## 1. Mục Tiêu Sản Phẩm & Người Dùng

### 1.1 Mục tiêu hệ thống
- `[AS-INTENDED]`: Cung cấp nền tảng AI tạo tài nguyên game toàn diện cho học sinh MindX, hỗ trợ sinh đa phong cách bằng các mô hình Hugging Face, Gemini và Pollinations.
- `[AS-BUILT]`: Nền tảng web tích hợp sẵn:
  1. Bộ sinh ảnh AI (Background, Sprite, Tilesheet, Tileset, Pixel Art từ ảnh tải lên) thông qua API trung gian **Pollinations.ai** [ĐÃ XÁC MINH].
  2. Xưởng lắp ráp nhân vật/quái vật trực quan (**Monster Character Builder**) dựa trên vector Kenney CC0, hỗ trợ xuất ảnh PNG và chuyển đổi sang hoạt ảnh chạy [ĐÃ XÁC MINH].
  3. Thư viện xem lại và tải tài nguyên đã sinh (`Gallery`) [ĐÃ XÁC MINH].

### 1.2 Người dùng mục tiêu
- Học sinh độ tuổi 10-18 theo học các bộ môn lập trình game tại MindX (Scratch, GameMaker, Python, Unity 2D).
- Giảng viên và Mentor bộ môn Game tại MindX cần tạo tài nguyên đồng bộ cho lớp học.

---

## 2. Kiểm Kê Tính Năng (Feature Specification)

| Mã tính năng | Tên tính năng | Hiện trạng (As-Built vs As-Intended) | Độ tin cậy | Bằng chứng mã nguồn |
| :--- | :--- | :--- | :---: | :--- |
| **SPEC-01** | **Sinh Background AI** | `[AS-BUILT]` Sinh ảnh 2D các tỉ lệ 16:9, 4:3, 9:16 theo mô tả, lưu file vào `output/backgrounds/`. Không có HuggingFace/Gemini. | `[ĐÃ XÁC MINH]` | `server.js:210-227`<br>`Generator.jsx:26-38` |
| **SPEC-02** | **Sinh Sprite 2D** | `[AS-BUILT]` Sinh nhân vật/vật phẩm theo góc nhìn (Front, Side, Back, 3/4), kích thước 32-128px, tự động làm sạch silhouette. | `[ĐÃ XÁC MINH]` | `server.js:229-245`<br>`Generator.jsx:39-50` |
| **SPEC-03** | **Sinh Tilesheet Hoạt Ảnh** | `[AS-BUILT]` Sinh dải 10 frame ngang, backend tự tính mảng metadata `frames` để tua preview. Gặp lỗi dính frame nếu AI vẽ lệch. | `[ĐÃ XÁC MINH]` | `server.js:247-265`<br>`AnimationPreview.jsx:45` |
| **SPEC-04** | **Sinh Environment Tileset** | `[AS-BUILT]` Ghép các ô địa hình thành lưới 8 cột 32x32px, xuất file PNG và dữ liệu JSON layout. | `[ĐÃ XÁC MINH]` | `server.js:267-285`<br>`asset_generator.py:1000` |
| **SPEC-05** | **Pixel Art từ ảnh Upload** | `[AS-BUILT]` Nhận ảnh <=10MB, tách nền bằng mô hình U2Net (`rembg`), áp dụng hiệu ứng pixel và giới hạn palette. Bị tắt trên Render để tránh OOM. | `[ĐÃ XÁC MINH]` | `server.js:288-312`<br>`asset_generator.py:651` |
| **SPEC-06** | **Monster Character Builder** | `[AS-BUILT]` Giao diện kéo thả/chọn lớp (Body, Eyes, Mouth, Arms, Legs, Details) từ tài sản Kenney CC0, preview thời gian thực trên HTML5 Canvas. | `[ĐÃ XÁC MINH]` | `CharacterBuilder.jsx`<br>`CanvasPreview.jsx` |
| **SPEC-07** | **Xuất AI Animation Quái Vật** | `[AS-BUILT]` Trích xuất cấu hình nhân vật thành Prompt văn bản tự nhiên, gửi ảnh Canvas sang AI để sinh dải animation chạy. | `[ĐÃ XÁC MINH]` | `server.js:341-382`<br>`CanvasPreview.jsx:105` |
| **SPEC-08** | **Bộ Tua Hoạt Ảnh (Animation Slicer)** | `[AS-BUILT]` Nhận ảnh dải và metadata, tua vòng chuyển động với điều khiển FPS (1-60), xem trước trên nhiều hình nền bối cảnh. | `[ĐÃ XÁC MINH]` | `AnimationPreview.jsx:70` |
| **SPEC-09** | **Thư Viện Tài Nguyên (Gallery)** | `[AS-BUILT]` Đọc và hiển thị danh mục từ `backend/output/gallery.json`. Hỗ trợ lọc theo loại và tìm kiếm prompt. | `[ĐÃ XÁC MINH]` | `server.js:82-92`<br>`Gallery.jsx:11` |
| **SPEC-10** | **Xác thực & Quản lý người dùng** | `[AS-INTENDED]` Học sinh có tài khoản cá nhân.<br>`[AS-BUILT]` **Chưa làm (Zero Auth)**. Toàn bộ hệ thống chạy công khai. | `[ĐÃ XÁC MINH]` | Không có code Auth trong cả FE & BE. |
| **SPEC-11** | **Cơ sở dữ liệu tập trung** | `[AS-INTENDED]` Sử dụng DB quan hệ hoặc MongoDB.<br>`[AS-BUILT]` **Chưa làm**. Lưu danh sách vào file `gallery.json`. | `[ĐÃ XÁC MINH]` | `server.js:56-75` |

---

## 3. Kiến Trúc & Luồng Dữ Liệu Tóm Tắt

- **Kiến trúc phân tầng**:
  - Tầng Trình diễn: Single Page App viết bằng React 19 + Vite 8 + TailwindCSS.
  - Tầng Dịch vụ API: Node.js Express tiếp nhận HTTP REST, điều phối tiến trình.
  - Tầng Xử lý AI: Module Python 3.14 CLI xử lý thuật toán đồ họa và gọi Pollinations.ai.
  - Tầng Lưu trữ: Lưu file ảnh cục bộ tại `backend/output/` và fallback Cloudinary CDN.
- **Tài liệu kiến trúc chi tiết**: Xem [`docs/ARCHITECTURE.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest\MindX\DuAn\MindXAsset\docs\ARCHITECTURE.md) và [`docs/analysis/03-architecture-and-dataflow.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi\repotest\MindX\DuAn\MindXAsset\docs\analysis\03-architecture-and-dataflow.md).

---

## 4. Công Nghệ & Thư Viện Sử Dụng

- **Frontend**:
  - `react`: `^19.2.6`, `react-dom`: `^19.2.6`
  - `vite`: `^8.0.12`, `tailwindcss`: `^4.3.1`
  - `react-router-dom`: `^7.18.1`
  - `framer-motion`: `^13.4.0`
  - `jszip`: `^3.10.1`, `axios`: `^1.18.1`, `react-toastify`: `^11.1.0`
- **Backend (Node.js)**:
  - `express`: `^5.2.1`
  - `multer`: `^2.2.0`
  - `cloudinary`: `^2.10.0`
  - `cors`: `^2.8.6`, `dotenv`: `^17.4.2`
- **Backend AI Module (Python)**:
  - `Python`: `3.14.6`
  - `Pillow`: `12.3.0`
  - `rembg`: `2.0.77` (Mô hình U2Net ONNX)
  - `requests`: `2.34.2`, `python-dotenv`: `1.2.2`

---

## 5. Quy Ước Kỹ Thuật (Conventions)

1. **Định dạng ảnh đầu ra**: Luôn là file `.png` 32-bit (RGBA) có kênh trong suốt (ngoại trừ Background 24-bit RGB).
2. **Kích thước chuẩn**:
   - Sprite: `32x32`, `64x64`, `128x128` px.
   - Background: `1920x1080` (16:9), `480x360` (4:3), `1080x1920` (9:16).
   - Tileset: Ô `32x32` px, 8 cột.
3. **Cấu trúc phản hồi API AI**: Luôn trả về cặp `{ image: "data:image/png;base64,...", file_path: "...", metadata: {...} }` để frontend có thể hiển thị tức thì mà không phụ thuộc vào độ trễ phân giải đường dẫn static.
4. **Màu sắc thương hiệu**: MindX Red (`#DC2626` / `#E53E3E`), Nền xám nhạt (`#F8F9FA`), Chữ đen tương phản cao (`#111827`).

---

## 6. Danh Mục Ý Đồ Chưa Thực Hiện (As-Intended Backlog)

1. Tích hợp thực tế các model Hugging Face Diffusers và Google Gemini API (hiện mới chỉ có trong tài liệu và text tiếp thị).
2. Tái kích hoạt tính năng Image-to-Image khi có nguồn ngân sách API ổn định.
3. Chuyển đổi cơ chế lưu trữ từ file `gallery.json` sang SQLite / PostgreSQL để hỗ trợ nhiều người dùng đồng thời.
4. Xây dựng hệ thống tài khoản học sinh và phân quyền quản trị viên cho giảng viên MindX.
5. Viết bộ kiểm thử tự động (Unit Test & Integration Test) cho cả Frontend và Backend.
