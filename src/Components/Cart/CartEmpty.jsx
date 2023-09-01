import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import emptybag from "../../assets/emptybag.png";
import React from "react";

const CartEmpty = ({ cartToggle }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen text-center gap-7">
        <img
          src={emptybag}
          alt="emptybag"
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          onClick={cartToggle}
          type="button"
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110"
        >
          <ArrowLeftIcon className="h-5 w-5 text-slate-900" />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
