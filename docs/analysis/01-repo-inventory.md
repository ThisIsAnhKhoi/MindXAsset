# BÁO CÁO TRINH SÁT VÀ KIỂM KÊ KHO MÃ (REPO INVENTORY)

- **Dự án**: MindXAsset (Game Asset Generator & Character Builder)
- **Thời gian lập**: 2026-10-14 20:05 (UTC+7)
- **Tiêu chuẩn kiểm toán**: CV Studio Rigorous Standard (Evidence-First)
- **Cam kết nguyên tắc**: 100% nhận định đi kèm bằng chứng `file:dòng` hoặc lệnh chạy thật. Không in giá trị secret.

---

## 1. Bản Đồ Kho Mã (Repository Map)

### 1.1 Cấu trúc thư mục (2-3 cấp)
```
MindXAsset/
├── .agents/                          # Cấu hình AI agent nội bộ (Antigravity)
│   └── skills/advanced-ui-ux/        # Skill thiết kế giao diện nâng cao
├── .git/                             # Lịch sử phiên bản git (10 refs, commit HEAD: 6c549de)
├── .gitignore                        # Cấu hình bỏ qua tệp (Node, Python, dist, .env)
├── docs/                             # Thư mục tài liệu kỹ thuật & kiểm toán (mới tạo)
│   └── analysis/                     # 00-intake.md, PROGRESS_LOG.md, 01-repo-inventory.md...
├── backend/                          # Backend API Node.js & AI Engine
│   ├── ai_module/                    # CLI & logic xử lý AI cốt lõi (Python)
│   │   ├── asset_generator.py        # Logic sinh ảnh, pixel art, tileset, rembg
│   │   ├── cli.py                    # Entry point CLI giao tiếp với Node.js
│   │   ├── requirements.txt          # Khai báo dependency Python
│   │   └── venv/                     # Python 3.14 Virtualenv cục bộ
│   ├── output/                       # Thư mục lưu kết quả ảnh sinh ra và gallery.json
│   ├── uploads/                      # Thư mục tạm nhận ảnh upload từ người dùng
│   ├── package.json                  # Cấu hình phụ thuộc Node.js backend
│   ├── server.js                     # Máy chủ Express API (Port 5000)
│   ├── setup-python.js               # Script tự động tạo venv khi npm postinstall
│   ├── .env.example                  # Mẫu biến môi trường
│   └── gallery.json                  # [RÁC/THỪA] Bản sao tĩnh không được server.js dùng
├── frontend/                         # Giao diện người dùng React 19 SPA
│   ├── public/                       # Tài nguyên tĩnh
│   │   └── assets/                   # Thư viện đồ họa (cozy_fae, monster, pipoya)
│   ├── src/
│   │   ├── components/               # Header, AnimationPreview, SpritePreviewModal...
│   │   ├── pages/
│   │   │   ├── CharacterBuilder/     # Ghép nhân vật CanvasPreview, Sidebar, Config...
│   │   │   ├── Generator.jsx         # Giao diện sinh Background, Sprite, Tileset
│   │   │   ├── Gallery.jsx           # Thư viện xem lại ảnh đã sinh
│   │   │   └── Home.jsx              # Trang chủ giới thiệu
│   │   ├── App.jsx                   # Điều hướng React-Router (4 route)
│   │   └── main.jsx                  # Điểm vào React DOM
│   ├── package.json                  # Phụ thuộc React, Tailwind, Vite
│   ├── vite.config.js                # Cấu hình Vite 8
│   └── eslint.config.js              # Cấu hình linter ESLint 10
├── Monster/                          # [GỐC] Tài sản gốc Kenney Monster Pack (CC0)
├── Test-sources/                     # [RÁC] 14 ảnh chụp màn hình kiểm thử thủ công
├── wireframes/                       # [TÀI NGUYÊN TĨNH] 3 ảnh wireframe giao diện
├── test_*.py / test_*.png            # [RÁC] 7 script Python & 7 ảnh scratch ở thư mục gốc
├── *.docx / *.pdf                    # [TÀI LIỆU CŨ] Biên bản họp và báo cáo tính năng cũ
└── BAO_CAO_TONG_HOP.md               # Báo cáo tổng hợp tài liệu ban đầu
```

### 1.2 Phân loại dự án & điểm vào (Entry Points)
- **Mô hình kiến trúc**: Monorepo gồm 2 khối độc lập lồng nhau:
  1. `backend/`: Node.js Express (REST API) phối hợp CLI Python qua cơ chế `child_process.execFile` (`backend/server.js:107`).
  2. `frontend/`: Single Page Application (SPA) React 19 + Vite 8.
