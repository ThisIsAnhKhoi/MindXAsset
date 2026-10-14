# BẢN GIAO VIỆC CHO CÁC PHIÊN LÀM VIỆC ĐẦU TIÊN (TASK BRIEFS)

- **Dự án**: MindX Game Asset Generator & Character Builder (MindXAsset)
- **Mục đích**: Cung cấp đặc tả nhiệm vụ chi tiết, độc lập, có thể thực hiện ngay trong từng phiên làm việc riêng biệt (AI Agent Sessions) mà không bị lạc ngữ cảnh.

---

## TASK-01: Xử Lý Bảo Mật - Xoay Khóa Cloudinary & Chuẩn Hóa Biến Môi Trường

### 1. Mục tiêu
Loại bỏ rủi ro bảo mật rò rỉ secret trong lịch sử git và chuẩn hóa file `.env.example` của toàn hệ thống.

### 2. Các tệp liên quan
- `backend/.env.example`
- `backend/server.js` (kiểm tra lại dòng 32-38)
- `frontend/.env.example`

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. `.env.example` ở cả backend và frontend chỉ chứa tên biến và giá trị minh họa vô hại (ví dụ `your_cloudinary_api_key`), không có bất kỳ ký tự secret thật nào.
2. Khóa `HUGGINGFACE_API_KEY` được gắn chú thích rõ ràng là "Dự kiến tương lai" hoặc loại bỏ khỏi `.env.example` để tránh gây hiểu nhầm.
3. Chủ dự án xác nhận đã tạo bộ khóa mới trên Cloudinary Dashboard.

### 4. Điều KHÔNG ĐƯỢC LÀM
- KHÔNG in giá trị secret thật ra bất kỳ file markdown hay khung chat nào.
- KHÔNG chạy `git push --force` viết lại lịch sử nếu chưa có sự đồng ý bằng văn bản của chủ dự án.

### 5. Cách báo cáo kết quả
- Cập nhật BUG-01 trong `QA_REPORT.md` sang trạng thái `RESOLVED`.
- Ghi nhận vào `docs/analysis/PROGRESS_LOG.md`.

---

## TASK-02: Dọn Dẹp Kho Mã - Xóa 15 File Rác & Tổ Chức Tài Liệu `docs/archive/`

### 1. Mục tiêu
Thực hiện dọn dẹp sạch sẽ các tệp tạm thời, script scratch và di chuyển tài liệu cũ vào thư mục lưu trữ để trả lại thư mục gốc tinh gọn, chuyên nghiệp.

### 2. Các tệp liên quan
- Thư mục gốc: `test_all.py`, `test_arms.py`, `test_details.py`, `test_legs.py`, `test_math.py`, `test_noses.py`, `test_render.py`.
- Thư mục gốc: `test_all.png`, `test_arms.png`, `test_details.png`, `test_legs.png`, `test_math.png`, `test_noses.png`, `test_render.png`.
- Backend: `backend/gallery.json` (bản sao mồ côi).
- Monster: `Monster/Vector/overview.swf`.
- Thư mục đích tạo mới: `docs/archive/reports/`, `docs/archive/meetings/`, `docs/archive/specs/`, `docs/archive/test-evidence/`, `docs/wireframes/`.

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. Toàn bộ 7 file `.py` và 7 file `.png` scratch ở thư mục gốc được xóa bỏ hoàn toàn.
2. File `backend/gallery.json` mồ côi được xóa bỏ; `server.js` tiếp tục đọc/ghi bình thường tại `backend/output/gallery.json`.
3. File Flash `overview.swf` được xóa bỏ.
4. Các file `*.docx`, `*.pdf`, `Test-sources/` và `wireframes/` được di chuyển an toàn vào `docs/archive/` tương ứng.
5. Kiểm tra `git status` xác nhận các file đã được xóa/di chuyển đúng vị trí.

### 4. Điều KHÔNG ĐƯỢC LÀM
- KHÔNG xóa nhầm thư mục `backend/output/gallery.json` (dữ liệu thật của app).
- KHÔNG xóa các file trong `Monster/PNG/` (tài nguyên quái vật gốc).

### 5. Cách báo cáo kết quả
- Cập nhật số lượng file rác = 0 trong `PROJECT_STATUS.md`.
- Ghi nhận nhật ký vào `docs/analysis/PROGRESS_LOG.md`.

---

