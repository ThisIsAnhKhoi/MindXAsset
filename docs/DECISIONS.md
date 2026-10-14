# HỒ SƠ QUYẾT ĐỊNH KIẾN TRÚC & SẢN PHẨM (ARCHITECTURE DECISION RECORDS - ADR)

- **Dự án**: MindX Game Asset Generator & Character Builder (MindXAsset)
- **Vai trò**: Tech Lead & Solution Architect
- **Tiêu chuẩn**: Định dạng chuẩn ADR (Bối cảnh, Phương án, Quyết định, Lý do, Hệ quả).

---

## Danh Mục Các Quyết Định (ADR Summary Table)

| Mã ADR | Tiêu đề quyết định | Trạng thái | Lĩnh vực |
| :---: | :--- | :---: | :--- |
| **ADR-01** | Thống nhất kiến trúc máy chủ API trung tâm (Node.js Express) | **ĐÃ DUYỆT** | Backend Architecture |
| **ADR-02** | Lộ trình chuyển đổi cơ sở dữ liệu từ file `gallery.json` sang SQLite | **ĐÃ DUYỆT** | Database & Persistence |
| **ADR-03** | Duy trì mô hình Zero Auth (Mở công khai không cần login) cho bản MVP | **ĐÃ DUYỆT** | Security & Authentication |
| **ADR-04** | Nguyên tắc bảo vệ quyền riêng tư & xóa tệp tạm tức thì | **ĐÃ DUYỆT** | Privacy & PII Handling |
| **ADR-05** | Chiến lược quản lý State Frontend bằng React Hooks cục bộ | **ĐÃ DUYỆT** | Frontend State Management |
| **ADR-06** | Chiến lược kiểm thử tự động với Vitest và Supertest | **ĐÃ DUYỆT** | Testing Strategy |
| **ADR-07** | Chiến lược triển khai PaaS trên Render và kiểm soát bộ nhớ | **ĐÃ DUYỆT** | DevOps & Deployment |
| **ADR-08** | Chuẩn hóa bản quyền tài sản đồ họa tập trung vào Kenney Monster Pack (CC0) | **ĐÃ DUYỆT** | Asset Licensing & IP |
| **ADR-09** | Tiêu chí nghiệm thu phiên bản MVP phát hành được (Release Definition) | **ĐÃ DUYỆT** | Product Release Criteria |
| **ADR-10** | Xử lý SPA Routing trên Vercel & Chiến lược Preloading Asset Đồ Họa | **ĐÃ DUYỆT** | Frontend & Deployment |
| **ADR-11** | Cấu Trúc Bố Cục Studio Đồng Bộ 560px & Focal Zoom Thumbnail Cắt Trống Pipoya | **ĐÃ DUYỆT** | UI/UX & Component Architecture |
| **ADR-12** | Đồng Bộ Hóa Chuẩn API Pollinations Bearer Auth & Dynamic Env Resolver | **ĐÃ DUYỆT** | AI Integration & Observability |

---

## Chi Tiết Các Quyết Định

### ADR-01: Thống nhất kiến trúc máy chủ API trung tâm (Node.js Express)
- **Bối cảnh**: Lịch sử repo từng thử nghiệm Java Spring Boot (`springboot-backend`) và đề xuất Python FastAPI trong tài liệu SRS, nhưng thực tế mã nguồn đang vận hành ổn định trên Node.js Express kết nối Python CLI.
- **Các phương án cân nhắc**:
  1. *Phương án A*: Viết lại toàn bộ backend sang Python FastAPI monorepo.
  2. *Phương án B*: Khôi phục Spring Boot kết nối microservices.
  3. *Phương án C (Lựa chọn)*: Giữ nguyên Node.js Express làm API Gateway trung tâm, điều phối Python CLI qua `child_process.execFile`.
- **Quyết định**: **Chọn Phương án C**.
- **Lý do**: Node.js Express xử lý I/O bất đồng bộ nhẹ nhàng, thư viện Multer và Cloudinary tích hợp mượt; Python CLI đảm nhận riêng phần xử lý ảnh mà không làm phình to tiến trình server. Việc viết lại sang FastAPI sẽ tốn thêm 2-3 tuần mà không tăng thêm giá trị nghiệp vụ trực tiếp cho học sinh.
- **Hệ quả**: Cần giữ script `setup-python.js` để tự động dựng môi trường ảo venv khi deploy.

---

