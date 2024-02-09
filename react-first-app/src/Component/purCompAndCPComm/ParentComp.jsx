import React , { Component } from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component{

    constructor(props){

        super(props)
        this.state = {
            messageFromChildComp : ''
        }
    }
    
    handleDataFromChild=(message)=>{
        this.setState({messageFromChildComp:message})

    }
    render(){
        return(
        <>
        <h2>Parent Component</h2>
        <h4>Message from child comp: {this.state.messageFromChildComp}</h4>
        <ChildComp sendDataToParentComponent={this.handleDataFromChild}/>
        </>
        )
    }
}

export default ParentComp
