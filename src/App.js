import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BeforeLogin from "./components/BeforeLogin";
import Profile from "./components/Profile";
import Success from "./components/Signinsuccess"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BeforeLogin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
