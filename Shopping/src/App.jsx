import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'remixicon/fonts/remixicon.css';

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const btnClicked = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setAllProducts(response.data);
  };

  const totalAmount = () => {
    let sum = cartData.reduce((acc, elem) => acc + elem.price * elem.quantity, 0);
    setTotal(sum);
  };

  const addToCartFunction = (idx) => {
    const product = allProducts[idx];
    setCartData((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const cartItemDelete = (idx) => {
    setCartData((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[idx].quantity > 1) {
        updatedCart[idx].quantity -= 1;
      } else {
        updatedCart.splice(idx, 1);
      }
      return updatedCart;
    });
  };

  useEffect(() => {
    totalAmount();
  }, [cartData]);

  return (
    <div className='p-6 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 relative'>
      <div className='flex justify-between items-center mb-8'>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={btnClicked} 
          className='bg-blue-600 px-6 py-3 text-white rounded-full shadow-lg text-lg hover:bg-blue-700 transition-all'>
          🚀 Load Products
        </motion.button>
        <h1 className='text-4xl font-bold text-gray-800'>🛍️ Modern Shop</h1>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setCartOpen(!cartOpen)}
          className='bg-gray-900 text-white px-5 py-3 rounded-full shadow-lg relative hover:bg-gray-700 transition-all'>
          🛒 ({cartData.reduce((acc, item) => acc + item.quantity, 0)})
        </motion.button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {allProducts.map((elem, idx) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.4 }}
            className='text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2' 
            key={idx}>
            <img className='mx-auto h-48 object-contain' src={elem.image} alt='' />
            <h1 className='text-xl font-semibold mt-4 text-gray-800'>{elem.title}</h1>
            <h4 className='my-4 text-green-700 font-bold text-2xl'>${elem.price}</h4>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCartFunction(idx)}
              className='bg-yellow-500 text-white py-3 px-8 rounded-full mt-4 shadow-lg hover:bg-yellow-600 transition-all'>
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Slide-in Cart */}
      <motion.div 
        initial={{ x: 400 }}
        animate={{ x: cartOpen ? 0 : 400 }}
        transition={{ duration: 0.4 }}
        className='fixed top-0 right-0 w-96 h-full bg-white shadow-xl p-6 overflow-y-auto rounded-l-3xl'>
        <h2 className='text-3xl font-semibold mb-6 text-gray-900'>🛒 Your Cart</h2>
        {cartData.length > 0 ? cartData.map((elem, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.3 }}
            key={idx} 
            className='flex items-center bg-gray-50 p-4 gap-5 rounded-lg shadow-md mb-3'>
            <img className='h-20 w-20 object-contain rounded-lg' src={elem.image} alt='' />
            <div className='flex-grow'>
              <h1 className='text-[13px] font-medium text-gray-800'>{elem.title}</h1>
              <h4 className='text-green-600 font-bold text-lg'>${elem.price} x {elem.quantity}</h4>
            </div>
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => cartItemDelete(idx)}
              className='bg-red-500 text-white px-3 py-2 rounded-full shadow-lg hover:bg-red-600 transition-all'>
              <i className='ri-delete-bin-line'></i>
            </motion.button>
          </motion.div>
        )) : <p className='text-gray-500 text-lg'>Your cart is empty 🛒</p>}

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='flex justify-between text-2xl font-semibold mt-6 p-4 border-t border-gray-300'>
          <h2>Total:</h2>
          <h5 className='text-green-700'>${total.toFixed(2)}</h5>
        </motion.div>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setCartOpen(false)}
          className='mt-4 w-full bg-blue-600 text-white py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all'>
          🔙 Return to Shop
        </motion.button>
      </motion.div>
    </div>
  );
};

export default App;