# QUY TẮC PHIÊN LÀM VIỆC DÀNH CHO TRỢ LÝ AI (AI SESSION PROTOCOL)

Tài liệu này là quy chuẩn bắt buộc cho bất kỳ Trợ lý AI (Antigravity Agent) hoặc Lập trình viên nào tiếp nhận phiên làm việc trên kho mã **MindXAsset**.

---

## 1. Nghi Thức Đầu Phiên (Session Start Protocol)

Mọi phiên làm việc **BẮT BUỘC** phải bắt đầu bằng 3 bước kiểm tra sau trước khi viết bất kỳ dòng mã nào:
1. **Đọc hiện trạng dự án**: Đọc [`PROJECT_STATUS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/PROJECT_STATUS.md) để nắm con số tiến độ, các lỗi mở (open bugs) và việc cần làm tiếp theo.
2. **Đọc đặc tả hệ thống**: Đọc [`SPEC.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/SPEC.md) để phân biệt rõ tính năng nào là `[AS-BUILT]` (thực tế đã có) và tính năng nào là `[AS-INTENDED]` (mới là ý đồ, chưa làm).
3. **Kiểm tra trạng thái Git**: Chạy `git status` để đảm bảo working tree sạch. Nếu có thay đổi dở dang, phải hỏi ý kiến người dùng trước khi tiếp tục.

---

## 2. Quy Tắc Gắn Nhãn Bằng Chứng (Evidence-First Tagging)

Mọi nhận định, kết luận, báo cáo hoặc tài liệu sinh ra đều phải gắn nhãn độ tin cậy nghiêm ngặt:
- `[ĐÃ XÁC MINH]`: Đã đọc trực tiếp trong code hoặc chạy lệnh kiểm chứng tận mắt (kèm dẫn chứng `đường/dẫn/file:dòng` hoặc output terminal).
- `[SUY LUẬN]`: Suy ra từ mã nguồn, UI hoặc comment nhưng chưa chạy thử được.
- `[GIẢ ĐỊNH]`: Giả định kỹ thuật có cơ sở nhưng cần kiểm chứng thêm.
- `[CẦN CHỦ DỰ ÁN XÁC NHẬN]`: Vấn đề liên quan đến định hướng sản phẩm, ngân sách hoặc nghiệp vụ.
- `[KHÔNG KIỂM CHỨNG ĐƯỢC]`: Nêu rõ lý do kỹ thuật (thiếu thiết bị, thiếu tài khoản...).

---

## 3. Những Việc Tuyệt Đối KHÔNG ĐƯỢC LÀM (Forbidden Actions)

1. **KHÔNG tự ý sửa mã nguồn ứng dụng** trong quá trình kiểm toán/hệ thống hóa. Chỉ được tạo/sửa tài liệu và file cấu hình phụ trợ. Nếu phát hiện lỗi code, ghi vào khuyến nghị hoặc Task Brief.
2. **KHÔNG in giá trị bí mật (secret/token/mật khẩu)** ra màn hình chat hoặc tài liệu báo cáo. Chỉ được ghi TÊN biến môi trường (ví dụ: `POLLINATIONS_API_KEY`).
3. **KHÔNG xóa file, chạy migration, seed dữ liệu hoặc gọi API tốn phí** khi chưa giải thích rõ tác dụng phụ và chưa có sự đồng ý của chủ dự án.
4. **KHÔNG chạy `git push --force`** hoặc viết lại lịch sử git làm mất mát công sức của người dùng.
5. **KHÔNG bịa số liệu tiến độ, tính năng hoặc link dẫn**. Thực tế mã nguồn (as-built) luôn là chân lý tối thượng.

---

## 4. Nghi Thức Cuối Phiên (Session End Protocol)

Trước khi kết thúc phiên làm việc, trợ lý AI **BẮT BUỘC** phải:
1. **Cập nhật tiến độ**: Cập nhật bảng theo dõi trong [`docs/analysis/PROGRESS_LOG.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/docs/analysis/PROGRESS_LOG.md) và [`PROJECT_STATUS.md`](file:///c:/Users/junde/OneDrive/Desktop/TranKhoi/repotest/MindX/DuAn/MindXAsset/PROJECT_STATUS.md).
2. **Ghi nhận nợ kỹ thuật/lỗi mới**: Nếu phát hiện thêm bug hoặc rủi ro mới, thêm ngay vào danh sách lỗi mở.
3. **Báo cáo tóm tắt cho người dùng**:
   - Đã làm được những gì (kèm danh sách file đã tạo/sửa).
   - Tiến độ hiện tại đạt bao nhiêu %.
   - Nêu chính xác **3 việc cần làm tiếp theo** để phiên sau tiếp tục dễ dàng.
