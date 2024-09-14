import React from 'react';
import SpringBootInstallation from './Installation';
import SpringBootGuide from './Guide';
import SpringBootExamples from './Examples';
import Section from '../../../components/Section';
import SpringBootConcepts from './Concepts';


const SpringBootIndex = () => (
  <div>
    <h1>Spring Boot</h1>
    <Section
      title="Guide"
      content={<SpringBootGuide />}
    />
    <Section
      title="Installation"
      content={<SpringBootInstallation />}
    />
    <Section
      title="Concepts"
      content={<SpringBootConcepts />}
    />
    <Section
      title="Examples"
      content={<SpringBootExamples />}
    />
  </div>
);

export default SpringBootIndex;
