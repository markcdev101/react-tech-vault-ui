import React from 'react';
import { Container, Title, Text, Box } from '@mantine/core';
import CodeDisplay from './SyntaxHighligterComponent';

const ConceptDetailComponent = ({ concepts }) => (
  <Container size="lg" px="md" mt="xl">
    {concepts.map((concept, index) => (

      <div>
        <Box key={index} mb="xl" style={{ textAlign: 'left' }}>
          <Title order={4} mb="md">{concept.title}</Title>
          <Text mb="md">{concept.description}</Text>
          {concept.code && (
            <div>

              <Box>
                <Text mb="md">Example Code:</Text>
                <CodeDisplay
                  codeString={concept.code}
                  language={concept.language}
                />
              </Box>
            </div>

          )}
        </Box>
      </div>
    ))}
  </Container>
);

export default ConceptDetailComponent;
