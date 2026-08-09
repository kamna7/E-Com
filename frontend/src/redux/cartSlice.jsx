import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    // Add + Update Quantity
    addToCart: (state, action) => {

      const item = action.payload;

      const existItem = state.cartItems.find(
        (x) => x.productId === item.productId
      );


      if (existItem) {

        existItem.quantity = item.quantity;

      } else {

        state.cartItems.push(item);

      }


      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );

    },


    // Remove Cart Item
    removeFromCart: (state, action) => {

      state.cartItems = state.cartItems.filter(
        (x) => x.productId !== action.payload
      );


      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );

    },


    // Clear Cart
    clearCart: (state) => {

      state.cartItems = [];

      localStorage.removeItem("cartItems");

    },


  },
});


export const {
  addToCart,
  removeFromCart,
  clearCart
} = cartSlice.actions;


export default cartSlice.reducer;