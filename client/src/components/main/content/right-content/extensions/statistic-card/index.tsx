import { DefaultTypography } from "../../../../../../shared/default-typography";
import type { StatisticCardProps } from "../models";

import * as S from "./styles";

export const StatisticCard = ({ title, quantity, color, icon }: StatisticCardProps) => {
  return (
    <S.Wrapper>
      <S.InfoWrapp>
        <DefaultTypography as="h1">{title}</DefaultTypography>
        <DefaultTypography className="number">{quantity}</DefaultTypography>
      </S.InfoWrapp>
      <S.IconWrapp color={color}>
        <img src={icon} alt="icon" />
      </S.IconWrapp>
    </S.Wrapper>
  );
};
