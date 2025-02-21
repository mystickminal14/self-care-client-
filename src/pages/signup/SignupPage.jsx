import React, { useState } from "react";
import "../Login/login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const SignUpPage = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
  const data = {
    fullName: '',
    username: "",
    email: "",
    password: "",

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
        <form className="space-y-4 p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              className="w-full"
              label="Full Name"
              autoComplete="fullName"
              placeholder="'Full Name"

            />
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              className="w-full"
              label="Username"
              variant="outlined"
              autoComplete="username"
              placeholder="Username"
            />
           
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type={show ? "text" : "password"}
              className="w-full"
              label="Password"
              variant="outlined"
              placeholder="Password"
              autoComplete="current-password"
              InputProps={{
                endAdornment: (
                  <div
                    onClick={() => setShow(!show)}
                    className="cursor-pointer"
                  >
                    {show ? <FaEye /> : <FaEyeSlash />}
                  </div>
                ),
              }}
            />

          </div>


          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full self-center md:w-28"
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
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