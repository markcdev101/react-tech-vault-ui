import React from 'react';
import LinkListComponent from '../../../components/LinkListComponent';
import { Container, Title, Text } from '@mantine/core';


const SpringBootExamples = () => {
  // Define the links data
  const links = [
    { title: 'Github - spring-calculator-api', link: 'https://github.com/markcdev101/spring-calculator-api.git' },
    { title: 'Github - spring-boot-starter-project', link: 'https://github.com/markcdev101/spring-boot-starter-project.git' },
    { title: 'Github - spring-boot-web-starter-project', link: 'https://github.com/markcdev101/spring-boot-web-starter-project.git' },

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

export default SpringBootExamples;
