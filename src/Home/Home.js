import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="welcome-text">Welcome!!!</div>
      </div>
    </>
  );
};

export default Home;
