import React from 'react'
import chef1 from '../assets/images/chef1.png'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Hero() {
  return (
    <div>

      <div className='flex mx-auto justify-between items-center pt-10 h-[80vh]'>
        <div className="text-center pl-32 space-y-3 space-x-1 py-20">
          <h1 className='text-5xl font-bold'>Food you love,</h1>
          <h1 className='text-5xl font-bold'>delivered to you</h1>
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, inventore obcaecati vitae culpa quis labore autem eius recusandae</p>
          <button className='bg-orange-400 hover:bg-orange-500 font-bold text-[1rem] text-white rounded-md px-4 py-2'>Order Now</button>
        </div>
        <div className="pr-40">
          <img src={chef1} alt="chef chachu" className='' />
        </div>
      </div>





      {/* {cartItems.map((i) => {return i.id})}   */}
    </div>
  )
}
