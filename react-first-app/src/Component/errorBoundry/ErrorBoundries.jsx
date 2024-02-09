import React from "react";
import { Component } from "react";
import Counter from './Counter'

class ErrorBoundries extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         error : null,
         errorInfo : null
         ,hasError :false
      }
    }

    componentDidCatch(error,errorInfo)
    {
        this.setState(
            {
            error: error,
            errorInfo : errorInfo,
            hasError : true
            }
        )

    }
    
    render(){

        if(this.state.hasError)
            return (
                <>
                    <h2>An Error Occured</h2>
                    <details>
                        {this.state.error && this.state.errorInfo.toString()}
                        <br></br>
                        {this.state.errorInfo.ComponentStack}
                    </details>
                </>
            )
        
        return(
            <Counter/>
        )
    }
}

export default ErrorBoundries