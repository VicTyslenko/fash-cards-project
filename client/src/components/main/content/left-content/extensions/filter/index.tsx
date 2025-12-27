import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import { useFilter } from "./hooks";
import ArrowDown from "@/assets/icons/icon-chevron-down.svg";
import ShuffleIcon from "@/assets/icons/icon-shuffle.svg";

import * as S from "./styles";

export const Filter = () => {
  const { cardsData, error, isLoading, categories } = useFilter();

  return (
    <S.Wrapper>
      <S.FlexWrapp>
        <S.DropDown>
          <S.Select>
            <option value="">Web Development</option>
            {categories &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
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
