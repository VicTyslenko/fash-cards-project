import ErrorIcon from "@/assets/icons/icon-error.svg";
import * as S from "./styles";

type Props = {
  message: string;
};
export const ErrorMessage = ({ message }: Props) => {
  return (
    <S.ErrorMessage>
      <img src={ErrorIcon} alt="error" />
      <span>{message}</span>
    </S.ErrorMessage>
  );
};
