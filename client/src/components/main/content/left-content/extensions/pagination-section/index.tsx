import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import LeftIcon from "@/assets/icons/icon-chevron-left.svg";
import RightIcon from "@/assets/icons/icon-chevron-right.svg";

import * as S from "./styles";

export const PaginationSection = () => {
  return (
    <S.Wrapper>
      <DefaultButton>
        <img src={LeftIcon} alt="left icon" />
        <DefaultTypography>Previous</DefaultTypography>
      </DefaultButton>

      <DefaultTypography className="card-number">Card 1 of 4</DefaultTypography>

      <DefaultButton>
        <img src={RightIcon} alt="left icon" />
        <DefaultTypography>Next</DefaultTypography>
      </DefaultButton>
    </S.Wrapper>
  );
};
