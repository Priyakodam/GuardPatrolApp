import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import assets from "../assets/solidz_logo.avif";

const Register = ({ setGeneratedOtp }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName && phoneNumber) {
      const generatedOtp = Array.from({ length: 6 }, () =>
        Math.floor(Math.random() * 10).toString()
      ).join(""); // Generate OTP as a string

      setGeneratedOtp(generatedOtp); // Save OTP
      alert(`Generated OTP: ${generatedOtp}`); // Show OTP as alert
      console.log("Generated OTP:", generatedOtp); // Log for debugging
      navigate("/otp");
    }
  };

  return (
    <div className="register-container-unique">
      <img src={assets} alt="Company Logo" className="register-logo-unique" />
      <h4 className="mb-3">Register Your Account</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-start">
          <label className="form-label-unique">Full Name</label>
          <input
            type="text"
            className="form-control-unique"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label-unique">Phone number</label>
          <input
            type="text"
            className="form-control-unique"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-btn-unique">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