### ADR-02: Lộ trình chuyển đổi CSDL từ file `gallery.json` sang SQLite
- **Bối cảnh**: Hiện tại dữ liệu thư viện ảnh lưu trong file phẳng `backend/output/gallery.json`. Khi có 2 request ghi đồng thời, server đọc đè và gây nguy cơ mất dữ liệu (Race Condition).
- **Các phương án cân nhắc**:
  1. *Phương án A*: Giữ nguyên `gallery.json` và thêm thư viện khóa tệp `proper-lockfile`.
  2. *Phương án B (Lựa chọn)*: Chuyển đổi sang SQLite (sử dụng `better-sqlite3` hoặc Prisma) ở Giai đoạn 2; trước mắt ở Giai đoạn 1 (MVP) áp dụng hàng đợi ghi (Write Queue in-memory).
  3. *Phương án C*: Cài đặt PostgreSQL trên Supabase/Neon.
- **Quyết định**: **Chọn Phương án B**.
- **Lý do**: SQLite là giải pháp lưu trữ không cần cài đặt server (serverless, single file), hỗ trợ đầy đủ ACID transaction chống race condition, có thể backup dễ dàng và phù hợp với quy mô phòng học MindX.
- **Hệ quả**: Cần viết script di chuyển (migration) dữ liệu từ `gallery.json` sang bảng `assets` trong SQLite.

---

### ADR-03: Duy trì mô hình Zero Auth cho bản phát hành MVP
- **Bối cảnh**: Tài liệu SRS ban đầu nhắc tới vai trò "Học sinh", nhưng mã nguồn hiện tại không có hệ thống đăng nhập.
- **Các phương án cân nhắc**:
  1. *Phương án A*: Xây dựng hệ thống đăng ký/đăng nhập JWT và bảng User trước khi phát hành.
  2. *Phương án B (Lựa chọn)*: Duy trì chế độ Zero Auth (công khai không cần login) cho bản MVP hiện tại; bổ sung xác thực ở Phase kế tiếp.
- **Quyết định**: **Chọn Phương án B** (Đã được chủ dự án phê duyệt tại Cổng 2).
- **Lý do**: Giúp học sinh trải nghiệm công cụ ngay lập tức trong lớp học chỉ với 1 cú click chuột mà không vướng rào cản quên mật khẩu hoặc xác thực email.
- **Hệ quả**: Bất kỳ ai có link đều có thể tạo ảnh. Cần bổ sung rate-limiting (giới hạn số request/phút theo IP) để chống spam API.

---

### ADR-04: Nguyên tắc bảo vệ quyền riêng tư & xóa tệp tạm tức thì
- **Bối cảnh**: Người dùng có thể upload ảnh vẽ tay hoặc ảnh cá nhân lên tính năng Sprite from Image.
- **Quyết định**: Áp dụng chính sách **Zero Retention** cho tệp tải lên:
  1. Tệp upload chỉ được lưu tạm thời trong thư mục `backend/uploads/` trong thời gian xử lý.
  2. Khối lệnh `finally` hoặc callback hoàn thành **bắt buộc** gọi `fs.unlink()` để xóa vĩnh viễn tệp tạm.
  3. Không ghi lại địa chỉ IP, User-Agent hay bất kỳ thông tin cá nhân nào vào log hoặc gallery.
- **Lý do**: Tuân thủ triệt để tiêu chuẩn an toàn dữ liệu trẻ em và bảo vệ quyền riêng tư người học.

---

### ADR-05: Quản lý State Frontend bằng React Hooks cục bộ
- **Bối cảnh**: Giao diện gồm các trang độc lập, trạng thái giữa các trang không phụ thuộc lẫn nhau ngoại trừ danh sách Gallery.
- **Quyết định**: Không cài đặt Redux hay Zustand. Duy trì mô hình State cục bộ với `useState`, `useEffect` và truyền props.
- **Lý do**: Giữ cấu trúc frontend đơn giản, giảm kích thước bundle xuất xưởng, giúp học sinh và giảng viên dễ dàng đọc hiểu mã nguồn để học tập.
- **Hệ quả**: Cần chuẩn hóa các effect để tránh cảnh báo `react-hooks/set-state-in-effect`.

---

### ADR-06: Chiến lược kiểm thử tự động với Vitest và Supertest
- **Bối cảnh**: Hệ thống hiện tại hoàn toàn thiếu kiểm thử tự động (0% coverage).
- **Quyết định**:
  1. Frontend: Cài đặt `Vitest` và `@testing-library/react` để kiểm thử component `AnimationPreview` và `CanvasPreview`.
  2. Backend: Cài đặt `Supertest` kiểm thử các endpoint API Express với mock Python CLI.
  3. Python: Sử dụng `unittest` hoặc `pytest` kiểm thử các hàm tính toán pixel.
