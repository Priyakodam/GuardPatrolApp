import React from "react";
import { FaCamera } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import "./QRScan.css";
import "bootstrap/dist/css/bootstrap.min.css";

const QRScan = () => {
  return (
    <div className="container-fluid d-flex flex-column justify-content-between qrscan-container">
       <Navbar />
      {/* QR Scan Section */}
      <div className="row justify-content-center align-items-center flex-grow-1">
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
