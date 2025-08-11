import React, { useState } from 'react'
import axios from 'axios'
import {assets} from '../assets/assets'
import {backendUrl} from '../App'
import {toast} from 'react-toastify'

const Login = ({setToken}) => {

  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const onSubmitHandler = async  (e) => {
      try {
        e.preventDefault();
        const response = await axios.post(backendUrl+'/api/user/admin',{email , password})
        if(response.data.success){
            setToken(response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md border-2 border-green-900'>
        <div className="flex items-center justify-center gap-2 mb-2">
        <h1 className='text-2xl font-medium text-green-900 mb-4 '>Admin Login</h1>
        <img src={assets.check_icon} alt="" className="w-6 mb-2" />
        </div>
        <form onSubmit = {onSubmitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-green-900 mb-2'>Email Address</p>
                <input onChange = {(e) => setEmail(e.target.value)} value = {email} className='rounded-full w-full px-3 py-2 border border-green-900 outline-none' type="email" placeholder='Enter your email' required/>
            </div>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-green-900 mb-2'>Password</p>
                <input onChange = {(e) => setPassword(e.target.value)} value = {password} className='rounded-full w-full px-3 py-2 border border-green-900 outline-none' type="password" placeholder='Enter your Password' required/>
            </div>
            <button className = 'bg-green-900 text-white rounded-full w-full py-2 items-center justify-center mt-4 mb-4' type = 'submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
