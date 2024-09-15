// src/pages/Java/Template/Index.js
import React from 'react';
import TemplateGuide from './Guide';
import TemplateInstallation from './Installation';
import TemplateConcepts from './Concepts';
import TemplateExamples from './Examples';
import TemplateReferences from './References';

const TemplateIndex = () => (
  <div>
    <h1>Spring Boot</h1>
    <Section
      id="guide"  // Add id to match right panel navigation
      title="Guide"
      content={<TemplateGuide />}
    />
    <Section
      id="installation"
      title="Installation"
      content={<TemplateInstallation />}
    />
    <Section
      id="concepts"
      title="Concepts"
      content={<TemplateConcepts />}
    />
    <Section
      id="examples"
      title="Examples"
      content={<TemplateExamples />}
    />
    <Section
      id="references"
      title="References"
      content={<TemplateReferences />}
    />
  </div>
);

export default TemplateIndex;
