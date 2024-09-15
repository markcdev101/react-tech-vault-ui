import React from 'react';
import LinkListComponent from '../../../components/LinkListComponent';
import { Container, Title, Text } from '@mantine/core';

const ReactReferences = () => {
  // Define the links data
  const links = [
    { title: 'React Official Site', link: 'https://reactjs.org/' },
    { title: 'Create React App', link: 'https://create-react-app.dev/' },
    { title: 'React Documentation', link: 'https://reactjs.org/docs/getting-started.html' },
    { title: 'React GitHub Repository', link: 'https://github.com/facebook/react' },
    { title: 'React Tutorial', link: 'https://reactjs.org/tutorial/tutorial.html' },
    { title: 'React Community', link: 'https://reactjs.org/community/support.html' },
    { title: 'Mantine - React component library', link: 'https://mantine.dev/' }
];

  return (
    <Container size="lg" px="md" mt="xl">
      <Title order={2} mb="md">React References</Title>
      <Text mb="md">
        Here are some useful resources for learning and working with React:
      </Text>
      <LinkListComponent items={links} />
    </Container>
  );
};

export default ReactReferences;
