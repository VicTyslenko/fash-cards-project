import { useAllCardsMode } from "./hooks";

import { Filter } from "../content/left-content/extensions/filter";
import { CardsContent } from "./cards-content";
import { NewCardForm } from "./new-card-form";

import * as S from "./styles";

export const AllCardsMode = () => {
  const { limitedData, hasMore, filteredData } = useAllCardsMode();
  return (
    <S.Wrapper id="all-cards_wrapper">
      <NewCardForm />
      <Filter data={limitedData} />
      <CardsContent data={filteredData} hasMore={hasMore} />
    </S.Wrapper>
  );
};
