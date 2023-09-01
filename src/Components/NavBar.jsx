import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { CartSelectTotalQuantity, setOpenCart } from "../app/CartSlice";

const NavBar = () => {
  const [navScroll, setNavSCroll] = useState(false);

  const onscrollHandler = () => {
    if (window.scrollY > 30) {
      setNavSCroll(true);
    } else {
      setNavSCroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onscrollHandler);
    return () => {
      window.removeEventListener("scroll", onscrollHandler);
    };
  }, []);

  const dispatch = useDispatch();

  const cartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const totalQTY = useSelector(CartSelectTotalQuantity);

  return (
    <>
      <header
        className={`${
          !navScroll
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 right-0  opacity-100 h-[9vh] w-full flex items-center justify-center z-[200] blur-effect-theme "
        }`}
      >
        <nav className="flex item-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navScroll && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center ">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navScroll && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center ">
              <HeartIcon
                className={`icon-style ${
                  navScroll && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center ">
              <button
                onClick={cartToggle}
                type="button"
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navScroll && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-1 ${
                    !navScroll
                      ? "bg-white text-slate-900 shadow-slate-100"
                      : "bg-slate-900 text-white shadow-slate-900"
                  } w-4 h-4 text[0.5] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
