import { INITIAL_CARDS_QTY } from "../../shared/utils";

export type Card = {
  id: string;
  question: string;
  answer: string;
  category: string;
  known_count: number;
};

export type CardProps = {
  cards: Card[] | null;
  isQuestion: boolean;
  selectedCategories: string[];
  selectedStudyCategories: string[];
  isSelected: boolean;
  cardsLimit: number;
};

export const initialState: CardProps = {
  cards: null,
  isQuestion: true,
  selectedCategories: [],
  isSelected: false,
  cardsLimit: INITIAL_CARDS_QTY,
  selectedStudyCategories: [],
};
