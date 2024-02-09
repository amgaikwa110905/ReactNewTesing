import React from "react";
import { Component } from "react";

class Counter extends Component{
    constructor(props)
    {
        super(props)

        this.state={
            counter : 0
        }
    }
    handleClick=()=>{
        this.setState(({counter})=>({counter: counter+1}))
    }
    render(){

        if(this.state.counter ===5){
            throw new Error('Application issue')
        }

        return(
            <>
            <h2>Counter</h2>
            <button onClick={this.handleClick}>Clicked : {this.state.counter}</button>
            </>
        )
    }
}

export default Counter