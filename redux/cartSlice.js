import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzas: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addSinglePizza: (state, action) => {
      state.pizzas.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price;
    },
    addMultiplePizza: (state, action) => {
      state.total += action.payload.price;
    },
    reset: (state) => {
      state.pizzas = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addSinglePizza,addMultiplePizza, reset } = cartSlice.actions;
export default cartSlice.reducer;