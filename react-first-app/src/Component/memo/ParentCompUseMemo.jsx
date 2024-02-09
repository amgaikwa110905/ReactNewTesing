import React from "react";
import { useMemo } from "react";
import UseMemoComp from "./UseMemoComp";


const ParentCompUseMemo = () => {
  return (
    <>
      <h4>
        Parent Comp Use Memo
      </h4>
      <UseMemoComp number1={10} number2={20}/>
    
    </>
  )
}

export default ParentCompUseMemo
