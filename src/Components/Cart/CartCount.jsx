import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CartCount = ({ cartToggle, clearCart, totalQTY }) => {
  return (
    <>
      <div className="bg-white h-11 flex justify-between w-full items-center px-3 sticky top-0 left-0 right-0 ">
        <div className="flex items-center gap-3 ">
          <div className="grid items-center " onClick={cartToggle}>
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 cursor-pointer" />
          </div>
          <div className="grid items-center">
            <h1 className="text-base font-normal text-slate-900">
              Your Cart
              <span className="bg-theme-cart text-xs rounded px-1 py-0.5 text-slate-100">
                ({totalQTY}Items)
              </span>
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={clearCart}
            type="button"
            className="rounded bg-theme-cart active:scale-90 p-0.5 text-white"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
