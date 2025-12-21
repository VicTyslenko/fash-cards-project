import * as S from "./styles";
import Logo from "@/assets/icons/logo-small.svg";
import { DefaultTypography } from "../../shared/default-typography";
import { DefaultButton } from "../../shared/default-button";

export const NavBar = () => {
  return (
    <S.Wrapper>
      <S.LogoWrapp>
        <img src={Logo} alt="logo" />
        <DefaultTypography>Flashcard</DefaultTypography>
      </S.LogoWrapp>
      <S.ButtonsWrapp>
        <DefaultButton className="study_btn">Study Mode</DefaultButton>
        <DefaultButton className="all-cards_btn">All cards</DefaultButton>
      </S.ButtonsWrapp>
    </S.Wrapper>
  );
};
