
import React from 'react'
//what is state : 
class StateCompoCommun extends React.Component{

    constructor(props)
    {
        super(props)
        this.name = "Amol";
        this.state={
            UserName : 'Raj'
        }
    }

    userChange(){
      //  alert('Click me');
        console.log("Button Clicked");
        this.name = "Akash";
        
        console.log(this.name);
    }

    changeUserName(){
       // alert('Inside ChangeUserNAme function');
       this.setState({UserName:'Admin'})

    }

    render()
    {
        return(
            <>
            <h2>This States in class components</h2>
            <h4>Name is : {this.name}</h4>
            <button onClick={this.userChange.bind(this)}>Change User</button>
            <h4>User Name : {this.state.UserName}</h4>
            <button onClick={this.changeUserName.bind(this)}>User Name Change</button>
            </>
        )
    }
}

export default StateCompoCommun;
