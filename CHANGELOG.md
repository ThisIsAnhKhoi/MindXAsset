# NHẬT KÝ THAY ĐỔI (CHANGELOG)

Tất cả các thay đổi đáng chú ý của dự án **MindXAsset** được ghi nhận tại đây theo chuẩn [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) và tuân thủ định dạng [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Chưa phát hành - Unreleased]

### Đã hoàn thành (Completed)
- **Tạo Trọn Bộ Sprite Sheet 5x3 Ma Trận Lưới (Single-Shot Grid AI - ADR-13)**:
  - Sinh trọn vẹn 15 khung hình 3 hàng x 5 cột đa hành động (Đứng, Đi, Tấn công, Thủ, Bị thương) trong 1 lần gọi API duy nhất (~10s).
  - Tích hợp trình phát đa hành động `SpritePreviewModal.jsx` với Canvas Pixel-Art Renderer không bị biến dạng tỷ lệ.
- **Tích hợp Pipeline Vision-to-Grid & Tối Ưu Hóa Bộ Xử Lý (ADR-14)**:
  - Trích xuất ảnh Canvas Base64 từ xưởng thiết kế nhân vật gửi trực tiếp lên Backend.
  - Tự động dùng AI Vision Captioning phân tích tóc, quần áo, phụ kiện và tỷ lệ chibi, khắc phục tình trạng AI hallucination.
  - Nâng trần Express body parser lên 25MB (`7365b9c`), loại bỏ lỗi ngầm `413 Payload Too Large`.
  - Tự động làm sạch prompt bằng regex, khống chế mô tả thị giác dưới 50 từ và triệt tiêu chuỗi ID layer nội bộ.
  - Cấu hình Anti-Hallucination negative prompt (`6f426a4`) chặn áo choàng, khiên, kính râm để giữ chuẩn nhân vật chính diện.
- **Báo Cáo Ranh Giới Kỹ Thuật AI Pixel Fidelity & Kiến Trúc Lai (ADR-15)**:
  - Phân tích nguyên nhân mô hình Diffusion không thể đạt 100% pixel-for-pixel exact match do mất mát qua tầng ngữ nghĩa văn bản.
  - Phê duyệt kiến trúc lai: phát triển Deterministic Canvas Compositor (tận dụng 12 frame có sẵn của asset pack Pipoya/Kenney để đạt 100% pixel-perfect) song song với Creative AI Expansion.
  - Cập nhật điểm tiến độ toàn diện lên **58.5%** trong `PROJECT_STATUS.md` và `QA_REPORT.md`.
- **Xưởng Tách Lưới & Xem Trước Hoạt Ảnh Thường Trực Tại Character Studio (ADR-16)**:
  - Bổ sung thành phần nhúng trực tiếp `InlineSpritesheetStudio.jsx` nằm ngay bên dưới 3 cột tùy biến nhân vật, không cần bấm tạo ảnh AI mới hiện ra.
  - Cho phép người dùng tự do tải lên bất kỳ ảnh Sprite Sheet nào từ máy tính (kéo thả hoặc chọn file), nạp nhân vật vừa tạo trên Canvas Studio, hoặc thử nghiệm 1-click với ảnh mẫu RPG Walk 4 hướng (8 cột x 4 hàng).
  - Trực quan hóa ma trận lưới với từng ô số tương tác (click để xem khung riêng lẻ) và trình phát hoạt cảnh Canvas pixel-art sắc nét với tùy biến FPS và 5 chế độ nền.
- **Chuẩn hóa kiến trúc kho mã theo tiêu chuẩn quốc tế**:
  - Gom toàn bộ 37 tệp rải rác ở thư mục gốc (biên bản họp, báo cáo docx, pdf, script test nháp) vào `docs/archive/` và `docs/wireframes/`.
  - Giữ thư mục gốc tinh gọn với 8 tệp chuẩn mã nguồn mở: `README.md`, `README.en.md`, `CHANGELOG.md`, `CONTRIBUTING.md`, `SECURITY.md`, `LICENSE`, `.env.example`, `.gitignore`.
  - Thiết lập trung tâm tài liệu kỹ thuật [`docs/README.md`](docs/README.md) quản lý toàn bộ hệ thống hồ sơ kiểm toán.
  - Ban hành bộ 8 tài liệu kỹ thuật chuẩn mực: `SPEC.md`, `PROJECT_STATUS.md` (58.5%), `QA_REPORT.md` (Conditional GO), `TEST_PLAN.md` (40 test case), `DEVELOPMENT_PLAN.md`, `DECISIONS.md` (ADR-01 - ADR-16), `TASK_BRIEFS.md`, `ARCHITECTURE.md`.

### Kế hoạch tiếp theo (Planned)
- Bổ sung nút xuất spritesheet tất định *Deterministic Canvas Compositor* (100% pixel exact match, 0ms) trong Character Studio (`ADR-15`).
- Triển khai di chuyển dữ liệu từ `gallery.json` sang cơ sở dữ liệu SQLite (`ADR-02`, `TSK-01`).
- Sửa lỗi `react-hooks/set-state-in-effect` tại `CharacterBuilder.jsx:96` (`TSK-03`).
- Nâng cấp các thư viện npm chứa lỗ hổng bảo mật nghiêm trọng (`proxy-addr`, `cross-spawn`) (`TSK-04`).
- Viết bộ kiểm thử tự động ban đầu với Vitest và Supertest (`ADR-06`, `TSK-05`).