## TASK-03: Sửa Lỗi ESLint & Chuẩn Hóa React 19 State Trong `CharacterBuilder/`

### 1. Mục tiêu
Sửa triệt để 9 lỗi và cảnh báo ESLint, đưa kết quả `npm run lint` về 0 errors, 0 warnings; giải quyết dứt điểm lỗi `set-state-in-effect` có nguy cơ gây re-render vô tận.

### 2. Các tệp liên quan
- `frontend/src/pages/CharacterBuilder/CharacterBuilder.jsx`
- `frontend/src/pages/CharacterBuilder/CanvasPreview.jsx`
- `frontend/src/pages/CharacterBuilder/CategoryMenu.jsx`
- `frontend/src/pages/CharacterBuilder/CustomizerInspector.jsx`
- `frontend/src/pages/CharacterBuilder/CustomizerSidebar.jsx`

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. Xóa bỏ toàn bộ các import `React` không dùng (`no-unused-vars`) phù hợp với React 19 JSX transform.
2. Xóa biến `colorPalettes` không dùng tại `CharacterBuilder.jsx:6`.
3. Khắc phục lỗi `react-hooks/set-state-in-effect` tại `CharacterBuilder.jsx:96` bằng cách không gọi `setSelections()` trực tiếp trong effect đồng bộ.
4. Bổ sung đầy đủ dependency array cho các hooks theo khuyến cáo của `react-hooks/exhaustive-deps`.
5. Chạy lệnh `npm run lint` ở `frontend/` trả về: `✔ No ESLint warnings or errors`.

### 4. Kiểm thử bắt buộc (Required Tests)
- Mở trang `/character-builder`, thử chuyển đổi giữa các model nhân vật (Monster, CozyFae, Pipoya).
- Xác nhận Canvas vẫn cập nhật đúng bộ phận được chọn và không có lỗi trong Console trình duyệt.

### 5. Cách báo cáo kết quả
- Cập nhật chỉ số ESLint = 0 trong `PROJECT_STATUS.md` và `QA_REPORT.md` (chuyển BUG-02 sang Resolved).

---

## TASK-04: Chống Race Condition Trong `saveToGallery()` & Bổ Sung Validation Đầu Vào

### 1. Mục tiêu
Bảo vệ tính toàn vẹn dữ liệu khi nhiều học sinh cùng tạo asset; chuẩn hóa việc kiểm tra đầu vào trước khi gọi tiến trình Python.

### 2. Các tệp liên quan
- `backend/server.js`

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. Hàm `saveToGallery()` trong `server.js:59-80` được bổ sung cơ chế hàng đợi ghi (In-Memory Queue hoặc Promise Chain) để tuần tự hóa các thao tác ghi vào `gallery.json`, triệt tiêu hoàn toàn nguy cơ race condition.
2. Kiểm tra chặt chẽ trường `subject` và `action`: loại bỏ các ký tự nguy hiểm dòng lệnh trước khi đưa vào mảng `args` của `child_process.execFile`.
3. Kiểm tra trường `style` hợp lệ; loại bỏ tình trạng lưu `"style": "N/A"` vào `gallery.json`.

### 4. Kiểm thử bắt buộc (Required Tests)
- Viết một script node nhỏ bắn 5 request đồng thời vào `saveToGallery()`; kiểm tra `gallery.json` có đúng 5 bản ghi mới, không bản ghi nào bị ghi đè mất.

### 5. Cách báo cáo kết quả
- Cập nhật BUG-03 trong `QA_REPORT.md` sang trạng thái `RESOLVED`.

---

## TASK-05: Thiết Lập Bộ Kiểm Thử Tự Động Ban Đầu (Vitest & Supertest)

### 1. Mục tiêu
Thiết lập hạ tầng kiểm thử tự động cho dự án, viết 10 test case ưu tiên cao nhất (P0) theo kế hoạch `TEST_PLAN.md`.

### 2. Các tệp liên quan
- `backend/package.json` (thêm script test và thư viện supertest)
- `backend/tests/api.test.js` (tạo mới)
- `frontend/package.json` (thêm vitest, @testing-library/react)
- `frontend/src/tests/` (tạo mới)

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. Cấu hình lệnh `npm test` ở backend chạy kiểm thử API tự động với Supertest.
2. Viết tối thiểu 5 test case API:
   - Validate payload rỗng trả về `400 Bad Request`.
   - Mock Python CLI trả về JSON chuẩn, kiểm tra endpoint trả về `200 OK` kèm metadata.
   - Kiểm tra endpoint `/api/gallery` trả về mảng danh mục.
