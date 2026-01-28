import { LeftContent } from "./left-content";
import { RightContent } from "./right-content";
import { useGetFilteredData } from "./hooks";

import * as S from "./styles";

export const Content = () => {
  const { filteredData, allCards } = useGetFilteredData();

  return (
    <S.Wrapper>
      <LeftContent data={allCards} filteredData={filteredData} />
      <RightContent data={allCards} filteredData={filteredData} />
    </S.Wrapper>
  );
};
