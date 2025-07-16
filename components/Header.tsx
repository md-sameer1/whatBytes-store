"use client";

import { Search, ShoppingCart, UserCircle2 } from "lucide-react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import { useState, useEffect } from "react";

export default function Header() {
  const { search, setFilters } = useSearchFilters();
  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters({ search: localSearch });
    }, 500);
    return () => clearTimeout(timeout);
  }, [localSearch]);

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Whatbytes</div>

        {/* Styled Search Input */}
        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-white text-white placeholder-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        {/* Cart + Avatar */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-900 px-3 py-2 rounded">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </div>
          <UserCircle2 className="w-7 h-7" />
        </div>
      </div>
    </header>
  );
}
