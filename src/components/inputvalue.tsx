import React, { useState, ChangeEvent } from 'react';

const Inputvalue: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const clickHandler = () => {
        console.log("Input value is:", inputValue);
    }
    return (
        <>
            <h3>Input value is: {inputValue}</h3>
            <input
                type="text"
                placeholder="Enter your name"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={clickHandler}>console</button>
        </>
    );
}
export default Inputvalue;
