import React from 'react';
import DocSidebar from '@theme-original/DocSidebar';

export default function DocSidebarWrapper(props) {
  return (
    <div className="mobile-sidebar-wrapper" style={{ display: 'block', width: '100%' }}>
      <DocSidebar {...props} />
    </div>
  );
}