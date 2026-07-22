import React, { useEffect, useState } from 'react';
import { getTransactions } from '../api/transactions';

const typeBadge = (type) => {
  if (type === 'IN')  return <span className="badge badge-success">IN</span>;
  if (type === 'OUT') return <span className="badge badge-warning">OUT</span>;
  return <span className="badge badge-info">ADJ</span>;
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions().then(({ data }) => setTransactions(data.results || data)).catch(() => {});
  }, []);

  return (
    <div>
      <h2>Stock Transactions</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th><th>Type</th><th>Qty</th><th>By</th><th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0
            ? <tr><td colSpan={5} style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No transactions yet.</td></tr>
            : transactions.map((t) => (
              <tr key={t.id}>
                <td>{t.product_name}</td>
                <td>{typeBadge(t.transaction_type)}</td>
                <td>{t.quantity}</td>
                <td>{t.performed_by_username}</td>
                <td>{new Date(t.created_at).toLocaleString()}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
