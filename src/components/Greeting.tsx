import React from "react";
type GreetProps={
    value1?:string,
    myclick?: () => void;
}
export class Greeting extends React.Component<GreetProps>
{
    render()
    {
        return (
            <>
            <h3>Greeting components :{this.props.value1}</h3>
            <button onClick={this.props.myclick}>click class</button>
            </>
        )
    }
}