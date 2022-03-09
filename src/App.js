import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BeforeLogin from "./components/BeforeLogin";
import Profile from "./components/Profile";

function App() {

  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
        <BeforeLogin 
        />} 
        />
        <Route path="/profile" element={
        <Profile 
        />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
