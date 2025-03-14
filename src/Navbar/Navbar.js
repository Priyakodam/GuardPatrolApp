import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaQrcode,
  FaMicrophone,
  FaCalendarAlt,
  FaClipboardCheck,
  FaUserCircle,
  FaBell,
  FaHome,
} from "react-icons/fa";
import logo from "../assets/solidz_logo.avif";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(location.pathname.slice(1));
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);


  useEffect(() => {
    const path = location.pathname.slice(1) || "qrscan"; // Default to "qrscan"
    setActiveIcon(path);
  }, [location.pathname]);

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>
      {/* Top Bar with Logo, Notification Bell and Profile Icon */}

      <div className="top-bar" style={{ backgroundColor: "black" }}>
        <img src={logo} alt="Logo" className="logo" />

        <div className="top-right-icons">
          <div className="notification-icon" onClick={toggleNotifications}>
            <FaBell size={25} style={{ cursor: "pointer", color: "#2a2927" }} />
            {showNotifications && (
              <div className="notification-menu">
                <p>
                  <strong>Notifications</strong>
                </p>
                <p>No new messages</p>
              </div>
            )}
          </div>

          <div className="profile-icon-container" onClick={toggleProfileMenu}>
            <FaUserCircle size={32} className="profile-icon" style={{color: "#2a2927"}} />
            {showProfileMenu && (
              <div className="profile-menu">
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <Link to="/">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Glassmorphism Bottom Navbar */}
      <div className="glass-navbar">


        <Link
          to="/qrscan"
          onClick={() => handleIconClick("qrscan")}
          className={`nav-link ${activeIcon === "qrscan" ? "active-icon" : ""}`}
        >
          <FaQrcode size={22} />
        </Link>

        <Link
          to="/record"
          onClick={() => handleIconClick("record")}
          className={`nav-link ${activeIcon === "record" ? "active-icon" : ""}`}
        >
          <FaMicrophone size={22} />
        </Link>

        <Link
          to="/home"
          onClick={() => handleIconClick("home")}
          className={`nav-link ${
            activeIcon === "home" ? "active-icon" : ""
          }`}
        >
          <FaHome size={26} style={{paddingTop:"-10px"}}/>
        </Link>

        <Link
          to="/schedule"
          onClick={() => handleIconClick("schedule")}
          className={`nav-link ${
            activeIcon === "schedule" ? "active-icon" : ""
          }`}
        >
          <FaCalendarAlt size={22} />
        </Link>

        <Link
          to="/checklist"
          onClick={() => handleIconClick("checklist")}
          className={`nav-link ${
            activeIcon === "checklist" ? "active-icon" : ""
          }`}
        >
          <FaClipboardCheck size={22} />
        </Link>

      </div>
    </>
  );
};

export default Navbar;
