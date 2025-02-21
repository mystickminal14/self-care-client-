import { Routes, Route } from "react-router-dom";
import React from 'react'
import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import RegularFood from "../pages/prompt_process/RegularFood";
import Tabs from '../pages/prompt_process/health';
import OsscianFood from "../pages/prompt_process/OsscianFood";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/regular-food" element={<RegularFood />} />
      <Route path="/health" element={<Tabs />} />
      <Route path="/osscian-food" element={<OsscianFood />} />

    </Routes >
  )
}

export default AppRoutes
