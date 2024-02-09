import React from 'react'
import ChildComponent from './ChildComponent'
import { useState } from 'react'

const ParentComponent = () => {

    const[message, setMessage] = useState('Welcome to CodeMind Tech')

  return (
    <>
      <h2>I am in parent Component</h2>
      {/* message:{message} */}
      <ChildComponent sendMessage={message}/>
    </>
  )
}

export default ParentComponent
