"use client";

import { useCartStore } from "@/stores/cart-store";
import { ShoppingCart, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { SearchBar, SearchBarSkeleton } from "./Searchbar";

export default function Header() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-2xl font-bold hover:opacity-90 transition">
          Whatbytes
        </Link>

        <Suspense fallback={<SearchBarSkeleton />}>
          <SearchBar />
        </Suspense>

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
