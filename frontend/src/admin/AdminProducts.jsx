import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-lg">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-orange-500">
          Manage Products
        </h2>

        <Link
          to="/admin/add-product"
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition"
        >
          + Add Product
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full">
          <thead className="bg-zinc-800">
            <tr>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                ID
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                NAME
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                PRICE
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                CATEGORY
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                STOCK
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-zinc-800 hover:bg-zinc-800 transition"
                >
                  <td className="px-5 py-4 text-white">
                    {product._id.substring(0, 8)}...
                  </td>

                  <td className="px-5 py-4 text-white font-medium">
                    {product.name}
                  </td>

                  <td className="px-5 py-4 text-green-400 font-semibold">
                    ₹{product.price.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-zinc-300">
                    {product.category}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        product.stock > 0
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex gap-3">
                      <Link
                        to={`/admin/edit-product/${product._id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-8 text-zinc-500"
                >
                  No Products Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;