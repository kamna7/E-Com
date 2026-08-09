// import React from "react";

// const About = () => {
//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//             About Us
//           </h1>
//           <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
//             Creating meaningful corporate gifting experiences that build
//             stronger relationships and leave a lasting impression.
//           </p>
//         </div>


//         {/* About Content */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           {/* Image */}
//           <div>
//             <img
//               src="/images/about.png"
//               alt="About Ecrue"
//               className="w-full rounded-xl shadow-lg"
//             />
//           </div>


//           {/* Text */}
//           <div>
//             <h2 className="text-3xl font-semibold text-gray-800 mb-5">
//               Who We Are
//             </h2>

//             <p className="text-gray-600 leading-7 mb-4">
//               Ecrue is a corporate gifting company dedicated to providing
//               innovative, customized, and premium gifting solutions for
//               businesses. We help organizations celebrate their employees,
//               clients, and partners with thoughtful gifts.
//             </p>

//             <p className="text-gray-600 leading-7 mb-6">
//               From personalized merchandise to luxury gift collections, our
//               goal is to create memorable experiences that represent your
//               brand values and strengthen professional relationships.
//             </p>

//             <button className="bg-[#E7A951] text-white px-6 py-3 rounded-lg hover:bg-[#d99535] transition">
//               Explore More
//             </button>
//           </div>

//         </div>


//         {/* Mission Vision Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

//           <div className="p-6 rounded-xl shadow-md border">
//             <h3 className="text-xl font-semibold mb-3 text-gray-800">
//               Our Mission
//             </h3>
//             <p className="text-gray-600">
//               To deliver creative gifting solutions that help brands connect
//               emotionally with their audience.
//             </p>
//           </div>


//           <div className="p-6 rounded-xl shadow-md border">
//             <h3 className="text-xl font-semibold mb-3 text-gray-800">
//               Our Vision
//             </h3>
//             <p className="text-gray-600">
//               To become a trusted partner for businesses by delivering quality,
//               innovation, and excellence.
//             </p>
//           </div>


//           <div className="p-6 rounded-xl shadow-md border">
//             <h3 className="text-xl font-semibold mb-3 text-gray-800">
//               Our Values
//             </h3>
//             <p className="text-gray-600">
//               Quality, creativity, customer satisfaction, and commitment guide
//               everything we do.
//             </p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Our Company
          </h1>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            We are a technology-driven company committed to delivering
            innovative solutions that help businesses grow and succeed.
          </p>
        </div>
      </section>


      {/* Company Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <img
  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
  alt="company"
  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
/>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-7 mb-4">
              Our company provides high-quality digital solutions designed
              according to modern business needs. We focus on innovation,
              reliability, and customer satisfaction.
            </p>

            <p className="text-gray-600 leading-7">
              With a team of skilled professionals, we create solutions that
              improve productivity and help organizations achieve their goals.
            </p>
          </div>

        </div>
      </section>


      {/* Mission Vision Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                Our Mission
              </h3>

              <p className="text-gray-600">
                To provide innovative and reliable solutions that create value
                for our customers.
              </p>
            </div>


            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                Our Vision
              </h3>

              <p className="text-gray-600">
                To become a trusted company recognized for quality,
                creativity, and excellence.
              </p>
            </div>


            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-3">
                Our Values
              </h3>

              <p className="text-gray-600">
                Integrity, teamwork, innovation, and customer-focused service.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "Professional Team",
              "Quality Services",
              "Modern Technology",
              "Customer Support"
            ].map((item,index)=>(
              <div
                key={index}
                className="p-6 border rounded-lg"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;