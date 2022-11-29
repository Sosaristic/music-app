import {createContext, useState, useContext} from "react"

export const SideBarContext = createContext()

export function SideBarProvider({children}){
const [sideBar, setSideBar] = useState(false)

const updateSideBar = ()=>{
    setSideBar(!sideBar)
}
const sideValue = {sideBar, updateSideBar}
return (
    <SideBarContext.Provider value={sideValue}>
        {children}
    </SideBarContext.Provider>
)
}

export function useSideBar(){
    const context = useContext(SideBarContext)
    if(context === undefined){
        throw new Error("useCount must be used within a count Provider")
    }
    return context
}
