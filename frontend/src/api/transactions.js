import api from './axios';

export const getTransactions = (params) => api.get('/inventory/transactions/', { params });
export const createTransaction = (data) => api.post('/inventory/transactions/', data);
export const getLowStockAlerts = () => api.get('/inventory/alerts/');
