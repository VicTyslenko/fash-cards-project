import { useGetCardsQuery } from "../../../api/apiSlice";

export const useContent = () => {
  const { data = [] } = useGetCardsQuery();

  return { data };
};
