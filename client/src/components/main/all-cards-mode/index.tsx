import { NewCardForm } from "./new-card-form";
import { Filter } from "../content/left-content/extensions/filter";
import { CardsContent } from "./cards-content";
import { useGetData } from "../content/hooks";

import * as S from "./styles";

export const AllCardsMode = () => {
  const { data, isLoading } = useGetData();

  return (
    <S.Wrapper>
      <NewCardForm />
      <Filter data={data} className="filter" />
      <CardsContent data={data} />
    </S.Wrapper>
  );
};
