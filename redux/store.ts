import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/featuresSlice/cartSlice";
import { productsSlice } from "@/featuresSlice/productSlice";


export const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
       
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


