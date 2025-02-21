import React, { useState } from "react";
import "../Login/login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name,value}=e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", data);
    navigate("/health"); 
  };

  return (
    <div className="background flex justify-center text-black bg-slate-800 items-center h-full sm:h-screen">
      <div className="bg-sign-up max-w-xl w-[90%] h-auto justify-start bg-white flex flex-col gap-5 rounded-lg shadow-lg p-5">
        <div className="flex justify-center flex-col items-center p-4">
          <h1 className="text-blue-900 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
            Sign Up
          </h1>
          <p className="text-xl text-center">Join now to organize your world</p>
        </div>
        <form className="space-y-4 p-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              className="w-full"
              value={data.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />

            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className="w-full"
              value={data.username}
              onChange={handleChange}
              placeholder="Username"
            />

            <label htmlFor="password">Password</label>
            <div className="relative w-full">
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                className="w-full"
                value={data.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <div
                className="absolute right-3 top-2 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                {show ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full self-center md:w-28 bg-blue-500 text-white py-2 rounded-lg"
            >
              Sign Up
            </button>
            <div className="text-center">
              <Link to="/" className="text-blue-500">
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
