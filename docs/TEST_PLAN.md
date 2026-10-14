# KẾ HOẠCH KIỂM THỬ HỆ THỐNG TOÀN DIỆN (MASTER TEST PLAN)

- **Dự án**: MindX Game Asset Generator & Character Builder (MindXAsset)
- **Phiên bản áp dụng**: `0.3.0`
- **Người lập**: Principal QA Lead
- **Nguyên tắc**: Chỉ lập kế hoạch chi tiết, không tự ý can thiệp mã nguồn trong tài liệu này.

---

## 1. Phạm Vi Kiểm Thử (Testing Scope)

### 1.1 Trong phạm vi (In-Scope)
- Toàn bộ 4 màn hình giao diện người dùng: Home, Generator, CharacterBuilder, Gallery.
- Cả 7 endpoint REST API của máy chủ Node.js Express.
- Module Python AI CLI: phân tích tham số dòng lệnh, thuật toán pixel art, cắt khung tileset/tilesheet.
- Thành phần Canvas Preview và bộ tua hoạt ảnh `AnimationPreview`.
- Xử lý lỗi đầu vào, validate form, fallback lưu trữ khi Cloudinary offline.
- Tương thích đa trình duyệt (Chrome, Firefox, Edge) trên máy tính để bàn (Desktop).

### 1.2 Ngoài phạm vi (Out-of-Scope)
- Kiểm thử độ ổn định nội bộ bên trong máy chủ của bên thứ ba (Pollinations.ai, Cloudinary).
- Kiểm thử tải cao trên 1,000 người dùng đồng thời (dành cho giai đoạn Production mở rộng).
- Hỗ trợ giao diện ứng dụng di động nguyên bản (Native Mobile Apps).

---

## 2. Chiến Lược Kim Tự Tháp Kiểm Thử (Testing Pyramid Strategy)

Phù hợp với kiến trúc hybrid Node.js + Python + React:

```
          /  E2E Tests (10%)  \        --> Playwright (User journeys)
         /---------------------\
        / Integration (30%)     \      --> Supertest + Pytest (API & IPC)
       /-------------------------\
      /   Unit Tests (60%)        \    --> Vitest (React) + Pytest (Math/Pixel)
     /-----------------------------\
```

1. **Tầng Unit Tests (60%)**:
   - Frontend: Kiểm thử render component React, tính toán tọa độ layer trong `CanvasPreview.jsx`, logic chia cột tileset với `Vitest`.
   - Backend Python: Kiểm thử các hàm toán học `fit_to_canvas`, `apply_pixel_art_effect`, `binarize_alpha` với `Pytest`.
2. **Tầng Integration Tests (30%)**:
   - Kiểm thử các endpoint Express với `Supertest`, mock luồng `child_process.execFile` để kiểm tra khả năng bắt lỗi 400, 500, JSON parse error.
   - Kiểm thử đọc/ghi an toàn vào `gallery.json`.
3. **Tầng End-to-End Tests (10%)**:
   - Sử dụng `Playwright` tự động hóa luồng: Mở Character Builder -> chọn các bộ phận quái vật -> kiểm tra Canvas render đúng -> mở modal hoạt ảnh.

---

## 3. Ma Trận Môi Trường Kiểm Thử (Environment Matrix)

| Thành phần | Môi trường Local (Dev) | Môi trường Staging / Cloud (Render) | Trình duyệt Client |
| :--- | :--- | :--- | :--- |
| **Hệ điều hành** | Windows 10/11 x64, macOS, Ubuntu 22.04 | Linux Alpine / Debian (Container) | Google Chrome (>=115), Edge (>=115), Firefox (>=118) |
| **Node.js** | v18.x - v22.x LTS | v20.x LTS | - |
| **Python** | 3.10 - 3.14 x64 | 3.11 / 3.12 (khuyến nghị trên cloud) | - |
| **Mạng / Dịch vụ** | Mock API / Fallback local disk | Cloudinary CDN + Pollinations Live API | Băng thông tiêu chuẩn (>= 10 Mbps) |

---

## 4. Bảng Phân Tích Rủi Ro Kiểm Thử (Risk Assessment)

