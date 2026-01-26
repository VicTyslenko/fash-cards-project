import IconMastered from "@/assets/icons/icon-mastered.svg";

import * as S from "./styles";
import { DefaultTypography } from "../default-typography";
import { MAX_KNOWN } from "../utils";

export const MasteredInfo = () => {
  return (
    <S.Wrapper>
      <img src={IconMastered} alt="icon mastered" />
      <DefaultTypography>Mastered</DefaultTypography>
      <DefaultTypography>{`${MAX_KNOWN}/${MAX_KNOWN}`}</DefaultTypography>
    </S.Wrapper>
  );
};
