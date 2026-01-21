import { useGetCardsQuery } from "../../../api/apiSlice";

export const useGetData = () => {
  const { data = [], isLoading } = useGetCardsQuery();

  return { data, isLoading };
};
