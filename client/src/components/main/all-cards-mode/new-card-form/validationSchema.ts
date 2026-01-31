import * as z from "zod";

export const validationSchema = z.object({
  values: z.object({
    question: z.string().min(1, "Please, enter a question").min(5, "Too short!"),
    answer: z.string().min(1, "Please, enter an answer").min(2, "Too short!"),
    category: z.string().min(1, "Please, enter a category").min(5, "Too short!"),
  }),
});
