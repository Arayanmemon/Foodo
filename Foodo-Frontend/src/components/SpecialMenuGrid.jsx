import React from 'react'
import ItemCard from './ItemCard'
export default function SpecialMenuGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-4/5 mx-auto">
          <ItemCard />
          <ItemCard />
          <ItemCard />

    </div>
  )
}