3. Cấu hình lệnh `npm test` ở frontend chạy kiểm thử component với Vitest.
4. Viết tối thiểu 5 test case frontend:
   - Kiểm tra render Header đủ 4 route.
   - Kiểm tra khởi tạo CanvasPreview với model quái vật mặc định.
   - Kiểm tra tính toán chia frame trong `AnimationPreview`.
5. Cả 2 lệnh test đều đạt kết quả 100% PASS.

### 4. Cách báo cáo kết quả
- Nâng độ phủ kiểm thử từ 0% lên >= 25% trong `PROJECT_STATUS.md`.
- Cập nhật tiến độ trụ cột Kiểm thử từ 6.7% lên 35.0%.

---

## TASK-06: Khắc Phục Lỗi 404 SPA Client-side Routing Trên Vercel

### 1. Mục tiêu
Giải quyết dứt điểm lỗi `404: NOT_FOUND` khi reload hoặc truy cập trực tiếp các route con (`/character-builder`, `/generator`, `/gallery`) trên môi trường triển khai Vercel.

### 2. Các tệp liên quan
- `frontend/vercel.json` (tạo mới)
- `vercel.json` (thư mục gốc, dự phòng cấu hình monorepo)

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. Tạo tệp `frontend/vercel.json` với cấu hình rewrites:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ],
     "headers": [
       {
         "source": "/assets/(.*)",
         "headers": [
           { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
         ]
       }
     ]
   }
   ```
2. Đảm bảo lệnh `npm run build` ở frontend tạo ra thư mục `dist/` sạch sẽ.
3. Reload trên bất kỳ URL nào tại link deploy Vercel đều tự động render đúng trang thay vì báo lỗi 404.

### 4. Cách báo cáo kết quả
- Ghi nhận trạng thái hoàn thành vào `CHANGELOG.md` và `docs/analysis/PROGRESS_LOG.md`.

---

## TASK-07: Hiển Thị Ảnh Xem Trước (Thumbnail Preview) Cho Các Ô Tùy Chọn Character Studio

### 1. Mục tiêu
Thay thế biểu tượng dấu sao thô sơ `✦` tại các ô vuông chọn kiểu dáng bằng hình ảnh thu nhỏ thực tế của từng bộ phận nhân vật, giúp người dùng dễ dàng lựa chọn.

### 2. Các tệp liên quan
- `frontend/src/pages/CharacterBuilder/CustomizerInspector.jsx`
- `frontend/src/pages/CharacterBuilder/monster_config.js`
- `frontend/src/pages/CharacterBuilder/assets_config.js`

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. **Với Monster Builder**:
   - Mỗi ô tùy chọn render thẻ `<img>` trỏ đến `opt.src` tương ứng.
   - Hiển thị căn giữa, giữ tỷ lệ khung hình (`object-contain`), kích hoạt `imageRendering: pixelated`.
2. **Với Pipoya RPG Model**:
   - Với các bộ phận dạng spritesheet, trích xuất hoặc render frame đầu tiên (32x32px) sử dụng CSS background clipping hoặc canvas thumbnail thu nhỏ.
3. **Với ô Trống (`_none`)**:
   - Giữ ký hiệu gạch chéo `∅` hoặc icon trực quan với nhãn "Trống".
4. **Trải nghiệm tương tác**:
   - Ô đang chọn có viền đỏ nổi bật, checkbox tích xanh góc trên hoặc bóng đổ active.
   - Thêm nhãn tooltip hiển thị tên đầy đủ của bộ phận khi rê chuột.

### 4. Cách báo cáo kết quả
- Chụp ảnh minh chứng giao diện mới.
- Cập nhật tài liệu `docs/SPEC.md` và `docs/PROJECT_STATUS.md`.

---

## TASK-08: Tối Ưu Nạp Trước (Preload) Asset & Bộ Nhớ Đệm Tránh Giật Lag Canvas

### 1. Mục tiêu
Xóa bỏ hoàn toàn độ trễ mạng khi đổi kiểu dáng/bộ phận trong Character Studio bằng cách nạp trước ảnh vào bộ nhớ đệm (`imageCache`).

### 2. Các tệp liên quan
- `frontend/src/pages/CharacterBuilder/CanvasPreview.jsx`
- `frontend/src/pages/CharacterBuilder/CharacterBuilder.jsx`

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. **Nạp trước theo danh mục (Category Preloading)**:
   - Khi người dùng bấm chọn một Tab danh mục (ví dụ "Arms" hoặc "Eyes"), hệ thống kích hoạt hàm nạp ngầm toàn bộ ảnh của danh mục đó:
     ```js
     options.forEach(opt => {
       const src = opt.src || opt.layers?.[0]?.src;
       if (src && !imageCache.has(src)) {
         const img = new Image();
         img.src = src;
         img.onload = () => imageCache.set(src, img);
       }
     });
     ```
2. **Nạp trước lúc rảnh rỗi (Idle Preloading)**:
   - Khi Component `CharacterBuilder` vừa mount xong, sử dụng `requestIdleCallback` nạp trước toàn bộ các bộ phận của bộ trang phục mặc định và các bộ phận thông dụng nhất.
3. **Hiệu năng Canvas**:
   - Khi người dùng click chọn bất kỳ option nào đã được nạp trước, canvas cập nhật ngay lập tức (< 16ms, 60fps) mà không cần chờ đợi mạng.

### 4. Cách báo cáo kết quả
- Đo lường thời gian phản hồi trước và sau khi tối ưu trong `docs/baseline/BASELINE-20261014.md`.

---

## TASK-09: Tinh Chỉnh Bố Cục Studio Đồng Bộ Chiều Cao 560px & Phóng To Tiêu Cự (Focal Zoom) Thumbnail

### 1. Mục tiêu
Giải quyết tình trạng frame bị che, chồng lấn và các item phụ kiện nhỏ (mũ/vương miện, mắt, kính) bị teo nhỏ thành chấm li ti trong ô xem trước của Character Studio; đưa toàn bộ Studio về kích thước hoàn hảo trong 1 màn hình.

### 2. Các tệp liên quan
- `frontend/src/pages/CharacterBuilder/CharacterBuilder.jsx`
- `frontend/src/pages/CharacterBuilder/CustomizerInspector.jsx`
- `frontend/src/pages/CharacterBuilder/CanvasPreview.jsx`
- `frontend/src/components/layout/Header.jsx`

### 3. Tiêu chí chấp nhận (Acceptance Criteria)
1. **Focal Zoom theo danh mục**:
   - `hats`: Zoom 2.8x (`bgSize: 269px 358px`, `bgPosition: -110px 4px`), vương miện và nón hiển thị to, rõ nét, chiếm phần lớn ô xem trước.
   - `eyes`, `glasses`, `makeup`: Zoom 3.2x (`bgSize: 307px 410px`, `bgPosition: -130px -21px`), đôi mắt và gọng kính hiển thị phóng đại ở trung tâm.
   - `beards`, `mouth`: Zoom 2.8x (`bgPosition: -110px -26px`).
   - `hairs`, `hairadds`, `ears`: Zoom 2.2x (`bgPosition: -82px 2px`).
   - `tops`, `clothes`: Zoom 1.9x (`bgPosition: -67px -14px`).
2. **Lưới và Huy hiệu**:
   - Chuyển sang lưới 3 cột (`grid-cols-3 gap-2.5`) với khung thumbnail 48x48px (`w-12 h-12`).
   - Huy hiệu tích chọn `✓` dời lên góc trên bên phải, không che lấp chi tiết đồ họa.
3. **Bố cục 1 màn hình (Single-Screen Viewport Fit)**:
   - Cột 1 (Sidebar), Cột 2 (Canvas Studio) và Cột 3 (Customizer Inspector) đều có chiều cao cố định đồng nhất `h-[560px]`.
   - Header thu gọn `py-3`, thanh công cụ trên (Tên + Xóa nền) gắn vào Header Card 2, thanh hành động (Ngẫu nhiên, Lưu PNG, Xuất AI) gắn vào Footer Card 2.
   - Toàn bộ giao diện Studio hiển thị trọn vẹn trên màn hình 1080p / 1536x776 mà không xuất hiện thanh cuộn dọc ngoài của trang (`body scroll`).

### 4. Cách báo cáo kết quả
- Chụp ảnh màn hình kiểm thử giao diện `studio_perfect_viewport_fit.png` và `hats_category_zoom.png`.
- Ghi nhận vào `docs/DECISIONS.md` (ADR-11) và `docs/DEVELOPMENT_PLAN.md`.
