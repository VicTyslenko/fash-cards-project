import { useRightContent } from "./hooks";

import { DefaultTypography } from "../../../../shared/default-typography";
import type { DataProps } from "../models";
import { StatisticCard } from "./extensions/statistic-card";
import { cardStructure } from "./utils";

import * as S from "./styles";

export const RightContent = ({ data }: DataProps) => {
  const { cardsQuantity } = useRightContent({ data });

  return (
    <S.Wrapper>
      <DefaultTypography as="h1" className="title">
        Study Statistics
      </DefaultTypography>
      <S.CardsWrapper>
        {cardStructure.map((card) => (
          <StatisticCard key={card.title} title={card.title} quantity={cardsQuantity[card.quantity]} color={card.color} icon={card.icon} />
        ))}
      </S.CardsWrapper>
    </S.Wrapper>
  );
};
