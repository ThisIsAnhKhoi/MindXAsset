# TRUNG TÂM HỒ SƠ & TÀI LIỆU KỸ THUẬT (ENGINEERING DOCUMENTATION HUB)

Chào mừng bạn đến với trung tâm tài liệu kỹ thuật của dự án **MindX Game Asset Generator & Character Builder**. Thư mục này tập hợp đầy đủ các đặc tả, báo cáo kiểm toán, kế hoạch kiểm thử và lộ trình phát triển của dự án.

---

## 🧭 Bản Đồ Điều Hướng Tài Liệu (Navigation Map)

```
docs/
├── 📋 SPEC.md                   # Đặc tả hiện trạng hệ thống (As-built vs As-intended)
├── 📊 PROJECT_STATUS.md         # Báo cáo tiến độ 58.5% có kiểm chứng & lịch sử git
├── 🛡 QA_REPORT.md              # Báo cáo kiểm toán chất lượng toàn diện (Conditional GO)
├── 🧪 TEST_PLAN.md              # Kế hoạch kiểm thử & 40 test case ưu tiên cao
├── 🗺 DEVELOPMENT_PLAN.md       # Lộ trình 4 giai đoạn nâng cấp lên 95%
├── ⚖️ DECISIONS.md              # 15 hồ sơ quyết định kiến trúc (ADR-01 đến ADR-15)
├── 📝 TASK_BRIEFS.md            # 5 bản giao việc chi tiết cho các phiên làm việc
├── 📖 ARCHITECTURE.md           # Sổ tay kiến trúc 5 phút cho người mới
├── 🔍 GLOSSARY.md               # Từ điển thuật ngữ nghiệp vụ chuẩn hóa
├── 🔄 MAINTENANCE_GUIDE.md      # Quy tắc duy trì tài liệu (SSoT & DoD)
│
├── 📂 analysis/                 # 8 báo cáo khảo sát chuyên sâu (Pha 0 - Pha 3)
│   ├── PROGRESS_LOG.md          # Nhật ký tiến độ toàn bộ quá trình
│   ├── 00-intake.md             # Tiếp nhận thông tin & sao lưu Pha 0
│   ├── 01-repo-inventory.md     # Kiểm kê kho mã & biến môi trường
│   ├── 02-product-analysis.md   # Phân tích sản phẩm, Persona & JTBD
│   ├── 03-architecture-and-dataflow.md # Sơ đồ C4, DFD & 5 luồng dữ liệu chi tiết
│   ├── 04-data-dictionary.md    # Mô hình thực thể ERD & từ điển dữ liệu
│   ├── 05-api-inventory.md      # Đặc tả chi tiết 8 API endpoints
│   └── 07-coverage-map.md       # Bản đồ độ phủ khảo sát codebase
│
├── 📂 baseline/                 # Số đo cơ sở đo đạc kỹ thuật ban đầu
│   └── BASELINE-20261014.md     # SLOC (8,976 dòng), build (3.94s), audit baseline
│
├── 📂 wireframes/               # Các bản vẽ thiết kế giao diện UI
│   ├── wireframe_home.png       # Thiết kế trang chủ
│   ├── wireframe_generator.png  # Thiết kế trang Generator
│   └── wireframe_gallery.png    # Thiết kế trang Thư viện
│
└── 📂 archive/                  # Kho lưu trữ hồ sơ, báo cáo & script cũ
    ├── reports/                 # Báo cáo Word cũ (Bao_Cao_Tinh_Nang_*.docx, BAO_CAO_TONG_HOP.md)
    ├── meetings/                # Biên bản họp cũ (BienBanHop*.docx)
    ├── specs/                   # Tài liệu PDF cũ (API_Integration_Specification.pdf)
    ├── test-evidence/           # 14 ảnh chụp màn hình kiểm thử cũ (Test-sources/)
    └── scratch/                 # Các script và ảnh nháp căn chỉnh (test_*.py, test_*.png, nghiencuu.txt)
```

---

## 📌 Hướng Dẫn Nhanh Dành Cho Các Vai Trò

- **Dành cho Giảng viên / Ban giám khảo chấm đồ án**:
  - Đọc tổng quan tại [`PROJECT_STATUS.md`](PROJECT_STATUS.md) để xem con số tiến độ 56.0% và bằng chứng kiểm toán.
  - Đọc [`SPEC.md`](SPEC.md) để xem tính năng nào đã chạy thật, tính năng nào là ý đồ tương lai.
  - Đọc [`QA_REPORT.md`](QA_REPORT.md) để đánh giá mức độ nghiêm ngặt và kiểm soát rủi ro.

- **Dành cho Lập trình viên mới tham gia dự án**:
  - Đọc [`ARCHITECTURE.md`](ARCHITECTURE.md) trong 5 phút để nắm kiến trúc Node.js + Python + React.
  - Xem [`GLOSSARY.md`](GLOSSARY.md) để hiểu đúng các thuật ngữ (Sprite, Tilesheet, Tileset, Slicer...).
  - Chọn nhiệm vụ tiếp theo tại [`TASK_BRIEFS.md`](TASK_BRIEFS.md) để bắt đầu code ngay.

- **Dành cho Quản lý dự án (Project Owner / Tech Lead)**:
  - Theo dõi lộ trình và các giai đoạn tại [`DEVELOPMENT_PLAN.md`](DEVELOPMENT_PLAN.md).
  - Tra cứu các quyết định công nghệ đã chốt tại [`DECISIONS.md`](DECISIONS.md).
  - Đảm bảo quy trình tài liệu luôn khớp mã nguồn theo [`MAINTENANCE_GUIDE.md`](MAINTENANCE_GUIDE.md).
