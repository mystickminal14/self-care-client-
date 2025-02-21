import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Login/login.css'
import { FaEyeSlash, FaEye } from "react-icons/fa";
const Food = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="background flex justify-center text-black bg-slate-800 items-center h-screen">
      <div className="bg-sign-in max-w-md w-[90%]  justify-start bg-white flex flex-col gap-5 rounded-lg shadow-lg p-5">
        <div className="flex justify-kcenter flex-col items-center p-4">
          <h1 className="text-blue-900 text-3xl font-bold w-full p-3 rounded-b-lg text-center">
            Prompt Process
          </h1>
        </div>
        <form
          className="flex flex-col p-3 gap-6 w-full"

        >
          <label htmlFor="username">Username</label>
          <input
            id="outlined-basic"
            name="username"
            className="w-full"
            label="Username"
            variant="outlined"
            placeholder='Username'

          />
          <div className="relative w-full">
            <label htmlFor="password">Password</label>
            <input
              id="outlined-password-input"
              label="password"
              name="password"
              placeholder='password'
              type={show ? "text" : "password"}
              className="w-full"
              autoComplete="current-password"
            />

            {show ? (
              <FaEye
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShow(!show)}
              />
            ) : (
              <FaEyeSlash
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShow(!show)}
              />
            )}
          </div>
          <div className="flex justify-between items-center w-full mt-2">
            <label
              control={<input value="remember" color="primary" />}
              label="Remember me"
            />
            <Link
              to="#"
              className="text-blue-700 hover:text-black transition-all"
            >
              Forget password?
            </Link>
          </div>
          <button
            className="w-full self-center md:w-28"
            variant="contained"
          >
            Sign In
          </button>
          <Link
            to="/signup"
            style={{ marginTop: '-15px' }}
            className="text-blue-700 self-center hover:text-black transition-all mt-2"
          >
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Food