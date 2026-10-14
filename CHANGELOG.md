# NHẬT KÝ THAY ĐỔI (CHANGELOG)

Tất cả các thay đổi đáng chú ý của dự án **MindXAsset** được ghi nhận tại đây theo chuẩn [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) và tuân thủ định dạng [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Chưa phát hành - Unreleased]

### Đã hoàn thành (Completed)
- **Tạo Trọn Bộ Sprite Sheet 5x3 Ma Trận Lưới (Single-Shot Grid AI)**:
  - Sinh trọn vẹn 15 khung hình 3 hàng x 5 cột đa hành động (Đứng, Đi, Tấn công, Thủ, Bị thương) trong 1 lần gọi API duy nhất (~10s).
  - Tích hợp trình phát đa hành động `SpritePreviewModal.jsx` với Canvas Pixel-Art Renderer không bị biến dạng tỷ lệ.
- **Tích hợp Pipeline Vision-to-Grid (Canvas Image -> Vision AI -> Spritesheet)**:
  - Trích xuất ảnh Canvas Base64 từ xưởng thiết kế nhân vật gửi trực tiếp lên Backend.
  - Tự động dùng AI Vision Captioning phân tích tóc, quần áo, phụ kiện và tỷ lệ chibi, khắc phục 100% tình trạng nhân vật AI bị sai khác ("hallucination").
