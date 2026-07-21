import React, { useEffect, useState } from 'react';
import { getTransactions } from '../api/transactions';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(({ data }) => setTransactions(data.results || data));
  }, []);

  return (
    <div>
      <h2>Stock Transactions</h2>
      <table className="table">
        <thead>
          <tr><th>Product</th><th>Type</th><th>Qty</th><th>By</th><th>Date</th></tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>{t.product_name}</td>
              <td>{t.transaction_type}</td>
              <td>{t.quantity}</td>
              <td>{t.performed_by_username}</td>
              <td>{new Date(t.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
