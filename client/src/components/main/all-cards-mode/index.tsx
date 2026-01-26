import { NewCardForm } from "./new-card-form";
import { Filter } from "../content/left-content/extensions/filter";
import { CardsContent } from "./cards-content";

import * as S from "./styles";
import type { Card } from "../../../slices/cards/models";

type Props = {
  data: Card[];
  filteredData: Card[];
};
export const AllCardsMode = ({ data, filteredData }: Props) => {
  const hasMore = false;
  return (
    <S.Wrapper>
      <NewCardForm />

      <Filter data={data} className="filter" />
      <CardsContent data={filteredData} hasMore={hasMore} />
    </S.Wrapper>
  );
};
