import { LeftContent } from "./left-content";
import { RightContent } from "./right-content";
import { useContent } from "./hooks";

import * as S from "./styles";

export const Content = () => {
  const { data } = useContent();
  return (
    <S.Wrapper>
      <LeftContent data={data} />
      <RightContent data={data} />
    </S.Wrapper>
  );
};
