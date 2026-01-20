import * as S from "./styles";
import { DefaultButton } from "../../../../shared/default-button";
import { DefaultTypography } from "../../../../shared/default-typography";

import PlusIcon from "@/assets/icons/icon-circle-plus.svg";
export const NewCardForm = () => {
  return (
    <S.Form>
      <S.InputWrapp>
        <S.Label>Question</S.Label>
        <S.Input placeholder="e.g., What is the capital of France?" />
      </S.InputWrapp>
      <S.InputWrapp className="hello">
        <S.Label htmlFor="area-input">Answer</S.Label>
        <S.TextArea id="area-input" className="area-input" placeholder="e.g., Paris" />
      </S.InputWrapp>
      <S.InputWrapp>
        <S.Label htmlFor="category-input">Question</S.Label>
        <S.Input id="category-input" type="text" placeholder="e.g., What is the capital of France?" />
      </S.InputWrapp>

      <DefaultButton>
        <img src={PlusIcon} alt="plus" />
        <DefaultTypography>Create Card</DefaultTypography>
      </DefaultButton>
    </S.Form>
  );
};
