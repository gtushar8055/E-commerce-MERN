import React from 'react'
import {assets} from '../assets/assets'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br  from-green-50 via-white to-green-100 px-4 py-12 flex items-center justify-center ">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-green-300 ">
        <h2 className="text-3xl font-bold text-green-900 mb-2 text-center">Contact Us</h2>
        <div className="flex justify-center items-center">
          <img src={assets.contact_banner} alt="" />
        </div>
        <p className="text-green-700 text-center mb-8">
          We'd love to hear from you! Reach out with your queries, feedback, or partnership opportunities.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-green-800">Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="mt-1 w-full px-4 py-3 border border-green-900 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-800">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 border border-green-900 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-800">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="mt-1 w-full px-4 py-3 border border-green-900 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-center text-green-700 text-sm">
          📍 123 Gadget Street, Tech City, Dibai,Bulandshahr,UttarPradesh,India-203393 <br />
          📞 +91 9033336933 <br />
          ✉️ gadgethubofficial@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Contact
