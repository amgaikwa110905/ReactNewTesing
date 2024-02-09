import React from "react";
import './StylingComp.css';

const StylingComp = () =>{

    const test = {
        color:"blue",
        fontSize : "50px"
    }
    return(
            <>
             {/* Apply inline CSS */}
            <h1 style={{color:"red"}}>
                Styling to Comp
            </h1>

            {/* apply internal CSS */}
            <h2 style={test}> Applying internal css</h2>

            {/* apply External Css */}
            <h3 className="Style-Comp">Applying External CSS</h3>
            </>

          

    )
}

export default StylingComp;