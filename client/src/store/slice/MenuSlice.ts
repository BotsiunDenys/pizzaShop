import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http";
import { Beverage, Burger, Dessert, Pizza } from "../../models/MenuModels";

interface MenuState {
  burgers: Burger[] | null;
  pizzas: Pizza[] | null;
  desserts: Dessert[] | null;
  beverages: Beverage[] | null;
  loading: boolean;
  error: string;
}

const initialMenuState: MenuState = {
  burgers: null,
  pizzas: null,
  desserts: null,
  beverages: null,
  loading: false,
  error: "",
};

export const getBurgers = createAsyncThunk("menu/burgers", async () => {
  const response = await api.get("/apiBurger/burgers");
  return response.data;
});

export const getPizzas = createAsyncThunk("menu/pizzas", async () => {
  const response = await api.get("/apiPizza/pizzas");
  return response.data;
});

export const getBeverages = createAsyncThunk("menu/beverages", async () => {
  const response = await api.get("/apiBeverage/beverages");
  return response.data;
});

export const getDesserts = createAsyncThunk("menu/desserts", async () => {
    const response = await api.get("/apiDessert/desserts");
    return response.data;
  });

const MenuSlice = createSlice({
  name: "menu",
  initialState: initialMenuState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBurgers.pending, (state) => {
      state.burgers = null;
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getBurgers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.burgers = action.payload;
    });
    builder.addCase(getBurgers.rejected, (state, action) => {
      state.loading = false;
      state.burgers = null;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getPizzas.pending, (state) => {
      state.pizzas = null;
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.pizzas = action.payload;
    });
    builder.addCase(getPizzas.rejected, (state, action) => {
      state.loading = false;
      state.pizzas = null;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getBeverages.pending, (state) => {
      state.beverages = null;
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getBeverages.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.beverages = action.payload;
    });
    builder.addCase(getBeverages.rejected, (state, action) => {
      state.loading = false;
      state.beverages = null;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(getDesserts.pending, (state) => {
        state.desserts = null;
        state.loading = true;
        state.error = "";
      });
      builder.addCase(getDesserts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.desserts = action.payload;
      });
      builder.addCase(getDesserts.rejected, (state, action) => {
        state.loading = false;
        state.desserts = null;
        if (action.error.message) {
          state.error = action.error.message;
        }
      });
  },
});

export default MenuSlice.reducer;
