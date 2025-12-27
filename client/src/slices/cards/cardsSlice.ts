import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./models";

export const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {},
});

export default cardsSlice.reducer;