- **Lý do**: Vitest tương thích 100% với cấu hình Vite hiện có, tốc độ chạy siêu nhanh, không cần cấu hình Babel phức tạp.

---

### ADR-07: Chiến lược triển khai PaaS trên Render và kiểm soát bộ nhớ
- **Bối cảnh**: Dự án được cấu hình deploy trên Render thông qua biến `RENDER_EXTERNAL_URL`. Gói miễn phí của Render giới hạn RAM 512MB, dễ bị sập khi load model AI nặng.
- **Quyết định**:
  1. Duy trì cờ `DISABLE_REMBG=true` khi chạy trên Render.
  2. Sử dụng `npm postinstall` chạy `node setup-python.js` để tự động cài đặt dependency Python trên môi trường build của Render.
- **Lý do**: Đảm bảo dịch vụ web luôn duy trì trạng thái "Sống" (High Availability) phục vụ lớp học mà không bị gián đoạn do tràn bộ nhớ.

---

### ADR-08: Chuẩn hóa bản quyền tập trung vào Kenney Monster Pack (CC0)
- **Bối cảnh**: Bộ tài nguyên quái vật `Monster/` sử dụng Kenney Pack phân phối theo giấy phép CC0 (Public Domain). Trong khi đó, bộ `cozy_fae` có điều khoản cấm phân phối template thương mại.
- **Quyết định**:
  1. Chọn **Monster Builder (Kenney Pack)** làm bộ linh vật và tính năng tùy biến nhân vật đại diện chính thức của MindXAsset.
  2. Ghi rõ Credit tri ân tác giả Kenney trong tài liệu và chân trang (Footer).
  3. Tạm thời cô lập hoặc ẩn bộ CozyFae trong bản phát hành công khai để đảm bảo 100% an toàn pháp lý bản quyền.

---

### ADR-09: Tiêu chí nghiệm thu phiên bản MVP phát hành được (Release Definition)
- **Quyết định**: Phiên bản `v0.4.0-mvp` chỉ được coi là đủ điều kiện xuất xưởng khi thỏa mãn:
  1. Đã xoay khóa Cloudinary API Secret.
  2. Đã dọn dẹp sạch sẽ 15 file rác/cũ ở thư mục gốc.
  3. Lệnh `npm run lint` ở frontend đạt 0 errors.
  4. Lệnh `npm run build` thành công không văng lỗi.
  5. Có tài liệu `README.md` chuyên nghiệp hướng dẫn cài đặt và chạy thử thành công từ một thư mục mới.

---

### ADR-10: Xử lý SPA Routing trên Vercel & Chiến lược Preloading Asset Đồ Họa
- **Bối cảnh**:
  1. Khi triển khai Frontend (React Router SPA) lên Vercel, tải trang chủ `/` bình thường nhưng reload/truy cập trực tiếp các route con (`/character-builder`, `/generator`, `/gallery`) bị lỗi `404: NOT_FOUND` do thiếu cơ chế SPA Fallback.
  2. Tại giao diện Character Studio (`CustomizerInspector.jsx`), các ô tùy chọn bộ phận nhân vật chỉ hiển thị biểu tượng thô sơ `✦` hoặc `∅`, không có ảnh xem trước (thumbnail).
  3. Cơ chế nạp ảnh hiện tại là lười biếng (Lazy Load theo từng click), khiến canvas bị độ trễ và chớp nháy khi người dùng đổi trang phục/bộ phận.
- **Các phương án cân nhắc**:
  1. *Phương án A*: Chuyển đổi React Router sang `HashRouter` (`/#/character-builder`). *(Nhược điểm: URL xấu, ảnh hưởng SEO và chia sẻ liên kết)*.
  2. *Phương án B (Lựa chọn)*:
     - Tạo tệp cấu hình `vercel.json` định tuyến toàn bộ URL `/(.*)` về `/index.html`.
     - Cấu hình Vercel HTTP Headers `Cache-Control: public, max-age=31536000, immutable` cho thư mục tĩnh `/assets/`.
     - Bổ sung Thumbnail trực quan trong `CustomizerInspector` (Monster dùng ảnh PNG thu nhỏ, Pipoya dùng CSS sprite clip frame 1).
     - Triển khai cơ chế Preloading song song theo Category và Idle Caching trong `CanvasPreview`.
