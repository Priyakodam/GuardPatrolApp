import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import logo from "../Img/solidz_logo.avif";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (email === "admin@gmail.com" && password === "admin@123") {
      navigate('/home');
    } else {
      setError('Invalid email or password.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
      <div className="card" style={{ width: '36rem' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            {/* <img src={logo} alt="Logo" className="mb-2" style={{ width: '250px', height: '100px' }} /> */}
            <h3>Login</h3>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label><br />
              <input
                type="email"
                className="input-login-email mt-1"
                id="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label htmlFor="password" style={{ fontWeight: 'bold' }}>Password</label><br />
              <input
                type={showPassword ? 'text' : 'password'}
                className="input-login-password mt-1"
                id="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
             
            </div>
            {error && <div className="text-danger text-center">{error}</div>}
            <div className="text-center">
              <button
                type="submit"
                className="btn loginbutton btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;