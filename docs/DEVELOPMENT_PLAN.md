# LỘ TRÌNH PHÁT TRIỂN & KẾ HOẠCH NÂNG CẤP (DEVELOPMENT ROADMAP)

- **Dự án**: MindX Game Asset Generator & Character Builder (MindXAsset)
- **Phiên bản hiện tại**: `0.3.0`
- **Mục tiêu lộ trình**: Nâng cấp hệ thống từ `56.0%` (Prototype) lên `95.0%` (Production-Ready) qua 4 giai đoạn kỹ thuật.
- **Quy ước ước lượng**: Tính theo **Phiên làm việc với Trợ lý AI (AI Sessions)** và quy mô công việc (Cỡ S: 1 session, M: 2-3 sessions, L: 4-6 sessions).

---

## 1. Tổng Quan 4 Giai Đoạn Phát Triển (Roadmap Overview)

```
[ Giai đoạn 1: Ổn định & Dọn dẹp ] ──► [ Giai đoạn 2: Củng cố CSDL & API ]
      (Hardening & Cleanup)                    (Database & Robustness)
      Thời lượng: 3 AI Sessions                Thời lượng: 4 AI Sessions
               │                                        │
               ▼                                        ▼
[ Giai đoạn 3: Kiểm thử & CI/CD ]   ──► [ Giai đoạn 4: Tính Năng Mới & Auth ]
      (QA & Automation)                        (Features & Accounts)
      Thời lượng: 3 AI Sessions                Thời lượng: 5 AI Sessions
```

---

## 2. Chi Tiết Từng Giai Đoạn Phát Triển

### Giai Đoạn 1: Ổn định & Dọn dẹp hệ thống (Hardening & Cleanup)
- **Mục tiêu**: Đóng toàn bộ các lỗi P0/P1, loại bỏ rác thải kỹ thuật và chuẩn hóa repo để sẵn sàng phát hành MVP.
- **Phạm vi LÀM**:
  - Task 1.1: Xoay khóa Cloudinary API Secret và xóa bỏ mọi tham chiếu rò rỉ (Cỡ S).
  - Task 1.2: Dọn dẹp 15 file rác ở thư mục gốc, di chuyển tài liệu cũ vào `docs/archive/` (Cỡ S).
  - Task 1.3: Sửa 9 lỗi/cảnh báo ESLint trong `CharacterBuilder/` (đặc biệt lỗi `set-state-in-effect`) (Cỡ S).
  - Task 1.4: Đính chính thông tin tiếp thị trên `Home.jsx` và đồng bộ `"main": "server.js"` (Cỡ S).
- **Phạm vi KHÔNG LÀM**: Không thêm tính năng mới, không đổi CSDL.
- **Tiêu chí thoát đo lường được (Exit Criteria)**:
  - `npm run lint` ở frontend trả về `0 errors, 0 warnings`.
  - Không còn bất kỳ file `.py` hay `.png` scratch nào nằm ở thư mục gốc.
  - `npm run build` thành công.
- **Điểm Demo**: Khởi động lại ứng dụng sạch sẽ, kiểm tra Canvas Monster Builder không còn cảnh báo console.

---

### Giai Đoạn 2: Củng cố CSDL & Tối ưu Trải nghiệm (Database & UX Robustness)
- **Mục tiêu**: Chuyển đổi từ file `gallery.json` sang cơ sở dữ liệu SQLite, bổ sung xác thực dữ liệu đầu vào, rate-limiting, đồng thời khắc phục lỗi 404 Vercel và tối ưu hiển thị/nạp trước asset.
- **Phạm vi LÀM**:
  - Task 2.1: Tích hợp thư viện SQLite (`better-sqlite3`) và tạo bảng `assets` (Cỡ M, phụ thuộc Task 1.2).
  - Task 2.2: Viết script migration chuyển toàn bộ dữ liệu từ `gallery.json` vào SQLite (Cỡ S).
  - Task 2.3: Bổ sung Middleware xác thực dữ liệu đầu vào với `Zod` cho các endpoint backend (Cỡ S).
  - Task 2.4: Cài đặt `express-rate-limit` chống spam API tạo ảnh (Cỡ S).
  - Task 2.5: Cấu hình Code Splitting (`React.lazy()`) cho frontend để đưa bundle JS về < 500 kB (Cỡ S).
  - Task 2.6: Cấu hình `vercel.json` SPA Fallback (giải quyết triệt để lỗi 404 khi reload trang con) (Cỡ S, `TASK-06`) - **[HOÀN THÀNH]**.
  - Task 2.7: Bổ sung Preview Thumbnail trực quan cho các ô chọn option và cơ chế nạp trước ảnh ngầm (Cỡ M, `TASK-07`, `TASK-08`) - **[HOÀN THÀNH]**.
  - Task 2.8: Tinh chỉnh bố cục Character Studio đồng bộ chiều cao 560px & Focal Zoom thumbnail cắt trống (Cỡ S, `TASK-09`, `ADR-11`) - **[HOÀN THÀNH]**.
