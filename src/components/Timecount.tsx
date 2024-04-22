import React,{Component} from "react";
class TimerCount extends React.Component<any>{
    state={current:1};
    constructor(props:any){
        super(props);

        setInterval(()=>{
            this.setState({current:this.state.current+1});
        },1000)
    }
    render(){
        return(
            <div>
                <h3>setinterval not use Hooks :</h3>
                Counter:{this.state.current}
            </div>
        )
    }
}
export default TimerCount;