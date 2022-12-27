import React from 'react'

function Feedback() {
  return (
    <>
    <div className='w-[80vw] text-center m-auto my-10'>
      <h1 className='text-3xl'>Food Lovers Feedback</h1>
      <p>It is a long established fact that a reader will distracted by the readable content of a page when looking at its layout.</p>
      <div className='flex justify-around items-center my-10'>
        <div className='w-1/4 h-auto shadow-lg bg-gray-200'>
            <h3>Jeeny Wilson</h3>
            <small>Date: 25.06.2022</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aspernatur nesciunt sequi</p>
        </div>
        <div className='w-1/4 h-auto shadow-lg bg-gray-200'>
            <h3>Jeeny Wilson</h3>
            <small>Date: 25.06.2022</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aspernatur nesciunt sequi</p>
        </div>
        <div className='w-1/4 h-auto shadow-lg bg-gray-200'>
            <h3>Jeeny Wilson</h3>
            <small>Date: 25.06.2022</small>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aspernatur nesciunt sequi</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Feedback

