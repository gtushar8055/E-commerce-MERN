import React from 'react'
import {assets} from '../assets/assets'

const Title = ({text1 , text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <img src={assets.boy_icon} alt="" className='w-12 m-auto ' />
      <p className='text-black font-serif'>{text1} <span className='text-green-900 font-serif'>{text2}</span></p>
      {/* <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p> */}
      {/* <p className="text-green-900 text-2xl tracking-widest">:)</p> */}
      <img src={assets.girl_icon} alt="" className='w-12 m-auto ' />

    </div>
  )
}

export default Title
