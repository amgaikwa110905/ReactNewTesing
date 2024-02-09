import React from 'react'
import ChildComp2 from './ChildComp2'
import { useState } from 'react'

const ChildComponent = (props) => {

    const[message, setMessage]= useState('')

  return (
    <>
      <h2>I am in child Component</h2>
      {/* Message in Child Comp:{props.sendMessage} */}
      <ChildComp2 message={props.sendMessage}/>
    </>
  )
}

export default ChildComponent
