import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearProducts } from "../store/slice/OrderSlice";
import SingleOrderProduct from "./SingleOrderProduct";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const orderProducts = useAppSelector((state) => state.order.products);
  const isLogged = useAppSelector((state) => state.auth.isLogged);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLogged) {
      navigate("/");
    }
  }, []);
  return (
    <aside className="flex flex-col justify-center items-center mt-10">
      <header className="text-3xl text-main font-dancing font-bold">
        Your order
      </header>
      <section className="grid md:grid-cols-2 grid-cols-1 gap-3 my-10 md:mx-5">
        {orderProducts.map((product) => (
          <SingleOrderProduct product={product} />
        ))}
      </section>
      <footer>
        <div className="flex gap-5">
          <button
            className="px-7 py-4 bg-main hover:bg-hoverMain text-white transition-colors rounded-md"
            onClick={() => dispatch(clearProducts())}
            type="button"
          >
            Clear all
          </button>
          <button
            className="px-7 py-4 bg-main hover:bg-hoverMain text-white transition-colors rounded-md"
            type="button"
          >
            Order
          </button>
        </div>
      </footer>
    </aside>
  );
};

export default OrderPage;
