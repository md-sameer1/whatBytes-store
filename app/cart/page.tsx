"use client";

import { useCartStore } from "@/stores/cart-store";
import Link from "next/link";
import { Trash } from "lucide-react";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCartStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty 🛒</h1>
        <Link
          href="/"
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm font-medium">
          ← Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="space-y-6 mb-12">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center gap-6 p-5 bg-white rounded-2xl shadow-md border">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded-lg border"
            />

            <div className="flex-1 w-full">
              <h2 className="text-base font-semibold text-gray-900">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                ${item.price.toFixed(2)} each
              </p>

              <div className="mt-4 flex items-center gap-3">
                <label className="text-sm font-medium text-gray-600">
                  Qty:
                </label>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-20 px-3 py-1.5 border rounded-md text-sm text-black"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 justify-between sm:flex-col sm:items-end sm:gap-2">
              <div className="text-sm font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700">
                <Trash size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t pt-6">
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:underline">
          Clear Cart
        </button>

        <div className="text-xl font-bold">
          Total: <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
