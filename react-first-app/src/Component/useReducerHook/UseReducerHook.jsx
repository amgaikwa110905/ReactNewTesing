import React from 'react'
import { useReducer } from 'react'

const UseReducerHook = () => {
//this is used for add count in cart

const reducer = (count,action) =>{
   switch(action){
    case 'add':
        return count+1;
        break;

    case 'sub':
        return count - 1;
        break;
        
    case 'reset':
        return 0;
        break;

    default: break;   
   } 

}
    const[count, dispatch] = useReducer(reducer,0)

  return (
    <>
      <h2>Use Reducer Hook</h2>
      count: {count}
      <div>
      <button onClick={()=>dispatch('add')}>ADD</button>
      <button onClick={()=>dispatch('sub')}>SUB</button>
      <button onClick={()=>dispatch('reset')}>RESET</button>
      </div>
    </>
  )
}

export default UseReducerHook
