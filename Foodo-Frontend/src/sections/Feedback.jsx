import React from 'react'
import FeedbackCard from '../components/FeedbackCard'

function Feedback() {
  return (
    <>
    <div className='w-[80vw] text-center mx-auto my-20'>
      <div className='w-[50vw] mx-auto'>
      <h1 className='my-5 font-extrabold text-4xl'>Food Lovers Feedback</h1>
      <p className='text-xl pb-5'>It is a long established fact that a reader will distracted by the readable content of a page when looking at its layout.</p>
      </div>
      
      <div className='flex md:justify-around items-center my-10 flex-col md:flex-row gap-4'>
        
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
      </div>
    </div>
    </>
  )
}

export default Feedback

