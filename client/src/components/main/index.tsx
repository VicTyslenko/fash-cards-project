import { Header } from "../header";
import { Content } from "./content";

import * as S from "./styles";

export const Main = () => {
  return (
    <S.Wrapper>
      <Header />
      <Content />
    </S.Wrapper>
  );
};
