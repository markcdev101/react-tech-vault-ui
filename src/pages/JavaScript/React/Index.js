// src/pages/Java/React/Index.js
import React from 'react';
import ReactGuide from './Guide';
import ReactInstallation from './Installation';
import ReactConcepts from './Concepts';
import ReactExamples from './Examples';
import ReactReferences from './References';

const ReactIndex = () => (
  <div>
    <h1>Spring Boot</h1>
    <Section
      id="guide"  // Add id to match right panel navigation
      title="Guide"
      content={<ReactGuide />}
    />
    <Section
      id="installation"
      title="Installation"
      content={<ReactInstallation />}
    />
    <Section
      id="concepts"
      title="Concepts"
      content={<ReactConcepts />}
    />
    <Section
      id="examples"
      title="Examples"
      content={<ReactExamples />}
    />
    <Section
      id="references"
      title="References"
      content={<ReactReferences />}
    />
  </div>
);

export default ReactIndex;
