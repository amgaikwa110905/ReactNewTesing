import React from 'react'
import { useMemo } from 'react'//useMemo is hook

const UseMemoComp = ({number1,number2}) => {
    const result = useMemo(()=>{
            let sum = 0
            sum = number1+number2
            return sum
        },[number1,number2]
    )
  return (
    <>
      <h4>Use Memo Comp</h4>
      Result : {result}
    </>
  )
}

export default UseMemoComp
