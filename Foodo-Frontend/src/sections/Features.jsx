import React from 'react'
import FeaturesCard from '../components/FeaturesCard'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Features() {
  return (
    <>
      <div className='text-center'>
        <h1 className='text-lg md:text-4xl font-extrabold mb-4'>
          Why Choose Us
        </h1>
        <p className='text-sm md:text-xl md-4 mb-8 block max-w-[50%] mx-auto'>
          It is a long established fact that a reader will be distracted by readable content
          <br />
          when looking at it's layout
        </p>
        <div className='hidden md:grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-3 md:space-x-8 w-4/6 mx-auto'>
          <FeaturesCard name="fast-food" description="It is a long established fact that a reader will be distracted by readable content" heading="Eat Good Food" />
          <FeaturesCard name="beer" description="It is a long established fact that a reader will be distracted by readable content" heading="Best Quality" />
          <FeaturesCard name="pizza" description="It is a long established fact that a reader will be distracted by readable content" heading="Fastest Delivery" />


        </div>
        <div className='md:hidden grid z-0 grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-3 md:space-x-8 w-4/6 mx-auto'>

          <Carousel autoplay={true} showArrows={true} interval={200} showThumbs={false}>
            <div>
              <FeaturesCard name="fast-food" description="It is a long established fact that a reader will be distracted by readable content" heading="Eat Good Food" />
            </div>


            <div>

              <FeaturesCard name="beer" description="It is a long established fact that a reader will be distracted by readable content" heading="Best Quality" />

            </div>
            <div>

              <FeaturesCard name="pizza" description="It is a long established fact that a reader will be distracted by readable content" heading="Fastest Delivery" />
            </div>
          </Carousel>


        </div>

      </div>
    </>
  )
}
