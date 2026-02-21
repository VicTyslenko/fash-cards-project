import { DefaultTypography } from "../../default-typography";
import { MAX_KNOWN } from "../../utils";

import * as S from "./styles";

export const ProgressBar = ({ progressValue }: { progressValue: number }) => {
  return (
    <S.BarWrapp>
      <S.ProgressBar value={progressValue} max={MAX_KNOWN} />
      <DefaultTypography className="score">{`${progressValue}/${MAX_KNOWN}`}</DefaultTypography>
    </S.BarWrapp>
  );
};
