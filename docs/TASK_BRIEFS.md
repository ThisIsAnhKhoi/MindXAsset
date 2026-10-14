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
