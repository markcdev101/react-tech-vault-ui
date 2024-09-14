import React from 'react';
import SpringBootInstallation from './Installation';
import SpringBootGuide from './Guide';
import SpringBootExamples from './Examples';
import Section from '../../../components/Section';
import SpringBootConcepts from './Concepts';
import SpringBootReferences from './References';

const SpringBootIndex = () => (
  <div>
    <h1>Spring Boot</h1>
    <Section
      id="guide"  // Add id to match right panel navigation
      title="Guide"
      content={<SpringBootGuide />}
    />
    <Section
      id="installation"
      title="Installation"
      content={<SpringBootInstallation />}
    />
    <Section
      id="concepts"
      title="Concepts"
      content={<SpringBootConcepts />}
    />
    <Section
      id="examples"
      title="Examples"
      content={<SpringBootExamples />}
    />
    <Section
      id="references"
      title="References"
      content={<SpringBootReferences />}
    />
  </div>
);

export default SpringBootIndex;
