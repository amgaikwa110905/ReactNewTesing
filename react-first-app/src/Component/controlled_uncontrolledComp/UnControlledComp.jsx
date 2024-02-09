import React from 'react'

const UnControlledComp = () => {
    const userNameRef = React.createRef()
    const passwordRef = React.createRef()

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

  return (
    <>
       <h4>Login Form UnControlled Comp</h4>
      <form onSubmit={handleSubmit} >
        <div className='row'>
            <div className='five columns'>
                <lable>
                    User Name
                </lable>
                <input type='text' placeholder='Enter User Name' ref={userNameRef} ></input>

            </div>
        </div>

        <div className='row'>
            <div className='five columns' style={{marfingTop:"20px"}}>
                <lable>
                   Password
                </lable>
                <input type='password' placeholder='Enter Password' ref={passwordRef}></input>

            </div>
        </div>

        <button type='submit' style={{marfingTop:"20px"}}>Login</button>
        </form>
    </>
  )
}

export default UnControlledComp
