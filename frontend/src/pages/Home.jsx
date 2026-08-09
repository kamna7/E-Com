import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.slice(0, 4));
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        {/* Online Background Image */}
        <img
          src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600&auto=format&fit=crop"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to E-Com Store</h1>

          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Discover the latest fashion, electronics, shoes, watches, and
            accessories.
          </p>
        </div>
      </section>
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Latest Products</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
