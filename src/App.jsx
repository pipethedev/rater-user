import React, { createContext, useState } from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopUpLayout from "./components/PopUpLayout";
import Home from "./pages/dashboard/home";
import Library from "./pages/dashboard/library";
import Transaction from "./pages/dashboard/transaction";
import Feedback from "./pages/dashboard/feedback";
import Settings from "./pages/dashboard/settings";
import Profile from "./pages/dashboard/profile";
import { MdSingleBed } from "react-icons/md";
import SingleMusic from "./pages/dashboard/singleMusic";
import AddSong from "./pages/dashboard/addsong";

export const RaterContext = createContext();

const App = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [token, settoken] = useState();
  console.log(token);
  return (
    <RaterContext.Provider value={{ baseUrl, settoken, token }}>
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
            <Route path="/dashboard/library" element={<Library />} />
            <Route path="/dashboard/sound" element={<AddSong />} />
            <Route path="/dashboard/:songName" element={<SingleMusic />} />
            <Route path="/dashboard/transaction" element={<Transaction />} />
            <Route path="/dashboard/feedback" element={<Feedback />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/dashboard/settings" element={<Settings />} />
          </Routes>
        </Router>
        {/* <PopUpLayout /> */}
      </div>
    </RaterContext.Provider>
  );
};

export default App;
