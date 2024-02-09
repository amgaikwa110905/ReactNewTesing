import React from "react";

const MemoComp =(props) =>{
    return(
       // console.log({props.name});
        <>
        <h4>In memo Comp</h4>
        Name : {props.name}
        </>
    )
}

//export default MemoComp
export default React.memo(MemoComp)
