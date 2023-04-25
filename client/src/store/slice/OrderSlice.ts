import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/MenuModels";

interface OrderState {
  products: Product[];
}

const initialOrderState: OrderState = {
  products: [
    {
      id: "6445b91df9bbcd784fe5d82c",
      name: "Sprite",
      price: "2",
      description:
        "Cool off with the refreshing McDonald's Sprite® - the classic and delicious lemon-lime fountain drink.",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sprite-Small:1-4-product-tile-desktop",
      category: "beverage",
    },
    {
      id: "6445b91df9bbcd784fe5d82c",
      name: "Sprite",
      price: "2",
      description:
        "Cool off with the refreshing McDonald's Sprite® - the classic and delicious lemon-lime fountain drink.",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sprite-Small:1-4-product-tile-desktop",
      category: "beverage",
    },
    {
      id: "6445b91df9bbcd784fe5d82c",
      name: "Sprite",
      price: "2",
      description:
        "Cool off with the refreshing McDonald's Sprite® - the classic and delicious lemon-lime fountain drink.",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sprite-Small:1-4-product-tile-desktop",
      category: "beverage",
    },
    {
      id: "6445b91df9bbcd784fe5d82c",
      name: "Sprite",
      price: "2",
      description:
        "Cool off with the refreshing McDonald's Sprite® - the classic and delicious lemon-lime fountain drink.",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sprite-Small:1-4-product-tile-desktop",
      category: "beverage",
    },
  ],
};

const OrderSlice = createSlice({
  name: "order",
  initialState: initialOrderState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const products = state.products;
      products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearProducts: (state) => {
      state.products = [];
    },
  },
});

export default OrderSlice.reducer;
export const { addProduct, removeProduct, clearProducts } = OrderSlice.actions;
