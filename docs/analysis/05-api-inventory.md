# KIỂM KÊ VÀ ĐẶC TẢ CHI TIẾT API (API INVENTORY & SPECIFICATION)

- **Dự án**: MindXAsset
- **Thời gian lập**: 2026-10-14 20:13 (UTC+7)
- **Base URL Local**: `http://localhost:5000`
- **Base URL Cloud**: `https://mindxasset.onrender.com` (hoặc cấu hình qua `RENDER_EXTERNAL_URL`)
- **Chuẩn dữ liệu**: REST API, định dạng Payload JSON & Multipart Form Data.

---

## 1. Bảng Tổng Quan Tất Cả Endpoints (Endpoints Master Table)

| STT | Endpoint | Phương thức | Xác thực | Phân quyền | Đầu vào chính | Định dạng đầu ra | Nơi gọi trong Frontend |
| :---: | :--- | :---: | :---: | :---: | :--- | :--- | :--- |
| 1 | `/api/gallery` | `GET` | Không | Công khai | Không | `Array<GalleryItem>` | `Gallery.jsx:15` |
| 2 | `/api/generate-background` | `POST` | Không | Công khai | JSON: `subject`, `size_key`, `style`, `time_of_day`, `seed` | JSON: `image`, `file_path`, `metadata` | `Generator.jsx:128` |
| 3 | `/api/generate-sprite` | `POST` | Không | Công khai | JSON: `subject`, `size_key`, `style`, `perspective`, `seed` | JSON: `image`, `file_path`, `metadata` | `Generator.jsx:132` |
| 4 | `/api/generate-tilesheet` | `POST` | Không | Công khai | JSON: `subject`, `action`, `frames`, `style`, `seed` | JSON: `image`, `file_path`, `metadata` | `Generator.jsx:136` |
| 5 | `/api/generate-tileset` | `POST` | Không | Công khai | JSON: `subject`, `size_key`, `columns`, `style`, `seed` | JSON: `image`, `file_path`, `metadata` | `Generator.jsx:140` |
| 6 | `/api/generate-from-image` | `POST` | Không | Công khai | Multipart: `image` (file <=10MB), `command`, `style`, `size_key` | JSON: `image`, `file_path`, `metadata` | `Generator.jsx:155` |
| 7 | `/api/generate-custom-character` | `POST` | Không | Công khai | JSON: `config`, `action`, `base64_image` | JSON: `image`, `file_path`, `metadata` | `CanvasPreview.jsx:110` |
| 8 | `/api/generate-image` | `POST` | Không | Công khai | JSON: `prompt`, `subject`, `style`, `assetType` (Legacy endpoint) | JSON: `image`, `file_path`, `metadata` | Endpoint tương thích cũ |

---

## 2. Đặc Tả Chi Tiết Từng Endpoint

### 2.1 `GET /api/gallery`
- **Mục đích**: Lấy danh sách toàn bộ tài nguyên đã sinh được lưu trữ trong hệ thống.
- **Header**: `Accept: application/json`
- **Tham số truy vấn (Query Params)**: Chưa hỗ trợ phân trang hoặc filter phía server.
- **Phản hồi thành công (200 OK)**:
  ```json
  [
    {
      "id": "1788711175471",
      "prompt": "Test character prompt...",
      "style": "Pixel Art",
      "type": "pixel_art",
      "image_url": "http://localhost:5000/output/pixel_art/...",
      "created_at": "2026-09-06T16:12:55.471Z"
    }
  ]
  ```
- **Xử lý lỗi**:
  - `500 Internal Server Error`: `{ "error": "Lỗi khi đọc thư viện ảnh" }` khi file `gallery.json` bị hỏng cú pháp.

---

### 2.2 `POST /api/generate-background`
- **Mục đích**: Sinh hình ảnh bối cảnh phong cảnh 2D.
- **Payload đầu vào (JSON)**:
  ```json
  {
    "subject": "dark dungeon cave with lava",
    "size_key": "background_hd",
    "style": "Pixel Art",
    "time_of_day": "night",
    "seed": 42
  }
  ```
- **Xác thực dữ liệu (Validation)**:
  - Kiểm tra `subject`: Nếu rỗng -> trả về `400 Bad Request` (`server.js:212`).
  - Fallback mặc định: `size_key = 'background_hd'`, `time_of_day = 'day'`, `seed = -1`.
- **Phản hồi thành công (200 OK)**:
  ```json
  {
    "image": "data:image/png;base64,iVBORw0KGgoAAA...",
    "file_path": "output/backgrounds/bg_dark_dungeon_cave_1920x1080.png",
    "metadata": {
      "total_frames": 1,
      "layout_format": "single",
      "frame_width": 1920,
      "frame_height": 1080,
      "columns": 1,
      "rows": 1,
      "frames": []
    }
  }
  ```

