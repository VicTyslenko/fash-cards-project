import { DefaultTypography } from "../../../../../../shared/default-typography";
import TotalIcon from "@/assets/icons/icon-stats-total.svg";

import * as S from "./styles";

type Props = {
  title: string;
  quantity: number;
};

export const Card = () => {
  return (
    <S.Wrapper>
      <S.InfoWrapp>
        <DefaultTypography as="h2" className="title">
          Total cards
        </DefaultTypography>
        <DefaultTypography className="number">40</DefaultTypography>
      </S.InfoWrapp>
      <S.IconWrapp>
        <img src={TotalIcon} alt="icon" />
      </S.IconWrapp>
    </S.Wrapper>
  );
};
