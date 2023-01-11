import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CartContext = createContext({})

export function useCartContext() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cartItems, setCart] = useState([""]);

    function addItem(id) {
        if(cartItems.find((item) =>  item.id === id ) == null){
            setCart(() => {
                return [...cartItems, { "id": id, "quantity": 1 }]
            })
        }
    }


    return (<CartContext.Provider value={{ cartItems, addItem }}>
        {children}
    </CartContext.Provider>
    )
}