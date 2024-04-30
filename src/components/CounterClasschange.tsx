import React from "react";

type CounterState = {
    counter: number;
    locked: boolean;
}
class CounterClasschange extends React.Component<any, CounterState> {
    state = {
        counter: 0,
        locked: false
    }; 
    clickHandler = () => {
        if (!this.state.locked) {
            this.setState((prevState) => ({
                counter: prevState.counter + 1
            }));
        }
    };

    clickMinus = () => {
        if (!this.state.locked) {
            this.setState((prevState) => ({
                counter: prevState.counter - 1
            }));
        }
    };

    lockScreen = () => {
        this.setState({ locked: true });
    };

    unlockScreen = () => {
        this.setState({ locked: false });
    };

    render() {
        return (
            <>
                <p>The value is: {this.state.counter}</p>
                <br />
                <button onClick={this.clickHandler}>Click +</button>
                <button onClick={this.clickMinus}>Click -</button>
                <br /><br />
                <button onClick={this.lockScreen}>Lock Screen</button>
                <button onClick={this.unlockScreen}>Unlock Screen</button>
            </>
        )
    }
}

export default CounterClasschange;
