
import React, { useState } from "react";
import './../styles/App.css';
import { AuthContext } from "./Auththenticate";
import ChekBox from "./ChekBox";
const App = () => {
  const [auth,setAuth]= useState(false);
  const authText= "You are now authenticated, you can proceed"
  const noAuth="you are not authenticated"
  return (
    <AuthContext.Provider value={{auth,setAuth,authText,noAuth}}>

    <div>

           <h1>Click on the checkbox to get authenticaed</h1>
           <ChekBox/>     
    </div>
    </AuthContext.Provider>
  )
}

export default App
