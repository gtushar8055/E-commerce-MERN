import React, { useState , useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import {ShopContext} from '../context/ShopContext';
import axios from 'axios'
import {toast} from 'react-toastify'

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const {token , setToken , navigate ,backendUrl} = useContext(ShopContext)

  const [name , setName] = useState('')
  const [password , setPassword] = useState('')
  const [email , setEmail] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register' , {name , email , password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token' , response.data.token)
        } else{
          toast.error(response.data.message)
        }
        } else{
          const response = await axios.post(backendUrl + '/api/user/login' , {email , password})
          if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token' , response.data.token)
          }else{
            toast.error(response.data.message)
          }
        }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(() => {
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <div className="min-h-screen bg-gradient-to-br  from-green-50 via-white to-green-100 px-4 py-12 flex items-center justify-center">
      <div className="w-full  max-w-md bg-white rounded-3xl shadow-xl p-6 md:p-12 border border-green-900 ">
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-green-900"
        >
          <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">{currentState}</p>
            {/* <hr className='border-none h-[1.5px] w-8 bg-green-900'/> */}
            <img src={assets.check_icon} alt="" className="w-8 m-auto" />
          </div>

          {currentState === "Login" ? (
            ""
          ) : (
            <input
              onChange = {(e) => setName(e.target.value)}
              value = {name}
              type="text"
              className="w-full px-3 py-2 border-2 rounded-full border-green-900"
              placeholder="Enter your Name"
              required
            />
          )}
          <input
            onChange = {(e) => setEmail(e.target.value)}
            value = {email}
            type="email"
            className="w-full px-3 py-2 border-2 rounded-full border-green-900"
            placeholder="Enter your Email"
            required
          />
          <input
            onChange = {(e) => setPassword(e.target.value)}
            value = {password}
            type="password"
            className="w-full px-3 py-2 border-2 rounded-full border-green-900"
            placeholder="Enter your Password"
            required
          />

          <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer">Forgot your password?</p>
            {currentState === "Login" ? (
              <p
                onClick={() => setCurrentState("Sign Up")}
                className="cursor-pointer"
              >
                Create Account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState("Login")}
                className="cursor-pointer"
              >
                Login Here
              </p>
            )}
          </div>
          <button className="bg-green-900 rounded-full text-white font-light px-8 py-2 mt-4">
            {currentState === "Login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
