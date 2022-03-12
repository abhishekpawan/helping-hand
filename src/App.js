import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BeforeLogin from "./components/BeforeLogin";
import Profile from "./components/Profile";
import Success from "./components/Signinsuccess"
import Reedem from "./components/Reedem"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BeforeLogin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/success" element={<Success />} />
        <Route path="/reedem" element={<Reedem />} />
      </Routes>
    </Router>
  );
}

export default App;
