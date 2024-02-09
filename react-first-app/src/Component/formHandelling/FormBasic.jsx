import React from "react"
import { useState } from "react"

const FormBasic = () =>{

const[firstName, setFirstName] = useState('')
const[lastName, setLastName] = useState('')
const[email, setEmail] = useState('')

    const handleSubmit = (e) =>{
       console.log('Inside handleSubmit')
       e.preventDefault()
    }

    const handleFirstNameChange = (e) =>{
        console.log(e.target.value)
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) =>{
        console.log('Inside handleFirstNameChange')
        setLastName(e.target.value)
       
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    return(
        <>
        <h2>Form Hanedlling Basic</h2>
        <form onSubmit={handleSubmit}>
            <div>
            First Name : <input type ='text' name='' id='' value={firstName} onChange={handleFirstNameChange}></input>
            </div>
            <br></br>
            <div>
            Last Name : <input type ='text' name='' id='' value={lastName} onChange={handleLastNameChange}></input>
            </div>
            <br></br>
            <div>
            Email: <input type ='text' name='' id='' value={email} onChange={handleEmailChange}></input>
            </div>
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default FormBasic