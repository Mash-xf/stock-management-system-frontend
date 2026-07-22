import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th><th>SKU</th><th>Category</th>
        <th>Price</th><th>Qty</th><th>Status</th><th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.length === 0
        ? <tr><td colSpan={7} style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No products found.</td></tr>
        : products.map((p) => (
          <tr key={p.id} className={p.is_low_stock ? 'table-warning' : ''}>
            <td>{p.name}</td>
            <td><code style={{ background: 'var(--beige)', padding: '2px 6px', borderRadius: 4, fontSize: '0.82rem' }}>{p.sku}</code></td>
            <td>{p.category_name || '—'}</td>
            <td>${p.unit_price}</td>
            <td>{p.quantity_in_stock}</td>
            <td>
              {p.is_low_stock
                ? <span className="badge badge-warning">Low Stock</span>
                : <span className="badge badge-success">OK</span>
              }
            </td>
            <td>
              <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(p)}>Edit</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default ProductTable;
