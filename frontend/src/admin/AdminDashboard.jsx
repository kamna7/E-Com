import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/");
      return;
    }

    const fetchStats = async () => {
      try {
        const res = await fetch("/api/analytics", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setStats(data);
        } else {
          if (res.status === 401) {
            navigate("/login");
          }

          setStats({
            totalOrders: 0,
            totalProducts: 0,
            totalUsers: 0,
            totalRevenue: 0,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, [user, navigate]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-2">
        <img
          src="/ShopNestLogo.png"
          alt="Logo"
          className="w-12 h-12 rounded-lg object-cover shadow-lg shadow-orange-500/30"
        />

        <div>
          <h1 className="text-3xl font-bold text-white">
            Admin Dashboard
          </h1>

          <p className="text-zinc-400 mt-1">
            Welcome back,{" "}
            <span className="text-orange-500 font-semibold">
              {user?.name}
            </span>
          </p>
        </div>
      </div>

      {/* Stats */}
      {stats ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
            <p className="text-zinc-400">📦 Total Orders</p>
            <h2 className="text-4xl font-bold text-orange-500 mt-3">
              {stats.totalOrders}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
            <p className="text-zinc-400">🛍 Total Products</p>
            <h2 className="text-4xl font-bold text-orange-500 mt-3">
              {stats.totalProducts}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
            <p className="text-zinc-400">👥 Total Users</p>
            <h2 className="text-4xl font-bold text-orange-500 mt-3">
              {stats.totalUsers}
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center hover:border-orange-500 transition">
            <p className="text-zinc-400">💰 Total Revenue</p>
            <h2 className="text-4xl font-bold text-green-400 mt-3">
              ₹{stats.totalRevenue.toFixed(2)}
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-52">
          <div className="text-orange-500 text-lg font-semibold animate-pulse">
            Loading Dashboard...
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Administrative Controls
        </h2>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate("/admin/add-product")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            ➕ Add Product
          </button>

          <button
            onClick={() => navigate("/admin/products")}
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition"
          >
            📦 Manage Products
          </button>

          <button
            onClick={() => navigate("/admin/orders")}
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition"
          >
            🚚 Manage Orders
          </button>

          <button
            onClick={() => navigate("/admin/users")}
            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-lg transition"
          >
            👥 Users Directory
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;