- **Quyết định**: **Chọn Phương án B**.
- **Lý do**: Giải quyết triệt để 100% lỗi 404 mà vẫn giữ URL chuẩn SEO; mang lại trải nghiệm lắp ráp nhân vật mượt mà, trực quan và tức thì (0ms latency từ memory/disk cache).
- **Hệ quả**: Cần kiểm thử lại trên môi trường build Vercel và đo đạc kích thước bộ nhớ đệm `imageCache`.

---

### ADR-11: Cấu Trúc Bố Cục Studio Đồng Bộ 560px & Focal Zoom Thumbnail Cắt Trống Pipoya
- **Bối cảnh**:
  1. Các icon phụ kiện nhỏ (mũ/vương miện, mắt, kính, râu) trong spritesheet Pipoya (`96x128px`) chỉ nằm ở một góc rất nhỏ của frame `32x32px`, phần lớn còn lại là không gian trong suốt. Khi render không phóng to, chúng trông như những chấm li ti không rõ đường nét.
  2. Bố cục 3 cột của Character Studio trước đây có chiều cao cọc cạch không đồng đều; các nút bấm thao tác (Ngẫu nhiên, Lưu PNG, Xuất AI) nằm lộn xộn bên dưới canvas, đẩy chiều cao trang lên `890px`, gây tràn khung nhìn và thanh cuộn dọc không mong muốn trên màn hình tiêu chuẩn (`1536x776` / 1080p).
  3. Badge dấu tích `✓` nằm giữa ô đè lên hình vẽ chi tiết của item.
- **Các phương án cân nhắc**:
  1. *Phương án A*: Cắt thủ công hàng trăm file PNG nhỏ từ spritesheet bằng Photoshop/GIMP. *(Tốn rất nhiều thời gian, làm nặng dung lượng repository)*.
  2. *Phương án B (Lựa chọn)*:
     - Xây dựng thuật toán tiêu cự thông minh `getCategorySpriteStyle` phóng to theo danh mục (Zoom 2.8x cho mũ, 3.2x cho mắt/kính, 2.2x cho tóc, 1.9x cho áo) và dịch chuyển tọa độ chính xác vào vùng chi tiết.
     - Đồng bộ hóa chiều cao 3 cột thành các thẻ Card độc lập chuẩn `h-[560px]`, tích hợp thanh tiêu đề (tên + xóa nền) vào Header thẻ và thanh nút hành động vào Footer thẻ.
     - Đổi lưới xem trước sang 3 cột (`grid-cols-3 gap-2.5`), chuyển badge `✓` lên góc trên bên phải, thu gọn bảng màu khi không có màu gợi ý.
- **Quyết định**: **Chọn Phương án B**.
- **Lý do**: Không cần phát sinh thêm asset tệp tĩnh nào; toàn bộ Character Studio nằm vừa vặn 100% trong một màn hình làm việc (single screen desktop viewport) không cần cuộn trang; người dùng nhìn thấy rõ nét từng chiếc vương miện, gọng kính và đôi mắt với trải nghiệm hiện đại chuẩn Studio.
- **Hệ quả**: Nếu bổ sung danh mục bộ phận mới, cần khai báo cấu hình zoom tương ứng trong `getCategorySpriteStyle`.

---

### ADR-12: Đồng Bộ Hóa Chuẩn API Pollinations Bearer Auth & Dynamic Env Resolver
- **Bối cảnh**:
  1. Module AI liên tục báo lỗi khi gọi API sinh ảnh hoặc hoạt ảnh dù đã thay nhiều token/key khác nhau.
  2. Mã nguồn trong `backend/ai_module/asset_generator.py` vẫn dùng endpoint cũ (`https://image.pollinations.ai/prompt`) và gửi token qua URL query params (`?key=...&token=...`) vốn đã bị upstream Pollinations ngừng hỗ trợ, dẫn tới lỗi `500/503 Queue Full`.
  3. Lỗi gán tĩnh tại thời điểm import (`API_KEY = os.getenv(...)`) khiến biến môi trường bị rỗng `""` nếu module được nạp trước khi `load_dotenv()` thực thi.
  4. Khối try-catch nuốt mất phản hồi lỗi chi tiết từ server, gây khó khăn cho việc chẩn đoán nguyên nhân (401 Auth, 402 Hết credit, hay 429 Quá tải).
