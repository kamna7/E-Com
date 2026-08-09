import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AdminUsers = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/auth/users", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const data = await res.json();
        setUsers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.log(error);
      }
    };

    if (user?.token) {
      fetchUsers();
    }
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto mt-10 bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold text-orange-500 mb-6">
        User Directory
      </h2>

      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-zinc-800">
            <tr>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                ID
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                NAME
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                EMAIL
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                ROLE
              </th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-400">
                JOINED
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((u) => (
                <tr
                  key={u._id}
                  className="border-b border-zinc-800 hover:bg-zinc-800 transition"
                >
                  <td className="px-5 py-4 text-white">
                    {u._id.substring(0, 8)}...
                  </td>

                  <td className="px-5 py-4 text-white font-medium">
                    {u.name}
                  </td>

                  <td className="px-5 py-4 text-zinc-300">
                    {u.email}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        u.role === "admin"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-emerald-500/20 text-emerald-400"
                      }`}
                    >
                      {u.role.toUpperCase()}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-zinc-300">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-8 text-zinc-500"
                >
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;