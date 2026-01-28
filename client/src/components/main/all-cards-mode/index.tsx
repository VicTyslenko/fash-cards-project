import { NewCardForm } from "./new-card-form";
import { Filter } from "../content/left-content/extensions/filter";
import { CardsContent } from "./cards-content";
import * as S from "./styles";

import { useAllCardsMode } from "./hooks";

export const AllCardsMode = () => {
  const { limitedData, hasMore, filteredData } = useAllCardsMode();
  console.log(filteredData);
  return (
    <S.Wrapper>
      <NewCardForm />
      <Filter data={limitedData} className="filter" />
      <CardsContent data={filteredData} hasMore={hasMore} />
    </S.Wrapper>
  );
};
