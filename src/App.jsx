import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;