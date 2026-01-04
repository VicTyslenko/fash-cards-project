import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import { DropDown } from "./extensions/dropdown";
import type { FilterProps } from "./models";
import ArrowDown from "@/assets/icons/icon-chevron-down.svg";
import ShuffleIcon from "@/assets/icons/icon-shuffle.svg";
import { useFilter } from "./hooks";
import { CheckBoxInput } from "../../../../../../shared/check-box-input";

import * as S from "./styles";

export const Filter = ({ data }: FilterProps) => {
  const {
    // handleSetCategory,
    currentCategory,
    handleSetQuestion,
    handleHideMastered,
    masteredHidden,
    handleShuffleCards,
    categories,
    openList,
    setOpenList,
  } = useFilter({
    data,
  });

  return (
    <S.Wrapper>
      <form action="" onSubmit={() => {}}>
        <S.FlexWrapp>
          <S.DropDownWrapp onClick={() => setOpenList(true)}>
            All categories
            <img src={ArrowDown} alt="arrow" className="arrow" />
            {openList && (
              <DropDown
                data={categories}
                handleClose={() => setOpenList(false)}
                onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
              />
            )}
          </S.DropDownWrapp>

          <S.CheckBoxWrapp>
            <input type="checkbox" id="hide-input" onChange={handleHideMastered} checked={masteredHidden} />
            <label htmlFor="hide-input">Hide Mastered</label>
          </S.CheckBoxWrapp>
        </S.FlexWrapp>
      </form>

      <DefaultButton>
        <img src={ShuffleIcon} alt="shuffle" />
        <DefaultTypography>Shuffle</DefaultTypography>
      </DefaultButton>
    </S.Wrapper>
  );
};
