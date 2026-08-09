import React from "react";
import { Link } from "react-router-dom";

const OrderHistory = ({ orders, loading }) => {
  return (
    <div>

      <h3 className="text-orange-500 text-2xl font-bold mb-6">
        Order History
      </h3>


      {loading ? (
        <p className="text-zinc-400">
          Fetching your orders...
        </p>

      ) : orders.length === 0 ? (

        <div
          className="
          bg-zinc-900
          border
          border-zinc-800
          rounded-lg
          p-8
          text-center
          "
        >
          <p className="text-zinc-400 mb-5">
            You haven't placed any orders yet.
          </p>


          <Link
            to="/shop"
            className="
            bg-orange-500
            hover:bg-orange-600
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
            transition
            "
          >
            Start Shopping
          </Link>

        </div>


      ) : (

        <div className="grid gap-5">

          {orders.map((order) => (

            <div
              key={order._id}
              className="
              bg-zinc-900
              border
              border-zinc-800
              rounded-xl
              p-5
              flex
              flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              gap-5
              "
            >

              <div>

                <p className="text-zinc-400 text-sm mb-2">
                  Order ID:
                  <span className="text-white ml-2">
                    {order._id}
                  </span>
                </p>


                <p className="text-zinc-400 text-sm mb-2">
                  Placed On:
                  <span className="text-white ml-2">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </span>
                </p>


                <p className="text-zinc-400 text-sm">
                  Total:
                  <strong className="text-green-500 ml-2">
                    ₹{order.totalAmount.toFixed(2)}
                  </strong>
                </p>

              </div>



              <span
                className={`
                px-5
                py-2
                rounded-full
                font-semibold
                text-sm

                ${
                  order.status === "Delivered"
                    ? "bg-green-500/10 text-green-500"
                    : order.status === "Shipped"
                    ? "bg-blue-500/10 text-blue-500"
                    : "bg-yellow-500/10 text-yellow-500"
                }
                `}
              >
                {order.status}
              </span>


            </div>

          ))}

        </div>

      )}

    </div>
  );
};


export default OrderHistory;