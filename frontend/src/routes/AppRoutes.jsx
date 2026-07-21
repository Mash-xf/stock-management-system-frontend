import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Transactions from '../pages/Transactions';
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/products" element={<Products />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/customers" element={<Customers />} />
  </Routes>
);

export default AppRoutes;
