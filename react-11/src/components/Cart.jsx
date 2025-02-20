export default function Cart({ cart }) {
    return (
      <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">No items in the cart</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cart.map((item, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <span className="text-gray-800">{item.title}</span>
                <span className="text-gray-600">${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  