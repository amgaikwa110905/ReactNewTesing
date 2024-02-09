import React from 'react'
import Child1ContextHook from './Child1ContextHook'
import { useState } from 'react'
import myContext from './MyContext'


const ParentUseHook = () => {
    const[message, SetMessage] = useState('This is test message')
    const[name, SetName] =useState('Amol')
  return (
    <>
    <h4>This is parent Component</h4>
    <myContext.Provider value={{message,name}}>
    <Child1ContextHook/>
    </myContext.Provider>
  
      
    </>
  )
}

export default ParentUseHook
