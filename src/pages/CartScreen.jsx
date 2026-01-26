import React from "react";
import { useCart } from "../utils/CartContext";
import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";

export default function CartScreen() {
  const { cart } = useCart();
  const items = Object.values(cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      <div className="p-4 pb-28">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">
            No services added yet
          </p>
        ) : (
          items.map((item) => (
            <CartItem key={item.label} item={item} />
          ))
        )}
      </div>

      {items.length > 0 && <CartFooter total={total} />}
    </>
  );
}
