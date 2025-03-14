import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./OTP.css";
import logo from "../assets/solidz_logo.avif";

const OTPComponent = ({ generatedOtp }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      generatedOtp &&
      Array.isArray(generatedOtp) &&
      generatedOtp.length === 6
    ) {
      alert(`Received OTP: ${generatedOtp.join("")}`); // Display OTP as an alert
      setOtp(Array(6).fill("")); // Reset OTP input fields to empty
    }
  }, [generatedOtp]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join(""); // Combine array into a string
    console.log("Entered OTP:", enteredOtp); // Log for debugging
    console.log("Generated OTP:", generatedOtp); // Log for debugging

    if (enteredOtp === generatedOtp) {
      navigate("/home");
    } else {
      alert("Incorrect OTP. Please try again.");
      setOtp(Array(6).fill("")); // Clear the input fields
      inputRefs.current[0].focus();
    }
  };

  return (
    <div className="otp-container-unique">
      <img src={logo} alt="Company Logo" className="otp-logo-unique" />
      <h4 className="mb-2">We have sent you a code</h4>
      <p className="mb-3">Please enter it below to verify your phone number</p>
      <form onSubmit={handleSubmit}>
        <div className="otp-input-container-unique">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="otp-input-unique"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <button type="submit" className="register-btn-unique">
          Submit
        </button>
        <p className="resend-text-unique">
          Didn’t receive the code? <br />
          <a href="#" className="resend-link-unique">
            Send Again
          </a>
        </p>
      </form>
    </div>
  );
};

export default OTPComponent;
