import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../Login/login.css";
import usePost from "./../../hooks/usePost";
import Swal from "sweetalert2";
import useLogin from "../../hooks/useLogin";
import ClockLoader from "react-spinners/ClockLoader";

const SignUpPage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { save } = usePost("/users/register", data);
  const { loginUser } = useLogin("/auth/login", {
    username: data.username,
    password: data.password,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.fullName.split(" ").length < 2) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Input Validation Error!",
        text: "Please enter your full name!!",
        showConfirmButton: true,
      });
      return;
    }

    if (data.username.length < 5) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Input Validation Error!",
        text: "Username must be at least 5 characters!",
        showConfirmButton: true,
      });
      return;
    }

    if (data.password.length < 8) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Input Validation Error!",
        text: "Password must be at least 8 characters!",
        showConfirmButton: true,
      });
      return;
    }

    setIsLoading(true);
    const check = await save();

    if (check) {
      setData({ fullName: "", username: "", password: "" }); // Reset form data
      const checked = await loginUser();
      if (checked) {
        navigate("/health");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="background flex justify-center items-center h-screen">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75">
          <ClockLoader color="#2563eb" size={100} aria-label="Loading Spinner" />
        </div>
      )}

      <div className="bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-800">Sign Up</h1>
          <p className="text-gray-600 mt-1">Join now to organize your world</p>
        </div>

        <form className="space-y-4 mt-5" onSubmit={handleSubmit}>
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

          <div>
            <label htmlFor="password" className="text-gray-800 font-medium">
              Password
            </label>
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

          <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;