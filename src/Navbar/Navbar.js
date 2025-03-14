import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaQrcode,
  FaMicrophone,
  FaCalendarAlt,
  FaClipboardCheck,
  FaUserCircle,
  FaBell,
} from "react-icons/fa";
import logo from "../assets/solidz_logo.avif";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(location.pathname.slice(1));
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

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
            <FaBell size={25} style={{ cursor: "pointer", color: "white" }} />
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
            <FaUserCircle size={32} className="profile-icon" />
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