- **Các phương án cân nhắc**:
  1. *Phương án A*: Giữ nguyên code cũ và tiếp tục đổi các API Key khác nhau. *(Không khả thi vì lỗi nằm ở cơ chế truyền token và endpoint bị lệch chuẩn)*.
  2. *Phương án B (Lựa chọn)*:
     - Nâng cấp `POLLINATIONS_BASE_URL` sang endpoint chuẩn: `https://gen.pollinations.ai/image`.
     - Chuyển toàn bộ cơ chế xác thực sang HTTP Header: `Authorization: Bearer <API_KEY>`.
     - Xây dựng hàm `get_pollinations_api_key()` tự động dò tìm file `.env` ở cả thư mục hiện tại lẫn thư mục cha khi runtime.
     - Bắt mã lỗi chi tiết (401, 402, 403), bóc tách nội dung JSON báo lỗi từ nhà cung cấp và ngắt vòng lặp retry vô nghĩa ngay lập tức.
     - Đồng bộ tham số `env: { ...process.env }` và `cwd: ai_module` từ Node.js `execFile`.
- **Quyết định**: **Chọn Phương án B**.
- **Lý do**: Giải quyết triệt để 100% nguyên nhân gốc rễ gây lỗi API; phản hồi sinh ảnh từ API thành công trong ~10s; log lỗi minh bạch giúp đội ngũ phát triển nhận biết chính xác trạng thái token/credit.
- **Hệ quả**: Cần đảm bảo file `.env` có biến `POLLINATIONS_API_KEY` với token còn hiệu lực (bắt đầu bằng `sk_...`).

---

### ADR-13: Kiến Trúc Ma Trận Lưới Single-Shot AI Grid Spritesheet (5x3) & Animation Player Đa Hành Động
- **Bối cảnh**:
  1. Người dùng mong muốn từ Character Studio có thể tạo ra một bộ Sprite Sheet đầy đủ các tư thế/hành động (Đứng, Đi bộ, Tấn công, Thủ, Bị thương) tương tự bộ mẫu Gemini.
  2. Cách triển khai cũ (`generate_tilesheet`) thực hiện vòng lặp `for index in range(frames):` gọi API 10 lần riêng biệt:
     - Thời gian chờ đợi quá lâu (trên 60s).
     - Chi phí credit API tăng gấp 10 lần.
     - Quan trọng nhất: Nhân vật bị biến đổi chi tiết (character drift), không giữ được quần áo và phụ kiện nhất quán giữa các frame.
  3. Trên hệ điều hành Windows, việc in chuỗi JSON có ký tự tiếng Việt hoặc Emoji (ví dụ tên hành động `⚔️ Tấn công`, `🚶 Đi bộ`) qua console pipe bị lỗi `UnicodeEncodeError: 'charmap' codec can't encode characters`.
- **Các phương án cân nhắc**:
  1. *Phương án A*: Tiếp tục dùng vòng lặp tuần tự nhiều ảnh và cố gắng truyền ảnh tham chiếu. *(Rất chậm, tốn credit, AI vision mô tả lại vẫn có sai số)*.
  2. *Phương án B (Lựa chọn)*:
     - Áp dụng kỹ thuật Prompt kỹ nghệ ma trận lưới: yêu cầu mô hình AI sinh toàn bộ bảng spritesheet 5 cột x 3 hàng (15 khung hình) trên nền trắng đồng nhất trong 1 lần gọi API duy nhất (`1024x640px`, thời gian hoàn thành ~10-12s, chi phí chỉ 1 request).
     - Tự động tính toán tọa độ cắt lưới chuẩn xác (`cell_w = width // columns`, `cell_h = height // rows`) và gắn metadata cấu trúc hành động (`actions`: Hàng 1 = Đứng & Đi, Hàng 2 = Tấn công & Thủ, Hàng 3 = Bị thương & Trạng thái).
     - Nâng cấp `SpritePreviewModal.jsx` sang bố cục 2 cột side-by-side (`md:flex-row`), sử dụng Canvas renderer pixel-art trực tiếp để loại bỏ hoàn toàn hiện tượng lệch offset/cắt méo viền nhân vật.
     - Khắc phục triệt để lỗi mã hóa Windows pipe bằng cách thiết lập `PYTHONIOENCODING=utf-8` trong Node.js `execFile` và kích hoạt `sys.stdout.reconfigure(encoding="utf-8")` trong `cli.py`.
- **Quyết định**: **Chọn Phương án B**.
- **Lý do**: Tốc độ sinh ảnh cực nhanh (~10-12s); đảm bảo 100% nhân vật đồng nhất hoàn hảo về phụ kiện, áo quần, màu sắc trên cả 15 khung hình; trình phát cho phép xem trước từng chu kỳ hoạt ảnh riêng biệt vô cùng trực quan cho học sinh.
- **Hệ quả**: Kích thước khung hình mặc định là 5x3, học sinh có thể tùy chỉnh lại số hàng/cột ngay trên giao diện nếu muốn thử nghiệm lưới khác.

