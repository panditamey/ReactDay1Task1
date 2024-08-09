import { Component } from "react";
import Welcome from "./Welcome";

class ClassCounter extends Component {
    constructor(){
        super();
        this.state = {
            name : "Amey",
            count : 0,
            temp: '',
        };
    }
    
    increment(){
        this.setState({
            count: this.state.count + 1,
        })
        console.log(this.state.count);
    }

    decrement(){
        this.setState({
            count: this.state.count - 1,
        })
        console.log(this.state.count);
    }

    setTemp (n){
        this.setState({
            temp : n,
        })
    }

    setName (n){
        this.setState({
            name : this.state.temp,
        })
    }

    render(){
        return <>
            <Welcome/>
            <h1>{this.state.name}</h1>
            <input onChange={(e)=>{this.setTemp(e.target.value)}}/>
            <button onClick={()=>{this.setName()}}>Set Name</button>
            <br/>
            <button onClick={()=>{this.increment()}}>Increment</button>
            <br/>
            <button onClick={()=>{this.decrement()}}>Decrement</button>
            <h1>Value : {this.state.count}</h1>
        </>
    }
}

export default ClassCounter