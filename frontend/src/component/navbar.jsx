import React from "react";
import{link}from 'react-router-dom';
import{useAuth}from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Stock Management</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/transactions">Transactions</Link>
        <Link className="nav-link" to="/customers">Customers</Link>
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
        {user ? (
          <button className="btn btn-outline-light btn-sm ms-2" onClick={logout}>Logout</button>
        ) : (
          <Link className="nav-link" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
