import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api.get('/customers/', { params: { search } })
      .then(({ data }) => setCustomers(data.results || data))
      .catch(() => {});
  }, [search]);

  return (
    <div>
      <h2>Customers</h2>
      <div className="page-toolbar">
        <input
          className="form-control"
          placeholder="Search customers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
        </thead>
        <tbody>
          {customers.length === 0
            ? <tr><td colSpan={3} style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No customers found.</td></tr>
            : customers.map((c) => (
              <tr key={c.id}>
                <td>{c.full_name}</td>
                <td>{c.email}</td>
                <td>{c.phone_number}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
