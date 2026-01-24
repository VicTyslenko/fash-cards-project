import type { Card } from "../../../../slices/cards/models";
import { DefaultCard } from "./extensions/default-card";
import { useSearchParams } from "react-router";

import * as S from "./styles";

type Props = {
  data: Card[];
};

export const CardsContent = ({ data }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isMasteredHidden = searchParams.get("mastered") === "false";

  return (
    <S.CardsContentWrapp>
      {data &&
        data.map((card) => (
          <DefaultCard
            key={card.id}
            isMasteredHidden={isMasteredHidden}
            known_count={card.known_count}
            question={card.question}
            answer={card.answer}
            category={card.category}
          />
        ))}
    </S.CardsContentWrapp>
  );
};
