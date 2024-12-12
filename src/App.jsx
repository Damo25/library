import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Logout from "./pages/Logout";
import ContentBoxAdminResults from './components/ContentBoxAdminResults';
import ContentBoxAdminUserResults from './components/ContentBoxAdminUserResults';
import NonRegisteredHome from "./pages/NonRegisteredHome";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/NonRegisteredHome" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/admin-results" element={<ContentBoxAdminResults />} />
      <Route path="/user-admin" element={<ContentBoxAdminUserResults />} />
      <Route path="/NonRegisteredHome" element={<NonRegisteredHome />} />
      </Routes>
    </Router>
  );
}

export default App;