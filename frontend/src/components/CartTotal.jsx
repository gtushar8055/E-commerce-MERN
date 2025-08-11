import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title'

const CartTotal = () => {

    const {currency , delivery_fee , getCartAmount} = useContext(ShopContext)
  return (
    <div className='w-full'>
      <div className="text-2xl">
        <Title text1 = {'TOTAL'} text2 = {'AMOUNT'}/>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
            <p className='text-green-900'>Subtotal</p>
            <p className='text-green-900'>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <p className='text-green-900'>Shipping Fee</p>
            <p className='text-green-900'>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
            <b className='text-green-900'>Total</b>
            <b className='text-green-900'>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
