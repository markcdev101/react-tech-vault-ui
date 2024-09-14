// src/components/SidePanel.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './SidePanel.css';

function SidePanel() {
  return (
    <div className="side-panel">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/java/spring-boot" activeClassName="active">
              Spring Boot
            </NavLink>
          </li>
          {/* Add more links as necessary */}
        </ul>
      </nav>
    </div>
  );
}

export default SidePanel;
