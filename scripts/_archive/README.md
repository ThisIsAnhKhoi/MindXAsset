# Thư mục lưu trữ các script kiểm tra tạm thời (Scratch Scripts Archive)

Các file trong thư mục này là các script một lần (one-off scripts) được sử dụng trong các phiên làm việc trước để kiểm tra, chẩn đoán và debug dữ liệu:
- `inspect_names.py`: Kiểm tra định dạng ký tự `#` trong tên vật phẩm props.
- `inspect_props.py`: Liệt kê và phân loại các nhóm vật phẩm trong `prop_config.js`.
- `check_black_corners.py`: Quét kiểm tra viền đen trong ảnh PNG vật phẩm sau khi tách nền.
- `test_helpers.py`: Thử nghiệm thuật toán khử viền trắng `defringe_white` và fit canvas 48x48.
- `regenerate_thumbs.py`: Tạo lại ảnh thumbnail cho props tạm thời.

Các script sinh dữ liệu chính của dự án vẫn nằm ở `scripts/`:
- `generate_all_props.py`: Pipeline bóc tách & phân loại 260+ item in-game.
- `generate_fantasy_assets.py`: Pipeline chuẩn hóa 30 chủng tộc & layer Fantasy 48x48.
- `generate_vehicle_assets.py`: Pipeline xuất dữ liệu 57 dòng xe Top-Down.
- `generate_vehicle_thumbs.py`: Pipeline tạo ảnh thumbnail xem trước cho xe cộ.
