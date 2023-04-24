import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http";
import { Product } from "../../models/MenuModels";

interface MenuState {
  products: Product[] | [];
  loading: boolean;
  error: string;
}

const initialMenuState: MenuState = {
  products: [],
  loading: false,
  error: "",
};

export const getProducts = createAsyncThunk("menu/products", async () => {
  const response = await api.get("/apiProduct/products");
  return response.data;
});

const MenuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.products = [];
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default MenuSlice.reducer;
