import React from 'react'
import { useState } from 'react'

const ControlledComp = () => {

    const[userName,SetUserName] = useState('')
    const[userPassword,SetUserPassword]= useState('')

    const handleSubmit = (e) =>{
        alert('{userName}');
    }

  return (
    <>
      <h4>Login Form</h4>
      <form onSubmit={handleSubmit}>
        <div className='row'>
            <div className='five columns'>
                <lable>
                    User Name
                </lable>
                <input type='text' placeholder='Enter User Name' value={userName} onChange={(e)=>SetUserName(e.target.value)}></input>

            </div>
        </div>

        <div className='row'>
            <div className='five columns' style={{marfingTop:"20px"}}>
                <lable>
                   Password
                </lable>
                <input type='password' placeholder='Enter Password' value={userPassword} onChange={(e)=>SetUserPassword(e.target.value)}></input>

            </div>
        </div>

        <button type='submit' style={{marfingTop:"20px"}}>Login</button>
        </form>
    </>
  )
}

export default ControlledComp
