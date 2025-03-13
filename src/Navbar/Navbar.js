import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaQrcode,
  FaMicrophone,
  FaCalendarAlt,
  FaClipboardCheck,
  FaUserCircle,
} from "react-icons/fa";
import logo from "../assets/solidz_logo.avif";
import "./Navbar.css";
import Profile from '../Profile/Profile';


const Navbar = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(location.pathname.slice(1));
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      {/* Top Bar with Logo and Profile Icon */}
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="profile-icon-container" onClick={toggleProfileMenu}>
          <FaUserCircle size={32} className="profile-icon" style={{color: "red"}} />
          {showProfileMenu && (
            <div className="profile-menu">
              <Link to="/profile">Profile</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/">Logout</Link>
            </div>
          )}
        </div>
      </div>

      {/* Glassmorphism Bottom Navbar */}
      <div className="glass-navbar">
        <Link
          to="/qrscan"
          onClick={() => handleIconClick("qrscan")}
          className={`nav-link ${activeIcon === "qrscan" ? "active-icon" : ""}`}
        >
          <FaQrcode size={24} />
        </Link>

        <Link
          to="/record"
          onClick={() => handleIconClick("record")}
          className={`nav-link ${activeIcon === "record" ? "active-icon" : ""}`}
        >
          <FaMicrophone size={24} />
        </Link>

        <Link
          to="/schedule"
          onClick={() => handleIconClick("schedule")}
          className={`nav-link ${
            activeIcon === "schedule" ? "active-icon" : ""
          }`}
        >
          <FaCalendarAlt size={24} />
        </Link>

        <Link
          to="/checklist"
          onClick={() => handleIconClick("checklist")}
          className={`nav-link ${
            activeIcon === "checklist" ? "active-icon" : ""
          }`}
        >
          <FaClipboardCheck size={24} />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
