import React, { useState } from 'react';
import { add } from './StringCalculator';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError('');
    } catch (err) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <div className="App">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        result !== null && <p>Result: {result}</p>
      )}
    </div>
  );
}

export default App;