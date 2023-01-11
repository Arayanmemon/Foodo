import React from 'react'
import items from '../assets/data/items.json'
export default function CartItem({item}) {
  return (
    <div className='flex flex-row'>
        {
                <>
           <img src={item.img} alt={item.name} className="w-8 h-8" />
           <p>{item.name} </p>
           <p>{item.price}</p>
                </>
        
        }
    </div>
  )
}
