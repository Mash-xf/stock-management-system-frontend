import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ROLES = [
  { value: 'STAFF',   label: 'Staff' },
  { value: 'MANAGER', label: 'Inventory Manager' },
  { value: 'ADMIN',   label: 'Administrator' },
];

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '', email: '', first_name: '', last_name: '',
    role: 'STAFF', password: '', confirm_password: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);
    try {
      await register(form);
      navigate('/login', { state: { registered: true } });
    } catch (err) {
      const data = err.response?.data;
      if (data && typeof data === 'object') setErrors(data);
      else setErrors({ non_field_errors: ['Something went wrong. Please try again.'] });
    } finally {
      setLoading(false);
    }
  };

  const fieldError = (key) =>
    errors[key] ? <span className="field-error">{errors[key][0]}</span> : null;

  return (
    <div className="login-wrapper">
      <div className="login-card" style={{ maxWidth: 480 }}>
        <h2>Create Account</h2>

        {errors.non_field_errors && (
          <div className="alert alert-danger">{errors.non_field_errors[0]}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input className="form-control" placeholder="First name"
                value={form.first_name} onChange={set('first_name')} />
              {fieldError('first_name')}
            </div>
            <div className="form-group">
              <input className="form-control" placeholder="Last name"
                value={form.last_name} onChange={set('last_name')} />
              {fieldError('last_name')}
            </div>
          </div>

          <div className="form-group">
            <input className="form-control" placeholder="Username"
              value={form.username} onChange={set('username')} required />
            {fieldError('username')}
          </div>

          <div className="form-group">
            <input className="form-control" type="email" placeholder="Email"
              value={form.email} onChange={set('email')} />
            {fieldError('email')}
          </div>

          <div className="form-group">
            <select className="form-control" value={form.role} onChange={set('role')}>
              {ROLES.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
            </select>
          </div>

          <div className="form-group">
            <input className="form-control" type="password" placeholder="Password (min 8 chars)"
              value={form.password} onChange={set('password')} required />
            {fieldError('password')}
          </div>

          <div className="form-group">
            <input className="form-control" type="password" placeholder="Confirm password"
              value={form.confirm_password} onChange={set('confirm_password')} required />
            {fieldError('confirm_password')}
          </div>

          <button className="btn btn-primary w-100" type="submit" disabled={loading}>
            {loading ? 'Creating account…' : 'Sign Up'}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
