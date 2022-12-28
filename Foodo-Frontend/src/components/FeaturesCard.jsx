import React from 'react'

export default function FeaturesCard(props) {
  return (
        <div className='bg-white md:w-5/6 rounded-md py-6'>
               <div className="w-5/6 mx-auto ">
                       
                      <div className='text-3xl rounded-full bg-white'>
                       <ion-icon name={props.name}></ion-icon>
                      </div>
                      
                       <h1 className='text-xl font-medium mb-4'>{props.heading}</h1>
                       <p className='text-sm'>
                               {props.description}
                       </p>
               </div>
        </div>
  )
}
