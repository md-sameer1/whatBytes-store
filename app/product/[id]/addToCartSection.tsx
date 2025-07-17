'use client'

import { useCartStore } from "@/stores/cart-store"
import { useState } from "react"

type Product = {
  id: number
  title: string
  price: number
  image: string
  category: string
}

export default function AddToCartSection({ product }: { product: Product }) {
  const [qty, setQty] = useState(1)
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <>
      <div className="flex items-center gap-2 mt-4">
        <label htmlFor="qty" className="text-sm font-medium">
          Qty:
        </label>
        <input
          id="qty"
          type="number"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          min={1}
          className="w-16 px-2 py-1 border rounded"
        />
      </div>

      <button
        onClick={() => addToCart({ ...product, quantity: qty })}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition text-sm font-semibold"
      >
        Add to Cart
      </button>
    </>
  )
}
