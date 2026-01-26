import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
    loadMoreCards: (state) => {
      state.cardsLimit += 12;
    },

    selectCards: (state, action: PayloadAction<string>): void => {
      const category = action.payload;

      state.selectedCategories = state.selectedCategories.includes(category)
        ? state.selectedCategories.filter((c) => c !== category)
        : [...state.selectedCategories, category];
    },
  },
});

export const { toggleCard, setQuestion, selectCards, loadMoreCards } = cardsSlice.actions;

export default cardsSlice.reducer;