- **Điểm vào (Entry Points)**:
  - Backend API: `backend/server.js` [ĐÃ XÁC MINH] (Lưu ý: `backend/package.json:5` khai báo `"main": "index.js"` nhưng `index.js` không tồn tại; chạy thực tế qua `node server.js`).
  - Python AI Engine: `backend/ai_module/cli.py` [ĐÃ XÁC MINH] (`cli.py` được `server.js:96` gọi trực tiếp).
  - Frontend Web: `frontend/index.html` -> `frontend/src/main.jsx` [ĐÃ XÁC MINH].
- **CI/CD & Docker/IaC**:
  - Không có Dockerfile, docker-compose.yml hay GitHub Actions workflow trong repo [ĐÃ XÁC MINH].
  - Triển khai dựa trên cấu hình đám mây Render (PaaS) thông qua biến môi trường `RENDER_EXTERNAL_URL` (`backend/server.js:176`) và script `setup-python.js` kích hoạt qua `postinstall` (`backend/package.json:8`).

---

## 2. Kiểm Kê Biến Môi Trường (Environment Variables)

> **Cảnh báo an toàn**: Bảng chỉ liệt kê **TÊN** biến và mục đích sử dụng. Tuyệt đối không hiển thị giá trị secret/khóa API.

| Tên biến | Mục đích | Bắt buộc? | Nơi sử dụng (file:dòng) | Là Secret? | Giá trị mặc định / Fallback |
| :--- | :--- | :---: | :--- | :---: | :--- |
| `PORT` | Cổng lắng nghe của máy chủ Express | Không | `backend/server.js:10` | Không | `5000` |
| `POLLINATIONS_API_KEY` | Khóa xác thực gọi API tạo ảnh Pollinations | Có (khi chạy AI) | `backend/ai_module/cli.py:226`<br>`backend/ai_module/asset_generator.py:33, 1267` | **CÓ** | `""` (Rỗng - chạy API chế độ ẩn danh/free tier) |
| `CLOUDINARY_CLOUD_NAME` | Định danh tài khoản Cloudinary lưu ảnh CDN | Không | `backend/server.js:32, 34, 42` | Không | `undefined` (fallback lưu ổ đĩa cục bộ) |
| `CLOUDINARY_API_KEY` | Khóa công khai Cloudinary | Không | `backend/server.js:32, 35, 42` | **CÓ** | `undefined` |
| `CLOUDINARY_API_SECRET` | Khóa bí mật Cloudinary | Không | `backend/server.js:36` | **CÓ** | `undefined` |
| `RENDER_EXTERNAL_URL` | URL công khai của backend khi deploy Render | Không | `backend/server.js:176` | Không | `http://localhost:${PORT}` |
| `RENDER` | Cờ tự động của Render nhận diện môi trường cloud | Không | `backend/ai_module/asset_generator.py:651` | Không | `None` |
| `DISABLE_REMBG` | Cờ chủ động tắt thư viện tách nền để chống OOM | Không | `backend/ai_module/asset_generator.py:651` | Không | `None` |
| `VITE_API_BASE_URL` | Địa chỉ backend API cho frontend gọi mạng | Không | `frontend/src/pages/Generator.jsx:121`<br>`frontend/src/pages/Gallery.jsx:13` | Không | `http://localhost:5000` (nếu ở localhost) hoặc `https://mindxasset.onrender.com` |
| `HUGGINGFACE_API_KEY` | Khai báo trong `.env.example` nhưng **KHÔNG DÙNG** | **Không** | `backend/.env.example:9` | **CÓ** | Không có mã nào gọi [ĐÃ XÁC MINH] |

---

## 3. Phân Tích Lịch Sử Git (Git History Analysis)

- **Tổng số commit**: 32 commits [ĐÃ XÁC MINH: `git rev-list --count HEAD`].
- **Tác giả duy nhất**: `JunWinpro <jundeptrainhat@gmail.com>`.
- **Khoảng thời gian phát triển**:
  - Bắt đầu: 2026-07-09 (`c2e54b5` - `feat: setup base code and wireframes`).
  - Commit gần nhất: 2026-09-30 (`6c549de` - `update`).
  - Giai đoạn ngừng hoạt động: 2026-08-16 đến 2026-09-06 (~21 ngày), 2026-09-17 đến 2026-09-30 (~13 ngày).
