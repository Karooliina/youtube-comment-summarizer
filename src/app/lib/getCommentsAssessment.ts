import { generateObject } from "ai";
import { openaiClient } from "./openAiClient";
import { CommentType } from "../types/Comment";
import z from "zod";
import {
  AssessmentEnum,
  CommentWithAssessmentType,
} from "../types/CommentWithAssessment";

export const getCommentsAssessments = async (
  comments: CommentType[]
): Promise<{ comments: CommentWithAssessmentType[] } | undefined> => {
  try {
    const model = openaiClient.chat("gpt-3.5-turbo");

    const { object } = await generateObject({
      model,
      schema: z.object({
        comments: z.array(
          z.object({
            author: z.string(),
            text: z.string(),
            label: z.enum([AssessmentEnum.POSITIVE, AssessmentEnum.NEGATIVE]),
            explanation: z.string(),
          })
        ),
      }),
      system:
        "Based on list of comments read and rate the comment and assign a label 'POSITIVE' or 'NEGATIVE'. Explain why you gave this label. Explanation should be in Polish.",
      prompt: `Comments list: ${JSON.stringify(comments)}`,
      temperature: 0,
    });

    return object;
  } catch (e) {
    console.log(e);
  }
};
