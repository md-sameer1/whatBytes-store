"use client";

import { Search, ShoppingCart, UserCircle2 } from "lucide-react";
import { useSearchFilters } from "@/hooks/useSearchFilters";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";

export default function Header() {
  const { search, setFilters } = useSearchFilters();
  const [localSearch, setLocalSearch] = useState(search);

  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters({ search: localSearch });
    }, 500);
    return () => clearTimeout(timeout);
  }, [localSearch]);

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-2xl font-bold hover:opacity-90 transition">
          Whatbytes
        </Link>

        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-white text-white placeholder-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="flex items-center gap-4 relative">
          <Link href="/cart" className="relative group">
            <div className="bg-blue-800 hover:bg-blue-900 transition px-4 py-2 rounded-full flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium">Cart</span>
            </div>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md">
                {totalItems}
              </span>
            )}
          </Link>

          <UserCircle2 className="w-7 h-7 hover:opacity-90 transition" />
        </div>
      </div>
    </header>
  );
}
