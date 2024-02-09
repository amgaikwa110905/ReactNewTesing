import React from 'react'
import { useCallback } from 'react'

const UseCallBackHook = () => {

    const handleClick = useCallback(
        ()=>{
            console.log('Button Clicked')
        },[]
    )
  return (
    <>
      <h2>Use Call Back Hook</h2>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default UseCallBackHook
