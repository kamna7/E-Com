import { Link } from "react-router-dom";   
   
   
   
  const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company */}
        <div>
          <h2 className="text-2xl font-bold text-white">   E-Com</h2>
          <p className="mt-3 text-gray-400">
            Your trusted partner for quality services.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400 transition">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p>Email: info@example.com</p>
          <p className="mt-2">Phone: +1 234 567 890</p>
          <p className="mt-2">Location: New York, USA</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:text-blue-400 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-400 transition">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;