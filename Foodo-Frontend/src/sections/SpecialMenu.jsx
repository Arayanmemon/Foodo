import React from 'react'
import CardCarousel from '../components/CardCarousel'
import ItemCard from '../components/ItemCard'
import items from '../assets/data/items.json'

export default function SpecialMenu() {
  return (
    <div className='text-center mt-4'>
      <h1 className='text-lg md:text-4xl font-extrabold mb-4'>
        Our Special Menu
      </h1>
      <p className='text-sm md:text-lg md-4 mb-8 block max-w-[50%] mx-auto'>
        It is a long established fact that a reader will be distracted by readable content
        <br />
        when looking at it's layout
      </p>

        <CardCarousel>
          {
            items.map((i) => {
             return  <ItemCard item={i} />
              
            })
          }
        </CardCarousel>
    </div>
  )
}
