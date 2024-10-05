import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div >
            <img src={assets.logo} alt="" />
            <p className='w-full md:2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor facere, eligendi libero explicabo maiores amet?
            </p>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+123456789</li>
            <li>ragibnehal2510@gmail.com</li>
            </ul>
        </div>
       
        <div>
            <hr  />
            <p className='py-5 text-sm text-center'> Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer