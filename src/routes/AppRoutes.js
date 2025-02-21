import { Routes, Route } from "react-router-dom";
import React from 'react'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Login</h1>}/>
      <Route path="/" element={<h1>Register</h1>}/>
      <Route path="/*" element={<h1>dashoard</h1>}/>


    </Routes>
  )
}

export default AppRoutes
