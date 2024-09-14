import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ codeString, language }) => {
  return (
    <SyntaxHighlighter language={language} style={atomDark} lineProps={{style: {paddingBottom: 8}}}
    wrapLines={true}
    showLineNumbers={true}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;