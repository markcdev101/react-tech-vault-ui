import React from 'react';
import { Tabs, Container, Text, Code } from '@mantine/core';
import CodeDisplay from './SyntaxHighligterComponent';

const InstallationTab = ({ sections }) => {
  return (
    <Container size="lg" px="lg" mt="xl">
      <Tabs defaultValue={sections[0]?.value}>
        <Tabs.List grow position="left" mb="md">
          {sections.map((section) => (
            <Tabs.Tab key={section.value} value={section.value}>
              {section.label}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {sections.map((section) => (
          <Tabs.Panel key={section.value} value={section.value} pt="xs">
            <CodeDisplay codeString={section.content} language={section.language}></CodeDisplay>
          </Tabs.Panel>
        ))}
      </Tabs>
    </Container>
  );
};

export default InstallationTab;
