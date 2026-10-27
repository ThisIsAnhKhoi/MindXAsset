import re, json

with open("frontend/src/pages/CharacterBuilder/prop_config.js", "r", encoding="utf-8") as f:
    text = f.read()

# Descriptive name generators for each prefix
NAME_EXPANSIONS = {
    "med7_sw": [
        "Kiếm Hiệp Sĩ Thép Lưỡi Thẳng", "Đoản Kiếm Sát Thủ Bén Ngọt", "Kiếm Ngắn Lính Bộ Binh",
        "Kiếm Bản Rộng Hiệp Sĩ Sắt", "Thanh Gươm Sắt Chém Sắt", "Kiếm Chữ Thập Thánh Binh",
        "Kiếm Hiệp Sĩ Vệ Quốc", "Đoản Kiếm Thép Găm Áo", "Kiếm Tầm Sét Thép Sáng",
        "Thanh Kiếm Nhọn Xuyên Giáp", "Kiếm Hiệp Sĩ Lâu Đài", "Kiếm Cận Chiến Đấu Trường",
        "Thanh Gươm Sắt Cổ Truyền", "Kiếm Dài Du Mục Thép", "Thanh Kiếm Sĩ Quan Hoàng Gia", "Kiếm Sắc Thợ Rèn",
        "Thanh Gươm Vệ Binh Thành Trì", "Kiếm Chém Phá Trận Cổ"
    ],
    "med7_gsw": [
        "Đại Đao Hiệp Sĩ Hai Tay", "Kiếm Liễu Quý Tộc Rapier", "Trảm Mã Kiếm Hai Lưỡi",
        "Kiếm Liễu Cung Đình Mạ Vàng", "Đại Kiếm Phá Trận Cổ Đại", "Kiếm Liễu Đấu Kiếm Cổ",
        "Đại Gươm Chiến Tuyến Nặng", "Kiếm Liễu Sát Thủ Hoàng Tộc", "Đại Đao Bản Lớn Thép",
        "Kiếm Liễu Xuyên Hộ Thân", "Thanh Kiếm Kỵ Binh Lưỡi Cong", "Đại Kiếm Lưỡi Răng Cưa",
        "Kiếm Liễu Thép Damascus", "Đại Gươm Phá Thành Trụ", "Kiếm Bản Rộng Cận Chiến", "Đại Kiếm Tinh Luyện",
        "Kiếm Liễu Mạ Bạc Hoàng Gia", "Đại Kiếm Thánh Chiến Sĩ"
    ],
    "med7_axe": [
        "Rìu Chiến Hai Lưỡi Phá Giáp", "Rìu Bổ Củi Chiến Binh Sắt", "Rìu Chiến Một Lưỡi Nặng",
        "Rìu Phá Thành Đao To", "Rìu Chiến Hiệp Sĩ Viking", "Rìu Săn Rừng Cán Gỗ",
        "Rìu Chém Giáp Răng Thép", "Rìu Chiến Lưỡi Trăng Khuyết", "Rìu Chiến Hạng Nặng Bộ Binh",
        "Rìu Chiến Đầu Búa Hai Tác Dụng", "Rìu Ngắn Tác Chiến Nhanh", "Rìu Bổ Lưỡi Thép Rèn",
        "Rìu Răng Sói Chiến Binh", "Rìu Chiến Cận Vệ Lâu Đài", "Rìu Phá Trận Thép Tôi", "Rìu Chiến Khắc Runes"
    ],
    "med7_mace": [
        "Búa Tạ Đập Thép Chiến Binh", "Chùy Gai Morningstar Huyền Bí", "Chùy Sắt Nghiền Giáp Nặng",
        "Búa Chiến Đầu Dẹt Phá Khiên", "Chùy Tròn Viền Đinh Nhọn", "Búa Chiến Hai Đầu Khối Thép",
        "Chùy Xích Hiệp Sĩ Thập Tự", "Chùy Gai Lục Giác Sắt", "Búa Rìu Phá Khối Trụ",
        "Chùy Bọc Sắt Đầu Tròn", "Búa Chiến Hộ Vệ Thần Lực", "Chùy Gai Nặng Trọng Binh",
        "Búa Tạ Đúc Liền Khối", "Chùy Bát Giác Phá Cổng", "Búa Chiến Cận Vệ Hoàng Gia", "Chùy Gai Sắt Đen"
    ],
    "med7_pol": [
        "Thương Dài Kỵ Binh Xuyên Giáp", "Kích Hai Đầu Halberd Cận Vệ", "Lưỡi Hái Tử Thần Chiến Trường",
        "Giáo Sắt Lính Gác Cổng Thành", "Thương Hiệp Sĩ Mũi Tam Giác", "Kích Chiến Phá Trận Bộ Binh",
        "Lưỡi Hái Chiến Đấu Răng Thép", "Giáo Săn Heo Rừng Mũi Dài", "Kích Lưỡi Búa Tráng Lệ",
        "Thương Mũi Lửa Đầu Đồng", "Giáo Ngắn Cận Chiến Ném Xa", "Kích Chiến Vệ Sĩ Hoàng Gia",
        "Lưỡi Hái Thu Hoạch Linh Hồn", "Thương Kỵ Binh Mạ Bạc", "Kích Giáo Trấn Giữ Cung Đình", "Thương Dài Đại Đội Trưởng"
    ],
    "med7_bow": [
        "Cung Dài Cổ Thụ Hiệp Sĩ", "Cung Săn Bắn Thợ Săn Rừng", "Nỏ Chiến Hạng Nặng Phá Thành",
        "Nỏ Bắn Nhanh Cầm Tay Gọn", "Cung Gỗ Du Mục Uốn Cong", "Nỏ Săn Thú Khung Thép",
        "Cung Chiến Bộ Binh Bọc Da", "Nỏ Tự Nạp Mũi Tên Đôi", "Cung Ngắn Kỵ Xạ Lưng Ngựa",
        "Nỏ Chiến Binh Viền Sắt", "Cung Gỗ Sồi Căng Dây Cước", "Nỏ Sát Thủ Khung Gỗ Mun",
        "Cung Dài Thiện Xạ Cung Thủ", "Nỏ Nặng Bắn Xuyên Giáp", "Cung Gỗ Rừng Tay Cầm Da", "Nỏ Gỗ Khắc Hoa Văn"
    ],
    "med7_quiv": [
        "Ống Đựng Mũi Tên Da Bò Rừng", "Bao Tên Hiệp Sĩ Hoàng Gia Thêu Chỉ", "Bó Mũi Tên Sắt Xuyên Giáp",
        "Ống Tên Thợ Săn Rừng Rậm", "Bao Tên Kỵ Xạ Đeo Lưng Da", "Bó Mũi Tên Đuôi Lông Vũ Trắng",
        "Ống Tên Chiến Trận Bọc Kim Loại", "Bao Tên Nỏ Ngắn Gọn Gàng", "Bó Mũi Tên Nhúng Dầu Lửa",
        "Ống Tên Cung Thủ Cung Đình", "Bao Mũi Tên Nỏ Khung Sắt", "Bó Mũi Tên Săn Lông Đại Bàng",
        "Ống Tên Da Hươu Rừng", "Bao Mũi Tên Lửa Tấn Công Thành", "Bó Mũi Tên Đầu Đồng Đỏ", "Ống Tên Chiến Tuyến Bền"
    ],
    "med7_sh_rd": [
        "Khiên Tròn Viking Gỗ Bọc Sắt", "Khiên Tròn Chiến Binh Viền Đinh", "Khiên Tròn Khắc Biểu Tượng Sói",
        "Khiên Tròn Thép Chống Búa", "Khiên Tròn Du Mục Bọc Da Bò", "Khiên Tròn Hộ Vệ Sơn Đỏ",
        "Khiên Tròn Sơn Xanh Biển Sâu", "Khiên Tròn Viền Đồng Chiến Trận", "Khiên Tròn Thần Khí Runes",
        "Khiên Tròn Thợ Săn Cứng Cáp", "Khiên Tròn Gỗ Sồi Cổ Thụ", "Khiên Tròn Chiến Hạm Biển Bắc",
        "Khiên Tròn Sơn Đen Bí Ẩn", "Khiên Tròn Hiệp Sĩ Rồng", "Khiên Tròn Khảm Kim Loại", "Khiên Tròn Hộ Quốc"
    ],
    "med7_sh_ht": [
        "Khiên Hiệp Sĩ Gia Huy Sư Tử", "Khiên Chữ Thập Thập Tự Quân", "Khiên Tháp Thép Phòng Thủ Thành",
        "Khiên Bầu Dục Kỵ Binh Hoàng Gia", "Khiên Gai Cản Đòn Phản Công", "Khiên Gia Huy Đại Bàng Tung Cánh",
        "Khiên Chữ Thập Đỏ Hộ Quốc", "Khiên Bầu Dục Viền Vàng Quý Tộc", "Khiên Thép Khắc Họa Tiết Lâu Đài",
        "Khiên Phòng Ngự Bản Rộng Hiệp Sĩ", "Khiên Gai Thép Chống Kỵ Binh", "Khiên Tam Giác Kiểu Cổ",
        "Khiên Gia Huy Vương Triều", "Khiên Chiến Sĩ Giữ Thành Kiên Cố", "Khiên Thép Mạ Bạc Sáng Loáng", "Khiên Vệ Binh Hoàng Cung"
    ],
    "med7_hl_ir": [
        "Mũ Sắt Hiệp Sĩ Cổ Điển", "Mũ Sắt Kính Ngắm Visor Lật", "Mũ Chiến Binh Spartan Đồng Thau",
        "Mũ Nón Thép Hở Mặt Lính Canh", "Mũ Sắt Lưới Xích Trùm Đầu", "Mũ Chóp Nhọn Cận Vệ",
        "Mũ Sắt Viền Vàng Chỉ Huy", "Mũ Visor Xẻ Rãnh Thở", "Mũ Nồi Sắt Binh Nhì",
        "Mũ Sắt Chiến Tuyến Vết Chém", "Mũ Spartan Viền Bạc", "Mũ Thép Che Tai Kiên Cố",
        "Mũ Nón Thép Đấu Trường", "Mũ Chiến Binh Cổ Bọc Da", "Mũ Visor Kỵ Binh Nặng", "Mũ Sắt Đúc Liền Khối"
    ],
    "med7_hl_gt": [
        "Mũ Đại Hiệp Sĩ Great Helm Chữ Thập", "Mũ Trụ Thập Tự Chinh Cổ Điển", "Mũ Hiệp Sĩ Nạm Đá Quý",
        "Mũ Great Helm Khe Mắt Mạ Vàng", "Mũ Trụ Sắt Thùng Lính Trọng Giáp", "Mũ Hiệp Sĩ Lông Vũ Thượng Hạng",
        "Mũ Great Helm Hộ Thân Tuyệt Đối", "Mũ Trụ Khắc Hoa Văn Cung Đình", "Mũ Đại Hiệp Sĩ Chiến Trận",
        "Mũ Thập Tự Chinh Bọc Đồng", "Mũ Trọng Binh Đầu Đạn", "Mũ Hiệp Sĩ Gai Nhọn Uy Vũ",
        "Mũ Great Helm Sắt Đen Huyền Bí", "Mũ Trụ Thép Mũi Nhọn", "Mũ Vệ Thần Thành Trì", "Mũ Đại Hiệp Sĩ Trấn Quốc"
    ],
    "med7_ar_ch": [
        "Giáp Lưới Xích Thép Kiên Cố", "Áo Giáp Da Thợ Săn Lót Lông", "Giáp Ngực Da Đính Đinh Tán",
        "Áo Giáp Lưới Hiệp Sĩ Dài Tay", "Giáp Da Du Mục Đệm Mút", "Giáp Ngực Lưới Sắt Nhẹ",
        "Áo Giáp Da Bò Rừng Chống Tên", "Giáp Xích Thép Bọc Cổ", "Áo Giáp Kỵ Xạ Thoải Mái",
        "Giáp Da Chiến Binh Sơn Đen", "Giáp Lưới Vảy Cá Thần Tốc", "Giáp Da Thuật Sĩ Đai Đồng",
        "Giáp Lưới Kháng Chém Thép", "Giáp Da Săn Thú Dã Ngoại", "Áo Giáp Lưới Chiến Sĩ", "Giáp Xích Cường Lực"
    ],
    "med7_ar_pl": [
        "Giáp Tấm Thép Toàn Thân Hiệp Sĩ", "Giáp Ngực Mạ Bạc Hoàng Gia", "Giáp Tấm Thép Nặng Chiến Binh",
        "Giáp Ngực Khắc Phù Điêu Sư Tử", "Giáp Tấm Hiệp Sĩ Bọc Khớp Đồng", "Giáp Ngực Thập Tự Quân Sắt",
        "Giáp Tấm Cung Đình Mạ Vàng", "Giáp Ngực Chống Đạn Bắn Nỏ", "Giáp Tấm Đen Kỵ Binh Hắc Ám",
        "Giáp Ngực Đại Tướng Quân", "Giáp Tấm Khối Rèn Thủ Công", "Giáp Ngực Hiệp Sĩ Bão Táp",
        "Giáp Tấm Thánh Hiệp Sĩ Trắng", "Giáp Ngực Thép Cường Lực", "Bộ Giáp Tấm Thần Hộ Mệnh", "Giáp Tấm Vệ Binh Thành"
    ],
    "med7_gt_ir": [
        "Găng Tay Sắt Khớp Động Hiệp Sĩ", "Găng Da Chiến Binh Bọc Mu Thép", "Găng Tay Thép Gai Đấm Nặng",
        "Găng Sắt Khắc Hoa Văn Quý Tộc", "Găng Tay Giáp Lưới Linh Hoạt", "Găng Da Dày Kéo Cung Săn",
        "Găng Tay Thép Dài Tay Cận Vệ", "Găng Sắt Đúc Nguyên Khối", "Găng Tay Da Bò Viền Đồng",
        "Găng Thép Cầm Kiếm Chắc Tay", "Găng Tay Lính Bắn Nỏ Da Sần", "Găng Sắt Mạ Bạc Hoàng Tộc",
        "Găng Tay Hiệp Sĩ Gai Bọc Ngón", "Găng Tay Giáp Sắt Đen", "Găng Da Bọc Thép Cổ Tay",
        "Găng Thép Đấu Kiếm", "Găng Vệ Binh Thành Trì", "Găng Tay Hiệp Sĩ Bão Táp"
    ],
    "med7_bt_ir": [
        "Ủng Sắt Hộ Vệ Hiệp Sĩ Toàn Thân", "Giày Da Chiến Binh Bọc Mũi Thép", "Ủng Thép Khớp Động Đi Tuyết",
        "Giày Da Du Mục Cổ Cao Chống Gai", "Ủng Sắt Kỵ Binh Cựa Ngựa Đồng", "Giày Bốt Da Thợ Săn Rừng",
        "Ủng Thép Nặng Trọng Binh Hầm Mỏ", "Giày Chiến Đấu Lót Lông Ấm", "Ủng Sắt Khắc Chữ Thập",
        "Giày Da Bò Đinh Tán Chống Trượt", "Ủng Thép Mạ Vàng Cung Đình", "Giày Bốt Da Binh Nhì Bền Bỉ",
        "Ủng Sắt Đen Hiệp Sĩ Hắc Ám", "Giày Da Cao Cổ Kỵ Sĩ", "Ủng Thép Hộ Vệ Cổ Chân",
        "Giày Chiến Lính Gác", "Ủng Giáp Binh Sĩ Hộ Thân", "Giày Bốt Kỵ Sĩ Tác Chiến"
    ],
    "med5_staff": [
        "Quyền Trượng Ma Pháp Tinh Cầu Lam", "Trượng Thần Rừng Gỗ Sồi Đầu Rồng", "Gậy Phép Thuật Pha Lê Hồng Tím",
        "Quyền Trượng Sấm Sét Hoàng Kim", "Trượng Pháp Sư Cực Bắc Băng Tinh", "Gậy Phù Thủy Cổ Thụ Nanh Sói",
        "Trượng Ma Pháp Hư Không Nguyệt Tộc", "Quyền Trượng Hỏa Diệm Rực Cháy", "Trượng Thánh Binh Thập Tự Bạc",
        "Đũa Phép Thuật Gỗ Mun Thần Kỳ", "Trượng Tiên Tộc Ngọc Phỉ Thúy", "Gậy Thần Hộ Mệnh Cổ Đại",
        "Trượng Ma Pháp Triệu Hồi Linh Hồn", "Quyền Trượng Bão Tố Biển Sâu", "Trượng Pha Lê Ngũ Sắc", "Trượng Trọng Lực Vũ Trụ"
    ],
    "med5_wand": [
        "Đũa Phép Thủy Tinh Khảm Vàng", "Đũa Phép Gỗ Thần Đầu Hồng Ngọc", "Trượng Ngắn Pháp Sư Tập Sự",
        "Đũa Phép Phù Thủy Độc Dược", "Đũa Thần Băng Giá Tuyết Tinh", "Đũa Phép Hắc Thuật Đầu Rắn",
        "Đũa Thần Ánh Sáng Thánh Linh", "Trượng Ngắn Pha Lê Xanh Thẳm", "Đũa Phép Triệu Hồi Tinh Linh",
        "Đũa Thần Hoàng Kim Cổ Điển", "Trượng Ngắn Hỏa Long Cực Nóng", "Đũa Phép Sấm Chớp Tinh Tú",
        "Đũa Phép Thảo Mộc Rừng Rậm", "Trượng Ngắn Gỗ Mun Quý Tộc", "Đũa Thần Chữa Lành Vết Thương", "Đũa Phép Hư Vô Bí Ẩn"
    ],
    "med5_tool": [
        "Đe Rèn Sắt Nặng Của Thợ Rèn", "Búa Đập Sắt Cán Gỗ Chắc Nịch", "Kìm Kẹp Phôi Sắt Nóng Đỏ",
        "Cái Cưa Gỗ Răng Thép Cầm Tay", "Đục Khắc Đá & Thép Tôi Nhọn", "Kìm Cắt Kim Loại Dã Ngoại",
        "Búa Nhỏ Gõ Khớp Giáp Chi Tiết", "Cái Dũa Thép Mài Dao Kiếm", "Mỏ Lết Cổ Khóa Ốc Cơ Quan",
        "Dụng Cụ Thổi Lửa Bễ Rèn Lò", "Cái Cào Than Lò Nung Cực Nóng", "Búa Đập Đinh Tán Giáp Sắt",
        "Kìm Bấm Lỗ Da Thuộc Thợ Rèn", "Búa Rìu Phá Khối Kim Loại", "Cái Đe Nhỏ Cầm Tay Tinh Xảo", "Dụng Cụ Tôi Thép Dầu Nóng"
    ],
    "med5_craft": [
        "Búa Rèn Nhọn Đầu Đột Thép", "Kìm Bẻ Uốn Dây Đồng Thau", "Dao Cắt Da Thuộc Bản Rộng",
        "Dụng Cụ Đục Lỗ Giáp Da Sần", "Cưa Lọng Cắt Gỗ Tinh Xảo", "Búa Rìu Thợ Rèn Hai Đầu",
        "Cái Bay Trét Vữa Xây Thành", "Dụng Cụ Mài Đá Quý Giác Cắt", "Thước Góc Đo Kim Loại Thợ Rèn",
        "Chày Giã Quặng Hầm Mỏ", "Kìm Móc Khóa Kim Loại Nóng", "Cái Đục Gỗ Khắc Phù Điêu",
        "Dụng Cụ Khắc Chữ Kim Hoàn", "Kìm Bóp Ốc Cơ Khí Cổ", "Thước Thẳng Gỗ Khắc Vạch", "Dụng Cụ Uốn Sắt Thủ Công"
    ],
    "med5_pot_rd": [
        "Bình Sinh Mệnh Giọt Máu Đỏ", "Bình Mana Năng Lượng Lam Tươi", "Lọ Thuốc Độc Nhện Lục Bảo",
        "Tiên Dược Hoàng Kim Phục Hồi", "Bình Dược Tím Tăng Tốc Độ", "Bình Thí Nghiệm Đáy Cầu Có Quai",
        "Ống Nghiệm Giả Kim Sủi Bọt Khí", "Lọ Độc Dược Đầu Lâu Chết Chóc", "Bình Tinh Chất Thảo Mộc Rừng",
        "Lọ Năng Lượng Tinh Thể Sáng", "Bình Kháng Lửa Hỏa Tinh Dược", "Bình Kháng Băng Hàn Băng Dược",
        "Lọ Tinh Chất Ma Thuật Tím", "Bình Dược Hồi Phục Bền Bỉ", "Ống Nghiệm Giả Kim Vàng", "Bình Thuốc Phù Thủy Cổ"
    ],
    "med5_pot_el": [
        "Bình Dược Thủy Tinh Giác Cắt", "Lọ Thuốc Tàng Hình Khói Lam", "Bình Tăng Lực Cuồng Nộ Đỏ Ngầu",
        "Lọ Thuốc Giải Độc Thảo Dược", "Bình Thể Lực Bền Bỉ Màu Cam", "Lọ Dầu Bôi Vũ Khí Tê Liệt",
        "Bình Thuốc Phát Sáng Hang Tối", "Lọ Thuốc Hồi Phục Linh Hồn", "Bình Dược Giả Kim Thuần Khiết",
        "Lọ Nước Thánh Ban Phước", "Bình Tiên Tộc Tinh Tú Trường Sinh", "Lọ Thuốc Đổi Màu Ảo Ảnh",
        "Bình Thuốc Nhìn Trong Đêm", "Lọ Thần Dược Kháng Phép Thuật", "Bình Tăng Trí Lực Lam Ngọc", "Lọ Tinh Chất Thần Băng"
    ],
    "med5_tome": [
        "Cổ Thư Grimoire Bìa Da Cổ Khóa Vàng", "Cuộn Giấy Da Niêm Phong Sáp Đỏ", "Bản Đồ Kho Báu Cổ Mạ Vàng",
        "Sách Phép Thuật Băng Giá Nguyệt Tộc", "Sách Hỏa Diệm Chú Bìa Da Rồng", "Cuộn Giấy Da Thần Chú Cấm",
        "Sách Thần Chú Triệu Hồi Hư Không", "Bản Đồ Thiên Cầu Xem Sao", "Cổ Thư Giả Kim Thuật Kỳ Bí",
        "Cuộn Giấy Da Trắng Chờ Viết Chú", "Sách Luật Cổ Vương Quốc Cung Đình", "Bản Đồ Hầm Ngục Cổ Xưa",
        "Cổ Thư Phong Ấn Linh Hồn", "Cuộn Giấy Da Lời Thề Hiệp Sĩ", "Sách Phép Thuật Sấm Sét", "Bản Đồ Vùng Đất Rồng"
    ],
    "med5_scr": [
        "Cuộn Giấy Da Thần Sấm Sét", "Sách Kinh Thánh Cổ Niêm Phong", "Cuộn Thư Tịch Cổ Thời Đại Cũ",
        "Bản Đồ Địa Đạo Thành Quách", "Sách Phép Thuật Trị Thương Thánh", "Cuộn Giấy Da Chú Nguyền Cổ",
        "Cổ Thư Khắc Chữ Phù Hiệu Runes", "Bản Đồ Hòn Đảo Huyền Bí", "Cuộn Chiếu Chỉ Hoàng Đế Cổ",
        "Sách Tiên Tri Tương Lai Quá Khứ", "Cuộn Giấy Phong Thư Bí Mật", "Sách Ghi Chép Quái Vật Cổ",
        "Cuộn Giấy Da Mật Thư Gián Điệp", "Sách Lịch Sử Vương Triều Cổ", "Cuộn Giấy Vẽ Gia Huy Quý Tộc", "Cổ Thư Trận Pháp Cổ Điển"
    ],
    "med5_jewel": [
        "Nhẫn Ấn Quý Tộc Signet Ring Vàng", "Mặt Dây Chuyền Bùa Chú Thái Dương", "Nhẫn Ngọc Bích Cổ Thần Linh",
        "Dây Chuyền Hồng Ngọc Cung Đình", "Nhẫn Bạc Thạch Anh Tím Sâu", "Bùa Hộ Mệnh Đĩa Kim Loại Cổ",
        "Nhẫn Kim Cương Lấp Lánh Khảm", "Dây Chuyền Lam Ngọc Biển Sâu", "Vòng Cổ Vàng Ròng Nạm Ngọc",
        "Nhẫn Độc Dược Khắc Hình Rắn", "Bùa Hộ Mệnh Mắt Thần Horus", "Mặt Dây Chuyền Pha Lê Sao Băng",
        "Nhẫn Hộ Mệnh Vàng Cổ", "Dây Chuyền Ngọc Lục Bảo Hoàng Gia", "Nhẫn Khắc Biểu Tượng Rồng", "Mặt Dây Chuyền Giác Cắt Bạc"
    ],
    "med5_ring": [
        "Nhẫn Bạc Hiệp Sĩ Khắc Chữ Chìm", "Dây Chuyền Khắc Huy Hiệu Hoàng Tộc", "Nhẫn Vàng Nạm Viên Ngọc Lục",
        "Mặt Dây Chuyền Băng Tinh Lam", "Nhẫn Hư Không Khảm Đá Tím", "Dây Chuyền Răng Nanh Thú Bọc Vàng",
        "Nhẫn Phù Thủy Tích Tụ Mana", "Bùa Hộ Mệnh Thập Tự Bạc Cổ", "Vòng Tay Chuỗi Hạt Mã Não",
        "Nhẫn Thần Lực Ban Phước Chiến", "Dây Chuyền Lông Chim Ưng Bạc", "Mặt Dây Chuyền Trăng Khuyết Vàng",
        "Nhẫn Thạch Anh Đỏ Rực Lửa", "Dây Chuyền Pha Lê Ngũ Sắc", "Nhẫn Vàng Ròng Khắc Chữ Cổ", "Mặt Bùa Hộ Thân Hoàng Gia"
    ],
    "med5_ingot": [
        "Thỏi Vàng Ròng Đúc Khối Sáng Chói", "Thỏi Bạc Trắng Tinh Khiết 999", "Thỏi Đồng Đỏ Đúc Lò Rèn",
        "Thỏi Sắt Rèn Nguyên Khối Nặng", "Thỏi Thép Damascus Vân Gợn", "Viên Hồng Ngọc Giác Cắt Bát Giác",
        "Viên Lam Ngọc Hoàng Gia Sáng Ngời", "Viên Ngọc Lục Bảo Vuông Vức", "Viên Kim Cương Đỉnh Cao Tinh Khiết",
        "Viên Thạch Anh Tím Hư Không", "Cục Quặng Vàng Thô Hầm Mỏ", "Cục Quặng Sắt Chưa Lọc Tạp Chất",
        "Thỏi Bạch Kim Đúc Khối", "Viên Hoàng Ngọc Giác Cắt Tinh Túy", "Cục Quặng Đồng Đỏ Nguyên Chất", "Thỏi Thép Siêu Cứng Tôi Dầu"
    ],
    "med5_gem": [
        "Viên Hoàng Ngọc Topaz Rực Rỡ", "Viên Ngọc Mắt Hổ Vân Nâu Vàng", "Thỏi Vàng Nhỏ Khắc Con Dấu",
        "Thỏi Bạc Cỡ Vừa Đúc Khối", "Viên Ngọc Phỉ Thúy Tròn Trĩnh", "Cụm Pha Lê Băng Trong Suốt",
        "Viên Huyết Thạch Đỏ Thẫm Ma Mị", "Viên Ngọc Xanh Thủy Cung Tinh Tú", "Cục Quặng Bạc Lấp Lánh Ánh Sao",
        "Viên Kim Cương Đen Quý Hiếm", "Thỏi Đồng Đen Cổ Đại", "Đá Mặt Trăng Sáng Mờ Bí Ẩn",
        "Viên Đá Lửa Đánh Lửa Đỏ", "Mảnh Tinh Thể Hoàng Kim", "Viên Ngọc Lam Tinh Khiết", "Khối Kim Loại Quý Hiếm"
    ],
    "med5_key": [
        "Chìa Khóa Cổ Cổng Thành Đồ Sộ", "Chìa Khóa Vàng Mở Rương Báu", "Bộ Dụng Cụ Mở Khóa Lockpick",
        "Cân Tiểu Ly Của Nhà Giả Kim", "Đồng Hồ Cát Thủy Tinh Tính Giờ", "Chìa Khóa Bạc Hầm Rượu Cổ",
        "Chìa Khóa Sắt Rỉ Sét Ngục Tối", "Chuông Đồng Cầm Tay Báo Động", "Kính Lúp Soi Đá Quý Cổ Điển",
        "Chìa Khóa Ma Thuật Khắc Runes", "Bộ Quả Cân Đồng Thau Chuẩn", "Dụng Cụ Đo Góc Bầu Trời Sao",
        "Chìa Khóa Bí Mật Tháp Canh", "Đồng Hồ Cát Khung Gỗ Mun", "Cân Cán Bạc Đo Đá Quý", "Chìa Khóa Khảm Ngọc Hầm Mộ"
    ],
    "med5_misc": [
        "Chìa Khóa Hòm Kho Báu Vàng", "Đồng Hồ Cát Gỗ Cổ Đo Thời Gian", "Cân Cán Nghiêng Đo Vàng Bạc",
        "Chìa Khóa Cổng Sắt Hầm Ngục", "Bộ Móc Khóa Đồng Thau Lính Gác", "Chuông Thánh Rung Trừ Tà",
        "Ống Nhòm Đồng Thao Kéo Dài", "Chìa Khóa Bí Mật Phòng Cơ Quan", "Đồng Hồ Mặt Trời Bỏ Túi Đồng",
        "Cân Treo Cầm Tay Đo Trọng Lượng", "Chìa Khóa Cửa Thư Viện Cổ", "Bộ Kìm Móc Cơ Khí Nhỏ",
        "Chìa Khóa Khắc Hình Đại Bàng", "Dụng Cụ Gõ Nhịp Cơ Học", "Chuông Đồng Cung Đình", "Chìa Khóa Hầm Bí Mật"
    ],
    "med2_bread": [
        "Ổ Bánh Mì Lúa Mạch Nướng Nứt Men", "Bánh Mì Tròn Du Mục Nướng Than", "Bánh Mì Baguette Dài Giòn Rụm",
        "Bánh Sừng Bò Nướng Bơ Thơm", "Ổ Bánh Mì Đen Lên Men Cổ Điển", "Bánh Mì Ngọt Rắc Hạt Vừng",
        "Bánh Mì Lát Nướng Cháy Cạnh", "Bánh Mì Bện Dây Hoàng Gia", "Bánh Quy Giòn Dự Trữ Hành Quân",
        "Bánh Mì Kẹp Phô Mai Chảy", "Ổ Bánh Mì Trắng Xốp Mềm", "Bánh Mì Yến Mạch Mật Ong",
        "Bánh Mì Nướng Hạt Óc Chó", "Bánh Mì Vỏ Giòn Kiểu Pháp", "Bánh Mì Tròn Rắc Bột Mì", "Bánh Mì Lúa Mì Đỏ"
    ],
    "med2_meat": [
        "Đùi Heo Muối Xông Khói Nguyên Chiếc", "Dải Thịt Ba Chỉ Hun Khói Muối", "Xúc Xích Nướng Lửa Trại Thơm",
        "Tảng Thịt Bò Tươi Rực Đỏ", "Miếng Sườn Cừu Nướng Mật Ong", "Thịt Heo Rừng Sấy Khô Dã Ngoại",
        "Khoanh Giò Thủ Heo Lâu Đài", "Thịt Bò Bít Tết Than Hồng", "Xúc Xích Cay Kiểu Cổ",
        "Thịt Hun Khói Móc Treo Bếp", "Sườn Heo Nướng Vàng Giòn", "Thịt Cừu Hầm Nước Sốt",
        "Tảng Thịt Heo Quay Giòn Bì", "Dải Thịt Xông Khói Cắt Lát", "Xúc Xích Tiêu Đen Thượng Hạng", "Thịt Nướng Xiên Que"
    ],
    "med2_poultry": [
        "Gà Quay Mật Ong Nguyên Con Vàng Ruộm", "Đùi Gà Nướng Mỡ Hành Cháy Cạnh", "Vịt Quay Lò Đất Cung Đình",
        "Chim Cút Nướng Lá Thơm", "Gà Luộc Nước Dừa Lâu Đài", "Ức Gà Nướng Muối Ớt",
        "Cánh Gà Nướng Mật Rừng", "Đùi Vịt Muối Xông Khói", "Gà Tây Nướng Yến Tiệc",
        "Chim Bồ Câu Nướng Rơm", "Đùi Gà Chiên Giòn Rụm", "Gà Hầm Hạt Dẻ Thơm Nức",
        "Vịt Nướng Mắc Khén Rừng", "Đùi Gà Nướng Tiêu Đen", "Gà Cuộn Nấm Nướng Giấy Bạc", "Chim Cút Chiên Bơ Tỏi"
    ],
    "med2_fish": [
        "Cá Hồi Biển Nướng Chanh Vàng", "Cá Tuyết Phi Lê Áp Chảo", "Cá Biển Tươi Roi Rói Đánh Bắt",
        "Cá Khô Nướng Than Dự Trữ", "Mực Ống Nướng Muối Ớt", "Tôm Sông Nướng Que Tre",
        "Cá Trích Ngâm Dầu Oliu", "Cá Chép Om Dưa Nóng Hổi", "Cá Rán Giòn Vảy Vàng",
        "Cá Thu Hun Khói Thơm Ngon", "Cá Trắm Đen Kho Nồi Đất", "Cá Biển Nướng Giấy Bạc",
        "Cá Hồi Hun Khói Cắt Lát", "Cá Ngừ Đại Dương Áp Chảo", "Tôm Nướng Bơ Tỏi Thơm Lừng", "Cá Biển Nướng Than Hoa"
    ],
    "med2_cheese": [
        "Bánh Phô Mai Thụy Sĩ Thơm Béo Lỗ Khí", "Miếng Phô Mai Vàng Cheddar Đậm Vị", "Khối Bơ Sữa Tươi Vàng Óng",
        "Bánh Phô Mai Dê Núi Lâu Năm", "Phô Mai Mốc Xanh Thượng Hạng", "Bánh Phô Mai Tròn Bọc Sáp Đỏ",
        "Miếng Phô Mai Tươi Mềm Mại", "Hũ Kem Sữa Béo Ngậy Đánh Bông", "Bơ Tươi Phết Bánh Mì",
        "Phô Mai Hun Khói Kiểu Bắc Âu", "Bánh Phô Mai Cắt Miếng Tam Giác", "Phô Mai Nướng Chảy Thơm Lừng",
        "Phô Mai Cừu Ngâm Dầu Thảo Mộc", "Khối Phô Mai Vàng Khổng Lồ", "Bơ Lạt Thượng Hạng", "Phô Mai Rắc Bột Ớt"
    ],
    "med2_pie": [
        "Bánh Pie Nướng Nhân Thịt Bò Đậm Đà", "Bánh Tart Quả Mọng Dâu Rừng", "Bánh Kem Hoàng Gia Nướng Men",
        "Bánh Bông Lan Trứng Nướng Xốp", "Bánh Pie Táo Quế Thơm Lừng", "Bánh Ngọt Nhân Hạt Dẻ Cung Đình",
        "Bánh Mì Nướng Phủ Đường Mật", "Bánh Nướng Nhân Cá Hồi Phô Mai", "Bánh Pie Bí Ngô Mùa Thu",
        "Bánh Tart Chanh Vàng Thanh Mát", "Bánh Cuộn Kem Mứt Trái Cây", "Bánh Nướng Men Bơ Ngon Ngọt",
        "Bánh Pie Nhân Thịt Gà Nấm", "Bánh Tart Mâm Xôi Đen", "Bánh Nướng Nhân Phô Mai Béo", "Bánh Bông Lan Mật Ong"
    ],
    "med2_fruit": [
        "Chùm Nho Đỏ Mọng Rượu Vang", "Quả Táo Đỏ Rừng Tươi Ngọt", "Quả Lê Vàng Mọng Nước Ngọt Mát",
        "Chùm Nho Xanh Quán Trọ", "Quả Bí Ngô Vàng Mùa Thu Hoạch", "Chùm Dâu Rừng Tươi Hái Sớm",
        "Quả Mận Đen Chín Ngọt Đậm", "Quả Đào Hồng Mọng Lông Tơ", "Quả Lựu Đỏ Hạt Ngọc Long Lanh",
        "Quả Dưa Lưới Thơm Mát Ngọt Lịm", "Chùm Quả Mọng Đen Núi Cao", "Quả Sung Mật Vàng Ươm",
        "Quả Cam Vàng Mọng Nước", "Chùm Anh Đào Đỏ Thắm", "Quả Mơ Vàng Chua Ngọt", "Quả Dưa Hấu Đỏ Ngọt Mát"
    ],
    "med2_veg": [
        "Củ Cà Rốt Tươi Giòn Ngọt", "Cây Tỏi Tây Gia Vị Dài Mượt", "Bắp Cải Tròn Cuộn Chặt Tươi Xanh",
        "Củ Hành Tây Vàng Bọc Vỏ Mỏng", "Củ Khoai Tây Đào Từ Lòng Đất", "Củ Cải Đỏ Tròn Xoe Tươi Sạch",
        "Bó Măng Tây Xanh Non Thượng Hạng", "Quả Cà Tím Dài Mượt Mà", "Củ Cải Trắng Giòn Ngọt Mát",
        "Bắp Ngô Nếp Vàng Hạt Đều", "Rổ Đậu Hà Lan Tươi Hái Sớm", "Bó Cải Xanh Vườn Lâu Đài",
        "Củ Tỏi Khô Cay Nồng", "Nấm Mỡ Trắng Tươi", "Quả Ớt Chuông Đỏ Rực", "Củ Gừng Già Cay Ấm"
    ],
    "med2_beer": [
        "Ly Bia Bơ Bọt Tuyết Quán Trọ", "Cốc Rượu Mật Ong Mead Gỗ Sồi", "Vại Bia Men Lúa Mạch Cầm Tay",
        "Ly Bia Đen Nặng Độ Đậm Vị", "Cốc Rượu Men Trắng Lên Men", "Vại Rượu Chiến Binh Bọc Sắt",
        "Bình Rượu Táo Đục Bọt Lăn Tăn", "Ly Bia Vàng Ánh Kim Sủi Bọt", "Cốc Sứ Uống Bia Quán Trọ Cổ",
        "Vại Bia Đôi Cho Khách Lữ Hành", "Ly Rượu Rừng Hạt Dẻ Đậm Đà", "Cốc Men Lúa Mì Thanh Mát",
        "Vại Bia Gỗ Lớn Yến Tiệc", "Ly Bia Bọt Trắng Mịn", "Cốc Rượu Lên Men Táo Đỏ", "Bình Bia Cung Đình Thượng Hạng"
    ],
    "med2_wine": [
        "Bình Rượu Vang Đỏ Thượng Hạng", "Chai Rượu Vang Cổ Niêm Sáp", "Ly Thủy Tinh Vang Đỏ Long Lanh",
        "Bình Rượu Vang Trắng Thanh Tao", "Vò Rượu Vang Đất Nung Ủ Hầm", "Chai Rượu Vang Nho Hoàng Gia",
        "Ly Pha Lê Rượu Vang Cung Đình", "Bình Rượu Vang Ngọt Sa Mạc", "Chai Rượu Vang Nổ Sủi Bọt",
        "Vò Rượu Rơm Ủ Dưới Lòng Đất", "Bình Thủy Tinh Rượu Thảo Dược", "Chai Rượu Vang Hảo Hạng Lâu Năm",
        "Bình Rượu Vang Nho Đen", "Chai Rượu Vang Hồng Quý Phái", "Ly Rượu Vang Chân Cao Pha Lê", "Vò Rượu Cổ Niêm Phong Vàng"
    ],
    "med2_pot": [
        "Nồi Vạc Đồng Đun Súp Nóng", "Ấm Đun Nước Bằng Đồng Thau", "Chảo Gang Nướng Thịt Tay Dài",
        "Nồi Đất Nung Kho Thịt Cổ", "Cái Chày Cối Đá Giã Tiêu", "Cái Muôi Đồng Múc Canh Dài",
        "Rổ Đựng Bánh Mì Bằng Nan Tre", "Ấm Trà Thủy Tinh Cung Đình", "Chảo Đáy Sâu Xào Nấu Bếp",
        "Thùng Gỗ Múc Nước Có Quai", "Bình Gốm Đựng Dầu Oliu", "Dao Bếp Bản Lớn Thép Tôi",
        "Nồi Đồng Ba Chân Nấu Bếp", "Ấm Đun Trà Thảo Mộc", "Chảo Gang Nướng Bánh", "Cái Muôi Gỗ Múc Súp Cổ"
    ],
    "med6_crate": [
        "Thùng Gỗ Sồi Ủ Rượu Lâu Năm", "Hòm Gỗ Chứa Quân Nhu Buộc Dây", "Bao Tải Bột Mì Đầy Ắp",
        "Thùng Nước Ngọt Bằng Gỗ Bọc Sắt", "Hòm Gỗ Khắc Chữ Hàng Hóa", "Thùng Gỗ Đựng Cá Muối Đi Biển",
        "Bao Tải Ngũ Cốc Thu Hoạch", "Vò Gốm Cổ Niêm Phong Nắp Đậy", "Hòm Gỗ Xếp Chồng Hàng Hải",
        "Thùng Rượu Nhỏ Có Vòi Rót", "Bao Da Chứa Lương Thảo", "Thùng Gỗ Đựng Đinh Sắt Thợ Rèn",
        "Thùng Gỗ Nhỏ Đựng Rượu Mạnh", "Hòm Gỗ Bọc Đai Kim Loại", "Bao Tải Muối Hạt Đi Biển", "Thùng Gỗ Đựng Trái Cây"
    ],
    "med6_chest": [
        "Rương Gỗ Sồi Viền Đai Sắt Chắc Chắn", "Rương Sắt Đúc Hầm Ngục Khóa Nặng", "Rương Gỗ Mở Hé Ánh Kim Quang",
        "Rương Hoàng Kim Nạm Ngọc Quý", "Rương Cổ Điển Bọc Da Bò Chống Nước", "Rương Vàng Tràn Tiền Xu Cổ",
        "Rương Sắt Kiên Cố Chống Cạy Khóa", "Rương Ma Thuật Khắc Ấn Phong Tỏa", "Hòm Gỗ Nhỏ Chứa Trang Sức",
        "Rương Lớn Đựng Binh Khí Hiệp Sĩ", "Rương Gỗ Thông Đơn Sơ", "Rương Đồng Đỏ Cổ Xưa Khóa Chặt",
        "Rương Sắt Khắc Hoa Văn Hiệp Sĩ", "Rương Vàng Cung Đình Phong Tỏa", "Rương Gỗ Cổ Niêm Phong Bạc", "Hòm Kho Báu Vô Giá"
    ],
    "med6_fire": [
        "Đống Lửa Trại Đang Cháy Bập Bùng", "Đèn Bão Dầu Cổ Điển Thắp Sáng", "Ngọn Đuốc Nhúng Dầu Cháy Sáng",
        "Lò Sưởi Đá Than Hồng Ấm Áp", "Đèn Lồng Treo Cột Gỗ Thành Trì", "Chậu Lửa Đốt Báo Động Tháp Canh",
        "Đèn Cầy Sáp Chân Đồng Cổ", "Đống Lửa Tro Tàn Còn Than Đỏ", "Đèn Thủy Tinh Chống Gió Đêm",
        "Cọc Đuốc Cắm Đất Dã Ngoại", "Đèn Bão Xách Tay Đi Đêm", "Bếp Lò Than Nướng Dã Chiến",
        "Ngọn Lửa Trại Sưởi Ấm Đêm Đông", "Đèn Lồng Giấy Lễ Hội Cổ", "Ngọn Đuốc Khắc Hoa Văn Đồng", "Chậu Than Hồng Lâu Đài"
    ]
}

