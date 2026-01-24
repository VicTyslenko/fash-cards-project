import { useGetCardsQuery } from "../../../api/apiSlice";

export const useGetData = () => {
  const limit = 6;
  const offset = 0;
  const { data = [], isLoading } = useGetCardsQuery({ limit, offset});

  return { data, isLoading };
};
