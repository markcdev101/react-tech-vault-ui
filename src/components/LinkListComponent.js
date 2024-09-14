import React from 'react';
import { List, Text, Anchor } from '@mantine/core';

const LinkListComponent = ({ items }) => {
  return (
    <List spacing="sm" size="sm" bullet="•">
      {items.map((item, index) => (
        <List.Item key={index}>
          <Text>
            <strong>{item.title}</strong> -{' '}
            <Anchor href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link}
            </Anchor>
          </Text>
        </List.Item>
      ))}
    </List>
  );
};

export default LinkListComponent;
