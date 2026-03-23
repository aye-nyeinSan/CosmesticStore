"use client";
import { FilterSidebar } from "@/components/FilterSideBar";
import { ProductGrid } from "@/components/ProductGrid";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/ReduxTK/cosmeticStore";
import {resetFilters, setFilters} from "@/store/ReduxTK/cosmeticSlice"

export default function ReduxCosmesticHome() {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((state: RootState) => state.cosmetic.filters)
  const filteredProducts = useSelector((state: RootState) => state.cosmetic.filteredProducts);                                                                              
  const brandCounts = useSelector((state: RootState) => state.cosmetic.brandCounts);  
                                                                                    
  

  return (
    <div className="min-h-screen bg-background flex">
      <FilterSidebar
        filters={filters}
        onFiltersChange={(newFilters)=> dispatch(setFilters(newFilters)) }
        brandCounts={brandCounts}
        onResetFilters={() =>dispatch(resetFilters())}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
