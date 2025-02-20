import { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  );
}
