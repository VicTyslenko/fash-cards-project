import { useRef, useState } from "react";

import { useSearchParams } from "react-router";

import ArrowDown from "@/assets/icons/icon-chevron-down.svg";

import { useStoreDispatch, useStoreSelector } from "../../../../../../../../hooks";
import { useClickOutside } from "../../../../../../../../shared/hooks";

import { CheckBoxInput } from "../../../../../../../../shared/check-box-input";
import { DefaultTypography } from "../../../../../../../../shared/default-typography";
import { selectCategories } from "../../../../../../../../slices/cards/cardsSlice";
import { ModeParams } from "../../../../../../models";

import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: { category: string; quantity: number }[];
}

export const DropDown = ({ data, ...props }: Props) => {
  const dispatch = useStoreDispatch();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedCategories = useStoreSelector((state) => state.cards.selectedCategories);
  const selectedStudyCategories = useStoreSelector((state) => state.cards.selectedStudyCategories);

  const [isMenuActive, setIsMenuActive] = useState(false);

  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode") || ModeParams.All;

  const handleCloseMenu = () => setIsMenuActive(false);
  useClickOutside(wrapperRef, handleCloseMenu);

  const handleToggleMenu = () => setIsMenuActive((prev) => !prev);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value: category } = event.target;

    dispatch(selectCategories({ category, mode }));
  };

  return (
    <S.Wrapper ref={wrapperRef} className="dropdown" {...props}>
      <S.DropDownAction onClick={handleToggleMenu}>
        All categories
        <img src={ArrowDown} alt="arrow" className="arrow" />
      </S.DropDownAction>

      {isMenuActive && (
        <S.ItemsListInner>
          {data.map((obj) => (
            <S.DropDownItem key={obj.category}>
              <CheckBoxInput
                value={obj.category}
                onChange={handleInputChange}
                checked={mode === ModeParams.All ? selectedCategories.includes(obj.category) : selectedStudyCategories.includes(obj.category)}
              />
              <DefaultTypography>
                {obj.category} <span className="quantity">({obj.quantity})</span>
              </DefaultTypography>
            </S.DropDownItem>
          ))}
        </S.ItemsListInner>
      )}
    </S.Wrapper>
  );
};
