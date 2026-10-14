# TỪ ĐIỂN THUẬT NGỮ MIỀN NGHIỆP VỤ (DOMAIN GLOSSARY)

Tài liệu chuẩn hóa các khái niệm, thuật ngữ kỹ thuật và đối tượng nghiệp vụ trong hệ thống **MindX Game Asset Generator & Character Builder**.

---

## 1. Thuật Ngữ Nghiệp Vụ Cốt Lõi (Core Business Terms)

| Thuật ngữ | Tiếng Anh / Kỹ thuật | Định nghĩa chuẩn trong dự án MindXAsset | Bằng chứng mã nguồn |
| :--- | :--- | :--- | :--- |
| **Asset (Tài nguyên)** | Game Asset | File đồ họa 2D (PNG) phục vụ đưa vào công cụ làm game như Scratch, GameMaker, Godot, Unity. | `server.js:68-73` |
| **Background (Bối cảnh/Hình nền)** | Background / Scenery | Ảnh phong cảnh 2D không chứa nhân vật, có tỉ lệ khung hình chuẩn (16:9, 4:3, 9:16). | `server.js:210-227` |
| **Sprite (Thực thể game)** | Sprite | Hình ảnh 2D độc lập đại diện cho một nhân vật, quái vật, NPC hoặc vật phẩm (item) với nền trong suốt. | `server.js:229-245` |
| **Tilesheet (Bảng hoạt ảnh)** | Animation Sprite Sheet | Một dải ảnh ngang chứa chuỗi các khung hình liên tiếp (mặc định 8-10 frames) của một hành động nhân vật (chạy, đánh, nhảy, thở). | `server.js:247-265` |
| **Tileset (Bộ ô gạch môi trường)** | Environment Tileset | Một tấm ảnh lớn dạng lưới (Grid) chứa nhiều ô địa hình khớp cạnh nhau (đất, đá, nước, cỏ) để ghép bản đồ map. | `server.js:267-285` |
| **Character Builder (Bộ ghép nhân vật)** | Modular Avatar/Character Customizer | Phân hệ cho phép người dùng chọn và xếp chồng các mảnh bộ phận (Body, Eyes, Mouth, Arms, Legs...) theo thứ tự lớp z-index để tạo nhân vật độc bản. | `CharacterBuilder.jsx` |
| **Kenney Monster Pack** | Kenney Assets | Bộ tài nguyên đồ họa quái vật dạng vector/PNG nguồn mở (CC0) được dùng làm vật liệu cấu thành Monster Builder. | `Monster/License.txt` |
| **Slicer (Bộ cắt ảnh/khung)** | Sprite Sheet Slicer | Logic cắt một tấm ảnh lớn thành từng khung hình đơn lẻ dựa trên metadata (tọa độ x, y, width, height) để xem trước hoạt ảnh. | `AnimationPreview.jsx` |
| **Gallery (Thư viện tài nguyên)** | Asset Gallery / Showcase | Kho lưu trữ hiển thị danh sách các ảnh tài nguyên đã sinh thành công kèm thông tin prompt, style, ngày tạo. | `Gallery.jsx`, `gallery.json` |

---

## 2. Thuật Ngữ Kỹ Thuật & AI (Technical & AI Terms)

| Thuật ngữ | Định nghĩa trong hệ thống | Bằng chứng mã nguồn |
| :--- | :--- | :--- |
| **Pollinations.ai** | Cổng API dịch vụ tạo sinh hình ảnh AI trung gian được tích hợp chính thức trong hệ thống qua giao thức REST. | `asset_generator.py:33` |
| **Pixel Art Effect** | Kỹ thuật hậu kỳ hình ảnh: thu nhỏ ảnh với thuật toán Box/Lanczos và phóng to lại bằng Nearest Neighbor kèm giảm bảng màu (Color Quantization) để tạo hiệu ứng 8-bit/16-bit. | `asset_generator.py:650-700` |
| **Rembg / U2Net** | Thư viện và mô hình mạng nơ-ron học sâu (ONNX) dùng để nhận diện và tách nền tự động biến ảnh đặc thành ảnh trong suốt (Alpha = 0). | `requirements.txt:3`, `asset_generator.py:651` |
| **Metadata JSON** | Đối tượng dữ liệu trả kèm hình ảnh mô tả: `total_frames`, `frame_width`, `frame_height`, `columns`, `rows`, `layout_format` để frontend cắt ảnh tự động. | `server.js:165-173`, `BAO_CAO_TONG_HOP.md:78-90` |
| **Seed** | Giá trị số nguyên ngẫu nhiên xác định trạng thái khởi đầu của mô hình AI; truyền cùng một seed sẽ tạo ra kết quả giống nhau. | `server.js:216, 234, 253` |
| **Fallback Storage** | Cơ chế lưu trữ ảnh xuống thư mục tĩnh `backend/output/` và phục vụ qua HTTP khi tài khoản Cloudinary chưa được cấu hình hoặc lỗi mạng. | `server.js:178-182` |
