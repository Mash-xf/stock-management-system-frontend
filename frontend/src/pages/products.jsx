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
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h2>Products</h2>
      <input
        className="form-control mb-3"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ProductTable products={products} onEdit={() => {}} onDelete={handleDelete} />
    </div>
  );
};

export default Products;
