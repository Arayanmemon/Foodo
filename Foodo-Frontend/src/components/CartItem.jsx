import React from 'react'
import items from '../assets/data/items.json'
import { useCartContext } from '../contexts/CartContext'
export default function CartItem({item , cartItem }) {
  const {increaseQuantity , decreaseQuantity , removeItem} = useCartContext()
  return (
    <div className='flex flex-row'>
        {
                <>
           <img src={item.img} alt={item.name} className="w-8 h-8" />
           <p>{item.name} </p>
           <p>{item.price}</p>
          <p>{cartItem.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>++</button>
          <button onClick={() => decreaseQuantity(item.id)}>--</button>
          <button onClick={() => removeItem(item.id)}>remove item</button>

                </>
        
        }
    </div>
  )
}
