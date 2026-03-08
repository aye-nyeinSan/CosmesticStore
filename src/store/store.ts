import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/items/itemsSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      items: itemsReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
