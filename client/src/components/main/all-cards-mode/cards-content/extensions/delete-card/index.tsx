import { Line } from "../../../../../../shared/styles";
import { setPopupOpen } from "../../../../../../slices/popup/popupSlice";
import { setModalClose } from "../../../../../../slices/modals/modalSlice";
import { DefaultButton } from "../../../../../../shared/default-button";
import { scrollWindow } from "../../../../../../shared/utils";
import { useStoreDispatch } from "../../../../../../hooks";
import { useDeleteCardMutation } from "../../../../../../api/apiSlice";

import * as S from "./styles";

export const DeleteCardModal = ({ id }: { id: string }) => {
  const dispatch = useStoreDispatch();

  const [deleteCard] = useDeleteCardMutation();
  const handleModalClose = () => dispatch(setModalClose());

  const handleDeleteCard = async () => {
    try {
      await deleteCard({ id }).unwrap();

      handleModalClose();
      dispatch(setPopupOpen("Card deleted."));
      scrollWindow({
        wrapperId: "app-wrapper",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Wrapper>
      <S.TopSection>
        <S.Header>Delete this card?</S.Header>
        <S.Text>This action can't be undone.</S.Text>
      </S.TopSection>

      <Line />

      <S.ButtonsWrapp>
        <DefaultButton className="cancel_btn" onClick={handleModalClose}>
          Cancel
        </DefaultButton>
        <DefaultButton className="delete_btn" onClick={handleDeleteCard}>
          Delete Card
        </DefaultButton>
      </S.ButtonsWrapp>
    </S.Wrapper>
  );
};