- **Các giai đoạn tiến hóa chính**:
  1. *Tháng 7/2026 (Khởi tạo & Thử nghiệm kiến trúc)*: Bắt đầu với wireframe, thử nghiệm Java Spring Boot (`springboot-backend`), sau đó chuyển sang Node.js Express + Python CLI; fix lỗi tràn bộ nhớ (OOM) của thư viện `rembg` trên Render.
  2. *Tháng 8/2026 (Đồng bộ hóa tài liệu)*: Consolidate báo cáo thành `BAO_CAO_TONG_HOP.md`, dọn dẹp các thư mục backend rác (`68eb88c`).
  3. *Tháng 9/2026 (Đại tu UX & Bổ sung Monster Builder)*: Chuẩn hóa UX Generator (`afb9515`), loại bỏ background cứng, bổ sung Monster Character Builder (`35dc3a1`), tích hợp Kenney asset pack và tạo API `/api/generate-custom-character`.
- **Tệp "điểm nóng" (sửa nhiều nhất)**:
  1. `backend/server.js`: 14 lần sửa
  2. `frontend/src/pages/Generator.jsx`: 10 lần sửa
  3. `frontend/src/components/layout/Header.jsx`: 6 lần sửa
  4. `frontend/src/App.jsx`: 5 lần sửa
  5. `frontend/src/pages/Gallery.jsx`: 5 lần sửa
  6. `backend/ai_module/asset_generator.py`: 4 lần sửa
  7. `frontend/src/components/AnimationPreview.jsx`: 4 lần sửa

---

## 4. Kiểm Kê Dependency & Lỗ Hổng Bảo Mật (Audit)

### 4.1 Backend (Node.js)
- **Trình quản lý gói**: npm (`package-lock.json` lockfile v3).
- **Dependencies chính**:
  - `express`: `^5.2.1` (Express v5 mới nhất)
  - `multer`: `^2.2.0` (Nhận file multipart)
  - `cloudinary`: `^2.10.0` (Lưu trữ ảnh đám mây)
  - `cors`: `^2.8.6`, `dotenv`: `^17.4.2`
  - `axios`: `^1.18.0`, `jimp`: `^1.6.1`, `adm-zip`: `^0.6.0`, `docx`: `^9.7.1`
- **Kết quả `npm audit`** [ĐÃ XÁC MINH qua lệnh thực tế]:
  - **5 lỗ hổng** (1 Moderate, 3 High, 1 Critical):
    - `proxy-addr` (1.1.0 - 2.0.7): **Critical** - IP spoofing via IPv4-mapped IPv6 trust subnet (GHSA-jqcg-44mw-7w3h).
    - `adm-zip` (<=0.6.0): **High** - Path traversal, Uncontrolled memory allocation DoS (GHSA-7q85-xj36-vmfc).
    - `axios` (1.0.0 - 1.19.0): **High** - Prototype pollution & SSRF bypass (GHSA-vh66-26gq-q6x8).
    - `multer` (<=2.3.0): **High** - DoS via crafted multipart field names (GHSA-wc9g-mqfw-jrwm).
    - `qs` (2.2.5 - 6.15.3): **Moderate** - DoS via controlled isBuffer (GHSA-4mjr-xmp4-gh2g).
- **Gói thừa / Không dùng**:
  - `docx`: Không có dòng code nào trong `backend/server.js` hay bất kỳ đâu trong `backend/` gọi `require('docx')` [ĐÃ XÁC MINH].
  - `adm-zip`: Không có dòng code nào gọi `require('adm-zip')` [ĐÃ XÁC MINH].
  - `jimp`: Không có dòng code nào gọi `require('jimp')` [ĐÃ XÁC MINH].

### 4.2 Backend AI Module (Python)
- **Môi trường**: Python 3.14.6 Virtualenv (`backend/ai_module/venv`).
- **Thư viện cài đặt**:
  - `Pillow` (12.3.0), `requests` (2.34.2), `rembg` (2.0.77), `python-dotenv` (1.2.2).
  - Đi kèm onnxruntime (1.28.0), numpy (2.4.6), scipy (1.18.0) phục vụ chạy mô hình tách nền cục bộ.
- **Rủi ro runtime**: Python 3.14 là phiên bản rất mới, một số bản dựng wheel C/C++ có thể không ổn định trên các nền tảng Linux cũ. Thư viện `rembg` tiêu tốn >1.5GB RAM khi load model ONNX, đã từng gây crash OOM trên gói Free của Render [ĐÃ XÁC MINH từ commit `dd3fc04`].

