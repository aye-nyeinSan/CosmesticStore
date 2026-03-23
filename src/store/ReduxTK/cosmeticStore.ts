import { configureStore } from "@reduxjs/toolkit";
import  cosmeticFilterSlice  from "./cosmeticSlice";


const cosmeticStore = configureStore({
  reducer: {
    cosmetic: cosmeticFilterSlice,
  },
});

export default cosmeticStore;
export type RootState = ReturnType<typeof cosmeticStore.getState>;
export type AppDispatch = typeof cosmeticStore.dispatch;