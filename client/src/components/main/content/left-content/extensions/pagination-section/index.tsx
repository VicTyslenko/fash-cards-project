import { useSearchParams } from "react-router";
import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import LeftIcon from "@/assets/icons/icon-chevron-left.svg";
import RightIcon from "@/assets/icons/icon-chevron-right.svg";
import { useQuestionsContent } from "../questions-content/hooks";

import * as S from "./styles";

export const PaginationSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentIndex: number = Number(searchParams.get("card")) || 1;

  const { filteredData } = useQuestionsContent();

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
