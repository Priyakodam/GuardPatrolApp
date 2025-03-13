import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    
    const navigate = useNavigate();

    // Mock function to generate OTP
    const generateOtp = () => {
        if (mobile.length !== 10) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }

        const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setGeneratedOtp(newOtp);
        setIsOtpSent(true);
        alert(`Your OTP is: ${newOtp}`); // For demo purposes only.
    };

    // Function to verify OTP
    const verifyOtp = () => {
        if (otp === generatedOtp) {
            alert('OTP Verified Successfully!');
            navigate('/home'); // Redirect to Home page
        } else {
            alert('Invalid OTP! Please try again.');
            // Resetting everything and redirecting to registration form
            setMobile('');
            setOtp('');
            setGeneratedOtp('');
            setIsOtpSent(false);
            navigate('/'); // Redirect to the registration page
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <div className="card p-4 shadow-sm">
                <h3 className="text-center mb-4">Register</h3>

                {!isOtpSent ? (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your mobile number"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                maxLength={10}
                            />
                        </div>
                        <button
                            className="btn btn-primary w-100"
                            onClick={generateOtp}
                        >
                            Get OTP
                        </button>
                    </>
                ) : (
                    <>
                        <div className="mb-3">
                            <label className="form-label">Enter OTP</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={4}
                            />
                        </div>
                        <button
                            className="btn btn-success w-100"
                            onClick={verifyOtp}
                        >
                            Verify OTP
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Register;
