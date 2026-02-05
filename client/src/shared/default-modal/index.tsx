import { useStoreSelector } from "../../hooks";
import { useStoreDispatch } from "../../hooks";
import { setModalClose } from "../../slices/modals/modalSlice";

import * as S from "./styles";

export const DefaultModal = () => {
  const dispatch = useStoreDispatch();
  const body = useStoreSelector((state) => state.modals.modalWindow);

  return (
    <>
      {body?.isOpen && (
        <S.ModalOverlay onClick={() => dispatch(setModalClose())}>
          <S.ModalInner onClick={(event) => event.stopPropagation()}>{body?.children}</S.ModalInner>
        </S.ModalOverlay>
      )}
    </>
  );
};
