export default function ProductCard({ product, addToCart }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <img src={product.image} alt={product.title} className="w-32 h-32 object-cover mb-4" />
        <h2 className="text-lg font-bold text-gray-800 text-center">{product.title}</h2>
        <p className="text-gray-600 mt-2">${product.price}</p>
        <button 
          onClick={() => addToCart(product)} 
          className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition">
          Add to Cart
        </button>
      </div>
    );
  }
  