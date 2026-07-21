import React, { useEffect, useState } from 'react';
import api from '../api/axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    api.get('/customers/').then(({ data }) => setCustomers(data.results || data));
  }, []);

  return (
    <div>
      <h2>Customers</h2>
      <table className="table">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.full_name}</td>
              <td>{c.email}</td>
              <td>{c.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;

