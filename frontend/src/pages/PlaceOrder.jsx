import React, { useContext, useState } from "react";
import axios from 'axios'
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import {ShopContext} from '../context/ShopContext'
import {toast} from 'react-toastify'

const PlaceOrder = () => {

  const [method , setMethod] = useState('cod');
  const {navigate , backendUrl , token , cartItems , setCartItems , getCartAmount , delivery_fee , products} = useContext(ShopContext)
  const [formdata, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (event) => {
      const name = event.target.name
      const value = event.target.value 

      setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
      event.preventDefault()
      try {
        let orderItems = []

        for(const items in cartItems){
          for(const item in cartItems[items]){
            if(cartItems[items][item] > 0){
              const itemInfo = structuredClone(products.find(product => product._id === items))
              if(itemInfo){
                itemInfo.color = item
                itemInfo.quantity = cartItems[items][item]
                orderItems.push(itemInfo)
              }
            }
          }
        }

        let orderData = {
          address : formdata,
          items : orderItems,
          amount : getCartAmount() + delivery_fee
        }

        switch(method){
          // API calls for COD

          case 'cod':
            const response = await axios.post(backendUrl + '/api/order/place' , orderData , {headers : {token}})
            if(response.data.success){
              setCartItems({})
              navigate('/orders')
            } else{
              toast.error(response.data.message)
            }
            break;

          case 'stripe':
            const responseStripe = await axios.post(backendUrl + '/api/order/stripe' , orderData , {headers : {token}})
            if(responseStripe.data.success){
                const {session_url} = responseStripe.data
                window.location.replace(session_url)
            } else{
              toast.error(responseStripe.data.message)
            }
            break;
            

          default:
            break;
          
        }

      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }

  return (
    <form onSubmit = {onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name = 'firstName'
            value = {formdata.firstName}
            type="text"
            className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
            placeholder="First Name"
          />
          <input
            required
            onChange={onChangeHandler}
            name = 'lastName'
            value = {formdata.lastName}
            type="text"
            className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
            placeholder="Last Name"
          />
        </div>

        <input
          required
          onChange={onChangeHandler}
          name = 'email'
          value = {formdata.email}
          type="email"
          className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
          placeholder="Email Address"
        />
        <input
          required
          type="text"
          onChange={onChangeHandler}
          name = 'street'
          value = {formdata.street}
          className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
          placeholder="Street/Colony/Society"
        />

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name = 'city'
            value = {formdata.city}
            type="text"
            className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name = 'state'
            value = {formdata.state}
            type="text"
            className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name = 'zipcode'
            value = {formdata.zipcode}
            type="number"
            className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
            placeholder="PIN Code"
          />
          <input
            required
            onChange={onChangeHandler}
            name = 'country'
            value = {formdata.country}
            type="text"
            className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name = 'phone'
          value = {formdata.phone}
          type="number"
          className="border border-green-900 rounded-full py-1.5 px-3.5 w-full"
          placeholder="Phone No."
        />
      </div>

      {/* Right Side */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment Methods */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick = {() => setMethod('cod')} className="flex items-center gap-3 border border-green-900 rounded-full p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border border-green-900 rounded-full ${method === 'cod' ? 'bg-green-500' : ''}`}></p>
              <p className="text-green-900 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
            <div onClick = {() => setMethod('stripe')} className="flex items-center gap-3 border border-green-900 rounded-full p-2 px-3 cursor-pointer">
              <p className={` min-w-3.5 h-3.5 border border-green-900 rounded-full ${method === 'stripe' ? 'bg-green-500' : ''}`}></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type = 'submit' className="bg-green-900 text-white px-16 py-3 text-sm rounded-full">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
