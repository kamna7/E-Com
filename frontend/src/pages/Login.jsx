import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch("/api/auth/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password
        })

      });


      const data = await res.json();


      if(res.ok){

        alert("Login successfully");

        login(data);

        navigate("/");

      }
      else{

        alert(data.message);

      }


    } 
    catch(error){

      console.error(error);

    }

  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">

      <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg">


        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>



        <form 
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          <div>

            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

          </div>



          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>


            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full border rounded-lg px-4 py-3"
              required
            />

          </div>



          <button
            type="submit"
            className="w-full bg-[#E7A951] text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>


        </form>



        <p className="text-center mt-5">

          Don't have an account?

          <Link
            to="/register"
            className="text-[#E7A951] ml-2 font-semibold"
          >
            Register
          </Link>

        </p>


      </div>

    </div>
  );
};


export default Login;