import React from 'react'
import { useCartContext } from '../contexts/CartContext'
export default function Hero() {
  const {cartItems , addItem} = useCartContext()
  return (
    <div>
      hero <br />
      {cartItems.map((i) => {return i.id})}  
    </div>
  )
}
