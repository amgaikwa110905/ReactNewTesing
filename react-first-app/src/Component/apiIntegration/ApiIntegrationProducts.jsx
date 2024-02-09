import axios from "axios";
import React,{Component} from "react";

class ApiIntegrationProducts extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            product :[],
         }

    }

    componentDidMount(){
        console.log("Inside Component Did Mount method");
        this.fetchProductDetails();
    }

    fetchProductDetails=()=>{
        const prodDetails = axios('https://fakestoreapi.com/products');
        console.log( prodDetails);
        this.setState({product : prodDetails.data})


    }

    render(){
        return (
          <>
            <h2>Products details:</h2>
            <div class="card">
              <div class="card-body">
               
              </div>
            </div>
          </>
        );
    }
}

export default ApiIntegrationProducts;