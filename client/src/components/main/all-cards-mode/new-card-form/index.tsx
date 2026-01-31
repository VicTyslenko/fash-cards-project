import * as S from "./styles";
import { DefaultButton } from "../../../../shared/default-button";
import { DefaultTypography } from "../../../../shared/default-typography";
import { useForm } from "react-hook-form";
import { defaultValues } from "./data";
import { toast } from "react-toastify";
import { useCreateCardMutation } from "../../../../api/apiSlice";
import { type NewCardProps } from "../../../../api/models";

import PlusIcon from "@/assets/icons/icon-circle-plus.svg";

export const NewCardForm = () => {
  const { register, handleSubmit, reset } = useForm<NewCardProps>({
    defaultValues,
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
      <S.InputWrapp className="hello">
        <S.Label htmlFor="area-input">Answer</S.Label>
        <S.TextArea {...register("values.answer")} id="area-input" className="area-input" placeholder="e.g., Paris" />
      </S.InputWrapp>
      <S.InputWrapp>
        <S.Label htmlFor="category-input">Category</S.Label>
        <S.Input {...register("values.category")} id="category-input" type="text" placeholder="e.g., What is the capital of France?" />
      </S.InputWrapp>

      <DefaultButton type="submit">
        <img src={PlusIcon} alt="plus" />
        <DefaultTypography>Create Card</DefaultTypography>
      </DefaultButton>
    </S.Form>
  );
};
