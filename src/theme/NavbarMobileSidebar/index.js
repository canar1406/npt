import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import MobileSidebar from '../MobileSidebar';

export default function NavbarMobileSidebarWrapper(props) {
  const location = useLocation();
  const isDocsPage = location.pathname.startsWith('/docs');
  const mobileSidebar = useNavbarMobileSidebar();
  
  // Nếu không phải docs page, dùng sidebar gốc
  if (!isDocsPage) {
    const NavbarMobileSidebar = require('@theme-original/NavbarMobileSidebar').default;
    return <NavbarMobileSidebar {...props} />;
  }
  
  // Nếu là docs page và sidebar được mở, hiển thị custom sidebar
  if (mobileSidebar.shown) {
    return (
      <div className="navbar-mobile-sidebar-wrapper">
        <div className="navbar-sidebar">
          <div className="navbar-sidebar__backdrop" onClick={mobileSidebar.toggle} />
          <div className="navbar-sidebar__brand">
            <div className="navbar-sidebar__close">
              <button 
                className="clean-btn navbar-sidebar__close-btn"
                onClick={mobileSidebar.toggle}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="navbar-sidebar__items">
            <MobileSidebar />
          </div>
        </div>
      </div>
    );
  }
  
  // Nếu sidebar không mở, không hiển thị gì
  return null;
}
