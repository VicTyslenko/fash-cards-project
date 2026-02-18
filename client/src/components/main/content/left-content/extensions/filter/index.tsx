import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import { DropDown } from "./extensions/dropdown";
import { CheckBoxInput } from "../../../../../../shared/check-box-input";
import type { FilterProps } from "./models";

import ShuffleIcon from "@/assets/icons/icon-shuffle.svg";
import { useFilter } from "./hooks";
import * as S from "./styles";

export const Filter = ({ data }: FilterProps) => {
  const { handleHideMastered, masteredHidden, handleShuffleCards, categories } = useFilter({
    data,
  });

  return (
    <S.Wrapper className="filter">
      <S.FlexWrapp>
        <DropDown data={categories} />

        <S.CheckBoxWrapp>
          <CheckBoxInput checked={masteredHidden} onChange={handleHideMastered} id="hide-input" />
          <S.Label htmlFor="hide-input">Hide Mastered</S.Label>
        </S.CheckBoxWrapp>
      </S.FlexWrapp>

      <DefaultButton onClick={handleShuffleCards}>
        <img src={ShuffleIcon} alt="shuffle" />
        <DefaultTypography>Shuffle</DefaultTypography>
      </DefaultButton>
    </S.Wrapper>
  );
};
