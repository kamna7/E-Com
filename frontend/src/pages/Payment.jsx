import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import { clearCart } from "../redux/cartSlice";

const Payment = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // ✅ Demo QR
  const upiQR = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=test@upi&pn=MyStore&am=${totalPrice}&cu=INR`;

  

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl p-6 relative">

        <BackButton />

        <h2 className="text-2xl font-bold mb-6 text-center">
          Complete Payment
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div>
            <h3 className="font-semibold mb-3">Payment Methods</h3>

            <div className="space-y-2">
              {["upi", "card", "netbanking", "cod"].map((method) => (
                <label
                  key={method}
                  className={`border p-3 rounded-lg flex items-center gap-2 cursor-pointer
                  ${
                    paymentMethod === method
                      ? "border-blue-600 bg-blue-50"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />

                  <span>
                    {method === "upi" && "UPI (GPay / PhonePe)"}
                    {method === "card" && "Credit / Debit Card"}
                    {method === "netbanking" && "Net Banking"}
                    {method === "cod" && "Cash on Delivery"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="border rounded-lg p-4">

            {paymentMethod === "upi" && (
              <div className="text-center">
                <h4 className="font-semibold mb-2">Scan & Pay</h4>
                <img src={upiQR} alt="UPI QR" className="mx-auto mb-3" />
                <p className="font-bold">₹{totalPrice}</p>
              </div>
            )}

            {paymentMethod === "card" && (
              <div>
                <h4 className="font-semibold mb-3">Card Details</h4>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border p-2 rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Expiry"
                  className="w-full border p-2 rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-full border p-2 rounded"
                />
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <select className="w-full border p-2 rounded">
                <option>SBI</option>
                <option>HDFC</option>
                <option>ICICI</option>
              </select>
            )}

            {paymentMethod === "cod" && (
              <p className="text-center text-gray-600">
                Pay when delivery arrives
              </p>
            )}
          </div>
        </div>

        {/* TOTAL */}
        <div className="mt-6 border-t pt-4 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{totalPrice}</span>
        </div>

        {/* BUTTON */}
        <button
          onClick={handlePayment}
          className="mt-4 w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          {paymentMethod === "cod" ? "Place Order" : "Proceed"}
        </button>
      </div>
    </div>
  );
};

export default Payment;






