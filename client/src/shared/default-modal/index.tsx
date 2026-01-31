import { useState } from "react";

import * as S from "./styles";

type Props = {
  modalOpen: boolean;
};

export const DefaultModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && (
        <S.ModalOverlay onClick={() => setModalOpen((prev) => !prev)}>
          <S.ModalInner>Hello from there</S.ModalInner>
        </S.ModalOverlay>
      )}
    </>
  );
};
