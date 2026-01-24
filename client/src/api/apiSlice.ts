import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Card } from "../slices/cards/models";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Cards"],
  endpoints: (builder) => ({
    getCards: builder.query<Card[], { limit: number; offset: number }>({
      query: ({ limit, offset }) => `cards?${limit}/${offset}`,
      providesTags: ["Cards"],
    }),
    updateCard: builder.mutation<Card, { id: string }>({
      query: ({ id }) => ({
        url: `card/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Cards"],
    }),
    resetCard: builder.mutation<Card, { id: string }>({
      query: ({ id }) => ({
        url: `card/reset/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Cards"],
    }),
  }),
});

export const { useGetCardsQuery, useUpdateCardMutation, useResetCardMutation } = apiSlice;
