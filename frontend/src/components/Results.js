import React from 'react';

function ComparisonResult({ result, suggestions }) {
  const boxStyle = {
    backgroundColor: '#f0f0f0', // Light grey color
    padding: '20px',
    borderRadius: '8px',
    margin: '20px 0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div>
      <h1>HERE IS THE COMPARISON OF YOUR DOCUMENT WITH STANDARD DOCUMENT</h1>
      
      <div style={boxStyle}>
        <h2>Comparison Result:</h2>
        <pre>{result}</pre>
      </div>

      <h1>HERE ARE THE SUGGESTIONS YOU SHOULD DO IN YOUR DOCUMENT</h1>
      
      <div style={boxStyle}>
        <h3>Suggestions:</h3>
        <p>{suggestions}</p>
      </div>
    </div>
  );
}

export default ComparisonResult;
