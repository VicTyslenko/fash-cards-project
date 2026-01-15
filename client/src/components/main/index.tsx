import { Header } from "../header";
import { Content } from "./content";
import { ModeParams } from "./models";
import { AllCardsContent } from "./all-cards-mode/all-cards-content";
import { useDefaultParameters } from "./hooks";

import * as S from "./styles";

export const Main = () => {
  const { mode } = useDefaultParameters();

  return (
    <S.Wrapper>
      <Header />
      {mode === ModeParams.Study ? <Content /> : <AllCardsContent />}
    </S.Wrapper>
  );
};
