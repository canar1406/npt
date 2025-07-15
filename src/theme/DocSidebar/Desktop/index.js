import React from 'react';
import DocSidebarContainer from '@theme-original/DocSidebar/Desktop';
import { useWindowSize } from '@docusaurus/theme-common';

export default function DocSidebarContainerWrapper(props) {
  const windowSize = useWindowSize();
  
  // Ẩn sidebar gốc trên mobile (width < 997px)
  if (windowSize === 'mobile') {
    return null;
  }
  
  return <DocSidebarContainer {...props} />;
}
