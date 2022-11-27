import { createContext,  useState, useContext } from "react";

export const MenuContext = createContext()


export  function MenuProvider({children}){
    const [menuOpen, setMenuOpen] = useState(false)

    const update = ()=>{
        setMenuOpen(!menuOpen)
    }
    const value = {
        menuOpen,
        update
    }
    return(
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}
export function useMenu(){
    const context = useContext(MenuContext)
    if(context === undefined){
        throw new Error("useCount must be used within a count Provider")
    }
    return context
}

