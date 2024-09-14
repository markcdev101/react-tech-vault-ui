// src/components/RightPanel.js
import React from 'react';
import './RightPanel.css';

function RightPanel({ sections, activeSection }) {
  return (
    <div className="right-panel">
      <h3>Contents</h3>
      <ul>
        {sections.map(section => (
          <li key={section.id} className={section.id === activeSection ? 'active' : ''}>
            <a href={`#section-${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RightPanel;
