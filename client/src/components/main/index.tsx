import { Header } from "../header";
import { Content } from "./content";
import { ModeParams } from "./models";
import { AllCardsMode } from "./all-cards-mode";
import { useDefaultParameters } from "./hooks";
import { useGetFilteredData } from "./hooks";

import * as S from "./styles";

export const Main = () => {
  const { mode } = useDefaultParameters();
  const { filteredData, cards } = useGetFilteredData();

  return (
    <S.Wrapper>
      <Header />
      {mode === ModeParams.STUDY ? <Content data={cards} filteredData={filteredData} /> : <AllCardsMode data={cards} filteredData={filteredData} />}
    </S.Wrapper>
  );
};
