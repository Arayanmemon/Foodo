import React from 'react'

export default function FeaturesCard(props) {
  return (
        <div className='bg-white md:w-4/6 rounded-md py-6 mx-8'>
               <div className="w-4/6 mx-auto ">
                       
                      <div className=''>
                        <img src={`/icons/` + props.name + '.png'} alt="" className='mx-auto rounded-full bg-gray-200 p-2' />
                      </div>
                      
                       <h1 className='text-xl font-medium mb-4'>{props.heading}</h1>
                       <p className='text-sm'>
                               {props.description}
                       </p>
               </div>
        </div>
  )
}
