import React from 'react'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem'
import items from '../assets/data/items.json'


export default function Cart({ open, setOpen }) {
  const { cartItems } = useCartContext()
  return (
    <div className={`absolute z-10  h-[100vh] w-full md:w-2/5 bg-gray-400 bg-opacity-50 ease-in margin-400 transition-all duration-500 ${open ? 'left-0' : 'left-[-100vw]'}`}>
      <div className='w-4/5 mx-auto'>
        <button className='absolute  top-0 right-0' onClick={() => setOpen(!open)} >
          <div className='text-3xl'>
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </button>
        <div className='items mt-10 grid grid-cols-1 mx-auto '>
          <div>
            <h1 className='text-center text-2xl'>Your Cart</h1>
          </div>
          {cartItems.map((i) => {
            const item = items.find((it) => it.id == i.id)
            if (item != null) {
              return <CartItem item={item} />
            }
          })}



        </div>
      </div>
    </div>
  )
}
