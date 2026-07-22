import React, { useEffect, useState } from 'react';
import { getLowStockAlerts } from '../api/transactions';
import { getProducts } from '../api/product';

const Dashboard = () => {
  const [alerts, setAlerts] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    getLowStockAlerts().then(({ data }) => setAlerts(data.results || data)).catch(() => {});
    getProducts().then(({ data }) => setProductCount((data.results || data).length)).catch(() => {});
  }, []);

  return (
    <div>
      <h2>Inventory Dashboard</h2>
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">Total Products</div>
          <div className="stat-value">{productCount}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Low Stock Alerts</div>
          <div className="stat-value" style={{ color: alerts.length ? '#c0392b' : undefined }}>
            {alerts.length}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Low Stock Alerts</h5>
          {alerts.length === 0
            ? <p className="text-muted">No low stock alerts — all good!</p>
            : (
              <ul>
                {alerts.map((a) => (
                  <li key={a.id}>
                    <span className="badge badge-warning" style={{ marginRight: '0.5rem' }}>Low</span>
                    {a.product_name} — <strong>{a.quantity_at_alert}</strong> left
                  </li>
                ))}
              </ul>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
