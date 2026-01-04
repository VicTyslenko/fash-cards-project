import { CheckBoxInput } from "../../../../../../../../shared/check-box-input";
import { DefaultTypography } from "../../../../../../../../shared/default-typography";
import { useRef } from "react";
import { useClickOutside } from "../../../../../../../../shared/hooks";

import * as S from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: { category: string; quantity: number }[];
  handleClose: () => void;
}

export const DropDown = ({ data, handleClose, ...props }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // useClickOutside(wrapperRef, handleClose);

  return (
    <S.Wrapper ref={wrapperRef} className="dropdown" {...props}>
      {data.map((obj) => (
        <S.DropDownItem key={obj.category}>
          <CheckBoxInput />
          <DefaultTypography>
            {obj.category} <span className="quantity">({obj.quantity})</span>
          </DefaultTypography>
        </S.DropDownItem>
      ))}
    </S.Wrapper>
  );
};
