import { luxuryBrands, products } from "@data/products";
import { BrandCount, FilterState, Product } from "@/types/product";

export const defaultFilters: FilterState = {
  priceRange: [0, 300],
  selectedBrands: [],
};

export const brandCounts: BrandCount[] = luxuryBrands.map((brand) => ({
  brand,
  count: products.filter((p) => p.brand === brand).length,
}));


export function filterProducts(filters: FilterState): Product[] {
  return products.filter((p) => {
    const inPrice =
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    const inBrand =
      filters.selectedBrands.length === 0 ||
      filters.selectedBrands.includes(p.brand);
    return inPrice && inBrand;
  });
}

export function computeBrandCounts(filters: FilterState): BrandCount[] {
  return luxuryBrands.map((brand) => ({
    brand,
    count: products.filter(
      (p) =>
        p.brand === brand &&
        p.price >= filters.priceRange[0] &&
        p.price <= filters.priceRange[1]
    ).length,
  }));
}