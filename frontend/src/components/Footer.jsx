import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo} alt="" className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 font-serif text-green-900 '>
                Discover the latest gadgets, smart devices, and tech accessories - all in one place. <span className='text-black'>Gadget Hub </span> brings you innovation, quality, and unbeatable deals for every tech lover.
            </p>
        </div>

        <div>
            <p className="text-ul font-serif mb-5 font-black">COMPANY</p>
            <ul className="font-serif flex flex-col gap-1 text-green-700">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className="text-xl font-serif text-green-900 mb-5">CONTACT-US</p>
            <ul className="flex flex-col gap-1 text-black-700">
                <li>+91 9033336933</li>
                <li>gadgethubofficial@gmail.com</li>
            </ul>
        </div>


      </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025 @ Gadget Hub - All Right Reserved (Tushar Gupta)</p>
        </div>
    </div>
  )
}

export default Footer
