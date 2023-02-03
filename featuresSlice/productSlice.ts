import { Product } from "@/types/Product";
import { createSlice } from "@reduxjs/toolkit";


const initialState: {
    allProducts: Product[],
    isLoading: boolean
} = {
    allProducts: [],
    isLoading: false
}

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        startLoading: state => {
            state.isLoading = true;
        },
        endLoading: state => {
            state.isLoading = true;
        }
    },
});

export const {startLoading, endLoading} =productsSlice.actions;
export default productsSlice.reducer;
