import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { GetCardsResponse, GetCards, DeleteCardResponse, BodyProps } from "./models";
import type { Card } from "../slices/cards/models";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Cards"],
  endpoints: (builder) => ({
    // get all cards request
    getAllCards: builder.query<GetCards, void>({
      query: () => `cards/all`,
      providesTags: ["Cards"],
    }),

    // get limited cards request
    getCardsLimited: builder.query<GetCardsResponse, number>({
      query: (limit) => `cards/limited/?limit=${limit}`,
      providesTags: ["Cards"],
    }),

    // create a new card request
    createCard: builder.mutation<GetCards, BodyProps>({
      query: (values) => ({
        url: `card/create`,
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Cards"],
    }),

    editCard: builder.mutation<Card, { id: string; values: BodyProps }>({
      query: ({ id, values }) => ({
        url: `card/edit/${id}`,
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Cards"],
    }),

    // update a card request
    updateCard: builder.mutation<Card, { id: string }>({
      query: ({ id }) => ({
        url: `card/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Cards"],
    }),

    // reset card request
    resetCard: builder.mutation<Card, { id: string }>({
      query: ({ id }) => ({
        url: `card/reset/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Cards"],
    }),
    // Delete current card query
    deleteCard: builder.mutation<DeleteCardResponse, { id: string }>({
      query: ({ id }) => ({
        url: `card/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cards"],
    }),
  }),
});

export const {
  useGetCardsLimitedQuery,
  useUpdateCardMutation,
  useResetCardMutation,
  useGetAllCardsQuery,
  useCreateCardMutation,
  useEditCardMutation,
  useDeleteCardMutation,
} = apiSlice;
