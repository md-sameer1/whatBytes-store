"use client";

import { useSearchParams, useRouter } from "next/navigation";

export function useSearchFilters() {
  const params = useSearchParams();
  const router = useRouter();

  const category = params.get("category") || "all";
  const maxPrice = Number(params.get("price")) || 1000;
  const search = params.get("search") || "";

  const setFilters = (
    next: Partial<{ category: string; price: number; search: string }>
  ) => {
    const newParams = new URLSearchParams(params.toString());

    if (next.category) newParams.set("category", next.category);
    if (next.price !== undefined) newParams.set("price", String(next.price));
    if (next.search !== undefined) newParams.set("search", next.search);

    router.push(`?${newParams.toString()}`);
  };

  return { category, maxPrice, search, setFilters };
}
