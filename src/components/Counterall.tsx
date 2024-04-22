import React, { useState } from "react";

const CounterAll = () => {
    const [counter, setCounter] = useState(0);
    const CounterHandler = () => {
        setCounter(counter + 1);
    };
    const CounterHandlermai=()=>{
        setCounter(counter-1);
    }
    return (
        <> 
            <h3>useStste in function component :</h3>
            <p>Counter value is: {counter}</p>
            <button onClick={CounterHandler}>Click me(+)</button>
            <button onClick={CounterHandlermai}>click me(-)</button>
        </>
    );
};

export default CounterAll;
