import zod from "zod";

export const validationSchema = zod.object({
  question: zod.string().min(2, "Write your question").min(5, "Too short!"),
  answer: zod.string().min(2, "Write your answer"),
  category: zod.string().min(2, "Write your category"),
});
