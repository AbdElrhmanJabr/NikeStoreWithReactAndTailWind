import React, { useEffect } from "react";
import CartCount from "./Cart/CartCount";
import CartEmpty from "./Cart/CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  CartSelectCart,
  CartSelectState,
  CartSelectTotalAmount,
  CartSelectTotalQuantity,
  setClearCart,
  setCloseCart,
  setGetTotals,
} from "../app/CartSlice";
import CartItem from "./Cart/CartItem";

const Cart = () => {
  const dispatch = useDispatch();

  const ifCartState = useSelector(CartSelectState);
  const cartItems = useSelector(CartSelectCart);
  const totalAmount = useSelector(CartSelectTotalAmount);
  const totalQTY = useSelector(CartSelectTotalQuantity);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [dispatch, cartItems]);

  const cartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  const clearCart = () => {
    dispatch(setClearCart());
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen  z-[250] ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
        >
          <CartCount
            cartToggle={cartToggle}
            clearCart={clearCart}
            totalQTY={totalQTY}
          />
          {cartItems.length === 0 ? (
            <CartEmpty cartToggle={cartToggle} />
          ) : (
            <div>
              <div className="overflow-y-scroll h-[81vh] scroll-smooth">
                {cartItems.map((item, i) => {
                  return <CartItem key={i} item={item} />;
                })}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${totalAmount}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
