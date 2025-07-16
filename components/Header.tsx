import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white px-6 py-4 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Whatbytes</div>

        <div className="relative w-1/3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white w-5 h-5" />
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-white text-white placeholder-white bg-transparent focus:outline-none focus:ring-2 focus:ring-white"
          />
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition">
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
