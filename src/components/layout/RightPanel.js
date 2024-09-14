// src/components/RightPanel.js
import React from 'react';
import './RightPanel.css';

function RightPanel() {
  return (
    <div className="right-panel">
      <h3>Contents</h3>
      <ul>
        <li><a href="#guide">Guide</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#concepts">Concepts</a></li>
        <li><a href="#examples">Examples</a></li>
        <li><a href="#references">References</a></li>
      </ul>
    </div>
  );
}

export default RightPanel;
