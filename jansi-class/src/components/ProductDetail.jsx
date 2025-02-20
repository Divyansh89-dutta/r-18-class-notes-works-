
import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <li className="mb-4 border border-gray-300 p-4 rounded">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600">Category: {product.category}</p>
      <p className="text-gray-600">Price: ${product.price}</p>
    </li>
  );
};

export default ProductDetail;
