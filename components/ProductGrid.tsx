import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { useSearchFilters } from "@/hooks/useSearchFilters";

export default function ProductGrid() {
  const { category, maxPrice, search } = useSearchFilters();

  const filtered = products.filter((product) => {
    const matchCategory = category === "all" || product.category === category;
    console.log("Matching price:", maxPrice);
    const matchPrice = product.price <= maxPrice;
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchPrice && matchSearch;
  });
  console.log("Filtered Products:", filtered);
  return (
    <>
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
