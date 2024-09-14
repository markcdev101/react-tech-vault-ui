import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeDisplay = ({ codeString, language }) => {
  return (
    <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        lineProps={{ style: { paddingBottom: 8 } }}
        wrapLines
        wrapLongLines
        showLineNumbers
        customStyle={{ 
          width: '100%', 
          overflowX: 'auto', 
          textAlign: 'left'  // Ensure text alignment is left
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