| Mã rủi ro | Mô tả rủi ro | Xác suất | Tác động | Biện pháp giảm thiểu |
| :--- | :--- | :---: | :---: | :--- |
| **RSK-01** | Pollinations API bị giới hạn 429 hoặc hết tiền 402 | Cao | Cao | Bắt mã lỗi và hiển thị toast tiếng Việt thân thiện; dùng ảnh mock khi test. |
| **RSK-02** | Thư viện `rembg` gây sập RAM (OOM) trên máy chủ | Trung bình | Critical | Thiết lập biến môi trường `DISABLE_REMBG=true` khi kiểm thử trên máy yếu. |
| **RSK-03** | Lỗi race condition khi ghi đồng thời vào `gallery.json` | Trung bình | Trung bình | Viết test case bắn 10 request đồng thời để kiểm chứng mất dữ liệu. |
| **RSK-04** | Sai lệch kích thước frame khi tua animation | Trung bình | Thấp | Test tính toán tọa độ x, y trên nhiều bộ sprite sheet khác nhau. |

---

## 5. Bảng 40 Test Case Ưu Tiên Cao (Prioritized Test Cases)

| ID | Phân hệ (Module) | Điều kiện ban đầu | Các bước thực hiện | Kết quả mong đợi | Ưu tiên | Loại test |
| :---: | :--- | :--- | :--- | :--- | :---: | :---: |
| **TC-01** | Backend / API | Server đang chạy | Gửi `POST /api/generate-background` với `subject = ""` | Trả về `400 Bad Request: { error: 'Missing subject field' }` | **P0** | Tự động |
| **TC-02** | Backend / API | Server đang chạy | Gửi `POST /api/generate-background` với `subject = "forest"`, `size_key = "background_hd"` | Trả về `200 OK` kèm `image` (Base64) và `metadata` 1 frame 1920x1080 | **P0** | Tự động |
| **TC-03** | Backend / API | Server đang chạy | Gửi `POST /api/generate-sprite` với `subject = ""` | Trả về `400 Bad Request` | **P0** | Tự động |
| **TC-04** | Backend / API | Server đang chạy | Gửi `POST /api/generate-sprite` với `subject = "hero"`, `size_key = "sprite_small"` | Trả về `200 OK`, kích thước metadata là 32x32px | **P1** | Tự động |
| **TC-05** | Backend / API | Server đang chạy | Gửi `POST /api/generate-tilesheet` với `frames = 8` | Trả về `200 OK`, mảng `frames` trong metadata có đúng 8 phần tử | **P0** | Tự động |
| **TC-06** | Backend / API | Server đang chạy | Gửi `POST /api/generate-tileset` với `subject = "grass, stone, water"`, `columns = 8` | Trả về `200 OK`, layout format là `grid`, columns = 8 | **P1** | Tự động |
| **TC-07** | Backend / API | Server đang chạy | Gửi `POST /api/generate-from-image` không đính kèm file | Trả về `400 Bad Request: { error: 'Vui lòng upload ảnh!' }` | **P0** | Tự động |
| **TC-08** | Backend / API | Server đang chạy | Gửi file ảnh dung lượng 15MB (>10MB) | Multer chặn và trả về lỗi vượt quá giới hạn file | **P0** | Tự động |
| **TC-09** | Backend / API | File upload bị lỗi | Gửi file ảnh hỏng cấu hình | Server xóa file tạm trong `uploads/` và trả về lỗi 500 an toàn | **P1** | Tự động |
| **TC-10** | Backend / API | Python CLI văng 429 | Mock stderr Python chứa "429 Client Error" | Server trả về mã 500 kèm thông báo quá tải tiếng Việt | **P1** | Tự động |
| **TC-11** | Backend / API | Python CLI văng 402 | Mock stderr Python chứa "402 Payment Required" | Server trả về mã 500 kèm thông báo hết credit Pollen | **P1** | Tự động |
| **TC-12** | Backend / API | Python CLI văng 401 | Mock stderr Python chứa "401 Unauthorized" | Server trả về mã 500 kèm thông báo sai khóa API Key | **P1** | Tự động |
| **TC-13** | Backend / Storage | `gallery.json` tồn tại | Gửi request `GET /api/gallery` | Trả về mảng JSON hợp lệ chứa các item đã tạo | **P0** | Tự động |
| **TC-14** | Backend / Storage | `gallery.json` bị xóa | Gửi request `GET /api/gallery` | Server tự động khởi tạo mảng rỗng `[]` và trả về 200 OK | **P1** | Tự động |
| **TC-15** | Backend / Storage | Cloudinary offline | Sinh ảnh mới khi chưa điền env Cloudinary | Ảnh được lưu vào `output/` cục bộ và URL trỏ về `http://localhost:5000/output/...` | **P1** | Tự động |
| **TC-16** | Frontend / Home | Trang chủ `/` | Kiểm tra render thanh điều hướng (Header) | Hiển thị đủ 4 liên kết: Trang Chủ, Tạo Asset, Ghép Nhân Vật, Thư Viện | **P1** | Tự động |
| **TC-17** | Frontend / Home | Trang chủ `/` | Nhấn nút "Tạo Ngay" trong Hero Section | Trình duyệt chuyển hướng mượt mà sang trang `/generator` | **P2** | Tự động |
| **TC-18** | Frontend / Generator | Tab Background | Nhập prompt, chọn tỉ lệ 16:9, bấm Tạo | Hiển thị trạng thái Loading (Spinner), vô hiệu hóa nút bấm | **P0** | Thủ công |
| **TC-19** | Frontend / Generator | Sinh ảnh thành công | Nhận response từ API | Tắt loading, mở Modal hiển thị ảnh toàn màn hình kèm Toast thành công | **P0** | Thủ công |
| **TC-20** | Frontend / Generator | Sinh ảnh thất bại | API trả về mã lỗi 500 | Hiển thị Toast lỗi màu đỏ ở góc trên bên phải màn hình | **P1** | Thủ công |
| **TC-21** | Frontend / Generator | Tab Sprite | Chọn góc nhìn (Perspective) "Side" | Kiểm tra payload gửi sang backend có `--facing side` | **P2** | Tự động |
| **TC-22** | Frontend / Generator | Tab Tilesheet | Nhập số khung = 10, hành động = "running" | Modal mở ra tự động nạp component `AnimationPreview` | **P0** | Thủ công |
| **TC-23** | Frontend / Generator | Tab Image-to-Sprite | Kéo thả file ảnh JPG vào vùng dropzone | Giao diện hiển thị preview ảnh thu nhỏ và tên file đã chọn | **P1** | Thủ công |
| **TC-24** | Frontend / CharBuilder| Vào `/character-builder` | Trang khởi tạo lần đầu | Mặc định chọn model Quái Vật (Monster), Canvas hiển thị thân xanh | **P0** | Tự động |
| **TC-25** | Frontend / CharBuilder| Model Monster | Bấm chọn màu thân khác (đỏ, vàng) | Canvas xóa thân cũ và vẽ thân mới lập tức theo thứ tự z-index | **P0** | Tự động |
| **TC-26** | Frontend / CharBuilder| Model Monster | Bấm chọn các kiểu mắt, miệng, sừng | Canvas ghép chồng các lớp ảnh PNG trong suốt không bị lệch vị trí | **P0** | Thủ công |
| **TC-27** | Frontend / CharBuilder| Nút "Xóa lớp" | Chọn bỏ phụ kiện sừng | Canvas xóa lớp sừng và giữ nguyên các bộ phận mắt, miệng | **P1** | Thủ công |
| **TC-28** | Frontend / CharBuilder| Nút "Tải ảnh PNG" | Nhân vật đã ghép hoàn chỉnh trên Canvas | Trình duyệt tải về file `custom_character.png` nền trong suốt | **P0** | Thủ công |
| **TC-29** | Frontend / CharBuilder| Nút "Xuất Hoạt Ảnh AI"| Bấm nút "Tạo Hoạt Ảnh Chạy" | Gửi Base64 sang backend, hiển thị modal chờ AI sinh tilesheet | **P1** | Thủ công |
| **TC-30** | Frontend / Preview | Component `AnimationPreview` | Nạp sprite sheet 10 frame | Hoạt ảnh chạy tự động lặp vòng mượt mà ở tốc độ 10 FPS | **P0** | Thủ công |
| **TC-31** | Frontend / Preview | Thanh trượt FPS | Kéo FPS từ 10 lên 24 | Tốc độ chuyển frame tăng nhanh rõ rệt theo thời gian thực | **P1** | Thủ công |
| **TC-32** | Frontend / Preview | Nút "Đổi hình nền" | Bấm nút đổi nền (grid, dark, dungeon) | Canvas preview đổi nền bối cảnh phía sau nhân vật mượt mà | **P2** | Thủ công |
| **TC-33** | Frontend / Preview | Nút "Tải Tilesheet" | Xem trước ưng ý | Trình duyệt tải về file PNG dải ảnh gốc chuẩn kích thước | **P0** | Thủ công |
| **TC-34** | Frontend / Gallery | Trang Thư viện `/gallery` | Mở trang | Hiển thị lưới danh thiếp (cards) các ảnh đã lưu từ `gallery.json` | **P0** | Tự động |
| **TC-35** | Frontend / Gallery | Bộ lọc Type | Bấm tab "Background" | Lưới ảnh chỉ hiển thị các asset có `type === "background"` | **P1** | Tự động |
| **TC-36** | Frontend / Gallery | Ô tìm kiếm (Search) | Nhập từ khóa `"cat"` | Lưới ảnh lọc ra các thẻ có prompt chứa từ khóa "cat" | **P1** | Tự động |
| **TC-37** | Frontend / Gallery | Thẻ Tilesheet trong Gallery | Bấm nút "Xem Hoạt Ảnh" trên card | Mở modal `AnimationPreview` và tua vòng ảnh động của item đó | **P1** | Thủ công |
| **TC-38** | Python CLI | Terminal | Chạy `python cli.py background "test" --size 123x` | Báo lỗi cú pháp kích thước ngay ở tầng argparse trước khi gọi API | **P1** | Tự động |
| **TC-39** | Python CLI | Terminal | Chạy `python cli.py tileset "grass" "dirt" --columns 4` | Sinh file ảnh lưới và in JSON metadata có danh sách frames | **P1** | Tự động |
| **TC-40** | Hiệu năng / Build | Terminal | Chạy `npm run build` ở thư mục frontend | Hoàn thành trong < 10 giây, thư mục `dist/` chứa đủ file | **P0** | Tự động |

