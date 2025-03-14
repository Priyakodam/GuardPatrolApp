import React, { useState, useRef } from "react";
import "./OTP.css";
import logo from '../assets/solidz_logo.avif'

const OTPComponent = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputRefs = useRef([]);

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

    return (
        <div className="otp-card">
            <img src={logo} alt="Company Logo" className="logo" />
            <h4 className="mb-2">We have sent you a code</h4>
            <p className="mb-3">Please enter it below to verify your phone number</p>
            <p className="text-primary">+912424245329</p>
            <form>
                <div className="d-flex justify-content-center mb-3">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            className="otp-input"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => (inputRefs.current[index] = el)}
                        />
                    ))}
                </div>
                <p className="mt-2">
                    Didn’t receive the code? <br />
                    <a href="#" className="resend-link">Send Again</a>
                </p>
            </form>
        </div>
    );
};

export default OTPComponent;
