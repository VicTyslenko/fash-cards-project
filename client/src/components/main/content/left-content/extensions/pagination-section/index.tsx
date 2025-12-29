import { useSearchParams } from "react-router";
import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import type { Card } from "../../../../../../slices/cards/models";
import LeftIcon from "@/assets/icons/icon-chevron-left.svg";
import RightIcon from "@/assets/icons/icon-chevron-right.svg";

import * as S from "./styles";

type Props = {
  filteredData: Card[];
  currentIndex: number;
};

export const PaginationSection = ({ filteredData, currentIndex }: Props) => {
  const [_, setSearchParams] = useSearchParams();

  const handlePreviousCard = () => {
    if (!filteredData || currentIndex <= 1) return;

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("card", String(currentIndex - 1));
      return next;
    });
  };

  const handleNextCard = () => {
    if (!filteredData || currentIndex >= filteredData.length) return;

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      next.set("card", (currentIndex + 1).toString());
      return next;
    });
  };

  return (
    <S.Wrapper>
      <DefaultButton onClick={handlePreviousCard}>
        <img src={LeftIcon} alt="left icon" />
        <DefaultTypography>Previous</DefaultTypography>
      </DefaultButton>

      <DefaultTypography className="card-number">
        Card {currentIndex} of {filteredData?.length}
      </DefaultTypography>

      <DefaultButton onClick={handleNextCard}>
        <img src={RightIcon} alt="left icon" />
        <DefaultTypography>Next</DefaultTypography>
      </DefaultButton>
    </S.Wrapper>
  );
};
