// components/Greet.tsx
import React from "react";

type GreetProps = {
  data?: string;
  value?: string;
  myclick?: () => void;
};

function Greet(props: GreetProps) {
  function onchange() {
    if (props.myclick) { 
      props.myclick(); 
    }
  }

  return (
    <>
      <p>Welcome to Greeting {props.data} and {props.value}</p>
      <button onClick={onchange}>Click Me</button>
    </>
  );
}

export default Greet;
