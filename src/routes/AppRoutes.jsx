import { Routes, Route } from "react-router-dom";
import React from 'react'
import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import  Tabs  from '../pages/prompt_process/health';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Tabs />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/health" element={<Tabs />} />
    </Routes >
  )
}

export default AppRoutes
