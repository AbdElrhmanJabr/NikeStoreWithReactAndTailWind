import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, setOpenCart } from "../../app/CartSlice";

const Item = ({
  ifExist,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();

  const cartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const addToCartHandler = () => {
    const item = { id, color, img, shadow, title, text, price, quantity: 1 };
    dispatch(addItemToCart(item));
  };
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center ${
          ifExist ? "justify-items-start" : "justify-items-center"
        }   rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={` grid items-center ${
            ifExist ? "justify-items-start" : "justify-items-center"
          }  `}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-sm font-medium filter drop-shadow">
            {title}
          </h1>
          <p
            className={
              "text-slate-200 text-base md:text-sm font-normal filter drop-shadow"
            }
          >
            {text}
          </p>

          <div className="flex items-center justify-between w-28 my-2">
            <div className="flex items-center bg-white/80 px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={addToCartHandler}
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow-slate-200"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              onClick={() => {
                addToCartHandler();
                cartToggle();
              }}
              type="button"
              className="bg-white opacity-90 blur-effect-theme button-theme p-0.5 shadow-slate-200 text-sm text-black px-2 py-1"
            >
              {btn}
            </button>
          </div>
        </div>

        <div
          className={`flex items-center ${
            ifExist ? "absolute  top-8 right-1" : "justify-center"
          } `}
        >
          <img
            src={img}
            alt={`img/item-img/${id}`}
            className={`transitions-theme hover:-rotate-12 ${
              ifExist
                ? "h-auto w-64 lg:w-56 md:w-32 -rotate-[35deg]"
                : "h-36 w-64"
            } `}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Item;
