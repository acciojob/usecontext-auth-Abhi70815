// import react from react
import React from "react";
import { useContext } from "react"
import { AuthContext } from "./Auththenticate"


const ChekBox=()=>{
    const data= useContext(AuthContext);
    const {auth,setAuth,authText,noAuth} = data;
    
    const handleCheck=(e)=>{
     console.log(e.target.checked);
     setAuth(e.target.checked)
    }
    return <div>
        {auth ? <p className="authText">{authText}</p>: <p>{noAuth}</p>}
        <input type="checkbox" onChange={handleCheck}/>
        <p  style={{display:"inline"}}>I'am not a robot</p>
    </div>
}

export default ChekBox