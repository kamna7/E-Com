import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
        

  <div 
     key={product._id}
  className="max-w-xs bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Product Image */}
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-80 object-cover"
      />

      {/* Product Details */}
      <div className="p-3">

        <h2 className="text-lg font-semibold text-gray-800">
          {product.name}
        </h2>
 <p className="text-sm text-gray-500">
  {product.description.length > 20 ? (
    <>
      {product.description.substring(0, 20)}..........
      <span className="text-red-600 font-medium">
        {" "}more
      </span>
    </>
  ) : (
    product.description
  )}
</p>



        {/* Rating */}
        <div className="flex items-center ">
          <span className="text-yellow-400 text-lg">
            ⭐ {product.rating}
          </span>

          <span className="ml-2 text-sm text-gray-600">
            ({product.numReviews} reviews)
          </span>
        </div>


        {/* Price */}
        <div className="">
          <span className="text-2xl font-bold text-green-600">
            ₹{product.price}
          </span>
        </div>


        {/* Buttons */}
        <div className="flex gap-2 mt-2">

          <Link
            to={`/product/${product._id}`}
            className="w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>

        ))}
      </div>
    </div>
   
  );
};

export default Products;