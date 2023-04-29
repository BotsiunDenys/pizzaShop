import React, { useState } from "react";
import { Product } from "../models/MenuModels";
import { useAppDispatch } from "../store/store";
import { removeProduct } from "../store/slice/OrderSlice";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface Props {
  product: Product;
}

const SingleOrderProduct = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex justify-between border-2 rounded-md px-5 py-3 sm:max-w-lg max-w-[300px] animate-fade-in">
      <div className="flex gap-3">
        <img
          className="rounded-md sm:h-[150px] h-[100px] sm:w-[200px] w-[150px] cursor-default"
          src={product.img}
          alt={`${product.name} image`}
        />
        <div className="flex flex-col justify-around">
          <p className="text-main text-xl">{product.name}</p>
          <p className="font-bold">
            Price: {parseFloat(product.price) * quantity}$
          </p>
          <button
            className="sm:px-3 px-1 sm:py-2 py-1 bg-main rounded-sm text-white hover:bg-hoverMain max-w-fit transition-colors"
            onClick={() => dispatch(removeProduct(product._id))}
            type="button"
          >
            remove
          </button>
        </div>
      </div>
      <div className="text-center text-xl text-main self-center">
        <AiFillCaretUp
          className="cursor-pointer"
          onClick={() => setQuantity((prev) => prev + 1)}
        />
        <p>{quantity}</p>
        <AiFillCaretDown
          className="cursor-pointer"
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeProduct(product._id));
            } else {
              setQuantity((prev) => prev - 1);
            }
          }}
        />
      </div>
    </div>
  );
};

export default SingleOrderProduct;
