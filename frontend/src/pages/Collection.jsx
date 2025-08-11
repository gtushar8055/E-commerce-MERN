import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import {assets} from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products , search , showSearch }  = useContext(ShopContext);
  const [showFilter , setShowFilter] = useState(false);
  const [filterProducts , setFilterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);


  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(category.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  useEffect(() => {
    applyFilter();
  } , [category , subCategory , search , showSearch , products])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filter Options */}
        <div className="min-w-60">
          <p onClick= {() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
            <img className = {`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}src={assets.dropdown_icon} alt="" />
          </p>

          {/* Categories */}
          <div className={`border border-green-900 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block rounded-lg`} >
             <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
             <div className="flex flex-col gap-2 text-sm font-light text-green-900">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Personal Electronics'} onChange = {toggleCategory}/>Personal Electronics
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Computing'} onChange = {toggleCategory}/>Computing
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Smart Home & Entertainment'} onChange = {toggleCategory}/>Smart Home & Entertainment
              </p>
             </div>
          </div>
          {/* SubCategory */}
          <div className={`border border-green-900 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block rounded-lg`} >
             <p className='mb-3 text-sm font-medium'>TYPE</p>
             <div className="flex flex-col gap-2 text-sm font-light text-green-900">
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Smartphones'} onChange = {toggleSubCategory}/>Smartphones
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Wearables'} onChange = {toggleSubCategory}/>Wearables
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Audio'} onChange = {toggleSubCategory}/>Audio
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Tablets'} onChange = {toggleSubCategory}/>Tablets
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Laptops'} onChange = {toggleSubCategory}/>Laptops
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Desktops'} onChange = {toggleSubCategory}/>Desktops
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Accessories'} onChange = {toggleSubCategory}/>Accessories
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Monitors'} onChange = {toggleSubCategory}/>Monitors
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Smart Home Devices'} onChange = {toggleSubCategory}/>Smart Home Devices
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Security'} onChange = {toggleSubCategory}/>Security
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Streaming Devices'} onChange = {toggleSubCategory}/>Streaming Devices
              </p>
              <p className="flex gap-2">
                <input type="checkbox" className="w-3" value = {'Projectors'} onChange = {toggleSubCategory}/>Projectors
              </p>
             </div>
          </div>
        </div>

        {/* Right side --- photo wala */}

        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1 = {'JACKPOT'} text2 = {'COLLECTION'}/>
          </div>

          {/* Map Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg_grid-cols-4 gap-4 gap-y-6">
            {
              filterProducts.map((item , index) => (
                 <ProductItem key = {index} id = {item._id} image = {item.image} name={item.name} price = {item.price}/>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Collection
