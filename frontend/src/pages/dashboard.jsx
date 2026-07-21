import React, { useEffect, useState } from 'react';
import { getLowStockAlerts } from '../api/transactions';

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getLowStockAlerts().then(({ data }) => setAlerts(data.results || data));
  }, []);

  return (
    <div>
      <h2>Inventory Dashboard</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Low Stock Alerts</h5>
          <ul>
            {alerts.map((a) => (
              <li key={a.id}>{a.product_name} — {a.quantity_at_alert} left</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