---

## 6. Tiêu Chí Vào/Ra & Định Nghĩa Hoàn Thành (Definition of Done)

### 6.1 Tiêu chí vào (Entry Criteria)
- Mã nguồn không có lỗi cú pháp (`node -c` PASS, `cli.py --help` PASS).
- Working tree sạch, đã sao lưu tag an toàn.
- Môi trường dev cài đặt đầy đủ package (Node và Python venv).

### 6.2 Tiêu chí ra (Exit Criteria)
- 100% test case ưu tiên **P0** và tối thiểu 80% test case **P1** đạt kết quả **PASS**.
- Không còn bất kỳ lỗi nào thuộc mức độ **Blocker** hoặc **Critical**.
- Linter `npm run lint` đạt kết quả 0 errors.

### 6.3 Định nghĩa hoàn thành (Definition of Done - DoD)
Một tính năng hoặc sửa lỗi chỉ được coi là "Done" khi:
1. Đã được kiểm chứng bằng test tự động hoặc thao tác chạy thật có bằng chứng.
2. Không gây lỗi hồi quy trên các trang khác.
3. Không vi phạm quy tắc an toàn (không lộ secret, không vi phạm bản quyền).
4. Cập nhật trạng thái vào `PROJECT_STATUS.md` và `docs/analysis/PROGRESS_LOG.md`.

