import * as S from "./styles";
import { DefaultButton } from "../../../../shared/default-button";
import { DefaultTypography } from "../../../../shared/default-typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultValues } from "./data";
import { toast } from "react-toastify";
import { useCreateCardMutation } from "../../../../api/apiSlice";
import { type NewCardProps } from "../../../../api/models";

import PlusIcon from "@/assets/icons/icon-circle-plus.svg";
import ErrorIcon from "@/assets/icons/icon-error.svg";
import { validationSchema } from "./validationSchema";

export const NewCardForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewCardProps>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const [createCard] = useCreateCardMutation();
  const onSubmit = async (values: NewCardProps) => {
    try {
      const response = await createCard(values).unwrap();
      toast.success("Card created successfully.");
      reset();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Form className="new-card_form" onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapp>
        <S.Label>Question</S.Label>
        <S.Input {...register("values.question")} placeholder="e.g., What is the capital of France?" />
      </S.InputWrapp>
      {errors?.values?.question?.message && (
        <S.ErrorMessage>
          <img src={ErrorIcon} alt="error" />
          <span>{errors.values.question.message}</span>
        </S.ErrorMessage>
      )}
      <S.InputWrapp className="hello">
        <S.Label htmlFor="area-input">Answer</S.Label>
        <S.TextArea {...register("values.answer")} id="area-input" className="area-input" placeholder="e.g., Paris" />
        {errors?.values?.answer?.message && (
          <S.ErrorMessage>
            <img src={ErrorIcon} alt="error" />
            <span>{errors.values.answer.message}</span>
          </S.ErrorMessage>
        )}
      </S.InputWrapp>
      <S.InputWrapp>
        <S.Label htmlFor="category-input">Category</S.Label>
        <S.Input {...register("values.category")} id="category-input" type="text" placeholder="e.g., What is the capital of France?" />
        {errors?.values?.category?.message && (
          <S.ErrorMessage>
            <img src={ErrorIcon} alt="error" />
            <span>{errors.values.category.message}</span>
          </S.ErrorMessage>
        )}
      </S.InputWrapp>

      <DefaultButton type="submit">
        <img src={PlusIcon} alt="plus" />
        <DefaultTypography>Create Card</DefaultTypography>
      </DefaultButton>
    </S.Form>
  );
};
