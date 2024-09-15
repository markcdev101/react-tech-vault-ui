import React from 'react';
import ConceptDetailComponent from "../../../components/ConceptDetailComponent"

const concepts = [
  {
    title: 'Dependency Injection',
    description: `Dependency Injection (DI) is a design pattern used to implement IoC (Inversion of Control), allowing Spring Boot to manage the dependencies of your application. It helps in reducing the coupling between components and promotes loose coupling.`,
    code: `@Autowired\npublic MyService myService() {\n  return new MyService();\n}`,
    language: 'java'
  },
];

const GitHubConcepts = () => (
  <ConceptDetailComponent concepts={concepts} />
);

export default GitHubConcepts;
