import React from 'react';
import LinkListComponent from '../../../components/LinkListComponent';
import { Container, Title, Text } from '@mantine/core';


const ReactExamples = () => {
  // Define the links data
  const links = [
    { title: 'Github - react-tech-vault-ui', link: 'https://github.com/markcdev101/react-tech-vault-ui.git' },
    { title: 'Github - react-calculator-ui', link: 'https://github.com/markcdev101/react-calculator-ui.git' },
    { title: 'Github - error101-frontend', link: 'https://github.com/markcdev101/error101-frontend.git' },
    { title: 'Github - ciphersuite', link: 'https://github.com/markcdev101/ciphersuite.git' },

  ];

  return (
    <Container size="lg" px="md" mt="xl">
      <Title order={2} mb="md">React Examples</Title>
      <Text mb="md">
      Examples of common React applications and configurations.
      </Text>
      <LinkListComponent items={links} />
    </Container>
  );
};

export default ReactExamples;
