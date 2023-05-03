import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/MenuModels";

interface OrderState {
  products: Product[];
}

const initialOrderState: OrderState = {
  products: [],
};

const OrderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export default OrderSlice.reducer;
export const { addProduct, removeProduct, clearProducts } = OrderSlice.actions;
