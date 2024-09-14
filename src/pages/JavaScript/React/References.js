import React from 'react';
import LinkListComponent from '../../components/LinkListComponent';
import { Container, Title, Text } from '@mantine/core';

const TemplateReferences = () => {
  // Define the links data
  const links = [
    { title: 'Spring Initializr', link: 'https://start.spring.io/' },
  ];

  return (
    <Container size="lg" px="md" mt="xl">
      <Title order={2} mb="md">Spring Boot References</Title>
      <Text mb="md">
        Here are some useful resources for learning and working with Spring Boot:
      </Text>
      <LinkListComponent items={links} />
    </Container>
  );
};

export default TemplateReferences;
