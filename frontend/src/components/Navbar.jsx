import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-blue-600">
          E-Com
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-10">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-5 rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-600 font-medium transition">
            Home
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-600 font-medium transition"
          >
            Products
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative hover:text-blue-600 font-medium">
            🛒 Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {user ? (
            <>
              {/* Profile */}
              <Link
                to="/profile"
                className="text-black px-4 py-2 rounded-lg "
              >
                Hi , {user.name}
              </Link>

              {/* Admin */}
              {user.role === "admin" && (
                <Link
                  to="/admin"
                  className=" text-black text-bold px-4 py-2 rounded-lg "
                >
                  Admin
                </Link>
              )}

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
