import { LeftContent } from "./left-content";
import { RightContent } from "./right-content";
import { useGetData } from "./hooks";

import * as S from "./styles";

export const Content = () => {
  const { data } = useGetData();
  return (
    <S.Wrapper>
      <LeftContent data={data} />
      <RightContent data={data} />
    </S.Wrapper>
  );
};
