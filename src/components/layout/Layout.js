// src/components/Layout.js
import React, { useState, useEffect } from 'react';
import SidePanel from './SidePanel';
import TopPanel from './TopPanel';
import RightPanel from './RightPanel';
import './Layout.css';

function Layout({ children }) {
  const [activeSection, setActiveSection] = useState('');
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Function to find sections dynamically
    const findSections = () => {
      const sectionElements = document.querySelectorAll('[id^="section-"]');
      const sectionList = Array.from(sectionElements).map(el => ({
        id: el.id.replace('section-', ''),
        title: el.getAttribute('data-title'),
      }));
      setSections(sectionList);
    };

    // Initial section finding
    findSections();

    // Update sections on initial render and whenever children change
    const observer = new MutationObserver(findSections);
    observer.observe(document.body, { childList: true, subtree: true });

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, [children]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 60; // Adjust for Top Panel height
    const currentSection = sections.find(section => {
      const element = document.getElementById(`section-${section.id}`);
      return element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition;
    });
    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="layout">
      <TopPanel /> {/* Fixed Top Panel */}
      <div className="layout-content">
        <SidePanel /> {/* Fixed Left Side Panel */}
        
        {/* Scrollable Content Wrapper */}
        <div className="content-wrapper">
          <main className="main-content">
            {children}  {/* Scrollable main content */}
          </main>
        </div>
        
        <RightPanel sections={sections} activeSection={activeSection} /> {/* Dynamic Right Panel */}
      </div>
    </div>
  );
}

export default Layout;
