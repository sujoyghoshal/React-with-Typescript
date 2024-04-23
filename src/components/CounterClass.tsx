import React from "react";
type CounterState={
    counter:number
}
class CounterClass extends React.Component<any,CounterState>{
    state={counter:1};
    clickHandler=()=>{
        // this.state.counter++;
        // this.setState({counter:this.state.counter+1});
        this.setState((prevState)=>{
            return{counter:prevState.counter+1}
        })
    }
    render(){
        return(
            <>
            <h3>class components value change</h3>
            <div>{this.state.counter}</div>
            <button onClick={this.clickHandler}>Click me class</button>
            </>
        )
    }
}
export default CounterClass;