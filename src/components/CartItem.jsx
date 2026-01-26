import React from "react";
import { useCart } from "../utils/CartContext";

export default function CartItem({ item }) {
  const { addItem, decreaseItem, removeItem } = useCart();

  return (
    <div className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm mb-3 border border-gray-100 hover:shadow-md transition-shadow">
      {/* Service Info */}
      <div className="flex-1">
        <p className="font-semibold text-sm text-gray-900">{item.label}</p>
        <p className="text-gray-500 text-xs mt-1">₹{item.price} × {item.qty} = ₹{item.price * item.qty}</p>
      </div>

      {/* Controls - Quantity Adjuster */}
      <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
        {/* Decrease Button */}
        <button
          onClick={() => decreaseItem(item.label)}
          className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
          title="Reduce quantity"
        >
          −
        </button>

        {/* Quantity Display */}
        <span className="w-8 text-center font-semibold text-sm text-gray-900">
          {item.qty}
        </span>

        {/* Increase Button */}
        <button
          onClick={() => addItem(item)}
          className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors"
          title="Add more"
        >
          +
        </button>
      </div>

      {/* Trash Button - Instant Delete */}
      <button
        onClick={() => removeItem(item.label)}
        className="ml-3 p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors active:bg-red-100"
        title="Remove from cart"
      >
        🗑️
      </button>
    </div>
  );
}
