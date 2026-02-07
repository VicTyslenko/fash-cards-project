import * as S from "./styles";
import { DefaultTypography } from "../default-typography";
import { useStoreSelector } from "../../hooks";
import { useClickOutside } from "../hooks";
import { setPopupClose } from "../../slices/popup/popupSlice";
import { useStoreDispatch } from "../../hooks";

import CrossIcon from "@/assets/icons/icon-cross.svg";
import { useRef } from "react";

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
