import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function CartFooter({ total }) {
  const navigate = useNavigate();
  const { cart } = useCart();

  const handleContinue = () => {
    const items = Object.values(cart).map(item => ({
      name: item.label,
      qty: item.qty,
      price: item.price,
    }));
    
    navigate("/booking", { state: { items, totalAmount: total } });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center">
      <div>
        <p className="text-xs text-gray-500">Total</p>
        <p className="font-bold text-lg">₹{total}</p>
      </div>

      <button 
        onClick={handleContinue}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        Continue
      </button>
    </div>
  );
}
