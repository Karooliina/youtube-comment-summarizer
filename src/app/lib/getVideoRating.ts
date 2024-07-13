import { openaiClient } from "./openAiClient";
import { generateObject } from "ai";
import { CommentType } from "../types/Comment";
import { RatingType } from "../types/Rating";
import z from "zod";

export const getRating = async (
  comments: CommentType[]
): Promise<RatingType | undefined> => {
  try {
    const model = openaiClient.chat("gpt-3.5-turbo");
    const commentsList = comments.map((comment) => comment.text);

    const { object } = await generateObject({
      model,
      schema: z.object({
        rating: z.number().nonnegative(),
        explanation: z.string().min(10),
      }),
      system:
        "Based on list of comments rate the video from 1 to 10. Explain why you gave this rating. Output should be in json with schema: {'rating': number, 'explanation': 'Your explanation'}. Explanation should be in Polish.",
      prompt: `Comments list: ${commentsList}`,
      temperature: 0,
    });

    return object;
  } catch (e) {
    console.log(e);
  }
};
