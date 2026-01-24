import IconMastered from "@/assets/icons/icon-mastered.svg";

import * as S from "./styles";
import { MAX_KNOWN } from "../../components/main/content/left-content/extensions/questions-content/utils";
import { DefaultTypography } from "../default-typography";

export const MasteredInfo = () => {
  return (
    <S.Wrapper>
      <img src={IconMastered} alt="icon mastered" />
      <DefaultTypography>Mastered</DefaultTypography>
      <DefaultTypography>{`${MAX_KNOWN}/${MAX_KNOWN}`}</DefaultTypography>
    </S.Wrapper>
  );
};
