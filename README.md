#  Tiểu sảnh nhỏ xíu của Arust

> *Khám phá vẻ đẹp của toán học qua những nghiên cứu học thuật.*

Chào mừng bạn đến với repo mã nguồn của trang web **Tiểu sảnh nhỏ xíu của Arust**. Đây là một bách khoa toàn thư toán học nhỏ gọn, được xây dựng như một không gian nội dung tĩnh chuyên dùng để chia sẻ, tổng hợp các kiến thức trọng điểm từ Đại số, Giải tích, Hình học cho tới Toán ứng dụng và hệ thống đề cương ôn tập.

Trang web tập trung tối đa vào trải nghiệm đọc (typography), khả năng kết xuất tài liệu chuẩn kỹ thuật và sự kết hợp tuyệt vời giữa tính thẩm mỹ và hiệu năng nhanh chóng.

---

##  Tính năng nổi bật

-  **Giao diện đa nền (Light/Dark Mode) đặc chế:** 
  Cấu trúc CSS được tinh chỉnh sâu với 2 phong cách lấy cảm hứng từ bộ editor nổi tiếng Typora:
  - **Sáng (Light Mode):** Phycat-Forest mát mẻ, trong trẻo, dễ chịu cho mắt sáng.
  - **Tối (Dark Mode):** Phycat-Abyss sâu thẳm, xoa dịu đôi mắt khi đọc đêm.
-  **Hỗ trợ Toán học chuyên sâu:** Tích hợp bộ thư viện render **KaTeX** đỉnh cao, hoạt động hoàn hảo với các định dạng Inline, Block, Ma trận hay Phân số nhiều dòng mà không làm vỡ kiến trúc giao diện.
-  **Tree-list thông minh (Danh sách cây):** Các cấu trúc List (danh sách) nhiều dòng có gắn thiết kế thanh nối nhánh dọc theo ý tưởng Layout Typora. Đặc biệt, nó được lập trình pure-CSS tự động nhận diện và khéo léo né tránh sự che lấp khi danh sách chứa các ma trận cồng kềnh.
-  **Tìm kiếm thần tốc:** Tích hợp bộ máy tìm kiếm toàn văn **Algolia Search** thân thiện giúp tra thông tin chớp nhoáng.
-  **Tính tương ứng Responsive 100%:** Sidebar, table nội dung, menu điều hướng trượt đều mượt mà, tự động căn chỉnh hoàn hảo cho thiết bị di động (Mobile).

---

##  Công nghệ sử dụng

Dự án này là minh chứng cho việc hòa quyện các công nghệ hiện đại để xây dựng nên một kiến trúc tĩnh vững chắc:

- **[Docusaurus v3](https://docusaurus.io/)**: Trái tim của website, Static Site Builder của Meta chuyên làm cho web học thuật.
- **[React.js 19](https://react.dev/)**: Xử lý logic Component bên dưới giao diện.
- **[MDX v3](https://mdxjs.com/)**: Tính năng gộp siêu phàm giữa định dạng chuẩn Markdown và sức mạnh của React JSX.
- **[KaTeX](https://katex.org/)** & **remark-math / rehype-katex**: Engine biên dịch ra mã chuẩn để trình bày công thức, phương trình phức tạp.
- **[Algolia / Docusaurus Search Local]**: Hệ thống lập chỉ mục tìm kiếm thông minh từ khóa trong bài.
- **[Infima](https://infima.dev/)**: Bộ framework CSS UI cơ sở.
- **Custom CSS:** Tổ hợp lệnh tinh chỉnh tỉ mỉ tại custom.css để giữ nguyên vẹn độ đẹp và tính độc nhất (như bảng, hash-link).

---

##  Hướng dẫn phát triển (Local Development)

Nếu bạn muốn đóng góp dự án hoặc muốn chạy thử website trên máy cục bộ, hãy theo tác dưới đây. Đảm bảo môi trường ở máy tính của bạn đã được cài [Node.js](https://nodejs.org/) (phiên bản >=18.0).

### 1. Cài đặt Dependencies

Mở Terminal trong thư mục source và tiến hành tải về các thư viện:

\\\ash
npm install
\\\

### 2. Chạy Server nhánh cục bộ

\\\ash
npm run start
\\\

*Một server phát triển (dev-server) sẽ được khởi chạy thường ở địa chỉ http://localhost:3000. Mọi thay đổi về code hay dữ liệu trong các file docs/ sẽ tự động tải lại trên trình duyệt (Hot-reload).*

### 3. Triển khai & Build Web tĩnh

\\\ash
npm run build
\\\

*Lệnh trên sẽ render ra một bộ file HTML, CSS nguyên bản, tối ưu nhất nằm tại thư mục uild. Bộ mã này rất gọn nhẹ và có thể ném lên bất kỳ các nền tảng Hosting mảng tĩnh nào hiện có (Vercel, GitHub Pages, Firebase, Heroku,...).*

---

##  Kiến trúc thư mục chính

\\\	ext
 docs/                 # Thư mục lõi chứa bài giảng (Đại số, Hình học, Giải tích, Đề cương)
 blog/                 # Nơi chứa các bài viết chia sẻ mở rộng dạng Blog
 src/
    css/custom.css    # File tinh chỉnh độc bản, can thiệp sâu thay thế các DOM hỏng
    pages/            # Tập hợp các đoạn React (.js, .module.css) của index hoặc About
 phycat-forest.css     # Trạm CSS cấu thành phong cách Light Mode
 phycat-abyss.css      # Trạm CSS cấu thành phong cách Dark Mode độc quyền
 docusaurus.config.js  # Trung tâm điều hướng Nav, Plugins, Themes
 package.json          # Chứa tên dự án phụ thuộc
\\\

---

<p align="center"><i>Dự án "Tiểu sảnh nhỏ xíu của Arust" - Xây dựng với tất cả sự tận tâm dành cho Toán học.</i></p>
