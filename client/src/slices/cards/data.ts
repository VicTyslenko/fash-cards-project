import { type CardProps } from "./models";
import { INITIAL_CARDS_QTY } from "../../shared/utils";

export const initialState: CardProps = {
  cards: null,
  isQuestion: true,
  selectedCategories: [],
  isSelected: false,
  cardsLimit: INITIAL_CARDS_QTY,
  selectedStudyCategories: [],
};
