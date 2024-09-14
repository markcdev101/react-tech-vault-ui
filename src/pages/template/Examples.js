import React from 'react';
import LinkListComponent from '../../components/LinkListComponent';
import { Container, Title, Text } from '@mantine/core';


const TemplateExamples = () => {
  // Define the links data
  const links = [
    { title: 'Github - spring-calculator-api', link: 'https://github.com/markcdev101/spring-calculator-api.git' },

  ];

  return (
    <Container size="lg" px="md" mt="xl">
      <Title order={2} mb="md">Spring Boot Examples</Title>
      <Text mb="md">
      Examples of common Spring Boot applications and configurations.
      </Text>
      <LinkListComponent items={links} />
    </Container>
  );
};

export default TemplateExamples;
