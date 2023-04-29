import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/MenuModels";

interface OrderState {
  products: Product[];
}

const initialOrderState: OrderState = {
  products: [
    {
      _id: "6445b91df9bbcd784fe5d82c",
      name: "Sprite",
      price: "2",
      description:
        "Cool off with the refreshing McDonald's Sprite® - the classic and delicious lemon-lime fountain drink.",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Sprite-Small:1-4-product-tile-desktop",
      category: "beverage",
    },
    {
      _id: "6445b952f9bbcd784fe5d830",
      name: "Fanta Orange",
      price: "2",
      description:
        "McDonald’s Fanta® Orange is a caffeine-free soft drink full of bubbly, refreshing orange flavor.",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-fanta-orange-1:1-4-product-tile-desktop",
      category: "beverage",
    },
    {
      _id: "6445b93af9bbcd784fe5d82e",
      name: "Dr Pepper",
      price: "2",
      description:
        "Satisfy your taste buds with the unique taste of Dr Pepper® at McDonald's. Wondering what flavor is Dr Pepper®?",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Dr-Pepper-Small-1:1-4-product-tile-desktop",
      category: "beverage",
    },
    {
      _id: "6445b97af9bbcd784fe5d832",
      name: "Strawberry Banana Smoothie",
      price: "9",
      description:
        "The McCafé® Strawberry Banana Smoothie recipe features the perfect combination of real strawberry and banana fruit purees and juices, blended with creamy low fat yogurt and ice.",
      img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Strawberry-Banana-Smoothie-Medium:1-4-product-tile-desktop",
      category: "beverage",
    },
  ],
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
