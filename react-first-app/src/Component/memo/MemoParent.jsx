import React from "react"
import MemoComp from "./MemoComp"
import { useState } from "react"


const MemoParent = () =>{
    const[count,setCount]= useState(0)

    const incrementCount = () =>{
        setCount(count+1)
    }
    return(
        <>
        <h2>Inside MemoPArent</h2>
       count : {count} <button onClick={incrementCount}>Count Increment</button>
        <MemoComp name={'Amol'}/>
        </>
    )

}

export default MemoParent