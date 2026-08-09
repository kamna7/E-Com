// import React, { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";
// import OrderHistory from "../components/OrderHistory";

// const Profile = () => {
//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     const fetchMyOrders = async () => {
//       try {
//         const res = await fetch("/api/orders/myorders", {
//           headers: {
//             Authorization: `Bearer ${user.token}`,
//           },
//         });

//         const data = await res.json();

//         if (res.ok) {
//           setOrders(Array.isArray(data) ? data : []);
//         } else {
//           setOrders([]);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMyOrders();
//   }, [user, navigate]);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-black px-4 py-10">
//       <div className="max-w-5xl mx-auto bg-zinc-950 border border-zinc-800 rounded-xl p-6 md:p-10">
//         {/* Profile Header */}

//         <div className="flex flex-col md:flex-row justify-between gap-6 border-b border-zinc-800 pb-8 mb-8">
//           <div>
//             <h2 className="text-white text-3xl font-bold mb-4">My Profile</h2>

//             <p className="text-zinc-400 text-lg mb-2">
//               <span className="font-semibold text-white">Name:</span>{" "}
//               {user.name}
//             </p>

//             <p className="text-zinc-400 text-lg mb-4">
//               <span className="font-semibold text-white">Email:</span>{" "}
//               {user.email}
//             </p>

//             <span className="inline-block bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
//               Account Type: {user.role.toUpperCase()}
//             </span>
//           </div>

//           <button
//             onClick={handleLogout}
//             className="
//             bg-red-500 
//             hover:bg-red-600
//             text-white
//             px-6
//             py-3
//             rounded-lg
//             h-fit
//             font-semibold
//             transition
//             "
//           >
//             Logout
//           </button>
//         </div>

//         {/* Orders */}

// <OrderHistory
//  orders={orders}
//   loading={loading}
// />

//         {/* <h3 className="text-orange-500 text-2xl font-bold mb-6">
//           Order History
//         </h3>

//         {loading ? (
//           <p className="text-zinc-400">Fetching your orders...</p>
//         ) : orders.length === 0 ? (
//           <div
//             className="
//               bg-zinc-900
//               border
//               border-zinc-800
//               rounded-lg
//               p-8
//               text-center
//             "
//           >
//             <p className="text-zinc-400 mb-5">
//               You haven't placed any orders yet.
//             </p>

//             <Link
//               to="/shop"
//               className="
//                 bg-orange-500
//                 hover:bg-orange-600
//                 text-white
//                 px-6
//                 py-3
//                 rounded-lg
//                 font-semibold
//                 transition
//                 "
//             >
//               Start Shopping
//             </Link>
//           </div>
//         ) : (
//           <div className="grid gap-5">
//             {orders.map((order) => (
//               <div
//                 key={order._id}
//                 className="
//                     bg-zinc-900
//                     border
//                     border-zinc-800
//                     rounded-xl
//                     p-5
//                     flex
//                     flex-col
//                     md:flex-row
//                     justify-between
//                     items-start
//                     md:items-center
//                     gap-5
//                     "
//               >
//                 <div>
//                   <p className="text-zinc-400 text-sm mb-2">
//                     Order ID:
//                     <span className="text-white ml-2">{order._id}</span>
//                   </p>

//                   <p className="text-zinc-400 text-sm mb-2">
//                     Placed On:
//                     <span className="text-white ml-2">
//                       {new Date(order.createdAt).toLocaleDateString()}
//                     </span>
//                   </p>

//                   <p className="text-zinc-400 text-sm">
//                     Total:
//                     <strong className="text-green-500 ml-2">
//                       ₹{order.totalAmount.toFixed(2)}
//                     </strong>
//                   </p>
//                 </div>

//                 <span
//                   className={`
//                       px-5
//                       py-2
//                       rounded-full
//                       font-semibold
//                       text-sm

//                       ${
//                         order.status === "Delivered"
//                           ? "bg-green-500/10 text-green-500"
//                           : order.status === "Shipped"
//                             ? "bg-blue-500/10 text-blue-500"
//                             : "bg-yellow-500/10 text-yellow-500"
//                       }
//                       `}
//                 >
//                   {order.status}
//                 </span>
//               </div>
//             ))}
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import OrderHistory from "../components/OrderHistory";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }


    const fetchMyOrders = async () => {
      try {
        const res = await fetch("/api/orders/myorders", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });


        const data = await res.json();


        if (res.ok) {
          setOrders(Array.isArray(data) ? data : []);
        } else {
          setOrders([]);
        }


      } catch (error) {
        console.error(error);
        setOrders([]);

      } finally {
        setLoading(false);
      }
    };


    fetchMyOrders();

  }, [user, navigate]);



  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  if (!user) return null;



  return (

    <div className="min-h-screen bg-black px-4 py-10">

      <div
        className="
        max-w-5xl
        mx-auto
        bg-zinc-950
        border
        border-zinc-800
        rounded-xl
        p-6
        md:p-10
        "
      >


        {/* Profile Header */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          border-b
          border-zinc-800
          pb-8
          mb-8
          "
        >


          <div>

            <h2 className="text-white text-3xl font-bold mb-4">
              My Profile
            </h2>


            <p className="text-zinc-400 text-lg mb-2">

              <span className="font-semibold text-white">
                Name:
              </span>{" "}

              {user.name}

            </p>



            <p className="text-zinc-400 text-lg mb-4">

              <span className="font-semibold text-white">
                Email:
              </span>{" "}

              {user.email}

            </p>



            <span
              className="
              inline-block
              bg-orange-500/10
              text-orange-400
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              "
            >
              Account Type: {user.role.toUpperCase()}
            </span>


          </div>



          <button
            onClick={handleLogout}
            className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-6
            py-3
            rounded-lg
            h-fit
            font-semibold
            transition
            "
          >
            Logout
          </button>


        </div>



        {/* Order History Component */}

        <OrderHistory
          orders={orders}
          loading={loading}
        />


      </div>

    </div>

  );
};


export default Profile;
