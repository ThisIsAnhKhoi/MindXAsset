# HƯỚNG DẪN BÀN GIAO & DUY TRÌ TÀI LIỆU (MAINTENANCE & HANDOVER GUIDE)

- **Dự án**: MindX Game Asset Generator & Character Builder (MindXAsset)
- **Mục đích**: Thiết lập quy tắc để tài liệu kỹ thuật không bao giờ bị lệch khỏi mã nguồn thực tế khi dự án tiếp tục phát triển.

---

## 1. Bảng "Tài Liệu Nào Là Nguồn Sự Thật Cho Việc Gì" (Single Source of Truth)

Để tránh tình trạng tài liệu chồng chéo, mâu thuẫn số liệu, mọi nhà phát triển và Trợ lý AI bắt buộc phải tham chiếu đúng tài liệu chuẩn theo bảng sau:

| Lĩnh vực / Nhu cầu tra cứu | Tài liệu nguồn sự thật (SSoT) | Tần suất cập nhật | Người chịu trách nhiệm |
| :--- | :--- | :--- | :--- |
| **Giới thiệu chung & Hướng dẫn chạy nhanh** | [`README.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/README.md) & [`README.en.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/README.en.md) | Khi đổi cách cài đặt / đổi tính năng chính | Technical Writer |
| **Đặc tả tính năng (As-built vs As-intended)** | [`SPEC.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/SPEC.md) | Khi thêm / sửa / bỏ một tính năng | Product Owner |
| **Con số tiến độ, lỗi mở & việc cần làm tiếp**| [`PROJECT_STATUS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/PROJECT_STATUS.md) | **Sau mỗi phiên làm việc (Bắt buộc)** | Toàn bộ team / AI Agent |
| **Kiểm toán chất lượng, lỗ hổng & rủi ro** | [`QA_REPORT.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/QA_REPORT.md) | Khi có đợt kiểm thử lớn hoặc release tag | QA Lead |
| **Kế hoạch kiểm thử & danh sách Test Case** | [`TEST_PLAN.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/TEST_PLAN.md) | Khi viết thêm test tự động mới | QA Engineer |
| **Lộ trình phát triển & Backlog ưu tiên** | [`DEVELOPMENT_PLAN.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/DEVELOPMENT_PLAN.md) | Khi bắt đầu / kết thúc một giai đoạn | Tech Lead |
| **Hồ sơ quyết định kiến trúc (ADR)** | [`DECISIONS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/DECISIONS.md) | Khi có quyết định kỹ thuật quan trọng | Solution Architect |
| **Nhiệm vụ cho phiên làm việc tiếp theo** | [`TASK_BRIEFS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/TASK_BRIEFS.md) | Khi đóng task cũ và mở task mới | Tech Lead |
| **Nhật ký thay đổi phiên bản** | [`CHANGELOG.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/CHANGELOG.md) | Mỗi khi merge commit mới vào nhánh chính | Release Manager |
| **Thuật ngữ & Khái niệm nghiệp vụ** | [`docs/GLOSSARY.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/GLOSSARY.md) | Khi xuất hiện thuật ngữ chuyên môn mới | Product Analyst |
| **Kiến trúc luồng dữ liệu & API** | [`docs/ARCHITECTURE.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/ARCHITECTURE.md) | Khi thay đổi cấu trúc backend/frontend | Solution Architect |

---

## 2. Quy Trình Giữ Tài Liệu Khớp Mã Nguồn (Definition of Done)

Trước khi đóng bất kỳ Pull Request hoặc kết thúc một phiên làm việc với AI:
1. **Quy tắc 1 (Luôn cập nhật kép)**: Nếu sửa code, bắt buộc cập nhật đồng thời [`PROJECT_STATUS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/PROJECT_STATUS.md) và [`CHANGELOG.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/CHANGELOG.md).
2. **Quy tắc 2 (Không nói suông)**: Mọi báo cáo hoàn thành tính năng phải dẫn chứng bằng lệnh test xanh hoặc log chạy thật.
3. **Quy tắc 3 (Đổi kiến trúc phải có ADR)**: Nếu thay đổi công nghệ (ví dụ đổi từ `gallery.json` sang SQLite), phải lập thêm 1 ADR mới trong [`DECISIONS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/DECISIONS.md) và cập nhật [`SPEC.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/SPEC.md).

---

## 3. Danh Sách Các Điều Chưa Biết Còn Lại (Remaining Unknowns)

| Vấn đề chưa biết | Tác động | Ai / Điều gì sẽ giải quyết? |
| :--- | :--- | :--- |
| **Hạn mức tài khoản Pollinations khi nhiều lớp học cùng dùng** | Có thể bị lỗi 429 nếu 100 học sinh cùng tạo ảnh | Cần theo dõi thực tế khi bắt đầu triển khai thí điểm tại cơ sở MindX. |
| **Chi phí Cloudinary khi lưu lượng tải ảnh tăng cao** | Có thể vượt quá gói miễn phí (Free Tier) | Quản trị viên theo dõi dung lượng trên Cloudinary Console và cân nhắc chuyển sang S3/GCS. |
| **Tính tương thích của Python 3.14 trên các hệ điều hành cũ** | Một số máy tính của học sinh chạy Windows 7/8 có thể không cài được Python 3.14 | Khuyến nghị sử dụng bản web deploy trực tuyến thay vì bắt học sinh tự chạy local backend. |