---

### 2.3 `POST /api/generate-tilesheet`
- **Mục đích**: Sinh dải hoạt ảnh liên hoàn (sprite sheet) của nhân vật đang thực hiện một hành động.
- **Payload đầu vào (JSON)**:
  ```json
  {
    "subject": "ninja warrior",
    "action": "running",
    "frames": 10,
    "style": "Pixel Art",
    "seed": 100
  }
  ```
- **Phản hồi thành công (200 OK)**:
  Trả về chuỗi Data URI kèm `metadata` chứa mảng `frames` chứa tọa độ x, y từng khung để `AnimationPreview.jsx` tua vòng chuyển động.

---

### 2.4 `POST /api/generate-from-image`
- **Mục đích**: Nhận ảnh người dùng upload, tách nền bằng AI (U2Net/rembg), sau đó pixel hóa.
- **Content-Type**: `multipart/form-data`
- **Tham số form**:
  - `image`: Tệp binary (PNG, JPG, WEBP <= 10MB) - Bắt buộc.
  - `command`: `"pixel-from-image"` hoặc `"sprite-from-image"`.
  - `size_key`: `"sprite_small"`, `"sprite_medium"`, `"sprite_large"`.
  - `block`: Kích thước pixel hóa (mặc định 4).
  - `colors`: Giới hạn bảng màu (mặc định 16 hoặc 32).
- **Quy trình an toàn**: File tạm lưu trong `backend/uploads/` sẽ được tự động xóa bằng `fs.unlink()` ngay khi tiến trình Python hoàn tất hoặc xảy ra lỗi (`server.js:108-110, 308`).

---

### 2.5 `POST /api/generate-custom-character`
- **Mục đích**: Nhận ảnh nhân vật ghép từ Canvas Monster Builder và yêu cầu AI sinh hoạt ảnh chuyển động.
- **Payload đầu vào (JSON)**:
  ```json
  {
    "config": {
      "body": "body_green",
      "eyes": "eye_cute",
      "mouth": "mouth_smile",
      "arms": "arm_green",
      "legs": "leg_green"
    },
    "action": "running",
    "base64_image": "data:image/png;base64,iVBORw0KGgoAAA..."
  }
  ```
- **Cơ chế tối ưu Prompt (`server.js:361-365`)**:
  Để tránh bắt AI đọc ảnh trực tiếp (tốn credits và dễ lỗi 402/429), server tự động trích xuất các đặc trưng từ `config` (`characterFeatures = Object.values(config)...`) để tạo Prompt văn bản rõ ràng cho AI sinh tilesheet chuyển động tương ứng.

---

## 3. Bản Đồ Mã Lỗi & Xử Lý Lỗi Tập Trung (Error Handling Map)

Backend Node.js tại `server.js:112-128` cài đặt bộ lọc thông báo lỗi thân thiện để chuyển ngữ các mã lỗi HTTP từ dịch vụ AI sang tiếng Việt:

| Mã lỗi / Tín hiệu từ Python stderr | Thông báo trả về người dùng (Frontend Toast) | Nguyên nhân gốc |
| :--- | :--- | :--- |
| `429 Client Error / Too Many Requests` | *"Lỗi: Máy chủ AI đang quá tải hoặc API Key đã hết lượt/bị giới hạn. Vui lòng kiểm tra lại API Key hoặc thử lại sau."* | Vượt hạn mức rate-limit của Pollinations. |
| `402 Client Error / Payment Required` | *"Lỗi: API Key của bạn đã hết credits (Pollen). Vui lòng nạp thêm hoặc đổi Key mới."* | Hết tiền tệ Pollen trên Pollinations. |
| `401 Client Error / Unauthorized` | *"Lỗi: API Key không hợp lệ hoặc chưa được cấu hình đúng trong .env."* | Sai khóa API Key trong `.env`. |
| `Command failed (OOM)` | *"Lỗi hệ thống: Máy chủ xử lý ảnh bị quá tải bộ nhớ. Vui lòng thử lại."* | Tiến trình Python bị hệ điều hành kill do tràn RAM (khi load rembg). |
| `Thiếu trường input` | `400 Bad Request: { "error": "Missing subject field" }` | Form người dùng để trống prompt. |
| `JSON Parse Error` | `500: { "error": "Lỗi xử lý JSON từ AI module: ..." }` | Python in cảnh báo rác ra stdout làm hỏng cấu trúc JSON. |
