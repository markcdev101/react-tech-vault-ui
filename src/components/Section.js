import React from 'react';
import { Card, Text, Container } from '@mantine/core';

const Section = ({ title, content }) => (
  <Container size="lg" style={{ marginBottom: '20px' }}>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Text size="xl" weight={500} style={{ marginBottom: '10px' }}>
          {title}
        </Text>
      </Card.Section>
      <Card.Section>
        {content}
      </Card.Section>
    </Card>
  </Container>
);

export default Section;
