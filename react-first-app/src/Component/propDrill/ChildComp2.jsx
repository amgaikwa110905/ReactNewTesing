import React from 'react'
import ChildComp3 from './ChildComp3'

const ChildComp2 = (props) => {
  return (
    <>
    
      <h5>I am in Child component2</h5>
      {/* Message in childComp2 : {props.message} */}
      <ChildComp3 message={props.message}/>
    </>
  )
}

export default ChildComp2
