import React, { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

const ProductFilter = () => {
  const [products, setProducts] = useState([]); 
  const [filter, setFilter] = useState(""); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const mockProducts = [
      { id: 1, name: "iPhone 14", category: "Mobile", price: 799 },
      { id: 2, name: "Samsung Galaxy S23", category: "Mobile", price: 999 },
      { id: 3, name: "MacBook Pro", category: "Laptop", price: 1999 },
      { id: 4, name: "AirPods", category: "Accessories", price: 199 },
      { id: 5, name: "Jansi", category: "Love", price: 'allready sold' }
    ];
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  
  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [filter, products]);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <input
        type="text"
        placeholder="Filter by product name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ul className="list-none p-0">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductDetail key={product.id} product={product} />
          ))
        ) : (
          <li className="text-center text-gray-500">No products found.</li>
        )}
      </ul>
    </div>
  );
};

export default ProductFilter;
