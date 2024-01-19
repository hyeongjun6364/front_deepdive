import React, { createContext, useState } from 'react'
const userContext = createContext({
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckOut:()=>{},
    hideCheckOut:()=>{},
})
export function UserProgressContextProvider({children}) {
    const [userProgress,setUserProgress] = useState('')
    const userCtx = {
        progress:userProgress,
        showCart,
        hideCart,
        showCheckOut,
        hideCheckOut
    }
    function showCart(){
        setUserProgress('cart')
    }
    function hideCart(){
        setUserProgress('')
    }
    function showCheckOut(){
        setUserProgress('checkout')
    }
    function hideCheckOut(){
        setUserProgress('')
    }
  return (
    <userContext.Provider value={userCtx}>
        {children}
    </userContext.Provider>
  )
}

export default userContext