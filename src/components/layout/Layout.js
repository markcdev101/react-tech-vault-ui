// src/components/Layout.js
import React from 'react';
import SidePanel from './SidePanel';
import TopPanel from './TopPanel';
import RightPanel from './RightPanel';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout">
      <TopPanel /> {/* Fixed Top Panel */}
      <div className="layout-content">
        <SidePanel /> {/* Fixed Left Side Panel */}
        
        {/* Scrollable Content Wrapper (without Right Panel inside) */}
        <div className="content-wrapper">
          <main className="main-content">
            {children}  {/* Scrollable main content */}
          </main>
        </div>
        
        <RightPanel /> {/* Fixed Right Panel outside the scrollable area */}
      </div>
    </div>
  );
}

export default Layout;