- **Chuẩn hóa kiến trúc kho mã theo tiêu chuẩn quốc tế**:
  - Gom toàn bộ 37 tệp rải rác ở thư mục gốc (biên bản họp, báo cáo docx, pdf, script test nháp) vào `docs/archive/` và `docs/wireframes/`.
  - Giữ thư mục gốc tinh gọn với 8 tệp chuẩn mã nguồn mở: `README.md`, `README.en.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `SECURITY.md`, `LICENSE`, `.env.example`, `.gitignore`.
  - Thiết lập trung tâm tài liệu kỹ thuật [`docs/README.md`](docs/README.md) quản lý toàn bộ hệ thống hồ sơ kiểm toán.
  - Ban hành bộ 8 tài liệu kỹ thuật chuẩn mực: `SPEC.md`, `PROJECT_STATUS.md` (56.0%), `QA_REPORT.md` (Conditional GO), `TEST_PLAN.md` (40 test case), `DEVELOPMENT_PLAN.md`, `DECISIONS.md` (ADR-01 - ADR-14), `TASK_BRIEFS.md`, `ARCHITECTURE.md`.

### Kế hoạch tiếp theo (Planned)
- Triển khai di chuyển dữ liệu từ `gallery.json` sang cơ sở dữ liệu SQLite (`ADR-02`, `TSK-01`).
- Sửa lỗi `react-hooks/set-state-in-effect` tại `CharacterBuilder.jsx:96` (`TSK-03`).
- Nâng cấp các thư viện npm chứa lỗ hổng bảo mật nghiêm trọng (`proxy-addr`, `cross-spawn`) (`TSK-04`).
- Viết bộ kiểm thử tự động ban đầu với Vitest và Supertest (`ADR-06`, `TSK-05`).

---

## [0.3.0] - 2026-09-30

### Đã thêm (Added)
- **Monster Character Builder** (`35dc3a1`): Bổ sung xưởng lắp ráp quái vật trực quan từ tài nguyên vector Kenney CC0 với 6 lớp (Body, Eyes, Mouth, Arms, Legs, Details).
- **Xuất hoạt ảnh quái vật AI** (`35dc3a1`): Endpoint `/api/generate-custom-character` nhận dữ liệu canvas Base64 và config nhân vật để sinh dải chuyển động hoạt ảnh.
- **Tùy biến nhân vật mở rộng** (`1a090a9`, `69ce46b`): Tích hợp thư viện mẫu CozyFae và Pipoya vào cấu hình `assets_config.js`.
- Bổ sung Skill AI `advanced-ui-ux` trong `.agents/skills/` hỗ trợ thiết kế giao diện chuẩn mực.

### Đã sửa (Fixed)
- Cập nhật thuật toán tính toán tọa độ render và math alignment cho các bộ phận quái vật (`6c549de`).

---

## [0.2.0] - 2026-09-06

### Đã thêm (Added)
- **Đại tu trải nghiệm Generator** (`afb9515`):
  - Ẩn/hiện trường nhập liệu có điều kiện tùy theo loại asset được chọn.
  - Vùng kéo thả tệp tải lên (Drag-and-drop file upload) trực quan.
  - Tự động căn chỉnh độ rộng lưới Tileset.
  - Vòng sáng xanh (blue focus rings) và toast thông báo góc trên bên phải.
  - Cho phép người dùng tải ảnh nền bối cảnh tùy chỉnh trong `AnimationPreview`.
- **Đóng gói siêu dữ liệu hoàn chỉnh** (`55259ee`): Bổ sung metadata `total_frames`, `frame_width`, `frame_height`, `layout_format` cho toàn bộ kết quả trả về từ backend.

### Đã sửa (Fixed)
- Loại bỏ các đường link ảnh nền Freepik bị hỏng (`afb9515`).
- Khắc phục rò rỉ khóa Cloudinary trên mã nguồn hiện hành và đồng bộ file `.env.example` (`55259ee`).
- Cập nhật backend `package-lock.json` (`88547f2`).

---

## [0.1.5] - 2026-08-16

### Đã thay đổi (Changed)
- Hợp nhất các báo cáo SRS, kiến trúc và tiến độ AI thành tệp tài liệu duy nhất `BAO_CAO_TONG_HOP.md` (`68eb88c`).
- Cập nhật `.gitignore` bỏ qua thư mục cache và ảnh output (`f115485`).
- Nâng cấp giao diện xem trước hoạt ảnh `AnimationPreview.jsx` (`298f6b3`).

---

## [0.1.0] - 2026-07-31

### Đã thêm (Added)
- **Khởi tạo máy chủ Node.js Express** (`7203614`, `324fde2`):
  - Phục vụ thư mục static `/output` làm fallback khi Cloudinary offline.
  - Tích hợp gọi tiến trình con Python CLI thông qua `child_process.execFile`.
  - Tự động thiết lập virtualenv Python khi deploy Render qua script `setup-python.js` (`0532453`).
- **Pipeline xử lý ảnh AI cốt lõi** (`560b64a`):
  - Sinh Background tỉ lệ 16:9, 4:3, 9:16 qua Pollinations.ai.
  - Sinh Sprite 2D có góc nhìn và kích thước 32-128px.
  - Cắt dải ảnh hoạt ảnh Tilesheet 10 frames.
  - Ghép lưới ô địa hình Environment Tileset 8 cột.
  - Xử lý tách nền bằng mô hình U2Net (`rembg`) và tạo hiệu ứng pixel art retro.

### Đã sửa (Fixed)
- Khắc phục lỗi sập máy chủ tràn bộ nhớ (OOM) trên Render bằng cách hỗ trợ model nhẹ `u2netp` (`426c192`) và cờ bỏ qua tách nền `DISABLE_REMBG` (`dd3fc04`).
- Bổ sung bộ lọc dịch thông báo lỗi HTTP AI (429, 402, 401) sang tiếng Việt thân thiện (`d58660f`).
- Loại bỏ lệnh gọi Cloudinary trùng lặp (`dc87f47`).

---

## [0.0.1] - 2026-07-09

### Đã thêm (Added)
- Khởi tạo kho mã dự án và các bản vẽ giao diện wireframes (`c2e54b5`, `4b7d25b`).
- Cấu hình nhận diện thương hiệu MindX (Logo chính thức và tông màu Đỏ/Trắng/Đen) (`f10ed19`, `f724053`).
- Thử nghiệm ban đầu kiến trúc Java Spring Boot (`820d2f0`).
