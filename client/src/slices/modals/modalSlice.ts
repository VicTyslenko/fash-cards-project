import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ReactNode } from "react";

type ModalProps = {
  modalWindow: {
    children: ReactNode;
    isOpen: boolean;
  };
};

const initialState: ModalProps = {
  modalWindow: {
    children: null,
    isOpen: false,
  },
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    setModalOpen: (state, action: PayloadAction<ReactNode>) => {
      state.modalWindow = {
        isOpen: true,
        children: action.payload,
      };
    },

    setModalClose: (state) => {
      state.modalWindow.isOpen = false;
    },
  },
});

export const { setModalClose, setModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
