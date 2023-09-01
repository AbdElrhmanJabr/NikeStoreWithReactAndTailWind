import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoverCartItems,
} from "../../app/CartSlice";

const CartItem = ({
  item: { id, color, shadow, title, text, img, price, quantity },
}) => {
  const dispatch = useDispatch();

  const item = {
    id,
    color,
    shadow,
    title,
    text,
    img,
    price,
    quantity,
  };
  const removeItemHandler = () => {
    dispatch(setRemoverCartItems(item));
  };
  const increaseItemQTYHandler = () => {
    dispatch(setIncreaseItemQTY(item));
  };
  const decreaseItemQTYHandler = () => {
    dispatch(setDecreaseItemQTY(item));
  };
  return (
    <>
      <div className="flex justify-between px-5 py-3 w-full">
        <div className="flex items-center gap-5">
          <div
            className={`flex items-center p-3 ${color} ${shadow} bg-gradient-to-b relative rounded duration-300 transition-all ease-in-out hover:scale-105 `}
          >
            <img
              src={img}
              alt={`/cartImg/${id}`}
              className="w-36 h-auto object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4">
            <div className="grid items-center leading-none">
              <h1 className=" font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                onClick={decreaseItemQTYHandler}
                type="button"
                className="bg-theme-cart rounded transition-all duration-75 active:scale-110"
              >
                <MinusIcon className="h-5 w-5  text-white " />
              </button>
              <div className="bg-theme-cart rounded w-6 h-6 lg:w-5 lg:h-5 flex items-center justify-center text-white ">
                {quantity}
              </div>
              <button
                onClick={increaseItemQTYHandler}
                type="button"
                className="bg-theme-cart rounded transition-all duration-75 active:scale-110"
              >
                <PlusIcon className="h-5 w-5 text-white " />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center  gap-5">
          <div className="grid items-center ">
            <h1 className="text-lg lg:text-base sm:text-sm text-slate-900 font-medium">
              {quantity * price} $
            </h1>
          </div>
          <div className="grid items-center">
            <button
              onClick={removeItemHandler}
              type="button"
              className="bg-theme-cart rounded grid items-center justify-center py-1 px-0.5 transition-all duration-75 active:scale-110 "
            >
              <TrashIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
