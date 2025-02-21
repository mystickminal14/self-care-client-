import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import useLogin from "../../hooks/useLogin";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { loginUser } = useLogin("/auth/login", {
    username: data['username'],
    password: data['password'],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", data);
    loginUser();
  };

  return (
    <div className="background flex justify-center items-center h-screen">
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800">Sign In</h1>
          <p className="text-gray-600 mt-1">Sign in to stay connected</p>
        </div>

        <form className="flex flex-col gap-4 mt-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="text-gray-800 font-medium">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
              value={data.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                value={data.password}
                onChange={handleChange}
              />
              <span
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-800"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-800 transition-all"
          >
            Sign In
          </button>

          <p className="text-center text-gray-800 mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-800 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
