import React, { useState } from 'react';
import axios from 'axios';
import '../Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');


  const handleClick = (value) => {
    if (result) {
      setInput(value);
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = async () => {
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        expression: input,
      });
      setResult(response.data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        {result ? result : input}
      </div>
      <div className="buttons">
        <button onClick={handleClear} style={{backgroundColor: '#ccc', color: 'black'}}>AC</button>
        <button onClick={() => handleClick('+/-')} style={{backgroundColor: '#ccc', color: 'black'}}>+/-</button>
        <button onClick={() => handleClick('%')} style={{backgroundColor: '#ccc', color: 'black'}} >%</button>
        <button onClick={() => handleClick('/')} style={{backgroundColor: '#f58220'}}>÷</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} style={{backgroundColor: '#f58220'}}>×</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} style={{backgroundColor: '#f58220'}}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')} style={{backgroundColor: '#f58220'}}>+</button>
        <button onClick={() => handleClick('0')} className="zero" >0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleEqual} style={{backgroundColor: '#f58220'}}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
