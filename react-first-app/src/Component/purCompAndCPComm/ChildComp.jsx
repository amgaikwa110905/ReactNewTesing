import React , { Component } from "react";

class ChildComp extends Component{
    constructor(props){
        super(props)
        this.state ={
            message:'Welcome to React'
        }
    }

    sendMessage=()=>{
            this.props.sendDataToParentComponent(this.state.message)
    }
    render(){
        return(
        <>
        <h2>Child Component</h2>
        <button onClick={this.sendMessage}>Send Message to parent component</button>
        </>
        )
    }
}

export default ChildComp