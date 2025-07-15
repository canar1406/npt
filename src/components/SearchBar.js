import React from 'react';
import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export default function SearchBar() {
  return (
    <DocSearch
      appId="IWKUXCUYNB"
      indexName="math-docs"
      apiKey="658663484ce56914c8d325de361927bc"
      searchParameters={{
        hitsPerPage: 10,
      }}
      placeholder="Tìm kiếm tài liệu..."
      translations={{
        button: {
          buttonText: 'Tìm kiếm',
          buttonAriaLabel: 'Tìm kiếm tài liệu',
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'Xóa',
            resetButtonAriaLabel: 'Xóa',
            cancelButtonText: 'Hủy',
            cancelButtonAriaLabel: 'Hủy',
          },
          startScreen: {
            recentSearchesTitle: 'Tìm kiếm gần đây',
            noRecentSearchesText: 'Không có tìm kiếm gần đây',
            saveRecentSearchButtonTitle: 'Lưu tìm kiếm này',
            removeRecentSearchButtonTitle: 'Xóa tìm kiếm này',
            favoriteSearchesTitle: 'Yêu thích',
            removeFavoriteSearchButtonTitle: 'Xóa khỏi yêu thích',
          },
          errorScreen: {
            titleText: 'Không thể tìm kiếm',
            helpText: 'Vui lòng kiểm tra kết nối mạng.',
          },
          footer: {
            selectText: 'để chọn',
            navigateText: 'để điều hướng',
            closeText: 'để đóng',
            searchByText: 'Tìm kiếm bởi',
          },
          noResultsScreen: {
            noResultsText: 'Không tìm thấy kết quả cho',
            suggestedQueryText: 'Thử tìm kiếm',
            reportMissingResultsText: 'Báo cáo kết quả thiếu',
            reportMissingResultsLinkText: 'Gửi phản hồi',
          },
        },
      }}
    />
  );
}
