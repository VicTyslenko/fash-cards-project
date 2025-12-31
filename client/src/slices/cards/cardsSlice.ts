import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./models";

export const cardsSlice = createSlice({
  name: "cards",
  initialState,

  reducers: {
    toggleCard: (state) => {
      state.isQuestion = !state.isQuestion;
    },
    setQuestion: (state) => {
      state.isQuestion = true;
    },
  },
});

export const { toggleCard, setQuestion } = cardsSlice.actions;

export default cardsSlice.reducer;
