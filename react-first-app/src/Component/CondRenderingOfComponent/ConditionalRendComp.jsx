import { render } from "@testing-library/react";
import React, { useState } from "react";

const ConditionalRendComp = () =>{

    const[isLoggedIn, UpdateLogin]= useState(true);

    //1. Conditional Rendering using if/else condition
    // if(isLoggedIn){
    // return(
    //     <Login/>)
    // }
    // else{
    //     return <SignUp/>
    // }

    //2. Conditional Rendering using Variable
    // let renderComponent;
    // if(isLoggedIn){
    //     renderComponent = <Login/>
    // }
    // else{
    //     renderComponent = <SignUp/>
    // }

    // return renderComponent;

//3. conditional rendering using ternary operator
//return isLoggedIn? <Login/> : <SignUp/>;

//4. Conditional Rendering using short circuit
return isLoggedIn && <Login/>


}

const Login = () =>{
    return(
        <>
        <h3> Login</h3>
        <p>User Name : <input type="text"></input> </p>
        <p> Password: <input type="password"></input> </p>
        </>
    )
}

const SignUp = () =>{
    return(
        <>
        <h2>Sign Up Page</h2>
        <p>User Name : <input type='text'></input></p>
        <p>Password : <input type='text'></input></p>
        <p>Email : <input type='text'></input></p>
        <p>Mobile No. : <input type='text'></input></p>
        </>
    )
}

export default ConditionalRendComp;