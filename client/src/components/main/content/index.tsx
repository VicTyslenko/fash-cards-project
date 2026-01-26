import { LeftContent } from "./left-content";
import { RightContent } from "./right-content";
import type { Card } from "../../../slices/cards/models";
import type { GetCardsResponse } from "../../../api/models";

import * as S from "./styles";

export const Content = ({ filteredData, data }: { filteredData: Card[]; data: Card[] }) => {
  return (
    <S.Wrapper>
      <LeftContent data={data} filteredData={filteredData} />
      <RightContent data={data} filteredData={filteredData} />
    </S.Wrapper>
  );
};
