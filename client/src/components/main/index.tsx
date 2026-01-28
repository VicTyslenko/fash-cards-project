import { Header } from "../header";
import { Content } from "./content";
import { ModeParams } from "./models";
import { AllCardsMode } from "./all-cards-mode";
import { useDefaultParameters } from "./hooks";

import * as S from "./styles";

export const Main = () => {
  const { mode } = useDefaultParameters();

  return (
    <S.Wrapper>
      <Header />
      {mode === ModeParams.STUDY ? <Content /> : <AllCardsMode />}
    </S.Wrapper>
  );
};
