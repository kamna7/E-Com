// import React from "react";
// import {
//   ShoppingBag,
//   Truck,
//   ShieldCheck,
//   RotateCcw,
//   PackageCheck,
//   Headphones
// } from "lucide-react";


// const Service = () => {
//   return (
//     <div>

//       {/* Hero Section */}
//       <section
//         className="relative h-[450px] bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://media.istockphoto.com/id/1381897916/photo/semi-trucks-on-a-four-lane-highway-near-the-ivanpah-solar-power-facility.webp?a=1&b=1&s=612x612&w=0&k=20&c=LY8qKaXEBYK9i3XQi0yceQekLwjRy1bOw4X0btRG0ik=')",
//         }}
//       >

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>


//         {/* Hero Content */}
//         <div className="relative z-10 h-full flex items-center justify-center px-6">

//           <div className="text-center text-white max-w-3xl">

//             <h1 className="text-4xl md:text-6xl font-bold mb-5">
//               Our Services
//             </h1>

//             <p className="text-lg md:text-xl text-gray-200">
//               We provide a smooth and secure online shopping experience with
//               quality products and reliable services.
//             </p>


           

//           </div>

//         </div>

//       </section>



//       {/* Services Section */}
//       <section className="py-16">

//         <div className="max-w-7xl mx-auto px-6">

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


//             {/* Card 1 */}
//             <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">

//               <ShoppingBag 
//                 size={40}
//                 className="mx-auto text-[#E7A951] mb-4"
//               />

//               <h2 className="text-xl font-bold mb-3">
//                 Wide Product Collection
//               </h2>

//               <p className="text-gray-600">
//                 Explore a wide range of quality products from different
//                 categories with an easy shopping experience.
//               </p>

//             </div>



//             {/* Card 2 */}
//             <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">

//               <Truck
//                 size={40}
//                 className="mx-auto text-[#E7A951] mb-4"
//               />

//               <h2 className="text-xl font-bold mb-3">
//                 Fast & Reliable Delivery
//               </h2>

//               <p className="text-gray-600">
//                 Get your orders delivered safely and quickly at your doorstep.
//               </p>

//             </div>



//             {/* Card 3 */}
//             <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">

//               <ShieldCheck
//                 size={40}
//                 className="mx-auto text-[#E7A951] mb-4"
//               />

//               <h2 className="text-xl font-bold mb-3">
//                 Secure Payment
//               </h2>

//               <p className="text-gray-600">
//                 Enjoy safe and secure online payments with trusted payment
//                 gateways.
//               </p>

//             </div>



//             {/* Card 4 */}
//             <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">

//               <RotateCcw
//                 size={40}
//                 className="mx-auto text-[#E7A951] mb-4"
//               />

//               <h2 className="text-xl font-bold mb-3">
//                 Easy Returns & Refunds
//               </h2>

//               <p className="text-gray-600">
//                 Simple return and refund process for a stress-free shopping
//                 experience.
//               </p>

//             </div>



//             {/* Card 5 */}
//             <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">

//               <PackageCheck
//                 size={40}
//                 className="mx-auto text-[#E7A951] mb-4"
//               />

//               <h2 className="text-xl font-bold mb-3">
//                 Quality Products
//               </h2>

//               <p className="text-gray-600">
//                 We provide genuine and high-quality products to our customers.
//               </p>

//             </div>



//             {/* Card 6 */}
//             <div className="bg-white shadow-md rounded-xl p-8 text-center hover:shadow-xl transition">

//               <Headphones
//                 size={40}
//                 className="mx-auto text-[#E7A951] mb-4"
//               />

//               <h2 className="text-xl font-bold mb-3">
//                 Customer Support
//               </h2>

//               <p className="text-gray-600">
//                 Our support team is always available to help you with your
//                 queries.
//               </p>

//             </div>


//           </div>

//         </div>

//       </section>


//     </div>
//   );
// };


// export default Service;

import React from "react";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  PackageCheck,
  Headphones
} from "lucide-react";


const Service = () => {

  const services = [
    {
      icon: <ShoppingBag size={40} />,
      title: "Wide Product Collection",
      description:
        "Explore a wide range of quality products from different categories with an easy shopping experience."
    },
    {
      icon: <Truck size={40} />,
      title: "Fast & Reliable Delivery",
      description:
        "Get your orders delivered safely and quickly at your doorstep."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Secure Payment",
      description:
        "Enjoy safe and secure online payments with trusted payment gateways."
    },
    {
      icon: <RotateCcw size={40} />,
      title: "Easy Returns & Refunds",
      description:
        "Simple return and refund process for a stress-free shopping experience."
    },
    {
      icon: <PackageCheck size={40} />,
      title: "Quality Products",
      description:
        "We provide genuine and high-quality products to our customers."
    },
    {
      icon: <Headphones size={40} />,
      title: "Customer Support",
      description:
        "Our support team is always available to help you with your queries."
    }
  ];


  return (
    <div>


      {/* Hero Section */}
      <section
        className="relative h-[450px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://trackcourier.in/imgs/og/trackcourier.jpg')",
        }}
      >


        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>



        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">

          <div className="text-center text-white max-w-3xl">


            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              Our Services
            </h1>


            <p className="text-lg md:text-xl text-gray-200">
              From easy shopping to fast delivery, secure payments, and
              customer support, we make your online shopping experience
              simple and reliable.
            </p>


          </div>

        </div>


      </section>





      {/* Services Section */}
      <section className="py-16 bg-gray-50">


        <div className="max-w-7xl mx-auto px-6">



          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            What We Offer
          </h2>




          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">



            {
              services.map((service,index)=>(


                <div
                  key={index}
                  className="
                  bg-white 
                  shadow-md 
                  rounded-xl 
                  p-8 
                  text-center 
                  hover:shadow-xl 
                  hover:-translate-y-2 
                  transition 
                  duration-300
                  "
                >


                  <div className="flex justify-center text-[#E7A951] mb-5">

                    {service.icon}

                  </div>




                  <h3 className="text-xl font-bold mb-3 text-gray-800">

                    {service.title}

                  </h3>




                  <p className="text-gray-600 leading-relaxed">

                    {service.description}

                  </p>



                </div>


              ))
            }



          </div>


        </div>


      </section>



    </div>
  );
};


export default Service;