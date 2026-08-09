import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();



  const handleSubmit = async (e) => {

    e.preventDefault();


    if(password !== confirmPassword){
      alert("Password and confirm password not match");
      return;
    }


    try {

      const res = await fetch("/api/auth/register", {

        method: "POST",

        headers:{
          "Content-Type":"application/json"
        },

        body: JSON.stringify({
          name,
          email,
          password
        })

      });



      const data = await res.json();


      if(res.ok){

        alert("Registration successfully. Please check your email for welcome OTP.");

        // login(data);

        navigate("/login");

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
          Create Account
        </h1>



        <form 
          onSubmit={handleSubmit}
          className="space-y-4"
        >
 <label className="block mb-2 font-medium">
             Name
            </label>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none"
            required
          />


 <label className="block mb-2 font-medium">
              Email
            </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none"
            required
          />


 <label className="block mb-2 font-medium">
              Password
            </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none"
            required
          />


 <label className="block mb-2 font-medium">
          Confirm Password
            </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 outline-none"
            required
          />



          <button
            type="submit"
            className="w-full bg-[#E7A951] text-white py-3 rounded-lg font-semibold hover:bg-[#d99535]"
          >
            Register
          </button>


        </form>



        <p className="text-center mt-5 text-gray-600">

          Already have an account?

          <Link
            to="/login"
            className="text-[#E7A951] font-semibold ml-2"
          >
            Login
          </Link>

        </p>


      </div>


    </div>

  );
};


export default Register;