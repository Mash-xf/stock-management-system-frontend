import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../api/product';
import ProductTable from '../component/ProductTable';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const fetchProducts = async () => {
    const { data } = await getProducts({ search });
    setProducts(data.results || data);
  };

  useEffect(() => { fetchProducts(); }, [search]);

  const handleDelete = async (id) => {
    if (window.confirm('Delete this product?')) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <div className="page-toolbar">
        <input
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ProductTable products={products} onEdit={() => {}} onDelete={handleDelete} />
    </div>
  );
};

export default Products;
