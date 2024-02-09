import React from "react";

class Binding extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            userName : "Amol"
        }
    }
    // userNameChange(){
    //     //alert('Clicked');
    //     console.log(this.state.userName);
    // }

    userNameChange=() =>{
        console.log(this.state.userName);
    }

    render(){
        return(
            <>
            <h1>
                Inside Event Binding Class
            </h1>

            <h2>User Name is : {this.state.userName}</h2>

            {/* <button type="button" class="btn btn-primary"  onClick={this.userNameChange.bind(this)}>User Change</button> */}
            <button type="button" class="btn btn-primary"  onClick={this.userNameChange}>User Change</button>




            </>

        )
    }

}

export default Binding;