---

## [1.3.0] - 2026-10-27

### Đã thêm (Added)
- **ModelDropdown Studio Cao Cấp**:
  - Giao diện Card Popover hiện đại, hiệu ứng bo tròn kính mờ, hiển thị đầy đủ icon và badge phân loại (`CHIBI RPG`, `HIỆN ĐẠI`, `CHIẾN ĐẤU`, `TOP-DOWN`, `VẬT PHẨM`, `QUÁI VẬT`, `NGƯỜI NGOÀI HÀNH TINH`).
  - Hoạt ảnh xoay chevron mượt mà, hỗ trợ đóng nhanh khi bấm phím Escape hoặc click bên ngoài.
- **Eager Preloading Toàn Diện & Tối Ưu Độ Mượt 60 FPS**:
  - Thay thế cơ chế nạp trễ (lazy load) và preloader theo đợt bằng cơ chế nạp trước đồng loạt (`Promise.allSettled`) toàn bộ asset của mô hình đang chọn.
  - Loại bỏ hoàn toàn `loading="lazy"` khỏi các thẻ ảnh thumbnail trong bảng điều khiển tùy biến, chuyển đổi bộ phận tức thì không độ trễ.
- **Pipeline Đồng Bộ Cloudinary CDN (`scripts/sync_to_cloudinary.py`)**:
  - Cung cấp script tự động đồng bộ toàn bộ tài sản tĩnh (`frontend/public/assets`) hoặc thư viện sản phẩm (`backend/output`) lên Cloudinary CDN theo thư mục tùy chọn.

### Đã thay đổi (Changed)
- **Chuẩn Hóa Nhãn Danh Mục Bộ Phận (Category Labels)**:
  - Tối ưu lại toàn bộ tên danh mục thành 10-12 ký tự trực quan, dễ nhớ (vd: `Tông Da`, `Kiểu Tóc`, `Áo Giáp`, `Vũ Khí`, `Bóng Sàn`, `Kính NVG`, `Khung Gầm`, `Đèn Pha`...).
  - Triệt tiêu 100% tình trạng vỡ layout hoặc cắt cụt văn bản dấu `...` trên thanh điều hướng bên trái.
- **Tinh Gọn Cấu Trúc Kho Mã**:
  - Gom toàn bộ script debug/inspect nội bộ vào `scripts/_archive/` kèm tài liệu tra cứu.
  - Dọn dẹp thư mục gốc chuẩn mã nguồn mở, loại bỏ hoàn toàn các tệp nén thừa thãi.

### Đã sửa (Fixed)
- **Khắc Phục Lỗi Phóng To Tràn Viền Canvas Quái Vật & Người Ngoài Hành Tinh**:
  - Bổ sung hệ số co giãn động riêng biệt `scaleFactor = 0.35` cho 2 mô hình Kenney Vector, loại bỏ tình trạng nhân vật bị phóng to tràn viền canvas.
  - Neo chân nhân vật xuống đáy sàn (`canvas.height - 40`) kèm vẽ bóng đổ tiếp đất tự nhiên (`ctx.ellipse`).
- **Sửa Lỗi Đường Dẫn Tài Sản**:
  - Khắc phục đường link hỏng `potion_elixir.png` thành `potion_elixir_big.png` trong `prop_config.js`.
- **Đạt Chuẩn Xanh ESLint (0 Lỗi, 0 Cảnh Báo)**:
  - Khắc phục cảnh báo `transparentBg` trong dependency array của `CanvasPreview.jsx`.
  - Khắc phục cảnh báo `setFilterGroup` và gỡ bỏ `useEffect` thừa trong `CustomizerInspector.jsx`.
  - Khắc phục lỗi `no-useless-assignment` biến `vehicleSrc` trong `vehicle_config.js`.
- **Sửa Cấu Hình Backend Entrypoint**: Sửa `"main": "server.js"` trong `backend/package.json`.

### Tối ưu hóa & Bảo mật (Security & Optimization)
- **Triệt Tiêu 100% Lỗ Hổng Bảo Mật Backend**:
  - Gỡ bỏ thư viện không sử dụng `jimp` (và 92 gói con liên đới) khỏi `backend/package.json`, xóa sạch 36 lỗ hổng bảo mật nghiêm trọng trong `npm audit`.
  - Gỡ bỏ `framer-motion` thừa khỏi `frontend/package.json`.
- **Giải Phóng ~281 MB Dung Lượng Bộ Nhớ**:
  - Xóa 3 file nén ZIP khổng lồ ở thư mục gốc (267.67 MB).
  - Xóa toàn bộ file nén ZIP/RAR đã xử lý xong trong `NewAsset/` (11.58 MB).
  - Dọn sạch 136 tệp kết quả test cũ trong thư mục `output/` (1.5 MB).

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
