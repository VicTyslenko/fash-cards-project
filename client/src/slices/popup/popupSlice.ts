import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  popupWindow: {
    isOpen: false,
    text: "",
  },
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,

  reducers: {
    setPopupOpen: (state, action: PayloadAction<string>) => {
      state.popupWindow = {
        isOpen: true,
        text: action.payload,
      };
    },
    setPopupClose: (state) => {
      state.popupWindow = {
        isOpen: false,
        text: "",
      };
    },
  },
});

export const { setPopupOpen, setPopupClose } = popupSlice.actions;

export default popupSlice.reducer;
