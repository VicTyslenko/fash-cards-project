import { useRef } from "react";

import CrossIcon from "@/assets/icons/icon-cross.svg";

import { useStoreSelector } from "../../hooks";
import { useStoreDispatch } from "../../hooks";
import { useClickOutside } from "../hooks";

import { setPopupClose } from "../../slices/popup/popupSlice";
import { DefaultTypography } from "../default-typography";

import * as S from "./styles";

export const ConfirmPopup = () => {
  const popupRef = useRef(null);

  const popup = useStoreSelector((state) => state.popup.popupWindow);
  const dispatch = useStoreDispatch();

  const handleClose = () => dispatch(setPopupClose());

  useClickOutside(popupRef, handleClose);
  return (
    <>
      {popup.isOpen && (
        <S.Wrapper ref={popupRef}>
          <DefaultTypography>{popup.text}</DefaultTypography>
          <img onClick={handleClose} src={CrossIcon} alt="cross" />
        </S.Wrapper>
      )}
    </>
  );
};
