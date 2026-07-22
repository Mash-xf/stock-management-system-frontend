import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const justRegistered = location.state?.registered;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(username, password);
      navigate('/dashboard');
    } catch {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Stock Management</h2>

        {justRegistered && (
          <div className="alert alert-success">Account created! Please log in.</div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control" placeholder="Username"
              value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <input className="form-control" type="password" placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
