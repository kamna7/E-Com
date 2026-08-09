import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      return alert("Please select an image");
    }

    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    data.append("image", image);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        body: data,
      });

      const responseData = await res.json();

      if (res.ok) {
        alert("✅ Product created successfully!");
        navigate("/products");
      } else {
        alert(responseData.message || "Error creating product");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-orange-500 mb-8">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block text-zinc-300 mb-2">Product Name</label>
          <input
            type="text"
            required
            placeholder="Enter product name"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-zinc-300 mb-2">Description</label>
          <textarea
            rows="4"
            required
            placeholder="Enter product description"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-zinc-300 mb-2">Price (₹)</label>
          <input
            type="number"
            required
            placeholder="0.00"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-zinc-300 mb-2">Category</label>
          <input
            type="text"
            required
            placeholder="Electronics"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                category: e.target.value,
              })
            }
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-zinc-300 mb-2">Stock Quantity</label>
          <input
            type="number"
            required
            placeholder="100"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                stock: e.target.value,
              })
            }
          />
        </div>

        {/* Image Upload */}
        <div className="border-2 border-dashed border-orange-500 rounded-xl p-6">
          <label className="block text-orange-400 font-semibold mb-3">
            Upload Product Image
          </label>

          <input
            type="file"
            accept="image/*"
            required
            className="block w-full text-sm text-zinc-300
              file:mr-4
              file:py-2
              file:px-4
              file:rounded-lg
              file:border-0
              file:bg-orange-500
              file:text-white
              file:cursor-pointer
              hover:file:bg-orange-600"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mt-2 rounded-lg font-semibold transition ${
            loading
              ? "bg-orange-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          } text-white`}
        >
          {loading ? "Uploading & Creating..." : "Publish Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;