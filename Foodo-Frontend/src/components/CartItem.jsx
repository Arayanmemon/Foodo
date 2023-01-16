import React from 'react'
import items from '../assets/data/items.json'
import { useCartContext } from '../contexts/CartContext'
import { formatPrice } from '../utilities/formatPrice'
export default function CartItem({ item, cartItem }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCartContext()
  return (
    <div className='flex flex-row justify-between'>
      {
        <>
          <div>

            <img src={item.img} alt={item.name} className="w-10 rounded-md h-10 my-4" />

          </div>


          <div className='flex items-center text-center font-bold'>

            <p>{item.name} </p>

          </div>
          <div className='flex flex-col space-y-0 items-center justify-center'>

            <p>{formatPrice(cartItem.quantity * item.price)}</p> 

            <div className='flex flex-row'>
              <button onClick={() => decreaseQuantity(item.id)} className='bg-gray-200 px-2 mx-1 rounded-md'> - </button>
              <button onClick={() => removeItem(item.id)}> {cartItem.quantity} </button>
              <button onClick={() => increaseQuantity(item.id)} className='bg-gray-200 px-2 mx-1 rounded-md'>+</button>
            </div>

          </div>
        </>

      }
    </div>
  )
}
