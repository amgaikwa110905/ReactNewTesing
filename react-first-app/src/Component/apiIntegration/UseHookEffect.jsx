import React, {useEffect} from "react";
import { useState } from "react";

const UseHookEffect=()=>{
    //after react 16.8 version, fn component use hook to replace class function component
    //(class comp- state) (func comp -UseState)
    // (class comp- componentDidmount) (func comp -useEffect)

    //Syntax of useEffect
    // useEffect(()=>{
    //   callBack function
    // }, dependency array) 

    const[count,setCount] = useState(0)
    const[name, setName] = useState("Anand")

    //Case 1 No dependency array to use hookeffect
    // useEffect(()=>{
    //     console.log("UseEffect hook call on every render")
    // });

    //Case 2 Empty dependency array to use hookeffect
    // useEffect(()=>{
    //     console.log("UseEffect hook call on every render")
    // },[]);

    //Case 3 pass value to  dependency array to use hookeffect
    useEffect(()=>{
        console.log("UseEffect hook call on every render")
    },[name]);

    const changeCount = () => {
setCount(count+1);
    }

    const nameChange = () =>{
        setName("Amol");
    }

    return(
        <>
        <h2>Functional Compenent UseEffect hook</h2>
        <h4>count : {count}</h4>
        <button type="button" onClick={changeCount} class="btn btn-success">Change Count</button>

        <h4>name : {name}</h4>
        <button type="button" onClick={nameChange} class="btn btn-success">Change Name</button>
        </>
    )
}

export default UseHookEffect;