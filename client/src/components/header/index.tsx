import { useSearchParams } from "react-router";

import Logo from "@/assets/icons/logo-small.svg";

import { DefaultButton } from "../../shared/default-button";
import { DefaultTypography } from "../../shared/default-typography";
import { ModeParams } from "../main/models";

import * as S from "./styles";

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const mode = searchParams.get("mode") === ModeParams.STUDY;

  const handleChangeMode = (newValue: ModeParams.STUDY | ModeParams.All) => {
    setSearchParams((sp) => {
      sp.set("mode", newValue);
      return sp;
    });
  };

  return (
    <S.Wrapper>
      <S.LogoWrapp>
        <img src={Logo} alt="logo" />
        <DefaultTypography>Flashcard</DefaultTypography>
      </S.LogoWrapp>

      <S.ButtonsWrapp>
        <DefaultButton className={mode ? "btn_active" : "tabs_btn"} onClick={() => handleChangeMode(ModeParams.STUDY)}>
          Study Mode
        </DefaultButton>
        <DefaultButton className={mode ? "tabs_btn" : "btn_active"} onClick={() => handleChangeMode(ModeParams.All)}>
          All cards
        </DefaultButton>
      </S.ButtonsWrapp>
    </S.Wrapper>
  );
};
