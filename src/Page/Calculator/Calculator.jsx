import React, { useState, useEffect } from 'react';
import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleCalculate = () => {
        if (input.trim() === '') return; // ตรวจสอบว่า input มีค่า
        try {
            const result = eval(input);
            setInput(result.toString()); // แสดงผลลัพธ์ในช่อง input
        } catch (error) {
            setInput('Error');
        }
    };

    const handleClear = () => {
        setInput('');
    };

    const handleKeyPress = (event) => {
        const { key } = event;
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];

        if (validKeys.includes(key)) {
            handleClick(key);
        } else if (key === 'enter') {
            event.preventDefault(); // ป้องกันการทำงานเริ่มต้นของ z
            handleCalculate(); // เรียกใช้ฟังก์ชันคำนวณเมื่อกด z
        } else if (key === 'Backspace') {
            handleClear(); 
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div className="calculator-container">
            <input
                type="text"
                value={input}
                readOnly
                className="input-display"
                placeholder="Enter "
            />
            <div className="button-container">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;
