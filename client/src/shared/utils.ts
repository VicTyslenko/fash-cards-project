import type { Card } from "../slices/cards/models";
export const MAX_KNOWN = 5;

export const INITIAL_CARDS_QTY = 12;

type Props = {
  isMastered: boolean;
  data: Card[];
  categories: string[];
};

export const filterDataByCategories = ({ isMastered, categories, data }: Props) => {
  return data.filter((el) => {
    const categoryMatch = categories.length === 0 || categories.includes(el.category);

    const masteredMatch = !isMastered || el.known_count !== 5;

    return categoryMatch && masteredMatch;
  });
};

type ScrollProps = {
  wrapperId: string;
  options?: ScrollToOptions;
};

export const scrollWindow = ({ wrapperId, options }: ScrollProps) => {
  const wrapper = document.getElementById(wrapperId);

  if (!wrapper) return;

  wrapper.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
    ...options,
  });
};
