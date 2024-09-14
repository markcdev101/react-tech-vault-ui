import React from 'react';
import LinkListComponent from '../../../components/LinkListComponent';
import { Container, Title, Text } from '@mantine/core';

const SpringBootReferences = () => {
  // Define the links data
  const links = [
    { title: 'Spring Initializr', link: 'https://start.spring.io/' },
    { title: 'Spring Boot Documentation', link: 'https://spring.io/projects/spring-boot' },
    { title: 'Spring Boot GitHub Repository', link: 'https://github.com/spring-projects/spring-boot' },
    { title: 'Spring Boot Guides', link: 'https://spring.io/guides' },
    { title: 'Spring Boot Tutorials', link: 'https://www.baeldung.com/spring-boot' },
    { title: 'Building REST services with Spring', link: 'https://spring.io/guides/tutorials/rest' },
    { title: 'Building a RESTful Web Service', link: 'https://spring.io/guides/gs/rest-service' },
    { title: 'Consuming a RESTful Web Service', link: 'https://spring.io/guides/gs/consuming-rest' },
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

export default SpringBootReferences;
