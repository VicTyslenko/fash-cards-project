import { MAX_KNOWN } from "../../../components/main/content/left-content/extensions/questions-content/utils";
import { DefaultTypography } from "../../default-typography";
import * as S from "./styles";

export const ProgressBar = ({ progressValue }: { progressValue: number }) => {
  return (
    <S.BarWrapp>
      <S.ProgressBar value={progressValue} max={MAX_KNOWN} />
      <DefaultTypography className="score">{`${progressValue}/${MAX_KNOWN}`}</DefaultTypography>
    </S.BarWrapp>
  );
};
