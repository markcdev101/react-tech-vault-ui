// src/components/SidePanel.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text } from '@mantine/core';
import './SidePanel.css';

const sections = [
  {
    sectionTitle: 'Java',
    subSections: [
      { title: 'Core Java', path: '/java/core-java', disabled: true },
      { title: 'Spring Boot', path: '/java/spring-boot', disabled: false },
      { title: 'Quarkus', path: '/java/quarkus', disabled: true },
    ],
  },
  {
    sectionTitle: 'JavaScript - FE',
    subSections: [
      { title: 'Core JavasScript', path: '/javascript/core-javascript', disabled: true },
      { title: 'React', path: '/javascript/react', disabled: false },
      { title: 'Angular', path: '/javascript/angular', disabled: true },
    ],
  },
  {
    sectionTitle: 'JavaScript - BE',
    subSections: [
      { title: 'Node.JS', path: '/javascript/nodejs', disabled: true },
      { title: 'Express.JS', path: '/javascript/expressjs', disabled: true },
    ],
  },
  {
    sectionTitle: 'Cloud Services',
    subSections: [
      { title: 'AWS', path: '/cloud/aws', disabled: true },
      { title: 'Digital Ocean', path: '/cloud/digitalocean', disabled: true },
    ],
  },
  {
    sectionTitle: 'SQL',
    subSections: [
      { title: 'Core SQL', path: '/sql/core-sql', disabled: true },
      { title: 'MySQL', path: '/sql/mysql', disabled: true },
    ],
  },
  {
    sectionTitle: 'NoSQL',
    subSections: [
      { title: 'Core NoSQL', path: '/nosql/core-nosql', disabled: true },
      { title: 'MongoDB', path: '/nosql/mongodb', disabled: true },
    ],
  },
  {
    sectionTitle: 'Automated Testing',
    subSections: [
      { title: 'JUnit 5', path: '/automatedtesting/junit5', disabled: true },
      { title: 'Selenium', path: '/automatedtesting/selenium', disabled: true },
      { title: 'MUnit', path: '/automatedtesting/munit', disabled: true },
    ],
  },
  {
    sectionTitle: 'API Development',
    subSections: [
      { title: 'MuleSoft', path: '/apidevelopment/mulesoft', disabled: true },
      { title: 'Spring Boot', path: '/apidevelopment/springboot', disabled: true },
      { title: 'Camel Quarkus', path: '/apidevelopment/camelquarkus', disabled: true },
    ],
  },
  {
    sectionTitle: 'GIT Repositories',
    subSections: [
      { title: 'Bitbucket', path: '/gitrepositories/bitbucket', disabled: true },
      { title: 'GitHub', path: '/gitrepositories/github', disabled: true },
      { title: 'GitLab', path: '/gitrepositories/gitlab', disabled: true },
    ],
  },
  {
    sectionTitle: 'Operating System',
    subSections: [
      { title: 'Windows', path: '/operatingsystem/windows', disabled: true },
      { title: 'Linux', path: '/operatingsystem/linux', disabled: true },
    ],
  },
  {
    sectionTitle: 'Container Services',
    subSections: [
      { title: 'Docker', path: '/containers/docker', disabled: true },
      { title: 'Kubernetes', path: '/containers/kubernetes', disabled: true },
    ],
  },
  {
    sectionTitle: 'CICD',
    subSections: [
      { title: 'Jenkins', path: '/cicd/jenkins', disabled: true },
      { title: 'Bamboo', path: '/cicd/bamboo', disabled: true },
    ],
  },
  
];

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
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <Text size="xl" fw={700} tt="uppercase" className="section-title">{section.sectionTitle}</Text>
              {section.subSections.map((subSection, subIndex) => (
                <li key={subIndex}>
                  {subSection.disabled ? (
                    <span className="nav-link disabled">{subSection.title}</span> // Render disabled text
                  ) : (
                    <NavLink to={subSection.path} activeClassName="active">
                      {subSection.title}
                    </NavLink>
                  )}
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </nav>
      <Text size="xl" fw={700} tt="uppercase" className="section-title">Tech Vault 2024</Text>
    </div>
  );
}

export default SidePanel;
