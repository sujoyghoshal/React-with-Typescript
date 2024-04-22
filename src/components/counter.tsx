import React, { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const inter = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(inter);
  }, []);
  return (
    <>
      <h3 className="counter">Current value of counter: {count}</h3>
    </>
  );
}
export default Counter;
