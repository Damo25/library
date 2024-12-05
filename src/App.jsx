import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleOnSubmit = async (e) => {
      e.preventDefault();
      let result = await fetch(
      'http://localhost:5000/register', {
          method: "post",
          body: JSON.stringify({ name, email }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      result = await result.json();
      console.warn(result);
      if (result) {
          alert("Data saved succesfully");
          setEmail("");
          setName("");
      }
    }

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