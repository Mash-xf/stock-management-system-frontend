import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Products from '../pages/products';
import Transactions from '../pages/transactions';
import Customers from '../pages/customer';
import Dashboard from '../pages/dashboard';

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
