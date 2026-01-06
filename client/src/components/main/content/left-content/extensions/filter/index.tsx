import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import { DropDown } from "./extensions/dropdown";
import type { FilterProps } from "./models";

import ShuffleIcon from "@/assets/icons/icon-shuffle.svg";
import { useFilter } from "./hooks";
import * as S from "./styles";

export const Filter = ({ data }: FilterProps) => {
  const { handleHideMastered, masteredHidden, handleShuffleCards, categories } = useFilter({
    data,
  });
  return (
    <S.Wrapper>
      <S.FlexWrapp>
        <DropDown data={categories} />

        <S.CheckBoxWrapp>
          <input type="checkbox" id="hide-input" onChange={handleHideMastered} checked={masteredHidden} />
          <label htmlFor="hide-input">Hide Mastered</label>
        </S.CheckBoxWrapp>
      </S.FlexWrapp>

      <DefaultButton>
        <img src={ShuffleIcon} alt="shuffle" />
        <DefaultTypography>Shuffle</DefaultTypography>
      </DefaultButton>
    </S.Wrapper>
  );
};
