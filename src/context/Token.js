import {createContext, useState, useContext} from "react"

const TokenContext = createContext()

export function TokenProvider({children}){
const [token, setToken] = useState("")

const updateToken = ()=>{
    
}
const tokenValue = {token, updateToken}
return (
    <TokenContext.Provider value={tokenValue}>
        {children}
    </TokenContext.Provider>
)
}

export function useToken(){
    const context = useContext(Token)
    if(context === undefined){
        throw new Error("useCount must be used within a count Provider")
    }
    return context
}
