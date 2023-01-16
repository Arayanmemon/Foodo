import React from 'react'
import { useCartContext } from '../contexts/CartContext'
import CartItem from './CartItem'
import items from '../assets/data/items.json'
import '../assets/styles/cartScroll.css'


export default function Cart({ open, setOpen }) {
  const { cartItems } = useCartContext()
  return (
    <div className={`fixed shadow-xl rounded-md z-10 h-[90vh] w-full md:w-4/12 bg-white  ease-in margin-400 transition-all duration-500 ${open ? 'right-0' : 'right-[-100vw]'}`}>
      <div className='w-full mx-auto '>
        <button className='absolute  top-0 right-0' onClick={() => setOpen(!open)} >
          <div className='text-3xl'>
            <ion-icon name = {"close"}></ion-icon>
          </div>
        </button>
        <div className='items mt-10 grid grid-cols-1 mx-auto '>
          <div className="cartItems w-full h-[60vh] overflow-x-hidden scroll-auto overflow-scroll px-16">
          <div>
            <h1 className='text-center text-2xl'>Your Cart</h1>
          </div>
            {cartItems.map((i) => {
              const item = items.find((it) => it.id == i.id)
              if (item != null) {
                return <CartItem item={item} cartItem = {i} />
              }
            })}
          </div>

          <button className='bg-blue-500 w-3/5 text-white mx-auto py-6 mt-4 rounded-md'>Checkout</button>
        
        </div>
      </div>
    </div>
  )
}
