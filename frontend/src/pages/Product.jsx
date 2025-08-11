import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from '../components/RelatedProducts'
const Product = () => {
  const { productId } = useParams();
  const { products, currency , addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [colors, setColors] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data*/}

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}

        {/* <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {
              productData.image.map((item , index) => (
                <img onClick = {() => setImage(item)} src={item} key = {index} className = 'w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%] border-4 border-green-900'>
              <img src={image} alt="" className='w-full h-auto' />
          </div>
        </div> */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border-2 border-green-900 rounded-md object-cover"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] inline-block aspect-video border-2 sm:border-4 border-green-900 rounded-md p-0">
            <img src={image} alt="" className="w-full h-full" />
          </div>
        </div>

        {/* Product Information */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-green-900">
            {productData.name}
          </h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2 text-green-700">(101)</p>
          </div>
          <p className="mt-5 text-3xl  font-black">
            {currency} {productData.price}
          </p>
          <p className="mt-5  text-green-700 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Color</p>
            <div className="flex gap-2">
              {productData.colors.map((item, index) => (
                <button
                  onClick={() => setColors(item)}
                  className={`border py-2 px-4 bg-green-100 rounded-full ${
                    item === colors ? "border-green-900" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick = {() => addToCart(productData._id , colors)}className="mt-4 bg-green-900 text-white px-8 py-3 text-sm  rounded-full">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-green-900">
            <p>:) 100% Original Product</p>
            <p>:) Cash On Delivery is Availbale</p>
            <p>:) Exchange with similar Products</p>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}

      <div className="mt-20">
        <div className="border rounded p-4 bg-green-50">
          <h2 className="text-lg font-semibold text-green-900 mb-4">
            Customer Reviews (101)
          </h2>

          {/* Single Review */}
          <div className="flex items-start gap-4 mb-6">
            <img
              src={assets.profile_icon} // random user icon (can replace with user's image)
              alt="User profile"
              className="w-10 h-10 rounded-full border border-green-400"
            />
            <div>
              <p className="font-semibold text-green-900">Tushar Gupta</p>
              <p className="text-sm text-green-800 mt-1">
                Loved the Delivery Speed and Products' Packaging is awesome
              </p>
              <p className="text-xs text-green-700 mt-1">
                Reviewed on July 20, 2025
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <img
              src={assets.profile_icon} // random user icon (can replace with user's image)
              alt="User profile"
              className="w-10 h-10 rounded-full border border-green-400"
            />
            <div>
              <p className="font-semibold text-green-900">Amit Verma</p>
              <p className="text-sm text-green-800 mt-1">
                Absolutely love this product! It's sleek, fast, and
                exactly what I needed. Highly recommended!
              </p>
              <p className="text-xs text-green-700 mt-1">
                Reviewed on July 15, 2025
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <img
              src={assets.profile_icon} // random user icon (can replace with user's image)
              alt="User profile"
              className="w-10 h-10 rounded-full border border-green-400"
            />
            <div>
              <p className="font-semibold text-green-900">Sunita Williams</p>
              <p className="text-sm text-green-800 mt-1">
                 Nice Customer Support And Quality Wise Product is Amazing
              </p>
              <p className="text-xs text-green-700 mt-1">
                Reviewed on June 27, 2025
              </p>
            </div>
          </div>


          <div className="flex items-start gap-4 mb-6">
            <img
              src={assets.profile_icon} // random user icon (can replace with user's image)
              alt="User profile"
              className="w-10 h-10 rounded-full border border-green-400"
            />
            <div>
              <p className="font-semibold text-green-900">Chirag Jain</p>
              <p className="text-sm text-green-800 mt-1">
                Delivery is one day late , but the Package is Fine and packaging is Best
              </p>
              <p className="text-xs text-green-700 mt-1">
                Reviewed on June 12, 2025
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <img
              src={assets.profile_icon} // random user icon (can replace with user's image)
              alt="User profile"
              className="w-10 h-10 rounded-full border border-green-400"
            />
            <div>
              <p className="font-semibold text-green-900">Temba Bavuma</p>
              <p className="text-sm text-green-800 mt-1">
                Nice !!! , I have Order Many things good website
              </p>
              <p className="text-xs text-green-700 mt-1">
                Reviewed on June 05 , 2025
              </p>
            </div>
          </div>

          <p className="text-center text-green-700 cursor-pointer">Load More 👇</p>

        </div>
      </div>

      {/* Display Related Products */}
      <RelatedProducts category = {productData.category} subCategory = {productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
