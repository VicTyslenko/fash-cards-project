import { forwardRef } from "react";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export const NewPopup = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <S.Wrapper className="new-popup" ref={ref} onClick={(e) => e.stopPropagation()}>
      {children}
    </S.Wrapper>
  );
});
