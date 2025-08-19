"use client"
import { createContext, useState } from "react";


export const Context = createContext();



function ContextProvider ({children}){
   const [toggle , setToggle] = useState("about")
    return (
        <Context.Provider value={{toggle , setToggle}}>
          {children}
        </Context.Provider>
    )
}


export default ContextProvider