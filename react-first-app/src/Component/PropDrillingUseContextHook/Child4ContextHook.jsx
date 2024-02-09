import React from 'react'
import { useContext } from 'react'
import myContext from './MyContext'

const Child4ContextHook = () => {
  const{message,name} = useContext(myContext)
  return (
    <>
      <h4>Inside Child 4</h4>
      
      Message directly from Parent Comp : {message}
      <br></br>
      Second Message from Parent Comp : {name}
    </>
  )
}

export default Child4ContextHook
