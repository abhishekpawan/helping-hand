import "./App.css";
import React from "react";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BeforeLogin from "./components/BeforeLogin";
import Profile from "./components/Profile";
import CLickContext from "./context/click-context";

function App() {
  const [cookie, setCookie] = useState(); //our cookie data


  // getting cookie data from "beforelogin.js"
  const cookieData = (cookieData) => {
    setCookie(cookieData);
  };
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
        <BeforeLogin 
        onCookie={cookieData} 
        />} 
        />
        <Route path="/profile" element={
        <Profile 
        cookieData={cookie}
        />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
