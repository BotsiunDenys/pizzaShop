import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { TypedUseSelectorHook } from "react-redux/es/types";
import AuthSlice from "./slice/AuthSlice";
import MenuSlice from "./slice/MenuSlice";

const reducer = {
  auth: AuthSlice,
  menu: MenuSlice
}

const store = configureStore({
  reducer: reducer,
});

export default store;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;