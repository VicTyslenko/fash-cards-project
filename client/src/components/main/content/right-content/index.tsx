import { DefaultTypography } from "../../../../shared/default-typography";
import { Card } from "./extensions/card";
import * as S from "./styles";

export const RightContent = () => {
  return (
    <S.Wrapper>
      <DefaultTypography as="h1" className="title">
        Study Statistics
      </DefaultTypography>
      <S.CardsWrapper>

        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </S.CardsWrapper>
    </S.Wrapper>
  );
};
