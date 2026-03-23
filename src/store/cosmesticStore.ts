import { create } from "zustand";
import { luxuryBrands, products } from "../../data/products";
import { BrandCount, FilterState, Product } from "@/types/product";

const defaultFilters: FilterState = {
  priceRange: [0, 300],
  selectedBrands: [],
};

function filterProducts(filters: FilterState): Product[] {
  return products.filter((p) => {
    const inPrice =
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    const inBrand =
      filters.selectedBrands.length === 0 ||
      filters.selectedBrands.includes(p.brand);
    return inPrice && inBrand;
  });
}

const brandCounts: BrandCount[] = luxuryBrands.map((brand) => ({
  brand,
  count: products.filter((p) => p.brand === brand).length,
}));

interface CosmesticStore {
  filters: FilterState;
  filteredProducts: Product[];
  brandCounts: BrandCount[];
  setFilters: (filters: FilterState) => void;
  resetFilters: () => void;
}

export const useCosmesticStore = create<CosmesticStore>((set) => ({
  filters: defaultFilters,
  filteredProducts: filterProducts(defaultFilters),
  brandCounts,
  setFilters: (filters: FilterState) => {
    console.log('store::',filters ) //{priceRange , selectedBrands}
    set({ filters, filteredProducts: filterProducts(filters) })
  },
  resetFilters: () =>
    set({
      filters: defaultFilters,
      filteredProducts: filterProducts(defaultFilters),
    }),
}));
