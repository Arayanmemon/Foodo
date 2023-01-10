import React from 'react'
import { useState } from 'react'
import logo from '/images/logo.png'
import Cart from '../components/Cart'

export default function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <>

            <nav className='bg-white top-0 '>
                <div className='px-8  lg:px-16 mx-auto py-4'>
                    <div className='flex flex-row items-center justify-between'>
                        <div className='md:hidden text-2xl'>
                            <div className="absolute top-6" onClick={() => setOpen(!open)}>

                                <ion-icon name={open ? "close" : "menu"}></ion-icon>

                            </div>
                        </div>
                        <div className='ml-16 md:ml-0 bg-white'>
                            <img src={logo} alt="logo" className='w-[3rem]' />
                        </div>



                        <div className='hidden md:flex items-center md:space-x-4'>
                            <a href="">
                                <p>Home</p>
                            </a><a href="">
                                <p>Packages</p>
                            </a><a href="">
                                <p>About</p>
                            </a><a href="">
                                <p>Contact Us</p>
                            </a>
                        </div>




                        <div classNamen='flex md:space-x-4 items-center'>
                        <button className='bg-orange-400 hover:bg-orange-500 font-bold text-[1rem] text-white rounded-md px-4 py-2'>Cart</button>

                            <button className=' rounded-md font-bold text-[1rem] px-4 py-2'>Login</button>
                            <button className='bg-orange-400 hover:bg-orange-500 font-bold text-[1rem] text-white rounded-md px-4 py-2'>Sign up</button>
                        </div>
                    </div>



                </div>
                <div className={`md:hidden text-center absolute w-[60%] bg-gray-100 z-[1] 
                                 h-[100vh] transition-all ease-in duration-500 text-[1.2rem]
                                 ${open ? 'left-[0px]' : 'left-[-500px]'}`}
                     >
                    <div className='flex flex-col space-y-8 mt-4'>
                        <a  href="#">
                            <p>Home</p>
                        </a><a href="#">
                            <p>Packages</p>
                        </a><a href="#">
                            <p>About</p>
                        </a><a href="#">
                            <p>Contact Us</p>
                        </a>
                    </div>
                </div>
                
                <Cart />
            </nav>

        </>
    )
}
