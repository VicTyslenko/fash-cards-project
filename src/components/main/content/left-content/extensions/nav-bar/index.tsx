import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import ArrowDown from "@/assets/icons/icon-chevron-down.svg";
import ShuffleIcon from "@/assets/icons/icon-shuffle.svg";

import * as S from "./styles";

export const NavBar = () => {
  return (
    <S.Wrapper>
      <S.FlexWrapp>
        <S.DropDown>
          <S.Select>
            <option value="">All Categories</option>
            <option value="1">All Categories</option>
            <option value="2">All Categories</option>
            <option value="3">All Categories</option>
            <option value="">All Categories</option>
          </S.Select>
          <img src={ArrowDown} alt="" className="arrow" />
        </S.DropDown>
        <S.CheckBoxWrapp>
          <input type="checkbox" id="test" />
          <label htmlFor="test">Hide Mastered</label>
        </S.CheckBoxWrapp>
      </S.FlexWrapp>

      <DefaultButton>
        <img src={ShuffleIcon} alt="shuffle-icon" />
        <DefaultTypography>Shuffle</DefaultTypography>
      </DefaultButton>
    </S.Wrapper>
  );
};
