import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id , image , name , price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to = {`/product/${id}`}>
      <div className="overflow-hidden border-4 border-green-900 rounded-lg">
        <img src={image[0]} alt="" className=" w-[500px] h-[290px] hover:scale-110 transition ease-in-out rounded-lg " />
      </div>
      <p className='pt-3 pb-1 text-sm text-center' >{name}</p>
      <p className='text-sm font-medium text-center'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem
