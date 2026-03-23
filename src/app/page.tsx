'use client'
import { FilterSidebar } from "@/components/FilterSideBar";
import { ProductGrid } from "@/components/ProductGrid";
import { useCosmesticStore } from "@/store/cosmesticStore";

export default function Home() {
  const filters = useCosmesticStore((s) => s.filters);
  const setFilters = useCosmesticStore((s) => s.setFilters);
  const resetFilters = useCosmesticStore((s) => s.resetFilters);
  const filteredProducts = useCosmesticStore((s) => s.filteredProducts);
  const brandCounts = useCosmesticStore((s) => s.brandCounts);

  return (
    <div className="min-h-screen bg-background flex">
      <FilterSidebar
        filters={filters}
        onFiltersChange={setFilters}
        brandCounts={brandCounts}
        onResetFilters={resetFilters}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
