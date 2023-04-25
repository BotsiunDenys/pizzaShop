import React from "react";
import { Product } from "../models/MenuModels";
import { useAppDispatch } from "../store/store";
import { removeProduct } from "../store/slice/OrderSlice";

interface Props {
  product: Product;
}

const SingleOrderProduct = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div
      key={product.id}
      className="flex gap-3 border-2 rounded-md px-5 py-3 sm:max-w-lg max-w-[300px] animate-fade-in"
    >
      <img
        className="rounded-md sm:h-[150px] h-[100px] sm:w-[200px] w-[150px] cursor-default"
        src={product.img}
        alt={`${product.name} image`}
      />
      <div className="flex flex-col justify-around">
        <p className="text-main text-xl">{product.name}</p>
        <p className="font-bold">Price: {product.price}$</p>
        <button
        className="sm:px-3 px-1 sm:py-2 py-1 bg-main rounded-sm text-white hover:bg-hoverMain max-w-fit transition-colors"
          onClick={() => dispatch(removeProduct(product.id))}
          type="button"
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default SingleOrderProduct;
