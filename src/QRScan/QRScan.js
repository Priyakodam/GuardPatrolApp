import React from "react";
import { FaCamera } from "react-icons/fa";
// import Navbar from "../Navbar/Navbar";
import "./QRScan.css";
import "bootstrap/dist/css/bootstrap.min.css";

const QRScan = () => {
  return (
    <div className="home-page d-flex flex-column justify-content-center qrscan-container min-vh-100">
      {/* <Navbar /> */}
      {/* QR Scan Section */}
      <div className="row justify-content-center align-items-center">
        <div className="col-10 text-center">
          <FaCamera size={100} className="camera-icon mb-4" />
          <button className="btn btn-primary scan-button">Scan QR Code</button>
        </div>
      </div>

      {/* Bottom Navbar */}
      {/* <Navbar /> */}
    </div>
  );
};

export default QRScan;
