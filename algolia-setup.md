# Hướng dẫn cài đặt Algolia Search

## Bước 1: Tạo tài khoản Algolia

1. Đăng ký tài khoản miễn phí tại [Algolia.com](https://www.algolia.com/)
2. Tạo một Application mới
3. Tạo Index với tên `math-docs`

## Bước 2: Lấy API Keys

Từ Algolia Dashboard:
1. Vào **API Keys**
2. Copy **Application ID**
3. Copy **Search-Only API Key** (public key)

## Bước 3: Cập nhật cấu hình

Trong `docusaurus.config.js`, thay thế:

```javascript
algolia: {
  appId: 'YOUR_APP_ID', // Thay bằng Application ID thật
  apiKey: 'YOUR_SEARCH_API_KEY', // Thay bằng Search-Only API Key thật
  indexName: 'math-docs',
  // ... các cấu hình khác
}
```

## Bước 4: Crawl dữ liệu

Bạn có thể sử dụng:
1. **Algolia Crawler** (recommended) - tự động crawl website
2. **DocSearch** - miễn phí cho open source projects
3. **Manual indexing** - tự upload dữ liệu

## Bước 5: Test

Sau khi cấu hình xong, search box sẽ xuất hiện ở navbar.

## Cấu hình hiện tại

File `docusaurus.config.js` đã được cập nhật với:
- ✅ Algolia theme
- ✅ Search configuration
- ✅ Contextual search
- ✅ Search page enabled

## Tính năng

- 🔍 Instant search
- 🎯 Contextual results
- 📱 Mobile responsive
- 🌙 Dark mode support
- 🔗 Direct links to results
- 📄 Search in docs, blog, pages
