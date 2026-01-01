import { QuestionsContent } from "./extensions/questions-content";
import { PaginationSection } from "./extensions/pagination-section";
import { Filter } from "./extensions/filter";
import { useLeftContent } from "./hooks";

import * as S from "./styles";

export const LeftContent = () => {
  const { categoryInfo, currentCard, totalFilteredCards, cardsData } = useLeftContent();

  return (
    <S.Wrapper>
      <Filter data={cardsData} />
      <QuestionsContent categoryInfo={categoryInfo} currentCard={currentCard} totalCards={totalFilteredCards} />
      <PaginationSection total={totalFilteredCards} />
    </S.Wrapper>
  );
};
