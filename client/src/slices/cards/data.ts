import { INITIAL_CARDS_QTY } from "../../shared/utils";
import { type CardProps } from "./models";

export const initialState: CardProps = {
  cards: null,
  isQuestion: true,
  selectedCategories: [],
  isSelected: false,
  cardsLimit: INITIAL_CARDS_QTY,
  selectedStudyCategories: [],
};
