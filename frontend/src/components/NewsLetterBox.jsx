import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className="text-2xl font-serif text-green-900" >
        Be a <span className='text-black'text-black>Member </span>and Get Cool <span className='text-black'>Discounts</span>
      </p>
      <p className="text-green-700 mt-3">
        Take Membership and get benefits on your every order
      </p>

      <form onSubmit = {onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6  pl-3 rounded-full border border-green-900'>
        <input type="email" placeholder='Enter your Email' className='w-full sm:flex-1 outline-none' required/>
        <button type = 'submit' className='bg-green-900 text-white text-sm px-10 py-4 rounded-r-full'>MEMBERSHIP</button>
      </form>

    </div>
  )
}

export default NewsLetterBox
