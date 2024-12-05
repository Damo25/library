import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Logout" element={<Logout />} />
      </Routes>
    </Router>
     );
  }
export default App;