- **Phạm vi KHÔNG LÀM**: Chưa làm hệ thống đăng nhập tài khoản.
- **Tiêu chí thoát đo lường được**:
  - Không còn đọc/ghi trực tiếp vào file `gallery.json`.
  - 10 request tạo ảnh đồng thời được lưu vào SQLite an toàn không mất dữ liệu.
  - Reload trên bất kỳ đường dẫn nào (`/character-builder`, `/generator`, `/gallery`) trên Vercel đều render đúng trang (0 lỗi 404).
  - Các ô chọn kiểu dáng hiển thị thumbnail đồ họa thật; độ trễ đổi bộ phận < 16ms (0ms tải mạng nhờ preloading).
  - Bundle frontend `dist/assets/*.js` có kích thước < 450 kB.
- **Điểm Demo**: Chạy script bắn 10 request song song vào SQLite; demo reload trang con trên link deploy và chuyển đổi bộ phận nhân vật không gián đoạn.

---

### Giai Đoạn 3: Kiểm thử tự động & CI/CD (QA Automation)
- **Mục tiêu**: Xây dựng kim tự tháp kiểm thử tự động, nâng độ phủ code từ 0% lên >= 70%.
- **Phạm vi LÀM**:
  - Task 3.1: Thiết lập `Vitest` và `@testing-library/react` cho frontend (Cỡ S).
  - Task 3.2: Viết 15 unit test cho các component: `AnimationPreview`, `CanvasPreview`, `Header` (Cỡ M).
  - Task 3.3: Thiết lập `Supertest` kiểm thử 7 endpoint API backend (Cỡ M).
  - Task 3.4: Xây dựng GitHub Actions workflow tự động chạy lint, test và build khi mở Pull Request (Cỡ S).
- **Phạm vi KHÔNG LÀM**: Chưa viết test E2E phức tạp với thiết bị di động.
- **Tiêu chí thoát đo lường được**:
  - Lệnh `npm test` ở backend và frontend đều chạy xanh (100% pass).
  - Độ phủ kiểm thử backend đạt >= 70% dòng code.
- **Điểm Demo**: Mở PR trên GitHub và pipeline CI chạy xanh toàn bộ.

---

### Giai Đoạn 4: Mở rộng tính năng & Hệ thống tài khoản (Features & Auth)
- **Mục tiêu**: Nâng cấp giá trị nghiệp vụ, phục vụ học sinh đăng nhập lưu đồ án riêng.
- **Phạm vi LÀM**:
  - Task 4.1: Tích hợp xác thực tài khoản MindX qua Google OAuth 2.0 (Cỡ L, phụ thuộc Giai đoạn 2).
  - Task 4.2: Phân quyền Gallery cá nhân: mỗi học sinh chỉ quản lý ảnh của mình (Cỡ M).
  - Task 4.3: Tính năng xuất hoạt ảnh thành file `.gif` động hoặc `.zip` chuỗi PNG (Cỡ M).
  - Task 4.4: Bổ sung preset nhân vật mẫu (Hiệp sĩ, Pháp sư, Quái vật rừng) (Cỡ S).
- **Tiêu chí thoát đo lường được**:
  - Học sinh có thể đăng nhập bằng email MindX và tải về file GIF chuyển động hoàn chỉnh.
- **Điểm Demo**: Một học sinh đăng nhập, ghép quái vật, xuất file GIF và tải về import thẳng vào Scratch.

---

## 3. Bảng Phân Loại Backlog Theo Mức Độ Ưu Tiên (P0 - P3)