---

## 7. Mười Test Tự Động Cần Viết Trước Tiên (Top 10 Automated Tests)

1. **Test-01: Kiểm tra Validate Input API Backend** (`TC-01`, `TC-03`, `TC-07`) — Đảm bảo server không bao giờ crash khi người dùng gửi payload rỗng.
2. **Test-02: Kiểm tra Phân tích tham số Python CLI** (`TC-38`) — Ngăn chặn truyền tham số bậy làm lãng phí request API ra ngoài.
3. **Test-03: Kiểm tra Format phản hồi Metadata** (`TC-05`, `TC-06`) — Đảm bảo cấu trúc `{ image, file_path, metadata }` luôn chuẩn cho frontend render.
4. **Test-04: Kiểm tra Fallback Đọc/Ghi Gallery** (`TC-13`, `TC-14`) — Đảm bảo trang Gallery không bao giờ bị trắng màn hình kể cả khi file JSON rỗng.
5. **Test-05: Kiểm tra Thuật toán Pixel Art Math** — Đảm bảo kích thước ảnh sau khi pixelate luôn đúng `32x32`, `64x64`, `128x128`.
6. **Test-06: Kiểm tra Tách nền U2Net & cờ DISABLE_REMBG** — Đảm bảo hệ thống không bị crash OOM khi chạy trên cloud.
7. **Test-07: Kiểm tra Khởi tạo State Model Monster** (`TC-24`, `TC-25`) — Đảm bảo sửa triệt để lỗi ESLint `set-state-in-effect`.
8. **Test-08: Kiểm tra Giới hạn dung lượng Upload 10MB** (`TC-08`, `TC-09`) — Ngăn chặn tấn công làm cạn kiệt dung lượng ổ cứng máy chủ.
9. **Test-09: Kiểm tra Dịch mã lỗi AI sang tiếng Việt** (`TC-10`, `TC-11`, `TC-12`) — Bảo đảm trải nghiệm học sinh luôn nhận thông báo rõ ràng khi AI có sự cố.
10. **Test-10: Kiểm tra Production Build & Lint** (`TC-40`) — Đảm bảo pipeline luôn sẵn sàng xuất xưởng bản bundle sạch.
