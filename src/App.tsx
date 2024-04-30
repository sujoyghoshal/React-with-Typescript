//*App.tsx
import React from "react";
import "./App.css";
import Counter from "./components/counter";
import Greet from "./components/Greet";
import { Greeting } from "./components/Greeting";
import CounterAll from "./components/Counterall";
import CounterClass from "./components/CounterClass";
import TimerCount from "./components/Timecount";
import ListGroup from "./components/LIstcomponents";
import Listnew from "./components/Listnew";
import Api from "./components/api";
import Inputvalue from "./components/inputvalue";
import UI from "./components/ui";
import CounterClasschange from "./components/CounterClasschange";
function App() {
  function clickhandler1() {
    alert('first clicked');
  }
  function clickhandler2() {
    alert('second clicked');
  }
  function clickhandler3(){
    alert('class components clicked');
  } 
  return (
    <div className="App">
      <h1 className="header">React with TypeScript collage</h1>
      <Counter />
      <Greet data="first" value="value 1" myclick={clickhandler1} />
      <Greet data="second" value="value 2" myclick={clickhandler2} />
      <hr/>
      <Greeting value1="value class components - 18/04/24" myclick={clickhandler3}/>
      <hr/>
      <CounterAll/>
      <hr />
      <CounterClass/>
      <hr/>
      <TimerCount/>
      <hr/>
      <ListGroup/>
      <hr/>
      <Listnew/>
      <hr/>
      <Api/>
      <hr/>
      <Inputvalue/>
      <hr/>
      <UI/>
      <hr/>
      <CounterClasschange/>
      <Inputvalue/>
    </div>
  );
}
export default App;
