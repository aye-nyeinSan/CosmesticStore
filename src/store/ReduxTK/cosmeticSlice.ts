import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { Product, FilterState, BrandCount } from "@/types/product";
import { defaultFilters, brandCounts, filterProducts, computeBrandCounts } from "@/utilities/helpersCosmetic"




interface CosmeticStore {
  filters: FilterState;
  filteredProducts: Product[];
  brandCounts: BrandCount[];
}
const initialData: CosmeticStore = {
    filters: defaultFilters,
    filteredProducts: filterProducts(defaultFilters),
    brandCounts:  computeBrandCounts(defaultFilters)
}

const cosmeticFilterSlice = createSlice({
  name: "cosmetic",
  initialState: initialData,
  reducers: {
      setFilters: (state, action: PayloadAction<FilterState>) => {
          console.log("FilteredState: ", state)
          state.filters = action.payload
          state.filteredProducts = filterProducts(action.payload)
          state.brandCounts = computeBrandCounts(action.payload)
      },
      resetFilters: (state) => {
          console.log("Reset state")
          state.filters = defaultFilters
          state.filteredProducts = filterProducts(defaultFilters)
          state.brandCounts = computeBrandCounts(defaultFilters)
      }
  },
});

export const { setFilters, resetFilters } = cosmeticFilterSlice.actions;
export default cosmeticFilterSlice.reducer;