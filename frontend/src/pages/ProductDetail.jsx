import React, { useEffect, useState } from "react";
import { Star, ShoppingCart, Zap, ArrowLeft, Link } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice.jsx";
import BackButton from "../components/BackButton.jsx";



const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);

        const data = await res.json();

        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          productId: product._id,

          name: product.name,

          price: product.price,

          imageUrl: product.imageUrl,

          quantity: quantity,
        }),
      );

      alert("Successfully added to your cart");
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading Product...</div>;
  }

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (

  <div className="min-h-screen bg-gray-50 py-10">


    {/* Fixed Back Button */}

    {/* <button
      onClick={() => navigate(-1)}
      className="
        fixed
        top-24
        left-10
        z-50
        bg-white
        shadow-md
       
        p-3
        hover:bg-[#E7A951]
        hover:text-white
        transition
      "
    >
      <ArrowLeft size={25}/>
    </button> */}
    <BackButton/>




    {/* Product Card */}

    <div className="
      max-w-6xl
      mx-auto
      bg-white
      rounded-2xl
      shadow-lg
      p-6
      md:p-10
    ">


      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-10
        items-center
      ">



        {/* Left Image */}

        <div className="
          bg-gray-100
          rounded-xl
          p-5
        ">

          <img
            src={product.imageUrl}
            alt={product.name}
            className="
              w-full
              h-[450px]
              object-cover
              rounded-xl
            "
          />

        </div>





        {/* Right Details */}

        <div>


          <h1 className="
            text-3xl
            md:text-4xl
            font-bold
            text-gray-800
          ">
            {product.name}
          </h1>




          {/* Rating */}

          <div className="flex items-center gap-2 mt-4">


            <div className="flex text-yellow-500">

              {
                [...Array(5)].map((_,i)=>(

                  <Star
                    key={i}
                    size={20}
                    fill={
                      i < Math.floor(product.rating || 0)
                      ? "currentColor"
                      : "none"
                    }
                  />

                ))
              }

            </div>


            <span>
              ({product.numOfReview || 0} Reviews)
            </span>


          </div>





          {/* Price */}

          <div className="mt-6">

            <span className="
              text-3xl
              font-bold
              text-[#E7A951]
            ">
              ₹{product.price}
            </span>

          </div>





          {/* Description */}

          <p className="
            mt-6
            text-gray-600
            leading-relaxed
          ">
            {product.description}
          </p>





          {/* Quantity */}

          <div className="
            flex
            items-center
            gap-4
            mt-8
          ">


            <button
              onClick={() =>
                setQuantity(quantity > 1 ? quantity - 1 : 1)
              }
              className="border px-4 py-2 rounded"
            >
              -
            </button>



            <span className="text-xl">
              {quantity}
            </span>




            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="border px-4 py-2 rounded"
            >
              +
            </button>


          </div>






          {/* Buttons */}



<div className="flex gap-4 mt-8">

  {/* Add to Cart */}
  <button
    onClick={handleAddToCart}
    className="
      flex items-center gap-2
      bg-[#E7A951] text-white
      px-6 py-3 rounded-lg font-semibold
      hover:bg-[#d8963f] transition
    "
  >
    <ShoppingCart size={20} />
    Add To Cart
  </button>

  {/* Buy Now */}
  <button
    onClick={() => {
      handleAddToCart();   // ✅ first add item
      navigate("/checkout"); // ✅ then go to checkout
    }}
    className="
      flex items-center gap-2
      bg-black text-white
      px-6 py-3 rounded-lg font-semibold
      hover:bg-gray-800 transition
    "
  >
    <Zap size={20} />
    Buy Now
  </button>

</div>


        </div>


      </div>


    </div>


  </div>



)}


export default ProductDetails