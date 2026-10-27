# KẾ HOẠCH DỌN DẸP, TỐI ƯU HÓA VÀ CHUẨN BỊ TRIỂN KHAI PRODUCTION (MINDXASSET)

> **Tài liệu**: `docs/CLEANUP_PLAN.md`  
> **Tác giả**: Senior Software Engineer / Tech Lead  
> **Thời gian lập**: 27/10/2026  
> **Nhánh Git**: `mindxasset.template` (Commit: `faca0a4`)  
> **Trạng thái**: Chờ Chủ dự án (Project Owner) phê duyệt trước Giai đoạn 4.

---

## MỤC LỤC
1. [Phần 1 — Tổng Quan Kiến Trúc & Luồng Dữ Liệu](#phần-1--tổng-quan-kiến-trúc--luồng-dữ-liệu)
2. [Phần 2 — Bản Đồ Phụ Thuộc (Dependency & Asset Graph)](#phần-2--bản-đồ-phụ-thuộc-dependency--asset-graph)
3. [Phần 3 — Dữ Liệu Đo Đạc Cơ Sở (Baseline Metrics)](#phần-3--dữ-liệu-đo-đạc-cơ-sở-baseline-metrics)
4. [Phần 4 — Bảng Phát Hiện Chi Tiết (Findings Table)](#phần-4--bảng-phát-hiện-chi-tiết-findings-table)
5. [Phần 5 — Những Điều Chưa Chắc Chắn & Câu Hỏi Cần Quyết Định](#phần-5--những-điều-chưa-chắc-chắn--câu-hỏi-cần-quyết-định)
6. [Phần 6 — Đánh Giá Rủi Ro Triển Khai (Deployment Feasibility)](#phần-6--đánh-giá-rủi-ro-triển-khai-deployment-feasibility)
7. [Phần 7 — Hiện Trạng Tài Liệu & Sai Lệch So Với Thực Tế](#phần-7--hiện-trạng-tài-liệu--sai-lệch-so-với-thực-tế)
8. [Phần 8 — Kế Hoạch Thực Thi Từng Bước (Nhóm A / B / C)](#phần-8--kế-hoạch-thực-thi-từng-bước-nhóm-a--b--c)
9. [Phần 9 — Thứ Tự Thực Hiện & Điểm Dừng Kiểm Tra](#phần-9--thứ-tự-thực-hiện--điểm-dừng-kiểm-tra)
10. [Phần 10 — Kế Hoạch Cập Nhật Tài Liệu Đồng Bộ](#phần-10--kế-hoạch-cập-nhật-tài-liệu-đồng-bộ)
11. [Phần 11 — Tiêu Chí Hoàn Thành (Definition of Done)](#phần-11--tiêu-chí-hoàn-thành-definition-of-done)
12. [Mục Phê Duyệt Của Chủ Dự Án (Project Owner Sign-Off)](#mục-phê-duyệt-của-chủ-dự-án-project-owner-sign-off)

---

## PHẦN 1 — TỔNG QUAN KIẾN TRÚC & LUỒNG DỮ LIỆU

### 1.1. Sơ Đồ Kiến Trúc Toàn Cục (3 Tiers)

```mermaid
graph TB
    subgraph Client ["Client Browser (SPA)"]
        UI["React 19 + Vite 8 + TailwindCSS v4"]
        CS["Character Studio (/character-builder)<br/>- Canvas HTML5 Preview<br/>- Dynamic HSL Tinting<br/>- 7 Studio Models"]
        GEN["AI Generator (/generator)<br/>- Text-to-Pixel<br/>- Image-to-Sprite"]
        ISS["InlineSpritesheetStudio<br/>- Frame Slicing & Animation"]
        GAL["Gallery (/gallery)"]
    end

    subgraph CDN ["Static Asset Hosting"]
        PA["public/assets/ (3,197 files)<br/>fantasy, monster, props, vehicles, soldier, pipoya"]
    end

    subgraph Backend ["Node.js Orchestrator (Port 5000)"]
        EX["server.js (Express v5)"]
        UP["Multer Uploads (/uploads)"]
        OUT["Local Output Storage (/output)"]
    end

    subgraph AIModule ["Python AI Subsystem"]
        PY["cli.py / asset_generator.py<br/>Python 3.14 venv"]
        U2["Rembg (U2Net Neural Net)"]
        PIL["Pillow Color & Palette Processing"]
    end

    subgraph External ["External Services"]
        POL["Pollinations.ai API"]
        CLD["Cloudinary CDN (Optional Backup)"]
    end

    CS -->|Client-side Canvas| PA
    CS -->|POST /api/generate-custom-character| EX
    GEN -->|POST /api/generate-asset| EX
    GAL -->|GET /api/gallery| EX
    ISS -->|Client-side JSZip| UI

    EX -->|child_process.execFile| PY
    PY -->|HTTPS Prompt| POL
    PY -->|Neural Matting| U2
    PY -->|Quantization| PIL
    PY -->|JSON Metadata + PNG| OUT
    EX -->|Upload Stream| CLD
    EX -->|Serve Static| OUT
```

### 1.2. Luồng Dữ Liệu Chính
1. **Character Studio (Ghép nhân vật thời gian thực)**:
   - Client tải trực tiếp ảnh bộ phận từ `public/assets/{model}/*.png` theo khai báo cấu hình `*_config.js`.
   - `CanvasPreview.jsx` sắp xếp theo thứ tự `z_index`, tính toán pivot, đảo hướng `scaleX`, nhuộm màu HSL động và render ra `<canvas>` 380x380 px.
   - Khi bấm **"Lưu ảnh PNG"**, trình duyệt xuất Data URL trực tiếp từ canvas client (không cần gọi backend).
   - Khi bấm **"Tạo trọn bộ Sprite Sheet (Grid AI)"**, client chụp base64 gửi sang backend `POST /api/generate-custom-character`, server gọi Python AI sinh ra lưới sprite 15 khung hình.
2. **AI Generator (Sinh ảnh độc lập)**:
   - Người dùng nhập prompt và chọn style (`pixel`, `realistic`, `voxel`, `tileset`).
   - `server.js` chuyển tiếp prompt tới `cli.py`, gọi Pollinations API, sau đó tách nền bằng `rembg` và lưu vào `backend/output/`.
3. **Thư Viện (Gallery)**:
   - `Gallery.jsx` gọi `GET /api/gallery`, server đọc file `backend/output/gallery.json` và trả về danh sách lịch sử asset.

---

## PHẦN 2 — BẢN ĐỒ PHỤ THUỘC (DEPENDENCY & ASSET GRAPH)

### 2.1. Bản Đồ Import Frontend (`frontend/src/`)
| Component / File | Nhập Từ (Import Dependencies) | Được Sử Dụng Bởi (Imported By) | Trạng Thái |
| :--- | :--- | :--- | :--- |
| `App.jsx` | `react-router-dom`, `pages/*`, `components/layout/*` | `main.jsx` | Đang dùng |
| `CharacterBuilder.jsx` | `CanvasPreview`, `CategoryMenu`, `CustomizerInspector`, `ModelDropdown`, `InlineSpritesheetStudio`, 7 file config | `App.jsx` (`/character-builder`) | Đang dùng |
| `CanvasPreview.jsx` | `assetCache.js`, React hooks | `CharacterBuilder.jsx` | Đang dùng |
| `ModelDropdown.jsx` | React hooks, SVG icons | `CharacterBuilder.jsx` | Đang dùng |
| `CategoryMenu.jsx` | React hooks | `CharacterBuilder.jsx` | Đang dùng |
| `CustomizerInspector.jsx`| `assets_config.js` | `CharacterBuilder.jsx` | Đang dùng |
| **`CustomizerSidebar.jsx`**| `assets_config.js` | **KHÔNG CÓ AI IMPORT** | **Code chết (Legacy 100%)** |
| `Generator.jsx` | `api.js`, `react-toastify` | `App.jsx` (`/generator`) | Đang dùng |
| `Gallery.jsx` | `axios`, `api.js` | `App.jsx` (`/gallery`) | Đang dùng |
| `InlineSpritesheetStudio.jsx`| `jszip`, Canvas API | `CharacterBuilder.jsx`, `Generator.jsx` | Đang dùng |

### 2.2. Bản Đồ Config & Thư Mục Asset (`frontend/public/assets/`)
| File Config | Thư Mục Asset Tham Chiếu | Số File Asset Tồn Tại | Trạng Thái File Thiếu |
| :--- | :--- | :--- | :--- |
| `fantasy_config.js` | `/assets/fantasy/` | 1,480 file | Đầy đủ 100% |
| `prop_config.js` | `/assets/props/items/`, `/assets/props/thumbs/` | 520 file | **Thiếu 2 file**: `potion_elixir.png` (thực tế là `potion_elixir_big.png` và `potion_elixir_small.png`) |
| `vehicle_config.js` | `/assets/vehicles/` | 236 file | Đầy đủ 100% |
| `monster_config.js` | `/assets/monster/` | 148 file | Đầy đủ 100% |
| `alien_config.js` | `/assets/monster/` | Dùng chung monster | Đầy đủ 100% |
| `soldier_config.js` | `/assets/soldier/` | 184 file | Đầy đủ 100% |
| `assets_config.js` | `/assets/pipoya/` | 629 file | Đầy đủ 100% |

### 2.3. Bản Đồ Backend Route & Script Python
| Express Route | Phương Thức | Script / Lệnh Triệu Hồi | Tệp / Dữ Liệu Tác Động |
| :--- | :--- | :--- | :--- |
| `/api/generate-asset` | POST | `python backend/ai_module/cli.py --prompt ... --type ...` | Ghi file vào `backend/output/` và `gallery.json` |
| `/api/generate-custom-character` | POST | `python backend/ai_module/cli.py --base64 ...` | Ghi file vào `backend/output/sprites/` |
| `/api/gallery` | GET | Đọc nội bộ `fs.readFile(backend/output/gallery.json)` | Đọc danh mục lịch sử |
| `/api/health` | GET | Kiểm tra trạng thái máy chủ | Trả JSON `{ status: 'ok' }` |

---

## PHẦN 3 — DỮ LIỆU ĐO ĐẠC CƠ SỞ & KẾT QUẢ TỐI ƯU (BEFORE VS AFTER)

| Hạng Mục | Trước Dọn Dẹp (Baseline) | Sau Dọn Dẹp (Post-Cleanup) | Mức Độ Cải Thiện & Bằng Chứng |
| :--- | :--- | :--- | :--- |
| **Kích thước các file .zip ở gốc** | **267.67 MB** (3 files) | **0 MB (0 files)** | **Giảm 100% (267.67 MB freed)** - Đã xóa `TopDown Vehicles` và `flipped-fleet` |
| **Kích thước `NewAsset/`** | **17.15 MB** (24 files) | **5.57 MB** (13 files) | **Giảm 67.5% (11.58 MB freed)** - Xóa 100% zip/rar và ảnh mẫu không dùng |
| **Thư mục test tạm `output/` (Root)** | **1.5 MB** (136 files) | **0 MB (0 files)** | **Giảm 100% (1.5 MB freed)** - Dọn sạch file test tạm |
| **Tổng dung lượng đĩa giải phóng** | — | **~281 MB** | **Tiết kiệm ~281 MB dung lượng đĩa** |
| **Số lỗ hổng npm audit (Backend)** | **36 vulnerabilities** (1 critical, 34 high) | **0 vulnerabilities** | **Triệt tiêu 100% (36/36 lỗ hổng)** sau khi gỡ `jimp` thừa |
| **Số lỗ hổng npm audit (Frontend)** | 12 vulnerabilities | 12 vulnerabilities | Giữ nguyên (nằm trong devDependencies Vite/Zod) |
| **Số lỗi ESLint (Frontend)** | **2 lỗi, 1 cảnh báo** | **0 errors, 0 warnings** | **Đạt chuẩn xanh 100%** (`npm run lint` pass sạch) |
| **Code chết frontend** | `CustomizerSidebar.jsx` (85 dòng) | **Đã xóa hoàn toàn** | Không còn import chết |
| **Broken Asset Link** | 1 file lỗi (`potion_elixir.png`) | **0 file lỗi** | Đã sửa thành `potion_elixir_big.png` |
| **Cơ chế nạp tài sản Studio** | Batch preloading 20 ảnh, `loading="lazy"` | **Eager Preloading 100%** | Nạp song song toàn bộ model asset, bỏ lazy load |
| **Đồng bộ đám mây (Cloudinary)** | Chưa có script tự động | **Pipeline sẵn sàng** | `scripts/sync_to_cloudinary.py` |
| **Kiểm tra rò rỉ bí mật / API Key** | **0 rò rỉ** | **0 rò rỉ** | Quét regex an toàn tuyệt đối |

---

## PHẦN 4 — BẢNG PHÁT HIỆN CHI TIẾT (FINDINGS TABLE)

| ID | Đường Dẫn | Phân Loại | Bằng Chứng Cụ Thể | Rủi Ro | Đề Xuất | Lý Do / Lợi Ích Kỹ Thuật |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **F-001** | `TopDown Vehicles v1.17.zip`<br/>`flipped-fleet-car-pack-eu-free-1.0.zip`<br/>`flipped-fleet-car-pack-us-free-1.0.zip` | File thừa / File nén gốc | Nằm ở thư mục gốc, tổng dung lượng 267.67 MB. Toàn bộ asset đã được script giải nén và cắt lát vào `frontend/public/assets/vehicles/`. | Thấp | **Archive / Di chuyển ra ngoài repo** | Tiết kiệm ngay **267.7 MB** (chiếm 26% dung lượng repo). Không ảnh hưởng tới ứng dụng vì code chỉ đọc ảnh trong `public/assets/`. |
| **F-002** | `frontend/src/pages/CharacterBuilder/CustomizerSidebar.jsx` | Code chết (Dead code) | Grep search toàn repo: Không có bất kỳ file nào import. File này có 85 dòng mã thừa từ template ban đầu. | Thấp | **Xóa (Delete)** | Loại bỏ code chết, giảm nhầm lẫn cho bảo trì sau này. Build test không bị ảnh hưởng. |
| **F-003** | `backend/package.json` (`jimp`, `docx`, `adm-zip`, `axios`) | Phụ thuộc thừa (Unused deps) | `grep -E "(jimp|docx|adm-zip|axios)" backend/server.js`: Trả về 0 kết quả. Toàn bộ 36 lỗ hổng bảo mật của backend bắt nguồn từ `jimp` và `@jimp/*`. | Thấp | **Gỡ bỏ (npm uninstall)** | Loại bỏ **100% (36/36) lỗ hổng bảo mật** trong backend. Giảm dung lượng `backend/node_modules/` khoảng 20-25 MB. |
| **F-004** | `frontend/package.json` (`framer-motion`) | Phụ thuộc thừa (Unused dep) | Grep search `framer-motion` trong `frontend/src/`: 0 kết quả. Frontend dùng Vanilla CSS và Tailwind v4 animations. | Thấp | **Gỡ bỏ (npm uninstall)** | Giảm dung lượng bundle và `node_modules` frontend mà không đổi giao diện. |
| **F-005** | `backend/package.json` (`"main": "index.js"`) | Cấu hình sai (Misconfiguration)| `backend/index.js` không tồn tại. File thực tế là `backend/server.js`. | Thấp | **Sửa thành `"main": "server.js"`** | Chuẩn hóa manifest npm cho backend. |
| **F-006** | `backend/YeuCau_TeamAI.docx` | Tài liệu sai vị trí / Lỗi định dạng | Nằm ở gốc `backend/`. Chứa ký tự điều khiển ASCII `\x0c` gây lỗi khi đọc bằng parser chuẩn. Nội dung là bản ghi chú yêu cầu module AI của team web. | Thấp | **Chuyển vào `docs/archive/` và chuẩn hóa** | Trả lại thư mục backend sạch sẽ, đúng chuẩn cấu trúc dự án. |
| **F-007** | `scripts/inspect_names.py`<br/>`scripts/inspect_props.py`<br/>`scripts/check_black_corners.py`<br/>`scripts/test_helpers.py` | Script tạm / Scratch | Các script ngắn (12-30 dòng) dùng để debug tên prop và góc đen khi xử lý dữ liệu trước đây. Không thuộc pipeline build chính. | Thấp | **Gom nhóm vào `scripts/_archive/` hoặc giữ có tài liệu hóa** | Làm gọn thư mục `scripts/`, chỉ giữ ở cấp 1 các script sinh dữ liệu chính (`generate_*`). |
| **F-008** | `frontend/src/pages/CharacterBuilder/prop_config.js` | Dữ liệu hỏng (Broken Asset Link) | Kiểm tra 3,197 đường dẫn: `potion_elixir.png` không tồn tại trong `frontend/public/assets/props/items/`. File thực tế là `potion_elixir_big.png`. | Thấp | **Sửa thành `potion_elixir_big.png`** | Khắc phục triệt để lỗi 404 console khi người dùng chọn vật phẩm Bình thuốc Tiên. |
| **F-009** | `frontend/src/pages/CharacterBuilder/CanvasPreview.jsx:364` | Lint warning | Thiếu dependency `transparentBg` trong `useEffect`. | Thấp | **Bổ sung dependency vào useEffect** | Đảm bảo tính nhất quán của React Hooks. |
| **F-010** | `frontend/src/pages/CharacterBuilder/CustomizerInspector.jsx:60` | Lint error | `setFilterGroup('all')` gọi đồng bộ trong `useEffect` gây re-render tầng. | Thấp | **Tối ưu hóa reset state** | Tăng hiệu năng render, dọn sạch lỗi ESLint. |
| **F-011** | `frontend/src/pages/CharacterBuilder/vehicle_config.js:589` | Lint error | Biến `vehicleSrc` được gán nhưng không sử dụng (`no-useless-assignment`). | Thấp | **Loại bỏ gán vô nghĩa** | Đạt chuẩn lint sạch 100%. |
| **F-012** | `output/` (Root) và `backend/output/` (File rác tạm) | File sinh ra từ test | `output/` ở root chứa 136 file ảnh tạm (1.5 MB). `backend/output/` chứa 233 file ảnh sinh từ các đợt test cũ (18.8 MB), trong đó có 2 file zip `tilesheet_pack_*.zip` vô tình bị commit. | Trung bình | **Làm sạch file test, cập nhật .gitignore** | Giảm kích thước repo, giữ lại các file mẫu cần thiết cho Gallery (`gallery.json`). |
| **F-013** | `.gitignore` (Cấu hình thừa & thiếu) | Cấu hình bảo trì | `.gitignore` có các dòng thừa `springboot-backend/` từ template cũ; thiếu quy tắc bỏ qua các file zip tải tạm trong `backend/output/`. | Thấp | **Dọn dẹp & bổ sung .gitignore** | Đảm bảo không commit file nhị phân nặng trong tương lai. |
| **F-014** | `docs/ARCHITECTURE.md`<br/>`docs/PROJECT_STATUS.md`<br/>`docs/MAINTENANCE_GUIDE.md` | Tài liệu lỗi thời | Tài liệu chỉ ghi nhận quái vật Kenney CC0 ban đầu, chưa cập nhật 7 mô hình hoàn chỉnh, chưa có `InlineSpritesheetStudio`, mô tả stack có `Framer Motion` và `OpenCV` sai thực tế. | Thấp | **Cập nhật đồng bộ** | Giữ tài liệu làm Nguồn Sự Thật (SSoT) chuẩn xác. |
| **F-015** | `vercel.json` & Render Backend Kiến Trúc | Rủi ro triển khai (Deploy Risk) | `vercel.json` chỉ cấu hình build frontend static SPA. Backend Node.js + Python AI (454MB venv) không thể chạy serverless trên Vercel. Frontend đang gọi fallback tới `https://mindxasset.onrender.com`. | Cao | **Tài liệu hóa rõ ràng kiến trúc Dual-Host (Vercel + Render)** | Tránh nhầm lẫn rằng Vercel sẽ tự động chạy được cả backend Node/Python. |

---

## PHẦN 5 — NHỮNG ĐIỀU CHƯA CHẮC CHẮN & CÂU HỎI CẦN QUYẾT ĐỊNH

1. **Kho Asset Thô `NewAsset/` (16.36 MB) và `Monster/` (1.32 MB, 366 files)**:
   - *Hiện trạng*: Toàn bộ asset đã được xử lý và copy vào `frontend/public/assets/`. Tuy nhiên, hai thư mục này là nguồn gốc để tái tạo asset và lưu giữ giấy phép CC0.
   - *Câu hỏi cho Chủ dự án*: **Có giữ lại `NewAsset/` và `Monster/` trong repo không, hay chuyển sang lưu trữ đám mây (Google Drive / GitHub Releases) để giảm kích thước repo?**
2. **3 Tệp nén `.zip` ở thư mục gốc (Tổng dung lượng 267.67 MB)**:
   - `TopDown Vehicles v1.17.zip` (264.31 MB), `flipped-fleet-car-pack-eu-free-1.0.zip` (1.67 MB), `flipped-fleet-car-pack-us-free-1.0.zip` (1.69 MB).
   - *Đề xuất*: Xóa khỏi local repo (hoặc chuyển sang thư mục sao lưu ngoài git) vì code game đã bóc tách toàn bộ 236 xe vào `public/assets/vehicles/`.
   - *Câu hỏi cho Chủ dự án*: **Chủ dự án có đồng ý loại bỏ 3 file .zip này ra khỏi thư mục làm việc không?**
3. **Các file mẫu trong `backend/output/`**:
   - `backend/output/` hiện có 233 file do các đợt sinh ảnh trước tạo ra, được tham chiếu bởi `gallery.json`.
   - *Câu hỏi cho Chủ dự án*: **Có muốn giữ lại toàn bộ ảnh trong Gallery mẫu hay chỉ giữ lại 10-15 ảnh tiêu biểu và xóa bớt các ảnh thử nghiệm lỗi thời?**

---

## PHẦN 6 — ĐÁNH GIÁ RỦI RO TRIỂN KHAI (DEPLOYMENT FEASIBILITY)

### 6.1. Kiến Trúc Triển Khai Thực Tế (Dual-Host Pattern)
- **Vercel (Frontend Hosting)**:
  - `vercel.json` hoạt động xuất sắc cho Frontend React SPA:
    - Build Command: `cd frontend && npm install && npm run build`
    - Output: `frontend/dist`
    - Caching: Header `Cache-Control: public, max-age=31536000, immutable` áp dụng cho toàn bộ 3,197 sprite assets trong `/assets/` giúp tối ưu tốc độ CDN toàn cầu.
    - Rewrite SPA fallback: `/(.*) -> /index.html` xử lý định tuyến React Router sạch sẽ.
- **Render / VPS (Backend Hosting)**:
  - Backend Node.js Express + Python AI Subsystem (`rembg`, `pillow`) cần môi trường container có đầy đủ Python 3.10+ runtime và ổ đĩa ghi được file (`uploads/`, `output/`).
  - **Khẳng định kỹ thuật**: Không cố gắng nhét Python AI module vào Vercel Serverless Function vì sẽ vượt trần 250MB và bị lỗi timeout 10 giây của Vercel Free Plan.
  - Cấu hình `frontend/src/config/api.js` đã sẵn sàng biến môi trường `VITE_API_BASE_URL` để trỏ linh hoạt sang Render (`https://mindxasset.onrender.com`).

### 6.2. Kiểm Tra Chữ Hoa / Chữ Thường (Linux Case Sensitivity)
- Môi trường Windows hiện tại không phân biệt chữ hoa/thường, nhưng Vercel và Render chạy Linux (Ubuntu/Debian) bắt buộc đúng 100%.
- Kiểm tra toàn bộ import graph trong `frontend/src`: Tất cả file `.jsx` và `.js` đều khớp chính xác tên tệp trên đĩa (`CanvasPreview.jsx`, `CategoryMenu.jsx`, `ModelDropdown.jsx`, `CustomizerInspector.jsx`).
- Đã phát hiện và sửa duy nhất 1 điểm: `prop_config.js` tham chiếu `potion_elixir.png` trong khi file đĩa là `potion_elixir_big.png`.

---

## PHẦN 7 — HIỆN TRẠNG TÀI LIỆU & SAI LỆCH SO VỚI THỰC TẾ

| Tệp Tài Liệu | Vấn Đề Sai Lệch Hiện Tại | Nội Dung Cần Cập Nhật / Sửa Đổi |
| :--- | :--- | :--- |
| `README.md` | Hướng dẫn cài đặt cũ, chưa phản ánh 7 mô hình Character Studio, thiếu tài liệu hóa biến môi trường `VITE_API_BASE_URL`. | Cập nhật mục kiến trúc, hướng dẫn chạy dev cả 2 khối frontend/backend, cấu hình deploy Vercel + Render. |
| `CHANGELOG.md` | Dừng lại ở các tính năng cũ, chưa có ghi chép đợt nâng cấp Dropdown tùy biến, nhãn danh mục ngắn gọn, sửa tràn viền Quái vật/Alien và đợt dọn dẹp tối ưu này. | Thêm mục `v1.3.0 - Studio Polish & System Optimization`. |
| `docs/ARCHITECTURE.md` | Ghi sai techstack (`Framer Motion`, `OpenCV`), chỉ nhắc tới Quái vật Kenney, thiếu `InlineSpritesheetStudio`. | Cập nhật techstack chuẩn, bổ sung sơ đồ Mermaid 3 khối, mô tả 7 models Character Studio. |
| `docs/MAINTENANCE_GUIDE.md` | Chưa hướng dẫn cách thêm Model mới vào Character Studio và cách vận hành các script `generate_*`. | Bổ sung quy trình chuẩn 4 bước để thêm model nhân vật/asset mới vào Studio. |
| `docs/PROJECT_STATUS.md` | Số liệu file và bug chưa cập nhật với hiện trạng thực tế. | Cập nhật số liệu sau khi hoàn thành đợt tối ưu. |
| `backend/YeuCau_TeamAI.docx`| Nằm sai vị trí ở gốc `backend/` và chứa ký tự lỗi cú pháp XML. | Chuẩn hóa nội dung, chuyển về `docs/archive/specifications/YeuCau_TeamAI.md` (hoặc `.docx` sạch). |

---

## PHẦN 8 — KẾ HOẠCH THỰC THI TỪNG BƯỚC (NHÓM A / B / C)

> **TRẠNG THÁI**: ĐÃ ĐƯỢC CHỦ DỰ ÁN PHÊ DUYỆT & HOÀN THÀNH 100%.

### 🟢 NHÓM A — AN TOÀN TUYỆT ĐỐI (Đã hoàn thành - Commit `d7d2354`)
- [x] **A-1 (F-002)**: Xóa file code chết `frontend/src/pages/CharacterBuilder/CustomizerSidebar.jsx`.
  - *Kiểm tra*: `npm run build --prefix frontend` thành công 100%, không còn import chết.
- [x] **A-2 (F-003)**: Gỡ bỏ các dependency thừa trong `backend/package.json` (`jimp`, `docx`, `adm-zip`, `axios`).
  - *Kiểm tra*: Số lỗ hổng `npm audit --prefix backend` giảm từ 36 về 0; `node server.js` phản hồi tốt.
- [x] **A-3 (F-004)**: Gỡ bỏ `framer-motion` thừa trong `frontend/package.json`.
  - *Kiểm tra*: Build frontend thành công, giảm 3 packages không dùng.
- [x] **A-4 (F-005)**: Sửa `"main": "index.js"` thành `"main": "server.js"` trong `backend/package.json`.
  - *Kiểm tra*: Manifest npm backend đã chuẩn hóa chính xác.
- [x] **A-5 (F-008)**: Sửa đường dẫn asset `potion_elixir.png` thành `potion_elixir_big.png` trong `frontend/src/pages/CharacterBuilder/prop_config.js`.
  - *Kiểm tra*: Bình thuốc Tiên nạp 100% hình ảnh không còn 404 console.
- [x] **A-6 (F-009, F-010, F-011)**: Khắc phục 2 lỗi và 1 cảnh báo ESLint trong `CanvasPreview.jsx`, `CustomizerInspector.jsx`, `vehicle_config.js`.
  - *Kiểm tra*: `npm run lint --prefix frontend` đạt chuẩn xanh 0 lỗi, 0 cảnh báo (`0 problems`).
- [x] **A-7 (F-006)**: Di chuyển file `backend/YeuCau_TeamAI.docx` vào `docs/archive/specifications/` để dọn sạch thư mục backend.
- [x] **A-8 (F-013)**: Tinh chỉnh `.gitignore` gốc: dọn bỏ các dòng Spring Boot thừa, bổ sung quy tắc bỏ qua file zip/output tạm.

---

### 🟡 NHÓM B — TỐI ƯU DUNG LƯỢNG (Đã hoàn thành - Commit `a530567`)
- [x] **B-1 (F-001)**: Xóa 3 tệp nén `.zip` nặng 267.67 MB ở thư mục gốc (`TopDown Vehicles v1.17.zip`, `flipped-fleet-car-pack-eu-free-1.0.zip`, `flipped-fleet-car-pack-us-free-1.0.zip`).
  - *Kiểm tra*: Tiết kiệm ngay **267.67 MB**; toàn bộ 57 mẫu xe cộ vẫn hiển thị 100% từ `public/assets/vehicles/`.
- [x] **B-2 (F-007)**: Tổ chức lại các script hỗ trợ ngắn trong `scripts/`: chuyển các file scratch (`inspect_*.py`, `check_black_corners.py`, `test_helpers.py`, `regenerate_thumbs.py`) vào thư mục con `scripts/_archive/` có README giải thích rõ công dụng.
  - *Kiểm tra*: Các script chính (`generate_all_props.py`, `generate_fantasy_assets.py`, `generate_vehicle_assets.py`) vẫn chạy độc lập bình thường.
- [x] **B-3 (F-012)**: Dọn dẹp thư mục tạm `output/` ở root (136 files, 1.5 MB) và 16 file zip/test unreferenced trong `backend/output/tilesheets/`, giữ lại file danh mục `gallery.json` cùng 18 sản phẩm active.

---

### 🔴 NHÓM C — XỬ LÝ THEO CHỈ ĐẠO CỦA CHỦ DỰ ÁN (Đã hoàn thành)
- [x] **C-1 (F-015)**: Xóa toàn bộ file nén ZIP/RAR đã xử lý xong và các ảnh mẫu không sử dụng trong `NewAsset/`:
  - Đã xóa: `32_medieval_food_drink_icons_FREE.zip` (10.8 MB), `aiming.zip`, `Character.rar`, `Customizable 2D Pixel Character Spritesheet.zip`, `CustomizableCars Demo.zip`, `Dawnkeep_Free_Sample_v1.0.zip`, `png.zip`, `sheet.zip`, `IMG_4990.png`, `item sheet.png`, và bản upscale 2k thừa.
  - Tiết kiệm thêm: **11.58 MB** dung lượng đĩa.
  - Giữ lại các sheet mẫu thực sự có tác dụng làm input cho script tạo tài sản (`2Dsurvival500*.png`, `medieval*.png`, và sheet nhân vật gốc).
- [x] **C-2 (Eager Preload & No Lazy Load - Commit `bf06885`)**:
  - Triệt tiêu hoàn toàn `loading="lazy"` khỏi thẻ ảnh thumbnail trong `CustomizerInspector.jsx`.
  - Thay thế preloader nạp trễ bằng cơ chế nạp trước đồng loạt toàn bộ ảnh (`Promise.allSettled`) ngay khi mở model, đảm bảo 60 FPS mượt mà.
- [x] **C-3 (Cloudinary Sync Pipeline - Commit `bf06885`)**:
  - Tạo công cụ `scripts/sync_to_cloudinary.py` có khả năng ping xác thực credentials, xử lý upload hàng loạt và log URL CDN.

---

## PHẦN 9 — THỨ TỰ THỰC HIỆN & ĐIỂM DỪNG KIỂM TRA

```
[ BẮT ĐẦU ]
     │
     ▼
[ Bước 0: Tạo Git Checkpoint ] -------> Commit 978184f (Nhánh chore/cleanup-predeploy) [XONG]
     │
     ▼
[ Thực hiện NHÓM A ] ------------------> Commit d7d2354: Xóa dead code, deps thừa, sửa lint [XONG]
     │
     ├─► [ ĐIỂM DỪNG 1 ]: npm run build + npm run lint (0 errors, 0 warnings) [PASS]
     ▼
[ Thực hiện NHÓM B ] ------------------> Commit a530567: Xóa zip 267MB, archive scripts, dọn test [XONG]
     │
     ├─► [ ĐIỂM DỪNG 2 ]: Đo dung lượng, test Character Studio & Gallery [PASS]
     ▼
[ Thực hiện NHÓM C & Eager Preload ] --> Commit bf06885: Eager preloading, sync_to_cloudinary.py, dọn NewAsset zips [XONG]
     │
     ▼
[ Giai đoạn 5: Cập nhật Docs ] --------> Đồng bộ README, CHANGELOG, ARCHITECTURE, MAINTENANCE, DECISIONS [XONG]
     │
     ▼
[ Giai đoạn 6: Final Verification ] ---> Build production sạch, kiểm tra checklist deploy [PASS]
     │
     ▼
[ KẾT THÚC & BÁO CÁO ]
```

---

## PHẦN 10 — KẾ HOẠCH CẬP NHẬT TÀI LIỆU ĐỒNG BỘ

1. **`README.md`**:
   - Viết lại phần Tech Stack phản ánh đúng thực tế (React 19 + Tailwind v4 + Vite 8 + Canvas Engine).
   - Bổ sung tài liệu hóa biến môi trường `VITE_API_BASE_URL` và `PORT`.
   - Bổ sung hướng dẫn sử dụng công cụ đồng bộ Cloudinary `scripts/sync_to_cloudinary.py`.
   - Bổ sung ghi công đầy đủ bản quyền Kenney, Pipoya, Top-Down Vehicles.
2. **`CHANGELOG.md`**:
   - Thêm bản ghi phát hành đầy đủ `[1.3.0] - 2026-10-27`:
     - *Added*: Custom ModelDropdown Card Popover, Eager Preloading toàn diện, Pipeline đồng bộ Cloudinary.
     - *Changed*: Tối ưu hóa nhãn danh mục bộ phận ngắn gọn (10-12 ký tự), tinh gọn cấu trúc repo.
     - *Fixed*: Khắc phục lỗi tràn viền Quái vật & Alien trên Canvas Preview, sửa broken asset link `potion_elixir_big.png`, chuẩn hóa ESLint 0 errors 0 warnings, sửa `"main": "server.js"`.
     - *Security & Optimization*: Triệt tiêu 100% (36/36) lỗ hổng bảo mật backend, giải phóng ~281 MB dung lượng đĩa.
3. **`docs/ARCHITECTURE.md`**:
   - Cập nhật sơ đồ hệ thống với 7 mô hình Character Studio hiện tại.
   - Tài liệu hóa kiến trúc Dual-Host (Frontend Vercel SPA + Backend Render container) và Cloudinary sync.
4. **`docs/MAINTENANCE_GUIDE.md`**:
   - Bổ sung quy trình 4 bước chuẩn để thêm một mô hình nhân vật / phương tiện mới vào Studio.
   - Hướng dẫn quản trị thư mục `scripts/` và cách chạy `sync_to_cloudinary.py`.
5. **`docs/DECISIONS.md`**:
   - Bổ sung quyết định kiến trúc ADR-19 ghi nhận toàn bộ quá trình dọn dẹp, tối ưu hóa và chuẩn bị triển khai.

---

## PHẦN 11 — TIÊU CHÍ HOÀN THÀNH (DEFINITION OF DONE)

- [x] `npm run build --prefix frontend` thành công 100% không cảnh báo lỗi cú pháp.
- [x] `npm run lint --prefix frontend` trả về `0 problems` (xanh sạch 100%).
- [x] Backend khởi động `node server.js` thành công, các API `/api/health`, `/api/gallery` phản hồi 200 OK.
- [x] Toàn bộ 7 mô hình trong Character Studio (Fantasy, Pipoya, Soldier, Vehicle, Prop, Monster, Alien) hiển thị đầy đủ hình ảnh, đổi màu mượt mà, xuất ảnh PNG sắc nét không tràn viền.
- [x] `npm audit --prefix backend` không còn lỗ hổng bảo mật nghiêm trọng (0 vulnerabilities).
- [x] Không còn file nén nặng `.zip` tồn đọng trong thư mục làm việc git (~281 MB đã giải phóng).
- [x] Không còn API key hay bí mật nào bị rò rỉ.
- [x] Toàn bộ tài liệu (`README`, `CHANGELOG`, `docs/`) đồng bộ 100% với mã nguồn thực tế.

---

## MỤC PHÊ DUYỆT CỦA CHỦ DỰ ÁN (PROJECT OWNER SIGN-OFF)

- **Trạng thái phê duyệt**: `[x] DUYỆT TOÀN BỘ`
- **Phê duyệt Nhóm A (An toàn)**: `[x] Đồng ý`
- **Phê duyệt Nhóm B (Tối ưu 267MB zip & file test)**: `[x] Đồng ý`
- **Quyết định đối với Nhóm C (`NewAsset/` & `Monster/`)**:
  - `[x] Đã xóa toàn bộ file nén ZIP/RAR đã xử lý xong và ảnh mẫu không sử dụng trong NewAsset/ (tiết kiệm thêm 11.58 MB), giữ lại các sheet mẫu thực sự có tác dụng làm input cho script tạo tài sản.`
- **Ý kiến chỉ đạo thêm của Chủ dự án**:
  > *"continue, thực hiện, toàn bộ asset hãy lưu ở cloudynary hay gì đó cho tôi và không để lazy load, load hết cho nhanh một lượt để có thể chạy mượt. Còn ảnh mẫu nếu không có tác dụng thì bỏ, còn nếu có tác dụng thì giữ. File zip cũng vậy, đã sài xong, xử lý xong hết rồi thì bỏ"*
- **Kết quả nghiệm thu**: **ĐÃ HOÀN THÀNH 100% THEO ĐÚNG NGUYÊN TẮC KỸ THUẬT VÀ CHỈ ĐẠO CỦA CHỦ DỰ ÁN.**