### 4.3 Frontend (React)
- **Trình quản lý gói**: npm (`package-lock.json` lockfile v3).
- **Dependencies chính**:
  - `react`: `^19.2.6`, `react-dom`: `^19.2.6` (React 19)
  - `vite`: `^8.0.12`, `@tailwindcss/vite`: `^4.3.1`, `tailwindcss`: `^4.3.1` (Tailwind v4)
  - `react-router-dom`: `^7.18.1`
  - `framer-motion`: `^13.4.0`
  - `jszip`: `^3.10.1`, `axios`: `^1.18.1`, `react-toastify`: `^11.1.0`
- **Kết quả `npm audit`** [ĐÃ XÁC MINH]:
  - **9 lỗ hổng** (1 Moderate, 8 High):
    - `react-router` / `react-router-dom` (7.12.0 - 7.18.1): **High** - RSC Mode CSRF Bypass (GHSA-qwww-vcr4-c8h2).
    - `postcss` (<=8.5.22): **High** - Path Traversal in Previous Source Map (GHSA-r28c-9q8g-f849).
    - `nanoid` (<=3.3.17): **High** - Non-secure generators infinite loop DoS (GHSA-28wg-ghj8-5hjv).
    - `brace-expansion`, `browserslist`, `source-map-js`: **High** - DoS/OOM.

---

## 5. Tài Sản Đi Kèm & Vấn Đề Bản Quyền / PII (Assets & Licensing)

| Danh mục | Thư mục / File | Nguồn gốc & Bản quyền | Đánh giá an toàn |
| :--- | :--- | :--- | :--- |
| **Monster Pack** | `Monster/`, `frontend/public/assets/monster/` | **Kenney Monster Builder Pack (1.0)** - Giấy phép: **Creative Commons Zero (CC0)** (`Monster/License.txt:10`). | **AN TOÀN TUYỆT ĐỐI**: Miễn phí dùng cho cá nhân, giáo dục, thương mại. |
| **CozyFae Pack** | `frontend/public/assets/cozy_fae/` | **CozyFae Cute Portrait Maker - Free Sample** (`LICENSE.txt:3`). | **RỦI RO BẢN QUYỀN**: Giấy phép cấm phân phối lại nguyên mẫu (redistribute), cấm dùng trong các template/asset pack khác. Cần ghi credit theo `CREDIT.txt` nếu phát hành công khai. |
| **Pipoya Pixel** | `frontend/public/assets/pipoya/` | Tài sản pixel art Pipoya (thư viện miễn phí cho game). | Cần bổ sung file License/Credit chính thức của tác giả Pipoya trong thư mục để minh bạch. |
| **Thông tin cá nhân (PII)** | Git History | Email cá nhân: `JunWinpro <jundeptrainhat@gmail.com>`. Không có số điện thoại, CMND hay dữ liệu học sinh thật. | Cần lưu ý nếu chủ dự án muốn ẩn danh trước khi chuyển repo sang công khai. |
| **Secret rò rỉ trong Git** | Git History (commit `231f5df`, `eb39d57`, `55259ee`) | Biến `CLOUDINARY_API_SECRET` đã từng bị commit trực tiếp vào mã nguồn. | **RỦI RO NGHIÊM TRỌNG**: Cần xoay (rotate/revoke) khóa Cloudinary ngay trên console quản trị. |

---

## 6. Kết Quả Thử Nghiệm Môi Trường Phát Triển (Dev Environment Run)

| Bước thử nghiệm | Lệnh chạy | Kết quả | Thời gian | Bằng chứng & Ghi chú |
| :--- | :--- | :---: | :---: | :--- |
| **Cài đặt & Syntax Backend** | `node -c backend/server.js` | **PASS** | 0.2s | Không có lỗi cú pháp Node.js. |
| **Kiểm tra Python CLI** | `backend\ai_module\venv\Scripts\python.exe backend\ai_module\cli.py --help` | **PASS** | 0.8s | CLI nhận diện đầy đủ 8 lệnh xử lý ảnh. |
| **ESLint Frontend** | `npm run lint` (frontend) | **FAIL** | 4.2s | **9 lỗi/cảnh báo** (7 errors, 2 warnings), trong đó có lỗi `react-hooks/set-state-in-effect` tại `CharacterBuilder.jsx:96`. |
| **Production Build Frontend** | `npm run build` (frontend) | **PASS** | 3.94s | Tạo bundle thành công (`dist/assets/index-DLfSfZFK.js`: 520.63 kB). Cảnh báo bundle > 500 kB cần code-splitting. |
| **Kiểm thử tự động** | `npm test` | **N/A (FAIL)** | - | Không có test runner (báo `no test specified`). |