# Replace any generic names
pattern = re.compile(r'\{\s*"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"src":\s*"([^"]+)",\s*"thumbSrc":\s*"([^"]+)",\s*"forType":\s*"([^"]+)"\s*\}')

def replace_item(match):
    i_id = match.group(1)
    name = match.group(2)
    src = match.group(3)
    thumb = match.group(4)
    for_type = match.group(5)
    
    # Check if name has generic fallback or code
    if "#" in name or "_" in name or name.startswith("med"):
        # Match prefix
        for pfx, names in NAME_EXPANSIONS.items():
            if i_id.startswith(pfx):
                # Extract number
                m_num = re.search(r'(\d+)$', i_id)
                if m_num:
                    idx = int(m_num.group(1)) - 1
                    if 0 <= idx < len(names):
                        name = names[idx]
                    else:
                        name = f"{names[idx % len(names)]} (Biến Thể {idx + 1})"
                break
        
        # Surv prefix handling
        if i_id.startswith("surv_s"):
            # surv_s0_r0_0
            m_surv = re.search(r'surv_s(\d+)_r(\d+)_(\d+)', i_id)
            if m_surv:
                s_i, r_i, c_i = int(m_surv.group(1)), int(m_surv.group(2)), int(m_surv.group(3))
                if r_i in [0, 1]:
                    tools = ["Cuốc Chim Khai Khoáng Sắt", "Rìu Đốn Gỗ Sinh Tồn", "Xẻng Thám Hiểm Hầm Đất", "Dao Găm Đi Rừng Sinh Tồn", "Cần Câu Cá Suối", "La Bàn Định Hướng Bắc"]
                    name = tools[c_i % len(tools)]
                elif r_i in [2, 3]:
                    tools = ["Búa Đóng Cọc Lều Trại", "Kìm Cắt Dây Thừng", "Cưa Cành Cầm Tay", "Dụng Cụ Đánh Lửa Thép", "Cuộn Dây Thừng Bện", "Bình Nước Hành Quân"]
                    name = tools[c_i % len(tools)]
                elif r_i in [4, 5]:
                    camp = ["Lều Bạt Da Thú Dã Ngoại", "Đống Lửa Trại Bập Bùng", "Bếp Nấu Dã Chiến Khung Thép", "Võng Treo Rừng Chống Muỗi", "Túi Ngủ Lót Lông Ấm", "Tấm Bạt Che Mưa Dã Chiến"]
                    name = camp[c_i % len(camp)]
                else:
                    ores = ["Khối Quặng Sắt Hầm Mỏ", "Khối Quặng Đồng Đỏ", "Khối Quặng Bạc Lấp Lánh", "Thỏi Kim Loại Tinh Luyện", "Viên Than Đá Đốt Lò", "Mảnh Đá Lửa Đánh Lửa"]
                    name = ores[c_i % len(ores)]
    
    return f'{{\n            "id": "{i_id}",\n            "name": "{name}",\n            "src": "{src}",\n            "thumbSrc": "{thumb}",\n            "forType": "{for_type}"\n        }}'

new_text = pattern.sub(replace_item, text)

with open("frontend/src/pages/CharacterBuilder/prop_config.js", "w", encoding="utf-8") as f:
    f.write(new_text)

print("Updated prop_config.js with fully rich Vietnamese names!")
