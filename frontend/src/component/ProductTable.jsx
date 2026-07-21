import React from 'react';

const ProductTable = ({ products, onEdit, onDelete }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>SKU</th>
        <th>Category</th>
        <th>Price</th>
        <th>Qty in Stock</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {products.map((p) => (
        <tr key={p.id} className={p.is_low_stock ? 'table-warning' : ''}>
          <td>{p.name}</td>
          <td>{p.sku}</td>
          <td>{p.category_name}</td>
          <td>${p.unit_price}</td>
          <td>{p.quantity_in_stock}</td>
          <td>{p.is_low_stock ? 'Low Stock' : 'OK'}</td>
          <td>
            <button className="btn btn-sm btn-primary me-2" onClick={() => onEdit(p)}>Edit</button>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(p.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ProductTable;
