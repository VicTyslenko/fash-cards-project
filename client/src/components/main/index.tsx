import { useDefaultParameters } from "./hooks";

import { Header } from "../header";
import { AllCardsMode } from "./all-cards-mode";
import { Content } from "./content";
import { ModeParams } from "./models";

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
