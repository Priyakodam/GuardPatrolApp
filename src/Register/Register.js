import React from "react";
import "./Register.css";
import assets from "../assets/solidz_logo.avif"

const Register = () => {
  return (
    <div className="registration-box">
      <img
        src={assets}
        alt="Company Logo"
        className="logo"
      />
      <h4 className="mb-3">Register Your Account</h4>
      <form>
        <div className="mb-3 text-start">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" required />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Phone number</label>
          <input type="text" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
