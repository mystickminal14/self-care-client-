import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import '../Login/login.css'
import usePost from './../../hooks/usePost';
const SignUpPage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const { save } = usePost("/users/register",data);
  const handleSubmit = async(e) => {
    e.preventDefault();
   
    await save();
    navigate("/health");
  };

  return (
    <div className=" background flex justify-center items-center h-screen">
      <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800">Sign Up</h1>
          <p className="text-gray-600 mt-1">Join now to organize your world</p>
        </div>

        <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="text-gray-800 font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={data.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="text-gray-700 font-medium">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={data.username}
              onChange={handleChange}
              placeholder="Choose a username"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-gray-800 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                value={data.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <span
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-800 transition-all"
          >
            Sign Up
          </button>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <Link to="/" className="text-blue-800 hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
