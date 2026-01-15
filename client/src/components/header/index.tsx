import * as S from "./styles";
import Logo from "@/assets/icons/logo-small.svg";
import { DefaultTypography } from "../../shared/default-typography";
import { DefaultButton } from "../../shared/default-button";
import { useHeader } from "./hooks";

export const Header = () => {
  const { handleChangeMode } = useHeader();

  return (
    <S.Wrapper>
      <S.LogoWrapp>
        <img src={Logo} alt="logo" />
        <DefaultTypography>Flashcard</DefaultTypography>
      </S.LogoWrapp>

      <S.ButtonsWrapp>
        <DefaultButton className="study_btn" onClick={() => handleChangeMode("study")}>
          Study Mode
        </DefaultButton>
        <DefaultButton className="all-cards_btn" onClick={() => handleChangeMode("all-cards")}>
          All cards
        </DefaultButton>
      </S.ButtonsWrapp>
    </S.Wrapper>
  );
};
