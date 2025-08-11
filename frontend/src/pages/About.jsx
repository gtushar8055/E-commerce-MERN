import React from 'react';
import Title from '../components/Title';

const About = () => {
  return (
    <div className=" rounded-lg bg-green-100 text-green-700 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <Title text1="ABOUT US" />
        <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
          Welcome to <span className="font-bold text-green-500">Gadget-Hub</span> — your trusted destination for the latest tech gadgets and accessories. We’re committed to delivering top-quality products, quick service, and a seamless shopping experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-sm sm:text-base">
        <div className="bg-green-300 border-2 border-green-900 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl text-center font-semibold mb-2 text-green-900">Wide Product Range</h3>
          <p className='text-center'>From smartwatches to high-performance headphones, find everything that fits your lifestyle and tech needs.</p>
        </div>

        <div className="bg-green-300 border-2 border-green-900 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className=" text-center text-xl font-semibold mb-2 text-green-900">Fast & Reliable Delivery</h3>
          <p className='text-center'> We ensure your gadgets are packed with care and delivered promptly to your doorstep across India.</p>
        </div>

        <div className="bg-green-300 border-2 border-green-900 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className=" text-center text-xl font-semibold mb-2 text-green-900">Secure Payments</h3>
          <p className='text-center' >Your transactions are protected with top-grade security so you can shop with confidence and ease.</p>
        </div>

        <div className="bg-green-300 border-2 border-green-900 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className=" text-center text-xl font-semibold mb-2 text-green-900">Customer Support</h3>
          <p className='text-center' >You have a 24X7 customer support at Gadget-Hub , Our Team is for you for any kind of query and problem you have regarding any service </p>
        </div>

        <div className="bg-green-300  border-2 border-green-900 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className=" text-center text-xl font-semibold mb-2 text-green-900">Customer Family</h3>
          <p className='text-center' >From the last 5 years we have around 5 Millon+ users , from all over the country . Customer's Trust is with Gadget-Hub</p>
        </div>

        <div className="bg-green-300 border-2 border-green-900 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className=" text-center text-xl font-semibold mb-2 text-green-900">G.O.A.T</h3>
          <p className='text-center' >At Gadget-Hub, GOAT stands for “Greatest Offers And Tech” — where unbeatable prices meet cutting-edge gadgets.</p>
        </div>
      </div>
      
    </div>
  );
};

export default About;
