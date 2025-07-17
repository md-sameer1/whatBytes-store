import { useSearchFilters } from "@/hooks/useSearchFilters";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

function SearchBar() {
  const { search, setFilters } = useSearchFilters();
  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters({ search: localSearch });
    }, 500);
    return () => clearTimeout(timeout);
  }, [localSearch]);

  return (
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
  );
}

function SearchBarSkeleton() {
  return (
    <div className="relative w-full sm:w-1/2">
      <div className="w-full h-10 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  );
}

export { SearchBar, SearchBarSkeleton };
