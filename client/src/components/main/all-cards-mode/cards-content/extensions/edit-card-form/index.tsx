import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useStoreDispatch } from "../../../../../../hooks";

import { useEditCardMutation } from "../../../../../../api/apiSlice";
import { DefaultButton } from "../../../../../../shared/default-button";
import { DefaultTypography } from "../../../../../../shared/default-typography";
import { ErrorMessage } from "../../../../../../shared/error-message";
import { scrollWindow } from "../../../../../../shared/utils";
import type { Card } from "../../../../../../slices/cards/models";
import { setModalClose } from "../../../../../../slices/modals/modalSlice";
import { setPopupOpen } from "../../../../../../slices/popup/popupSlice";
import { type FormProps } from "../../../new-card-form/models";
import { defaultValues } from "./data";
import { validationSchema } from "./validation";

import * as S from "./styles";

export const EditCardForm = ({ id, currentCard }: { id: string; currentCard: Card }) => {
  const dispatch = useStoreDispatch();
  const [editCard] = useEditCardMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  // Submit function to edit card
  const onSubmit = async (values: FormProps) => {
    if (!dirtyFields.question && !dirtyFields.answer && !dirtyFields.category) {
      dispatch(setModalClose());
      scrollWindow({
        wrapperId: "all-cards_wrapper",
      });
      return;
    }

    try {
      await editCard({ id, values }).unwrap();
      dispatch(setModalClose());
      dispatch(setPopupOpen("Card updated successfully."));

      scrollWindow({
        wrapperId: "all-cards_wrapper",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // setting the default values when open form to the current card values
  useEffect(() => {
    if (currentCard) {
      reset({
        question: currentCard.question,
        answer: currentCard.answer,
        category: currentCard.category,
      });
    }
  }, [currentCard, reset]);

  return (
    <S.Wrapper>
      <DefaultTypography as="h1">Edit your card</DefaultTypography>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>Question</S.Label>
        <S.Input {...register("question")} placeholder={currentCard.question} />
        {errors.question?.message && <ErrorMessage message={errors.question.message} />}

        <S.Label>Answer</S.Label>
        <S.TextArea {...register("answer")} placeholder="answer..." />
        {errors.answer?.message && <ErrorMessage message={errors.answer.message} />}

        <S.Label>Category</S.Label>
        <S.Input {...register("category")} placeholder="category..." />
        {errors.category?.message && <ErrorMessage message={errors.category.message} />}

        <S.ButtonWrapp>
          <DefaultButton type="submit">Update Card</DefaultButton>
        </S.ButtonWrapp>
      </S.Form>
    </S.Wrapper>
  );
};
