import React from 'react'
import items from '../assets/data/items.json'
import CartItem from '../components/CartItem'
import ItemCard from '../components/ItemCard'
export default function Menu() {
  // const [items , setItems] = React.useState([])
  // React.useEffect(() => {
  //   fetch('http://localhost:8080/items')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setItems(data)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // } , [])
  return (
    <div className='w-4/5 mx-auto mb-8 bg-gray-100'>
      <div className='grid grid-cols-1 md:grid-cols-3 mb-8 '>
            <div className='shadow-lg rounded-[2rem]'>
                <img src="/images/burgerportrait.jpg" className='rounded-[2rem]' />
            </div>
            <div className='col-span-2 w-4/5 text-left md:ml-32'>
              <h1 className='text-lg md:text-4xl font-bold'>People who love to eat are always the best people</h1>
              <p className='text-xl font-extralight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A molestias id quidem est praesentium quisquam distinctio quibusdam doloremque tempore provident laboriosam voluptate, voluptatum earum perspiciatis iure facilis illum doloribus dignissimos?</p>
            </div>
      </div>
      <img src="/images/banner.jpg" alt="" />

      <div className='grid grid-cols-3 mt-4 space-x-2 space-y-4'>
        {items.map((i) => {
          return <ItemCard item={i} />
        })}
      </div>
    </div>
  )
}
