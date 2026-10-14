# CHÍNH SÁCH BẢO MẬT (SECURITY POLICY)

Dự án **MindX Game Asset Generator & Character Builder** cam kết bảo vệ an toàn cho dữ liệu học sinh, giáo viên và tài nguyên hệ thống.

---

## 1. Các Phiên Bản Được Hỗ Trợ (Supported Versions)

| Phiên bản | Được hỗ trợ bảo mật? | Ghi chú |
| :--- | :---: | :--- |
| `0.3.x` (Hiện tại) | **CÓ** | Nhận các bản vá khẩn cấp về rò rỉ secret và lỗi phụ thuộc |
| `< 0.3.0` | Không | Đã ngừng hỗ trợ |

---

## 2. Báo Cáo Lỗ Hổng Bảo Mật (Reporting a Vulnerability)

Nếu bạn phát hiện bất kỳ sự cố bảo mật nào (rò rỉ secret, lỗi injection, tràn bộ nhớ DoS, quyền riêng tư dữ liệu):
1. **KHÔNG** mở Issue công khai trên GitHub.
2. Vui lòng gửi email trực tiếp cho đội ngũ quản trị kỹ thuật: `jundeptrainhat@gmail.com` hoặc thông báo nội bộ cho bộ môn Công nghệ MindX.
3. Vui lòng đính kèm:
   - Mô tả chi tiết lỗ hổng và mức độ nghiêm trọng.
   - Các bước tái hiện (Proof of Concept).
   - Đề xuất hướng khắc phục (nếu có).
4. Chúng tôi cam kết phản hồi xác nhận trong vòng **24 - 48 giờ** và tiến hành xử lý bản vá trong thời gian sớm nhất.

---

## 3. Quản Lý Khóa API & Bí Mật Đám Mây (Secrets Management)

- Mọi API Key (`POLLINATIONS_API_KEY`, `CLOUDINARY_*`) chỉ được lưu trong tệp `.env` trên máy cục bộ hoặc cấu hình bảo mật biến môi trường của nền tảng PaaS (Render Dashboard).
- Tệp `.env` nằm trong danh sách `.gitignore` và tuyệt đối không bao giờ được commit vào Git.
- Khi nghi ngờ có rò rỉ khóa trong quá khứ, quản trị viên có trách nhiệm thu hồi (revoke) và cấp lại khóa mới ngay lập tức.
