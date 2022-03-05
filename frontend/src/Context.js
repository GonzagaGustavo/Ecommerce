import { React, createContext } from "react";


export const cartContext = createContext({})

export const CartProvider = ({children}) => {

    return (
        <cartContext.Provider>
            {children}
        </cartContext.Provider>
    )
}