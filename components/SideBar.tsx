"use client";

import { useSearchFilters } from "@/hooks/useSearchFilters";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const { category, maxPrice, setFilters } = useSearchFilters();
  const [localCategory, setLocalCategory] = useState(category);
  const [price, setPrice] = useState(maxPrice);

  // Update filters in URL when values change
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters({ category: localCategory, price });
    }, 300);
    return () => clearTimeout(timeout);
  }, [localCategory, price]);

  return (
    <aside className="bg-blue-600 text-white rounded-lg shadow p-4 w-full sm:w-60">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Category */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Category</h3>
        <div className="flex flex-col gap-2 text-sm">
          {["all", "electronics", "clothing", "home"].map((c) => (
            <label key={c} className="flex items-center gap-2 capitalize">
              <input
                type="radio"
                name="category"
                value={c}
                checked={localCategory === c}
                onChange={() => setLocalCategory(c)}
                className="accent-white"
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium mb-2">{`Price: ${price}`}</h3>
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
