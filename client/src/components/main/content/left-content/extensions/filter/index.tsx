import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import type { FilterProps } from "./models";
import ArrowDown from "@/assets/icons/icon-chevron-down.svg";
import ShuffleIcon from "@/assets/icons/icon-shuffle.svg";
import { useFilter } from "./hooks";

import * as S from "./styles";

export const Filter = ({ data }: FilterProps) => {
  const { categories, handleSetCategory, currentCategory, handleSetQuestion, handleHideMastered, masteredHidden, handleShuffleCards } = useFilter({
    data,
  });

  return (
    <S.Wrapper>
      <S.FlexWrapp>
        <S.DropDown>
          <S.Select
            onChange={(event) => {
              handleSetCategory(event);
              handleSetQuestion();
            }}
            value={currentCategory}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </S.Select>
          <img src={ArrowDown} alt="" className="arrow" />
        </S.DropDown>
        <S.CheckBoxWrapp>
          <input type="checkbox" id="hide-input" onChange={handleHideMastered} checked={masteredHidden} />
          <label htmlFor="hide-input">Hide Mastered</label>
        </S.CheckBoxWrapp>
      </S.FlexWrapp>

      <DefaultButton >
        <img src={ShuffleIcon} alt="shuffle-icon" />
        <DefaultTypography>Shuffle</DefaultTypography>
      </DefaultButton>
    </S.Wrapper>
  );
};
