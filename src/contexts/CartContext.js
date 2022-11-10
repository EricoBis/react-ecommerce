import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const item = cart.filter((p) => p.id === product.id);
    if (item.length > 0) {
      return;
    }
    const newItem = {
      ...product,
      quantity: 1,
    };
    setCart([newItem, ...cart]);
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function cartSum() {
    let result = cart.reduce(getTotal, 0);
    return result.toFixed(2);
  }

  function getTotal(total, item) {
    return total + item.price * item.quantity;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
