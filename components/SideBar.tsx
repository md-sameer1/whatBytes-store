"use client";

import { useState } from "react";

export default function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [price, setPrice] = useState(1000);

  return (
    <aside className="bg-blue-500 text-white rounded-lg shadow p-4 w-full sm:w-60">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Category</h3>
        <div className="flex flex-col gap-2 text-sm">
          {["all", "electronics", "clothing", "home"].map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 capitalize">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="accent-white"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Price</h3>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-white"
        />
        <div className="flex justify-between text-xs mt-1 text-white/80">
          <span>0</span>
          <span>1000</span>
        </div>
      </div>
    </aside>
  );
}
