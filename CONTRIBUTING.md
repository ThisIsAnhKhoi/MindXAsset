# HƯỚNG DẪN ĐÓNG GÓP PHÁT TRIỂN (CONTRIBUTING GUIDELINES)

Cảm ơn bạn đã quan tâm đóng góp cho dự án **MindX Game Asset Generator & Character Builder**! Để đảm bảo chất lượng kỹ thuật và trải nghiệm người dùng, vui lòng tuân thủ các quy tắc sau.

---

## 1. Quy Trình Làm Việc Với Git (Git Workflow)

1. **Phân nhánh (Branching)**:
   - Nhánh chính: `mindxasset.template` (hoặc `main`).
   - Nhánh tính năng: `feat/<tên-tính-năng>`.
   - Nhánh sửa lỗi: `fix/<tên-lỗi>`.
   - Nhánh tài liệu: `docs/<nội-dung>`.
2. **Quy ước Commit (Conventional Commits)**:
   - `feat(...)`: Tính năng mới (ví dụ: `feat(character-builder): add monster horns`).
   - `fix(...)`: Sửa lỗi (ví dụ: `fix(api): handle 429 error gracefully`).
   - `docs(...)`: Thêm hoặc sửa tài liệu.
   - `chore(...)`: Cập nhật cấu hình phụ trợ, dọn dẹp file.

---

## 2. Tiêu Chuẩn Chất Lượng Mã Nguồn (Code Quality Standards)

- **Frontend**:
  - Không để lại cảnh báo hoặc lỗi linter: Chạy `npm run lint` tại `frontend/` bắt buộc phải đạt `✔ No ESLint warnings or errors`.
  - Không import các biến hoặc module không sử dụng (`no-unused-vars`).
  - Không gọi `setState` đồng bộ bên trong `useEffect` gây nguy cơ cascading render.
  - Kiểm tra `npm run build` trước khi gửi PR để đảm bảo không gãy build production.
- **Backend**:
  - Bắt buộc kiểm tra (validate) dữ liệu đầu vào tại tầng Controller trước khi chuyển tiếp sang tiến trình xử lý.
  - Mọi thao tác tải file tạm lên thư mục `backend/uploads/` phải được dọn dẹp bằng `fs.unlink()` trong khối `finally` hoặc error handler.

---

## 3. Quy Tắc Bảo Mật & Quyền Riêng Tư (Security & Privacy)

- **TUYỆT ĐỐI KHÔNG** commit các file `.env` hoặc nhúng khóa API Key, Secret Token trực tiếp vào mã nguồn.
- Chỉ đưa biến mới vào `.env.example` với giá trị minh họa vô hại.
- Không thu thập dữ liệu cá nhân (PII) của học sinh.

---

## 4. Định Nghĩa Hoàn Thành (Definition of Done)

Một Pull Request chỉ được merge khi:
1. Đã được chạy thử nghiệm trên máy local và xác nhận hoạt động bình thường.
2. Lệnh `npm run lint` ở frontend và `node -c` ở backend đều PASS.
3. Cập nhật các thay đổi vào [`CHANGELOG.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/CHANGELOG.md) và cập nhật tiến độ vào [`PROJECT_STATUS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/PROJECT_STATUS.md).
