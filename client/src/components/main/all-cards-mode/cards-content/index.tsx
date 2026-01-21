import type { Card } from "../../../../slices/cards/models";
import { DefaultCard } from "./extensions/default-card";
import * as S from "./styles";

type Props = {
  data: Card[];
};

export const CardsContent = ({ data }: Props) => {
  console.log(data);
  return (
    <S.CardsContentWrapp>
      {data && data.map((card) => <DefaultCard key={card.id} question={card.question} answer={card.answer} category={card.category} />)}
    </S.CardsContentWrapp>
  );
};
