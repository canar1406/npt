#  Tiểu sảnh nhỏ xíu của Arust

> *Khám phá vẻ đẹp của toán học qua những nghiên cứu học thuật.*

Chào mừng bạn đến với repo mã nguồn của trang web **Tiểu sảnh nhỏ xíu của Arust**. Đây là một bách khoa toàn thư toán học nhỏ gọn, được xây dựng như một không gian nội dung tĩnh chuyên dùng để chia sẻ, tổng hợp các kiến thức trọng điểm từ Đại số, Giải tích, Hình học cho tới Toán ứng dụng và hệ thống đề cương ôn tập.   

Trang web tập trung tối đa vào trải nghiệm đọc (typography), khả năng kết xuất tài liệu chuẩn kỹ thuật và sự kết hợp tuyệt vời giữa tính thẩm mỹ và hiệu năng nhanh chóng.

---

##  Thông tin phát triển & Quản trị

- **Admin / Chịu trách nhiệm nội dung:** Nguyễn Phước Thịnh
- **Đội ngũ phát triển (Dev):** [Heavietnam](https://home.heavietnam.com/)
- **Lưu ý:** *Heavietnam chỉ phụ trách phần kỹ thuật build web, tối ưu giao diện và hệ thống cốt lõi. Heavietnam không phụ trách và không chịu trách nhiệm về các nội dung học thuật được đăng tải trên website.*

---

##  Tính năng nổi bật

-  **Giao diện đa nền (Light/Dark Mode) đặc chế:**
  Cấu trúc CSS được tinh chỉnh sâu với 2 phong cách lấy cảm hứng từ bộ editor nổi tiếng Typora. **Đặc biệt, hệ thống được thiết lập [Dark Mode] làm chế độ mặc định** để xoa dịu đôi mắt cho các "cú đêm" học thuật:
  - **Tối (Dark Mode - Default):** Phycat-Abyss sâu thẳm, huyền bí.
  - **Sáng (Light Mode):** Phycat-Forest mát mẻ, trong trẻo.
-  **Hỗ trợ Toán học chuyên sâu:** Tích hợp bộ thư viện render **KaTeX** đỉnh cao, hoạt động hoàn hảo với các định dạng Inline, Block, Ma trận hay Phân số nhiều dòng mà không làm vỡ kiến trúc giao diện.
-  **Tree-list thông minh (Danh sách cây):** Các cấu trúc List (danh sách) nhiều dòng có gắn thiết kế thanh nối nhánh dọc theo ý tưởng Layout Typora. Lập trình pure-CSS tự động nhận diện và khéo léo né tránh sự che lấp khi danh sách chứa các ma trận cồng kềnh.
-  **Tìm kiếm thần tốc:** Tích hợp bộ máy tìm kiếm toàn văn **Algolia Search** thân thiện giúp tra thông tin chớp nhoáng.
-  **Responsive 100%:** Sidebar, table nội dung, menu điều hướng trượt mượt mà, tự động căn chỉnh hoàn hảo cho thiết bị di động.

---

##  Công nghệ sử dụng

Dự án này là minh chứng cho việc hòa quyện các công nghệ hiện đại để xây dựng nên một kiến trúc tĩnh vững chắc:

- **[Docusaurus v3](https://docusaurus.io/)**: Trái tim của website, Static Site Builder của Meta chuyên làm cho web học thuật.
- **[React.js 19](https://react.dev/)**: Xử lý logic Component bên dưới giao diện.
- **[MDX v3](https://mdxjs.com/)**: Tính năng gộp định dạng chuẩn Markdown và sức mạnh của React JSX.
- **[KaTeX](https://katex.org/)** & **remark-math / rehype-katex**: Engine biên dịch ra mã chuẩn để trình bày công thức.
- **[Algolia / Docusaurus Search Local]**: Hệ thống lập chỉ mục tìm kiếm thông minh từ khóa.
- **Custom CSS:** Tổ hợp lệnh tinh chỉnh tỉ mỉ tại custom.css để giữ nguyên vẹn độ mượt mà từ theme Typora gốc (từ Hash-link, Code block macOS style đến Heading icon).

---

##  Hướng dẫn phát triển (Local Development)

Đảm bảo môi trường ở máy tính của bạn đã được cài [Node.js](https://nodejs.org/) (phiên bản >=18.0).

### 1. Cài đặt Dependencies

Mở Terminal trong thư mục source và tiến hành tải về các thư viện:

```
npm install
```

### 2. Chạy Server cục bộ

```
npm run start
```

*Một server phát triển (dev-server) sẽ được khởi chạy thường ở địa chỉ http://localhost:3000. Mọi thay đổi về code hay dữ liệu trong file .md sẽ tự động tải lại trên trình duyệt (Hot-reload).*

### 3. Triển khai & Build Web tĩnh

```
npm run build
```

*Lệnh trên sẽ render ra một bộ file HTML, CSS nguyên bản, tối ưu nhất nằm tại thư mục `Build`. Bộ mã này rất gọn nhẹ và có thể đẩy lên bất kỳ nền tảng Hosting nào (Vercel, GitHub Pages, Firebase, Heroku,...).*

---

<p align="center"><i>Dự án "Tiểu sảnh nhỏ xíu của Arust" - Xây dựng với tất cả sự tận tâm dành cho Toán học và Thẩm mỹ.</i></p>
