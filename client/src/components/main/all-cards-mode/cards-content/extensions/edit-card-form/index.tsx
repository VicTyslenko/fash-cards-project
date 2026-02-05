import { DefaultTypography } from "../../../../../../shared/default-typography";
import { DefaultButton } from "../../../../../../shared/default-button";
import { useForm } from "react-hook-form";
import { useEditCardMutation } from "../../../../../../api/apiSlice";
import { type FormProps } from "../../../new-card-form/models";
import { ErrorMessage } from "../../../new-card-form/styles";
import { validationSchema } from "./validation";
import { defaultValues } from "./data";
import { zodResolver } from "@hookform/resolvers/zod";

import * as S from "./styles";

type EditFormProps = {
  values: {
    question: string;
    answer: string;
    category: string;
  };
};
export const EditCardForm = ({ id }: { id: string }) => {
  console.log("current id", id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const [editCard] = useEditCardMutation();

  const onSubmit = async (values: EditFormProps) => {
    console.log(values);

    try {
      await editCard({ id, values });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Wrapper>
      <DefaultTypography as="h1">Edit your card</DefaultTypography>

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Label>Question</S.Label>
        <S.Input {...register("question")} placeholder="question..." />
        {errors.question?.message && <ErrorMessage>{errors.question.message}</ErrorMessage>}

        <S.Label>Answer</S.Label>
        <S.TextArea {...register("answer")} placeholder="answer..." />
        {errors.answer?.message && <ErrorMessage>{errors.answer.message}</ErrorMessage>}

        <S.Label>Category</S.Label>
        <S.Input {...register("category")} placeholder="category..." />
        {errors.category?.message && <ErrorMessage>{errors.category.message}</ErrorMessage>}

        <S.ButtonWrapp>
          <DefaultButton type="submit">Update Card</DefaultButton>
        </S.ButtonWrapp>
      </S.Form>
    </S.Wrapper>
  );
};
