import { configureStore, createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
    state.push(action.payload);
    },
    removeToBag: (state, action) => {
    return state.filter(itemId => itemId!==action.payload);
    },
  },
});
export const bagAction = bagSlice.actions;
export default bagSlice;
