import { useContext, useState } from "react";
import { createContext } from "react";

export const MyContext = createContext()

export const MyProvider = ({children}) => {
    
    const [darkMode , setDarkMode] = useState(true)
    const [operator , setOperator] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    const toggleOperator = () => {
        setOperator(!operator)
    }
    const data = {
        darkMode ,  toggleDarkMode , 
        operator , toggleOperator
    }
    // const swetchMode = () => {
    //     darkMode ?   "bg-wihte" : "bg-black"
    // }

    return(
        <>
            <MyContext.Provider value={ data}>
                {children}
            </MyContext.Provider>
        </>
    )

}

export const useAppContext = () => useContext(MyContext)

