import { CheckBoxInput } from "../../../../../../../../shared/check-box-input";
import { DefaultTypography } from "../../../../../../../../shared/default-typography";
import { useRef, useState } from "react";
import ArrowDown from "@/assets/icons/icon-chevron-down.svg";
import { useClickOutside } from "../../../../../../../../shared/hooks";

import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: { category: string; quantity: number }[];
}

export const DropDown = ({ data, ...props }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleToggleMenu = () => setIsMenuActive((prev) => !prev);

  const handleCloseMenu = () => setIsMenuActive(false);
  useClickOutside(wrapperRef, handleCloseMenu);

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
              <CheckBoxInput />
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
