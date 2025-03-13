import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar"
import Register from "./Register/Register"
import Home from "./Home/Home";
import Profile from "./Profile/Profile"
import QRScan from "./QRScan/QRScan";
import Record from "./Record/Record";
import Schedule from "./Schedule/Schedule";
import CheckList from "./CheckList/CheckList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/qrscan" element={<QRScan />} />
        <Route path="/record" element={<Record />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/checklist" element={<CheckList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