| Mã Task | Tên công việc | Ưu tiên | Giai đoạn | Quy mô | Phụ thuộc |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **TSK-01** | Xoay khóa `CLOUDINARY_API_SECRET` & xóa dấu vết git | **P0** | Giai đoạn 1 | Cỡ S | Không |
| **TSK-02** | Dọn dẹp 15 file rác root & di dời docs cũ vào `docs/archive/` | **P0** | Giai đoạn 1 | Cỡ S | Không |
| **TSK-03** | Sửa 9 lỗi/cảnh báo ESLint trong `CharacterBuilder/` | **P0** | Giai đoạn 1 | Cỡ S | Không |
| **TSK-04** | Đồng bộ hóa tài liệu & đính chính text AI model trên UI | **P1** | Giai đoạn 1 | Cỡ S | Không |
| **TSK-05** | Chuyển đổi lưu trữ `gallery.json` sang SQLite với `better-sqlite3` | **P1** | Giai đoạn 2 | Cỡ M | TSK-02 |
| **TSK-06** | Bổ sung middleware `Zod` validation & `express-rate-limit` | **P1** | Giai đoạn 2 | Cỡ S | Không |
| **TSK-07** | Phân tách chunk frontend với `React.lazy()` (< 500 kB) | **P2** | Giai đoạn 2 | Cỡ S | Không |
| **TSK-08** | Cài đặt Vitest & viết 15 test cases frontend ban đầu | **P2** | Giai đoạn 3 | Cỡ M | TSK-03 |
| **TSK-09** | Cài đặt Supertest & viết bộ test API backend | **P2** | Giai đoạn 3 | Cỡ M | TSK-05 |
| **TSK-10** | Xây dựng CI/CD Pipeline với GitHub Actions | **P2** | Giai đoạn 3 | Cỡ S | TSK-08, TSK-09 |
| **TSK-11** | Tích hợp Google OAuth 2.0 & Gallery theo tài khoản | **P3** | Giai đoạn 4 | Cỡ L | TSK-05 |
| **TSK-12** | Tính năng xuất hoạt ảnh thành định dạng `.gif` động | **P3** | Giai đoạn 4 | Cỡ M | Không |

---

## 4. Top 10 Rủi Ro Kỹ Thuật & Biện Pháp Phòng Ngừa

1. **Rò rỉ khóa đám mây**: Khóa Cloudinary cũ bị kẻ gian lợi dụng -> *Xoay khóa ngay trên console quản trị*.
2. **Crash OOM trên Render**: Thư viện `rembg` nuốt RAM -> *Duy trì biến môi trường `DISABLE_REMBG=true`*.
3. **Mất dữ liệu do xung đột ghi**: File `gallery.json` bị ghi đè -> *Chuyển sang SQLite có ACID transaction*.
4. **Vượt hạn mức API Pollinations**: Lỗi 429 hoặc hết tiền 402 -> *Bắt lỗi trả thông báo tiếng Việt và hỗ trợ retry*.
5. **Tranh chấp bản quyền hình ảnh CozyFae**: Bản quyền template cấm phân phối -> *Khóa tập trung vào Kenney CC0*.
6. **Vỡ layout Sprite Sheet**: AI vẽ khung hình lệch tỉ lệ -> *Nâng cấp thuật toán slice tự động căn chỉnh tâm (bounding box)*.
7. **Lỗi hồi quy khi sửa state React**: Thay đổi state Canvas gây đơ máy -> *Viết unit test kiểm thử trước khi sửa*.
8. **Spam API làm cạn kiệt tài nguyên**: Học sinh bấm liên tục nút Tạo -> *Áp dụng rate-limit 10 request/phút theo IP*.
9. **Kích thước repo phình to**: Lưu nhiều ảnh sinh ra vào git -> *Đảm bảo `backend/output/` nằm trong `.gitignore`*.
10. **Phụ thuộc nhà cung cấp AI duy nhất**: Pollinations bảo trì làm tê liệt dịch vụ -> *Thiết kế kiến trúc Adapter cắm rút để sẵn sàng đổi sang Replicate hoặc HuggingFace*.

---

## 5. Danh Sách Cố Ý KHÔNG Làm (Intentionally NOT Doing)

1. **KHÔNG viết lại backend sang Python FastAPI hoặc Spring Boot**: Giữ nguyên Node.js Express để bảo tồn công sức và tránh xáo trộn mã đang chạy tốt.
2. **KHÔNG hỗ trợ giao diện Native Mobile App**: Tập trung 100% trải nghiệm Web trên màn hình Desktop máy tính phòng lab trường học.
3. **KHÔNG xây dựng hệ thống thanh toán hay nạp tiền tự động**: Sản phẩm phục vụ phi thương mại cho hoạt động giáo dục tại MindX.
4. **KHÔNG lưu trữ vĩnh viễn ảnh người dùng tải lên**: Triệt để xóa bỏ file tạm trong `uploads/` để bảo vệ quyền riêng tư học sinh.
