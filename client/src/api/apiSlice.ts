import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Card } from "../slices/cards/models";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),

  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => "/cards",
    }),
  }),
});

export const { useGetCardsQuery } = apiSlice;
