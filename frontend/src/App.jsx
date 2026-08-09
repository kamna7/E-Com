import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx";
import Products from './pages/Products.jsx'

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetail.jsx";

import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Payment from "./pages/Payment.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

import Profile from "./pages/Profile.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import AddProduct from "./admin/AddProduct.jsx";
import AdminProducts from "./admin/AdminProducts.jsx";
import EditProduct from "./admin/EditProduct.jsx";
import AdminOrders from "./admin/AdminOrder.jsx";
import AdminUsers from "./admin/AdminUser.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />

        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/edit-product/:id" element={<EditProduct />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