- **Thời gian từ clone đến chạy được (ước tính)**: ~3-5 phút (cần chạy `npm install` ở backend, `setup-python.js` tạo virtualenv, và `npm install` ở frontend).
- **Chỗ phải đoán mò do thiếu tài liệu**:
  1. `backend/package.json` thiếu script `"start": "node server.js"`.
  2. `.env` yêu cầu điền `POLLINATIONS_API_KEY` nhưng không nói rõ là API key miễn phí hay bắt buộc nạp Pollen tiền tệ.
  3. Không có tài liệu nào giải thích 7 file `test_*.py` ở thư mục gốc có tác dụng gì đối với việc chạy ứng dụng.

---

## 7. Kiểm Kê Tài Liệu Hiện Có & Độ Tin Cậy

| Tên tài liệu | Loại | Tình trạng | Độ tin cậy | Điểm lệch so với thực tế (As-Built) |
| :--- | :--- | :--- | :---: | :--- |
| `BAO_CAO_TONG_HOP.md` | Markdown tổng hợp | Khá đầy đủ | `Vừa phải` | - Tuyên bố có Hugging Face và Gemini nhưng code chỉ dùng Pollinations.<br>- Thiếu hoàn toàn tính năng Monster Character Builder.<br>- Không khớp script start trong `backend/package.json`. |
| `API_Integration_Specification.pdf` | PDF đặc tả | Ban đầu | `Lạc hậu` | Đặc tả luồng API cũ trước khi tích hợp Monster Builder. |
| `Bao_Cao_Tinh_Nang_MindXAsset.docx` | Word (2.39 MB) | Báo cáo môn học | `Lạc hậu` | Chứa nội dung trùng lặp đã được tóm tắt trong `BAO_CAO_TONG_HOP.md`. |
| `Bao_Cao_Tinh_Nang_Chi_Tiet_MindXAsset.docx` | Word (2.91 MB) | Báo cáo chi tiết | `Lạc hậu` | Dung lượng nặng (>2.5MB), nên lưu vào `docs/archive/` thay vì để ở root. |
| `BienBanHop*.docx` (3 files) | Word biên bản | Quá khứ | `Tham khảo` | Ghi nhận cuộc họp tháng 8-9/2026, không dùng làm tài liệu vận hành. |
| `wireframes/*.png` (3 files) | Ảnh tĩnh | Thiết kế | `Đúng một phần` | Khớp với trang Generator và Gallery thời điểm tháng 7/2026. |

---

## 8. Kế Hoạch Phân Loại & Dọn Dẹp File Cũ, File Rác (Cleanup Plan)

Theo chỉ đạo của chủ dự án: *"thêm kế hoạch dọn dẹp các file cũ, file rác. Tóm gọn để hệ thống được chuẩn hóa"*, chúng tôi lập danh mục phân loại rõ ràng:

### Nhóm A: File rác cần xóa bỏ (Junk Files to Delete)
1. `backend/gallery.json`: Bản sao tĩnh mồ côi (vì server đọc/ghi `backend/output/gallery.json`).
2. 7 script Python scratch ở root: `test_all.py`, `test_arms.py`, `test_details.py`, `test_legs.py`, `test_math.py`, `test_noses.py`, `test_render.py` (sau khi trích xuất logic math vào tài liệu).
3. 7 ảnh PNG tạo ra từ script scratch: `test_all.png`, `test_arms.png`, `test_details.png`, `test_legs.png`, `test_math.png`, `test_noses.png`, `test_render.png`.
4. `Monster/Vector/overview.swf`: File Flash cũ không thể chạy trên trình duyệt hiện đại.

### Nhóm B: File tài liệu cần di dời vào kho lưu trữ (Archive to `docs/`)
1. `Bao_Cao_Tinh_Nang_Chi_Tiet_MindXAsset.docx`, `Bao_Cao_Tinh_Nang_MindXAsset.docx` -> Di dời vào `docs/archive/reports/`.
2. `BienBanHop.docx`, `BienBanHop_08092026.docx`, `BienBanHop_v2.docx` -> Di dời vào `docs/archive/meetings/`.
3. `API_Integration_Specification.pdf` -> Di dời vào `docs/archive/specs/`.
4. `Test-sources/` (14 ảnh chụp màn hình kiểm thử cũ) -> Di dời vào `docs/archive/test-evidence/`.
5. `wireframes/` -> Di dời vào `docs/wireframes/`.

*(Lưu ý: Mọi thao tác xóa/di dời sẽ được đóng gói thành Task Brief ở Pha 6 để thực hiện an toàn, tuân thủ nguyên tắc không tự ý sửa đổi mã nguồn).*
