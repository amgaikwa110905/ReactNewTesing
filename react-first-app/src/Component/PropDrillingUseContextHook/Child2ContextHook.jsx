import React from 'react';
import Child3ContextHook from './Child3ContextHook'

const Child2ContextHook = () => {
  return (
    <>
    <h4>Insdie Child 2 Comp</h4>
      <Child3ContextHook/>
    </>
  )
}

export default Child2ContextHook
