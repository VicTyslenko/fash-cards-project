import type { Card } from "../../../../slices/cards/models";
import { DefaultCard } from "./extensions/default-card";
import { loadMoreCards } from "../../../../slices/cards/cardsSlice";
import { useStoreDispatch } from "../../../../hooks";
import { DefaultButton } from "../../../../shared/default-button";

import * as S from "./styles";

type Props = {
  data: Card[];
  hasMore: boolean;
};

export const CardsContent = ({ data, hasMore }: Props) => {
  const dispatch = useStoreDispatch();

  const handleLoadMore = () => {
    if (!hasMore) return;
    dispatch(loadMoreCards());
  };

  return (
    <>
      <S.CardsContentWrapp>
        {data && data.map((card) => <DefaultCard key={card.id} card={card} />)}
        <S.ButtonWrapp>{hasMore && <DefaultButton onClick={handleLoadMore}>Load more</DefaultButton>}</S.ButtonWrapp>
      </S.CardsContentWrapp>
    </>
  );
};
