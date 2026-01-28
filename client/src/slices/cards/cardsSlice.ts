import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ModeParams } from "../../components/main/models";

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

    selectCategories: (state, action: PayloadAction<{ category: string; mode: string }>): void => {
      const { category, mode } = action.payload;

      if (mode === ModeParams.All) {
        state.selectedCategories = state.selectedCategories.includes(category)
          ? state.selectedCategories.filter((c) => c !== category)
          : [...state.selectedCategories, category];
      } else if (mode === ModeParams.STUDY) {
        state.selectedStudyCategories = state.selectedStudyCategories.includes(category)
          ? state.selectedStudyCategories.filter((c) => c !== category)
          : [...state.selectedStudyCategories, category];
      }
    },
  },
});

export const { toggleCard, setQuestion, selectCategories, loadMoreCards } = cardsSlice.actions;

export default cardsSlice.reducer;
