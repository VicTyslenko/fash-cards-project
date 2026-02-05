import { useRef } from "react";

import { NewPopup } from "../../../../../../shared/new-popup";
import EditIcon from "@/assets/icons/icon-edit.svg";
import DeleteIcon from "@/assets/icons/icon-delete.svg";
import { EditCardForm } from "../edit-card-form";
import { useStoreDispatch } from "../../../../../../hooks";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import * as S from "./styles";
import { setModalOpen } from "../../../../../../slices/modals/modalSlice";
import { useClickOutside } from "../../../../../../shared/hooks";

type Props = {
  onClose: () => void;
  id: string;
};

export const CardPopup = ({ onClose, id }: Props) => {
  const dispatch = useStoreDispatch();

  const popupRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(popupRef, () => onClose());

  const handleModalOpen = () => {
    dispatch(setModalOpen(<EditCardForm id={id} />));
    onClose();
  };
  return (
    <NewPopup ref={popupRef}>
      <S.Actions onClick={handleModalOpen}>
        <img src={EditIcon} alt="edit" />
        <DefaultTypography>Edit</DefaultTypography>
      </S.Actions>
      <S.Line />
      <S.Actions>
        <img src={DeleteIcon} alt="delete" />
        <DefaultTypography>Delete</DefaultTypography>
      </S.Actions>
    </NewPopup>
  );
};
