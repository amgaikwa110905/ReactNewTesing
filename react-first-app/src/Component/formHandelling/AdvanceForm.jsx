import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";

const AdvanceForm =()=>{
    const[form, setForm] = useState({
        fname:'',
        email: '',
        color:'',
        date : '',
        range:'90',
        options : '',
        file: '',
})

//create reference
const nameRef = useRef()
const emailRef = useRef()

const handleChange=(event)=>{
    console.log(event)
    const{name,value,file}= event.target;

    setForm((preState)=>({
        ...preState, [name]:file ? file[0] : value
    }))
}

const handleSubmit = (e) =>{
    console.log('Inside handleSubmit')
    e.preventDefault()
 }

 useEffect(()=>{
    nameRef.current.focus()
    emailRef.current.focus()
 })

    return(
        <>
        <h2>Advance React Form</h2>
        <form onSubmit={handleSubmit}>
            <label>
           First Name :  <input type='text' name='fname' value={form.fname} onChange={handleChange} required ref={nameRef}></input>
           </label>
           <br></br> <br></br>
           <label>
           Email :  <input type='email' name='email' value={form.email} onChange={handleChange} ref={emailRef} required></input></label>
       <br></br> <br></br>
<lable>
    color : <input type='color'  name='color' value={form.color} onChange={handleChange}></input>
</lable>
<br></br> <br></br>
<lable> Date : <input type='date' name = 'date'  value={form.date} onChange={handleChange}></input></lable>
<br></br> <br></br>
<lable>
    Range <input type='range' name='range' value={form.range} onChange={handleChange}></input>
</lable>
<br></br> <br></br>
<lable>
    Options : <select type='options' name='options' value={form.options} onChange={handleChange}>
    <option value="">Please Select Option</option>
    <option value="JavaScript">JavaScript</option>
    <option value="React">React</option>

    </select>
   <br></br>
   <lable>
    File : <input type='file' name='file' value={form.file} onChange={handleChange}></input>
   </lable>
</lable>

<br></br> <br></br>
           <button type='submit'>Submit</button>
        </form>
        </>
    )
}

export default AdvanceForm