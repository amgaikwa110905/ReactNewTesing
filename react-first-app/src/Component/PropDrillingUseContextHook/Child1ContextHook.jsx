import React from 'react'
import Child2ContextHook from './Child2ContextHook'

const Child1ContextHook = () => {
  return (
    <>
      <h3>Child 1 Comp</h3>
      <Child2ContextHook/>
    </>
  )
}

export default Child1ContextHook
