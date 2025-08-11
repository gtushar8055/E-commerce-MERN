import React from 'react'
import {assets} from '../assets/assets'

const Hero = () => {
    return (
      <div className="flex flex-col sm:flex-row  border-green-900 border-[5px] rounded-[105px] overflow-hidden max-w-[90%] mx-auto sm:max-w-[95%]">
        {/* Hero Section ki right side (photo wali) */}
        <img src={assets.hero_img} alt="" className='w-full sm:w-1/2 h-auto object-cover sm:rounded-r-none sm:rounded-l-[100px]'/>
      {/* Hero Section ki left side (Blank Wali) */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10">
        <div className="text-[#166534]">
            <div className="flex items-center gap-2">
                {/* <p className='w-8 md:w-11 h-[2px] bg-[#166534]'></p> */}
                <p className='font-medium text-sm md:text-base'>CUSTOMER'S ALL TIME FAVOURITE :)</p>
            </div>

            <h1 className="font-serif text-3xl sm:py-3 lg:text-5xl leading-relaxed ">Brand New Gadgets</h1>
            <div className="flex items-center gap-2">
                <p className='font-semibold txet-sm md:text-base'>BUY NOW 🛒</p>
                {/* <p className='w-8 md:w-11 h-[1px] bg-[#166534]'></p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
