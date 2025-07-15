import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useDocsSidebar } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';

export default function MobileSidebar() {
  const location = useLocation();
  const sidebar = useDocsSidebar();
  
  if (!sidebar) return null;
  
  const renderSidebarItems = (items) => {
    return items.map((item, index) => {
      if (item.type === 'category') {
        return (
          <div key={index} className="mobile-sidebar-category">
            <div className="mobile-sidebar-category-label">{item.label}</div>
            <div className="mobile-sidebar-category-items">
              {item.items && renderSidebarItems(item.items)}
            </div>
          </div>
        );
      }
      
      if (item.type === 'link') {
        return (
          <Link
            key={index}
            to={item.href}
            className={`mobile-sidebar-link ${location.pathname === item.href ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        );
      }
      
      return null;
    });
  };
  
  return (
    <div className="mobile-sidebar-custom">
      <div className="mobile-sidebar-title">📚 Kiến thức</div>
      {renderSidebarItems(sidebar.items)}
    </div>
  );
}
