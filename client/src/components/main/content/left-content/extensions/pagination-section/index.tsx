import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import LeftIcon from "@/assets/icons/icon-chevron-left.svg";
import RightIcon from "@/assets/icons/icon-chevron-right.svg";
import { usePagination } from "./hooks";

import * as S from "./styles";

type Props = {
  total: number;
};

export const PaginationSection = ({ total }: Props) => {
  const { currentIndex, handleNextCard, handlePreviousCard } = usePagination({ total });

  return (
    <S.Wrapper>
      <DefaultButton onClick={handlePreviousCard}>
        <img src={LeftIcon} alt="left icon" />
        <DefaultTypography>Previous</DefaultTypography>
      </DefaultButton>

      <DefaultTypography className="card-number">
        Card {currentIndex} of {total}
      </DefaultTypography>

      <DefaultButton onClick={handleNextCard}>
        <DefaultTypography>Next</DefaultTypography>
        <img src={RightIcon} alt="left icon" />
      </DefaultButton>
    </S.Wrapper>
  );
};
