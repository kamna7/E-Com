import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work with us? Feel free to contact our
            team. We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* Map */}
          <div>
            <iframe
              className="w-full h-full rounded-xl"
              src="https://maps.google.com/maps?q=Lucknow%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Send Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#E7A951] text-white px-8 py-3 rounded-lg hover:bg-[#d99535] transition"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;