import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetCardsResponse, GetCards } from "./models";
import type { Card } from "../slices/cards/models";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Cards"],
  endpoints: (builder) => ({
    getAllCards: builder.query<GetCards, void>({
      query: () => `cards/all`,
      providesTags: ["Cards"],
    }),

    getCardsLimited: builder.query<GetCardsResponse, number>({
      query: (limit) => `cards/limited/?limit=${limit}`,
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

export const { useGetCardsLimitedQuery, useUpdateCardMutation, useResetCardMutation, useGetAllCardsQuery } = apiSlice;
