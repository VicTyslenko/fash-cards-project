import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";
import { useLeftContent } from "./hooks";

import * as S from "./styles";

export const LeftContent = () => {
  const { categoryInfo, currentCard, totalFilteredCards } = useLeftContent();

  return (
    <S.Wrapper>
      <Filter />
      <QuestionsContent categoryInfo={categoryInfo} currentCard={currentCard} totalCards={totalFilteredCards} />
      <PaginationSection total={totalFilteredCards} />
    </S.Wrapper>
  );
};
