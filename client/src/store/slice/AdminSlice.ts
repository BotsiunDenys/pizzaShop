import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../http";
import { AdminProduct, Product } from "../../models/MenuModels";

interface CreateProductState {
  success: boolean;
  loading: boolean;
  error: string;
}

const initialCreateProductState: CreateProductState = {
  success: false,
  loading: false,
  error: "",
};

export const createProduct = createAsyncThunk(
  "admin/create",
  async ({ name, price, description, img, category }: AdminProduct) => {
    const stringPrice = price.toString();
    const response = await api.post("apiProduct/product", {
      name,
      price: stringPrice,
      description,
      img,
      category,
    });
    return response.data;
  }
);

export const updateProduct = createAsyncThunk(
  "admin/update",
  async ({ _id, name, price, description, img, category }: Product) => {
    const stringPrice = price.toString();
    const response = await api.put("apiProduct/product", {
      _id,
      name,
      price: stringPrice,
      description,
      img,
      category,
    });
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "admin/delete",
  async (id: string) => {
    const response = await api.delete(`apiProduct/product/${id}`);
    return response.data;
  }
);

const AdminSlice = createSlice({
  name: "admin",
  initialState: initialCreateProductState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state) => {
      state.error = "";
      state.loading = true;
      state.success = false;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(createProduct.fulfilled, (state) => {
      state.error = "";
      state.loading = false;
      state.success = true;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.error = "";
      state.loading = true;
      state.success = false;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.error = "";
      state.loading = false;
      state.success = true;
    });
    builder.addCase(updateProduct.pending, (state) => {
        state.error = "";
        state.loading = true;
        state.success = false;
      });
      builder.addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
      builder.addCase(updateProduct.fulfilled, (state) => {
        state.error = "";
        state.loading = false;
        state.success = true;
      });
  },
});

export default AdminSlice.reducer;
