import React,{Component} from "react";

class CompLifeCylec extends Component{

    // Class component Life cycle
    //1. Intialization phase
    
    constructor(props)
    {
        super(props);

        console.log("Console component constructor");
        this.state={
            name:"Welcome to React Class comp"
        }
    }

    //2. Mounting Phase

    static getDerivedStateFromProps(props)
    {
        console.log("Inside Derived State");
        return null;
    }

    componentDidMount(){
        console.log("Inside componentDidMount");
    }

    messageChange=()=>{
        this.setState({name :"Welcome to react component"})
        
    }

    shouldComponentUpdate()
    {
        console.log("Inside shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log("Inside getSnapshotBeforeUpdate");
        return null;
    }

    get componentDidUpdate()
    {
        console.log("Inside componentDidUpdate");
        return null;
    }

    render(){
        console.log("Inside Render Method");
        return(
            <>
            <h2>Class Component life cycle</h2>
           <p>{this.state.name} <button type="button" class="btn btn-primary"  onClick={this.messageChange}>Message Change</button></p>
            </>
        )
    }

    //3. Updating State. //getDerivedStateFromProps() //shouldCompenentUpdate() //render() //getSnapshotBeforeUpdate()
    

}

export default CompLifeCylec;