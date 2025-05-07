import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', form);
      // Store user info in localStorage
      localStorage.setItem('userInfo', JSON.stringify(response.data));
      // Redirect to home page
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during signup');
    }
  };

  return (
    <div className="auth-page">
      <button className="back-arrow-btn" onClick={() => navigate(-1)} title="Go back">←</button>
      <div className="auth-bg-shape"></div>
      <div className="auth-bg-shape-2"></div>
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join FreshBite and start your healthy eating journey</p>
          </div>
          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="input-group">
              <span className="input-icon">👤</span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon">📧</span>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-icon">🔒</span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="primary-button-signup">Sign Up</button>
            <div className="auth-divider">
              <span>or</span>
            </div>
            <p className="switch-link">
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup; 