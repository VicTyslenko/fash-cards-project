import * as S from "./styles";
import { DefaultButton } from "../../../../shared/default-button";
import { DefaultTypography } from "../../../../shared/default-typography";
import { useForm } from "react-hook-form";
import { setPopupOpen } from "../../../../slices/popup/popupSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./data";
import { useStoreDispatch } from "../../../../hooks";
import { type FormProps } from "./models";
import { useCreateCardMutation } from "../../../../api/apiSlice";

import PlusIcon from "@/assets/icons/icon-circle-plus.svg";
import ErrorIcon from "@/assets/icons/icon-error.svg";
import { validationSchema } from "./validationSchema";
import { ConfirmPopup } from "../../../../shared/confirm-popup";

export const NewCardForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const dispatch = useStoreDispatch();

  const [createCard] = useCreateCardMutation();
  const onSubmit = async (values: FormProps) => {
    try {
      await createCard(values).unwrap();
      dispatch(setPopupOpen("Card created successfully."));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Form className="new-card_form" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapp>
        <S.Label>Question</S.Label>
        <S.Input {...register("question")} placeholder="e.g., What is the capital of France?" />
      </S.InputWrapp>
      {errors?.question?.message && (
        <S.ErrorMessage>
          <img src={ErrorIcon} alt="error" />
          <span>{errors.question.message}</span>
        </S.ErrorMessage>
      )}
      <S.InputWrapp className="hello">
        <S.Label htmlFor="area-input">Answer</S.Label>
        <S.TextArea {...register("answer")} id="area-input" className="area-input" placeholder="e.g., Paris" />
        {errors?.answer?.message && (
          <S.ErrorMessage>
            <img src={ErrorIcon} alt="error" />
            <span>{errors.answer.message}</span>
          </S.ErrorMessage>
        )}
      </S.InputWrapp>
      <S.InputWrapp>
        <S.Label htmlFor="category-input">Category</S.Label>
        <S.Input {...register("category")} id="category-input" type="text" placeholder="e.g., What is the capital of France?" />
        {errors?.category?.message && (
          <S.ErrorMessage>
            <img src={ErrorIcon} alt="error" />
            <span>{errors.category.message}</span>
          </S.ErrorMessage>
        )}
      </S.InputWrapp>

      <DefaultButton type="submit">
        <img src={PlusIcon} alt="plus" />
        <DefaultTypography>Create Card</DefaultTypography>
      </DefaultButton>
      <ConfirmPopup />
    </S.Form>
  );
};
