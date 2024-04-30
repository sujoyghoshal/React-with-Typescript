import React, { useState, ChangeEvent } from 'react';

const Inputvalue: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [listItems, setListItems] = useState<string[]>([]);
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const clickHandler = () => {
        setListItems([...listItems, inputValue]);
        setInputValue('');
    }

    return (
        <>
        <h1>list of the the value :</h1>
            <h3>Input value is: {inputValue}</h3>
            <input
                type="text"
                placeholder="Enter your name"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={clickHandler}>click</button>
            <div>
                <ul>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Inputvalue;
