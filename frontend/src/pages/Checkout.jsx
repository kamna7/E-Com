import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { AuthContext } from "../context/AuthContext";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    phone: "",
    alternatePhone: "",

    houseNo: "",
    street: "",
    landmark: "",

    city: "",
    state: "",
    country: "India",
    postalCode: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // ✅ Handle Payment

  const handlePayment = async () => {
    return bypassPayment();

    //  razorapy baad me use krna h
    //     try {
    //       const orderRes = await fetch("/api/payment/order", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ amount: totalPrice }),
    //       });
    //       const orderData = await orderRes.json();

    //       if (!orderRes.ok) {
    //         // Razorpay unconfigured exception handler
    //         const fallback = window.confirm(
    //           "Razorpay keys unconfigured on backend. Use Student Bypass Mode to place test order?",
    //         );
    //         if (fallback) {
    //           return bypassPayment();
    //         } else {
    //           return alert("Payment failed to initialize");
    //         }
    //       }

    // const option  =null

    //       // razarpay code
    //       // const options = {
    //       //   key: "rzp_test_TLoXlPFhYwczz8", // Student dummy fallback
    //       //   amount: orderData.amount,
    //       //   currency: orderData.currency,
    //       //   name: "ShopNest",
    //       //   description: "Test Transaction",
    //       //   order_id: orderData.id,
    //       //   handler: async function (response) {
    //       //     const verifyRes = await fetch("/api/payment/verify", {
    //       //       method: "POST",
    //       //       headers: { "Content-Type": "application/json" },
    //       //       body: JSON.stringify(response),
    //       //     });

    //       //     if (verifyRes.ok) {
    //       //       const saveOrderRes = await fetch("/api/orders", {
    //       //         method: "POST",
    //       //         headers: {
    //       //           "Content-Type": "application/json",
    //       //           Authorization: `Bearer ${user.token}`,
    //       //         },
    //       //         body: JSON.stringify({
    //       //           items: cartItems,
    //       //           totalAmount: totalPrice,
    //       //           address,
    //       //           paymentId: response.razorpay_payment_id,
    //       //         }),
    //       //       });

    //       //       if (saveOrderRes.ok) {
    //       //         dispatch(clearCart());
    //       //         navigate("/ordersuccess");
    //       //       } else {
    //       //         alert("Order saving failed");
    //       //       }
    //       //     } else {
    //       //       alert("Payment verification failed");
    //       //     }
    //       //   },
    //       //   prefill: {
    //       //     name: address.fullName,
    //       //     email: user?.email,
    //       //     contact: "9999999999",
    //       //   },
    //       //   theme: {
    //       //     color: "#f97316",
    //       //   },
    //       // };

    //       const rzp1 = new window.Razorpay(options);
    //       rzp1.open();
    //     } catch (error) {
    //       console.error(error);
    //     }
  };

  // bypass student
  const bypassPayment = async () => {
    try {
      const saveOrderRes = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
   body: JSON.stringify({
  items: cartItems.map((item) => ({
    productId: item.productId,
    name: item.name,
    qty: item.quantity,
    price: item.price,
  })),

  totalAmount: totalPrice,

  address: {
    fullname: address.fullName,
    street: address.street,
    city: address.city,
    postcode: address.postalCode,
    country: address.country,
  },

  paymentId: "bypass_txn_" + Date.now(),
})
      });

      const data = await saveOrderRes.json();
      console.log(data);

      if (saveOrderRes.ok) {
        dispatch(clearCart());
        navigate("/ordersuccess");
      } else {
        alert(data.message || "Order failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    handlePayment();
  };

  const orderData = {
    items: cartItems,

    address,

    totalPrice,
  };

  console.log("Order Data:", orderData);

  // Backend API yaha connect hoga

  return (
    <div
      className="
      min-h-screen
      bg-gray-50
      py-12
      px-6
    "
    >
      {/* back button  */}

      <BackButton />

      <div
        className="
        max-w-7xl
        mx-auto
      "
      >
        {/* <h1
          className="
          text-4xl
          font-bold
          mb-8
      
        "
        >
          Checkout
        </h1> */}

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
        "
        >
          {/* Address Form */}

          <form
            onSubmit={handlePlaceOrder}
            className="
    lg:col-span-2
    bg-white
    rounded-xl
    shadow-md
    p-6
    space-y-5
  "
          >
            <h2 className="text-2xl font-bold    text-center underline">
              Delivery Address
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  name="fullName"
                  placeholder="Enter your full name"
                  value={address.fullName}
                  onChange={handleChange}
                  className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={address.email}
                  onChange={handleChange}
                  className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  name="phone"
                  placeholder="Enter phone number"
                  value={address.phone}
                  onChange={handleChange}
                  className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                  required
                />
              </div>

              {/* Alternate Phone */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Alternate Phone
                </label>

                <input
                  name="alternatePhone"
                  placeholder="Enter alternate phone"
                  value={address.alternatePhone}
                  onChange={handleChange}
                  className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                />
              </div>
            </div>

            {/* House Number */}

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                House / Flat / Building No.
              </label>

              <input
                name="houseNo"
                placeholder="Enter house number"
                value={address.houseNo}
                onChange={handleChange}
                className="
 w-full
 border
 border-gray-300
 rounded-lg
 px-4
 py-3
 outline-none
 focus:ring-2
 focus:ring-[#E7A951]
 "
                required
              />
            </div>

            {/* Street */}

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Area / Street / Sector
              </label>

              <input
                name="street"
                placeholder="Enter area or street"
                value={address.street}
                onChange={handleChange}
                className="
 w-full
 border
 border-gray-300
 rounded-lg
 px-4
 py-3
 outline-none
 focus:ring-2
 focus:ring-[#E7A951]
 "
                required
              />
            </div>

            {/* Landmark */}

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Landmark
              </label>

              <input
                name="landmark"
                placeholder="Nearby landmark"
                value={address.landmark}
                onChange={handleChange}
                className="
 w-full
 border
 border-gray-300
 rounded-lg
 px-4
 py-3
 outline-none
 focus:ring-2
 focus:ring-[#E7A951]
 "
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* City */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  City
                </label>

                <input
                  name="city"
                  placeholder="Enter city"
                  value={address.city}
                  onChange={handleChange}
                  className="
        w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                  required
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Pincode
                </label>

                <input
                  name="postalCode"
                  placeholder="Enter pincode"
                  value={address.postalCode}
                  onChange={handleChange}
                  className="w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                  required
                />
              </div>

              {/* State */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  State
                </label>

                <input
                  name="state"
                  placeholder="Enter state"
                  value={address.state}
                  onChange={handleChange}
                  className="w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Country
                </label>

                <input
                  name="country"
                  value={address.country}
                  onChange={handleChange}
                  className="w-full
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:ring-2
        focus:ring-[#E7A951]
      "
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="
w-full
bg-blue-600
text-white
py-3
rounded-lg
font-semibold
hover:bg-[#b3bae1]
transition
"
            >
        Pay Now
            </button>
          </form>
          {/* Order Summary */}

          <div
            className="
    bg-white
    shadow-md
    rounded-xl
    p-6
    h-fit
    sticky
    top-24
  "
          >
            <h2
              className="
      text-2xl
      font-bold
      mb-5
    "
            >
              Order Summary
            </h2>

            {/* Cart Items */}

            {cartItems.map((item) => (
              <div
                key={item.productId}
                className="
        flex
        justify-between
        items-center
        mb-4
        text-gray-700
      "
              >
                <div>
                  <p className="font-medium">{item.name}</p>

                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>

                <span className="font-semibold">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}

            <hr className="my-5" />

            {/* Total */}

            <div
              className="
      flex
      justify-between
      text-xl
      font-bold
    "
            >
              <span>Total Amount</span>

              <span
                className="
        text-[#E7A951]
      "
              >
                ₹{totalPrice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
