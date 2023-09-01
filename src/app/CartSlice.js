import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    addItemToCart: (state, action) => {
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemsIndex >= 0) {
        state.cartItems[itemsIndex].quantity += 1;
        toast.success(`The Quantity Has Increased Successfully`);
      } else {
        state.cartItems.push(action.payload);
        toast.success(`${action.payload.title} Added To Cart Successfully`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoverCartItems: (state, action) => {
      const remainedItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = remainedItems;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
      toast.success(`${action.payload.title} Has Been Removed Successfully`);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemsIndex >= 0) {
        state.cartItems[itemsIndex].quantity += 1;
        toast.success(`The Quantity Has Increased Successfully`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const itemsIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemsIndex].quantity > 1) {
        state.cartItems[itemsIndex].quantity -= 1;
        toast.success(`The Quantity Has Decreased Successfully`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCart: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Has Been Declared Successfully`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          // cart item is the item of the array which saved

          // cart total just an object to store the value in its Properties {totalAmount , totalQTY}
          //    you can say is a state to store the values the put it in the initialState

          const { price, quantity } = cartItem; // destructure the values instead of writing cartItem. every time
          cartTotal.totalAmount += price * quantity;
          cartTotal.totalQTY += quantity;
          return cartTotal;
        },
        { totalQTY: 0, totalAmount: 0 } //initial values for the reduce function
      );

      //   put the value the stored in the Properties of the totalCart object in the global initialState to use it
      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});

export const {
  setCloseCart,
  setOpenCart,
  addItemToCart,
  setRemoverCartItems,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
  setClearCart,
  setGetTotals,
} = CartSlice.actions;

export const CartSelectState = (state) => state.cart.cartState;
export const CartSelectCart = (state) => state.cart.cartItems;
export const CartSelectTotalAmount = (state) => state.cart.cartTotalAmount;
export const CartSelectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
