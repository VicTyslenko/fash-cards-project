import { useRef } from "react";

import DeleteIcon from "@/assets/icons/icon-delete.svg";
import EditIcon from "@/assets/icons/icon-edit.svg";

import { useStoreDispatch } from "../../../../../../hooks";
import { useClickOutside } from "../../../../../../shared/hooks";

import { DefaultTypography } from "../../../../../../shared/default-typography";
import { NewPopup } from "../../../../../../shared/new-popup";
import type { Card } from "../../../../../../slices/cards/models";
import { setModalOpen } from "../../../../../../slices/modals/modalSlice";
import { DeleteCardModal } from "../delete-card";
import { EditCardForm } from "../edit-card-form";

import { Line } from "../../../../../../shared/styles";
import * as S from "./styles";

type Props = {
  onClose: () => void;
  id: string;
  currentCard: Card;
};

export const CardPopup = ({ onClose, id, currentCard }: Props) => {
  const dispatch = useStoreDispatch();

  const popupRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(popupRef, () => onClose());

  const handleModalOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    const buttonId = event.currentTarget.id;
    if (!buttonId) return;

    const modalNode =
      buttonId === "edit_btn" ? <EditCardForm currentCard={currentCard} id={id} /> : buttonId === "delete_btn" ? <DeleteCardModal id={id} /> : null;
    if (!modalNode) return;

    dispatch(setModalOpen(modalNode));
    onClose();
  };

  return (
    <NewPopup ref={popupRef}>
      <S.Actions id="edit_btn" onClick={handleModalOpen}>
        <img src={EditIcon} alt="edit" />
        <DefaultTypography>Edit</DefaultTypography>
      </S.Actions>

      <Line />

      <S.Actions id="delete_btn" onClick={handleModalOpen}>
        <img src={DeleteIcon} alt="delete" />
        <DefaultTypography>Delete</DefaultTypography>
      </S.Actions>
    </NewPopup>
  );
};
