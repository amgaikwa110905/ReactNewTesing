import React, { useState } from "react";

const StateInFunctionComp = () =>{
    //Syntax of Use State Hook
    //const[State Name,function name to update state]=useState(initial value of the state)
    
    const[name, updateName] = useState('Amol')

const [count,updateCount] = useState(0)

const [person,updatePerson] = useState({name: 'Akash', age : 27});

const[boolUpdate, UpdateBoolean] = useState(false)

const[arrValue, updateArray] = useState([1,2,3,4,5,6,7])


    const nameChange=()=>{
        updateName("Umesh");
    }

    const changeCount = () =>{
        updateCount(count+1);
    }

    

    const changePerson = () =>{
        updatePerson(prePerson => ({...prePerson, name: 'Bilal', age:30}));
    }


    const changeArray = () => {
        // updateArray([9,8,7,6,5]);
        updateArray(arrValue => ([...arrValue,99,22,33]));
    }


    return(
        <>
        <h2>State in Function Component</h2>
        <p>Name use : {name}</p>
        <button type="button" class="btn btn-primary" onClick={nameChange}>Name Change</button>

        <p>count: {count}</p>
        <button type="button" class = "btn btn-secondary" onClick={changeCount}>Count</button>

        <p>Person: {JSON.stringify(person)}</p>
        <button type="button" class = "btn btn-success" onClick={changePerson}>Person</button>

        <p>Boolean Value : {UpdateBoolean?'Yes': 'No'}</p>

        <p>Array: {arrValue.join(',')}</p>
        <button type="button" class = "btn btn-success" onClick={changeArray}>Array Change</button>
        </>
    )
}

export default StateInFunctionComp;