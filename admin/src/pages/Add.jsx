import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import {toast} from 'react-toastify'

const Add = ({token}) => {
  const [image1 , setImage1] = useState(false)
  const [image2 , setImage2] = useState(false)
  const [image3 , setImage3] = useState(false)
  const [image4 , setImage4] = useState(false)
  
  const [name , setName] = useState("");
  const [description , setDescription] = useState("");
  const [price , setPrice] = useState("");
  const [category , setCategory] = useState("Personal Electronics");
  const [subCategory , setSubCategory] = useState("Smartphones");
  const [bestseller , setBestseller] = useState(false);
  const [colors , setColors] = useState([]);

  const onSubmitHandler = async (e) => {
      e.preventDefault();

      try {
        const formData = new FormData()
        formData.append("name" , name)
        formData.append("description" , description)
        formData.append("price" , price )
        formData.append("category" , category)
        formData.append("subCategory" , subCategory)
        formData.append("bestseller" , bestseller)
        formData.append("colors" , JSON.stringify(colors))

        image1 && formData.append("image1" , image1)
        image1 && formData.append("image2" , image2)
        image1 && formData.append("image3" , image3)
        image1 && formData.append("image4" , image4)

        const response  = await axios.post(backendUrl + "/api/product/add" , formData,{headers : {token}})
        
        if(response.data.success){
            toast.success(response.data.message)
            setName('')
            setDescription('')
            setImage1(false)
            setImage2(false)
            setImage3(false)
            setImage4(false)
            setPrice('')
        } else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }


  return (
    <form onSubmit = {onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
    <div>
      <p className='mb-2'>Upload Image</p>
    </div>

    <div className='flex gap-3'>
      <label htmlFor="image1">
        <img className = ' border-2 border-green-900 p-4 w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
        <input onChange = {(e) =>setImage1(e.target.files[0])} type="file" id="image1" hidden/>
      </label>
      <label htmlFor="image2">
        <img className = 'border-2 border-green-900 p-4 w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
        <input onChange = {(e) =>setImage2(e.target.files[0])} type="file" id="image2" hidden/>
      </label>
      <label htmlFor="image3">
        <img className = 'border-2 border-green-900 p-4 w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
        <input onChange = {(e) =>setImage3(e.target.files[0])} type="file" id="image3" hidden/>
      </label>
      <label htmlFor="image4">
        <img className = 'border-2 border-green-900 p-4 w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
        <input onChange = {(e) =>setImage4(e.target.files[0])} type="file" id="image4" hidden/>
      </label>
    </div>

    <div className='w-full'>
      <p className='mb-2'>Product Name</p>
      <input onChange = {(e) => setName(e.target.value)} value = {name} className = 'w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type Here' required/>
    </div>

    <div className='w-full'>
      <p className='mb-2'>Product Description</p>
      <textarea onChange = {(e) => setDescription(e.target.value)} value = {description} className = 'w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write Description here' required/>
    </div>

    <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
    <div>
      <p className='mb-2'>Product Category</p>
      <select onChange = {(e) => setCategory(e.target.value)}  className='w-full px-3 py-2'>
        <option value="Personal Electronics">Personal Electronics</option>
        <option value="Computing">Computing</option>
        <option value="Smart Home & Entertainment">Smart Home & Entertainment</option>
      </select>
    </div>

    <div>
      <p className='mb-2'>Sub Category</p>
      <select onChange = {(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
        <option value="Smartphones">Smartphones</option>
        <option value="Wearables">Wearables</option>
        <option value="Audio">Audio</option>
        <option value="Tablets">Tablets</option>
        <option value="Laptops">Laptops</option>
        <option value="Desktops">Desktops</option>
        <option value="Accessories">Accessories</option>
        <option value="Monitors">Monitors</option>
        <option value="Smart Home Devices">Smart Home Devices</option>
        <option value="Security">Security</option>
        <option value="Streaming Devices">Streaming Devices</option>
        <option value="Projectors">Projectors</option>
      </select>
    </div>

    <div>
      <p className='mb-2'>Product Price</p>
      <input onChange = {(e) => setPrice(e.target.value)} value = {price} className = 'w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='108' />
    </div>
    </div>

    <div>
      <p>Product Colors</p>
      <div className='flex gap-3 mt-3'>
        <div onClick = {() => setColors(prev => prev.includes("Black") ? prev.filter(item => item !== "Black") : [...prev,"Black"])} >
          <p className={`${colors.includes("Black") ? 'bg-green-700 text-white' : 'bg-green-400 text-black'} rounded-full px-3 py-2 cursor-pointer`}>Black</p>
        </div>
        <div onClick = {() => setColors(prev => prev.includes("White") ? prev.filter(item => item !== "White") : [...prev,"White"])}>
          <p className={`${colors.includes("White") ? 'bg-green-700 text-white' : 'bg-green-400 text-black'} rounded-full px-3 py-2 cursor-pointer`}>White</p>
        </div>
        <div onClick = {() => setColors(prev => prev.includes("Silver") ? prev.filter(item => item !== "Silver") : [...prev,"Silver"])}>
          <p className={`${colors.includes("Silver") ? 'bg-green-700 text-white' : 'bg-green-400 text-black'} rounded-full px-3 py-2 cursor-pointer`}>Silver</p>
        </div>
        <div onClick = {() => setColors(prev => prev.includes("Gold") ? prev.filter(item => item !== "Gold") : [...prev,"Gold"])}>
          <p className={`${colors.includes("Gold") ? 'bg-green-700 text-white' : 'bg-green-400 text-black'} rounded-full px-3 py-2 cursor-pointer`}>Gold</p>
        </div>
        <div onClick = {() => setColors(prev => prev.includes("Others") ? prev.filter(item => item !== "Others") : [...prev,"Others"])}>
          <p className={`${colors.includes("Others") ? 'bg-green-700 text-white' : 'bg-green-400 text-black'} rounded-full px-3 py-2 cursor-pointer`}>Others</p>
        </div>
      </div>
    </div>

    <div className='mt-2 flex gap-2'>
      <input onChange = {() => setBestseller(prev => !prev)} checked = {bestseller} type="checkbox" id='bestseller'/>
      <label className='cursor-pointer' htmlFor="bestseller">Mark as BestSeller</label>
    </div>

      <button type = 'submit' className='w-28 py-3  mt-4 bg-green-900 rounded-full text-white'>Add Product</button>
    
    </form>
  )
}

export default Add
