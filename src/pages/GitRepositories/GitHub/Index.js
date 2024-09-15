// src/pages/Java/GitHub/Index.js
import React from 'react';
import GitHubGuide from './Guide';
import GitHubInstallation from './Installation';
import GitHubConcepts from './Concepts';
import GitHubExamples from './Examples';
import GitHubReferences from './References';
import Section from '../../../components/Section';
import GitHubInstallationGitHubPages from './InstallationGitHubPages';

const GitHubIndex = () => (
  <div>
    <h1>GitHub</h1>
    <Section
      id="guide"  // Add id to match right panel navigation
      title="Guide"
      content={<GitHubGuide />}
    />
    {/* <Section
      id="installation"
      title="Installation"
      content={<GitHubInstallation />}
    /> */}
    <Section
      id="using-githubpages"
      title="Using GitHub Pages"
      content={<GitHubInstallationGitHubPages />}
    />
    {/* <Section
      id="concepts"
      title="Concepts"
      content={<GitHubConcepts />}
    />
    <Section
      id="examples"
      title="Examples"
      content={<GitHubExamples />}
    />
    <Section
      id="references"
      title="References"
      content={<GitHubReferences />}
    /> */}
  </div>
);

export default GitHubIndex;
