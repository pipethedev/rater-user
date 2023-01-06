import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopUpLayout from "./components/PopUpLayout";
import Home from "./pages/dashboard/home";

const App = () => {
  return (
    <div className="font-grotesk">
      <Router>
        {/* AUTH PAGES  */}
        <Routes>
          <Route path="/" element={<Login />} />{" "}
          <Route path="/signup" element={<Signup />} />{" "}
        </Routes>

        {/* DASHBOARD PAGES */}
        <Routes>
          <Route path="/dashboard/home" element={<Home />} />
        </Routes>
      </Router>
      {/* <PopUpLayout /> */}
    </div>
  );
};

export default App;
