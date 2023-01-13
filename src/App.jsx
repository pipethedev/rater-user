import React, { createContext, useState, useEffect } from "react";
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
import Axios from "axios";

export const RaterContext = createContext();

export const userContext = createContext();

const App = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [token, settoken] = useState();
  const [user, setuser] = useState();
  const mytoken = localStorage.getItem("token");
  useEffect(() => {
    if (mytoken == null) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    Axios.get(`${baseUrl}api/v1/user/profile`, {
      headers: {
        Authorization: `Bearer ${mytoken}`,
      },
    })
      .then((res) => {
        setuser(res.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <RaterContext.Provider value={{ baseUrl, settoken, token, user }}>
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
      </div>
    </RaterContext.Provider>
  );
};

export default App;
