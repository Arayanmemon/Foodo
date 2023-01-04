import React from 'react'
import { useCartContext } from '../contexts/CartContext'
export default function Hero() {
  const {cartItems , addItem} = useCartContext()
  return (
    <div>
      
      <p>{
      cartItems.map((i) => {
        return "Id = " + i['id'] + " Quantity = " + i['quantity'] + "\n" 
      })
      }</p>
    <button onClick={() => addItem(1)}>button</button>
    </div>
  )
}
