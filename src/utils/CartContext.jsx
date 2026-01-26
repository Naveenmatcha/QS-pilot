import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("qs_cart")) || {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("qs_cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add item
  const addItem = (serviceItem) => {
    const label = serviceItem.label;
    const price = parseInt(
      String(serviceItem.price).replace("₹", "").trim(),
      10
    );

    setCart((prev) => {
      const existing = prev[label] || { label, price, qty: 0 };
      return {
        ...prev,
        [label]: { ...existing, qty: existing.qty + 1 },
      };
    });
  };

  // ➖ Decrease item
  const decreaseItem = (label) => {
    setCart((prev) => {
      const item = prev[label];
      if (!item) return prev;

      if (item.qty <= 1) {
        const copy = { ...prev };
        delete copy[label];
        return copy;
      }

      return {
        ...prev,
        [label]: { ...item, qty: item.qty - 1 },
      };
    });
  };

  // 🗑 Remove item completely
  const removeItem = (label) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[label];
      return copy;
    });
  };

  const clearCart = () => setCart({});

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
