import React from 'react'
import {assets} from "../assets/assets"

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:test-sm md:text-base text-green-900'>
      <div>
      <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5' />
      <p className='font-semibold '>Seamless Exchange Guarantee</p>
      <p className="text-green-500">We Offer you the best Exchange Policy</p>
      </div>
      <div>
      <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5' />
      <p className='font-semibold '>100% Original Products</p>
      <p className="text-green-500">You Get , What you Order</p>
      </div>
      <div>
      <img src={assets.support_img} alt="" className='w-12 m-auto mb-5' />
      <p className='font-semibold '>24x7 Customer Support</p>
      <p className="text-green-500">We are with you anytime anyday</p>
      </div>
    </div>
  )
}

export default OurPolicy
