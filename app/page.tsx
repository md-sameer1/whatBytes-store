"use client";

import { useState } from "react";
import Sidebar from "@/components/SideBar";
import ProductGrid from "@/components/ProductGrid";

export default function HomePage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => setShowFilters(true)}
        className="sm:hidden bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Show Filters
      </button>

      <div className="flex flex-col sm:flex-row gap-6">
        <aside className="hidden sm:block sm:w-64">
          <Sidebar />
        </aside>

        {showFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-end sm:hidden">
            <div className="w-3/4 max-w-sm bg-gray-600 h-full p-4 shadow-lg overflow-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-800 hover:text-black">
                  ✕
                </button>
              </div>
              <Sidebar />
            </div>
          </div>
        )}

        <section className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Products List</h1>
          <ProductGrid />
        </section>
      </div>
    </div>
  );
}
