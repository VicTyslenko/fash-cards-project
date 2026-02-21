import { useSearchParams } from "react-router";

import LeftIcon from "@/assets/icons/icon-chevron-left.svg";
import RightIcon from "@/assets/icons/icon-chevron-right.svg";

import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import type { Card } from "../../../../../../slices/cards/models";

import * as S from "./styles";

type Props = {
  total: number;
  currentIndex: number;
  data: Card[];
  currentCard?: Card;
};

export const PaginationSection = ({ total, currentIndex, data, currentCard }: Props) => {
  const [_, setSearchParams] = useSearchParams();

  const handlePreviousCard = () => {
    if (!data.length) return;
    const idx = data.findIndex((el) => el.id === currentCard?.id);
    if (idx <= 0) return;

    setSearchParams((sp) => {
      sp.set("cardId", data[idx - 1].id);
      return sp;
    });
  };
  const handleNextCard = () => {
    if (!data.length) return;
    const idx = data.findIndex((el) => el.id === currentCard?.id);

    if (idx >= data.length - 1) return;

    setSearchParams((sp) => {
      sp.set("cardId", data[idx + 1].id);
      return sp;
    });
  };

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
