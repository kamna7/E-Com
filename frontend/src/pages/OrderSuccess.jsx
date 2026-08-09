import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-md w-full text-center">

        {/* ✅ Success Icon */}
        {/* <div className="text-green-500 text-6xl mb-4">✔</div> */}

        {/* ✅ Title */}
        <h2 className="text-2xl font-bold mb-2">
          Order Placed Successfully 🎉
        </h2>

        {/* ✅ Message */}
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        {/* ✅ Buttons */}
        <div className="flex flex-col gap-3">

          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Home
          </button>

          {/* <button
      onClick={() => navigate("/orders")}
            className="border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            View My Orders
          </button> */}

        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;