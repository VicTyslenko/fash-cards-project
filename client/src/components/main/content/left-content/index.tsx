import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";
import { useLeftContent } from "./hooks";
import type { DataProps } from "../models";

import * as S from "./styles";

export const LeftContent = ({ data }: DataProps) => {
  const { categoryInfo, currentCard, totalFilteredCards } = useLeftContent({ data });

  return (
    <S.Wrapper>
      <Filter data={data} />
      <QuestionsContent categoryInfo={categoryInfo} currentCard={currentCard} totalCards={totalFilteredCards} />
      <PaginationSection total={totalFilteredCards} />
    </S.Wrapper>
  );
};
