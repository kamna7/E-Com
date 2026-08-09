import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";

import { removeFromCart, addToCart } from "../redux/cartSlice";
import BackButton from "../components/BackButton";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  // Logged in user from MongoDB data stored in Redux

  const { user } = useContext(AuthContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Remove cart item
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Update quantity
  const handleUpdateQty = (item, quantity) => {
    if (quantity > 0) {
      dispatch(
        addToCart({
          ...item,
          qty,           // chnge
        }),
      );
    }
  };

  // Checkout Login Check
  const handleCheckout = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <BackButton />

      {cartItems.length === 0 ? (
        // Empty Cart

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            h-screen
          "
        >
          <ShoppingBag size={70} className="text-gray-400" />

          <h1
            className="
              text-3xl
              font-bold
              mt-5
            "
          >
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mt-2">
            Add some products to continue shopping
          </p>

          <Link
            to="/"
            className="
                mt-6
                bg-[#E7A951]
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
              "
          >
            Go To Shopping
          </Link>
        </div>
      ) : (
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-12
          "
        >
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-8
            "
          >
            {/* Cart Items */}

            <div
              className="
                lg:col-span-2
                space-y-5
              "
            >
              {cartItems.map((item) => (
                <div
                  key={item.productId}
                  className="
                        bg-white
                        shadow-md
                        rounded-xl
                        p-5
                        flex
                        gap-5
                        items-center
                      "
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="
                          w-28
                          h-28
                          object-cover
                          rounded-lg
                        "
                  />

                  <div className="flex-1">
                    <h2
                      className="
                          text-xl
                          font-bold
                        "
                    >
                      {item.name}
                    </h2>

                    <p
                      className="
                          text-[#E7A951]
                          font-bold
                          mt-2
                        "
                    >
                      ₹{item.price}
                    </p>

                    <p>Quantity: {item.qty}</p>
                  </div>

                  {/* Quantity */}

                  <div
                    className="
                        flex
                        items-center
                        gap-2
                      "
                  >
                    <button
                      onClick={() => handleUpdateQty(item, item.qty - 1)}
                      className="
                            px-3
                            bg-gray-200
                            rounded
                          "
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleUpdateQty(item, item.qty + 1)}
                      className="
                            px-3
                            bg-gray-200
                            rounded
                          "
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}

                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="
                          text-red-500
                          hover:text-red-700
                        "
                  >
                    <Trash2 />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}

            <div
              className="
                bg-white
                shadow-md
                rounded-xl
                p-6
                h-fit
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

              <div
                className="
                  flex
                  justify-between
                  text-lg
                "
              >
                <span>Total Amount</span>

                <span
                  className="
                    font-bold
                    text-[#E7A951]
                  "
                >
                  ₹{totalPrice}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="
                    w-full
                    mt-6
                    bg-black
                    text-white
                    py-3
                    rounded-lg
                    font-semibold
                    hover:bg-gray-800
                    transition
                  "
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
