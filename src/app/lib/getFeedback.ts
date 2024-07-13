import { openaiClient } from "./openAiClient";
import { generateText } from "ai";
import { CommentType } from "../types/Comment";

export const getFeedback = async (comments: CommentType[]) => {
  try {
    const model = openaiClient.chat("gpt-3.5-turbo");
    const commentsList = comments.map((comment) => comment.text);

    const { text } = await generateText({
      model,
      system:
        "Based on list of comments generate feedback for the author of the video. Focus on what the commenters pointed in comments. Referrence the comments that you used to generate feedback. Answear should be in Polish",
      prompt: `Comments list: ${commentsList}`,
      temperature: 0.1,
    });
    return text;
  } catch (e) {
    console.log(e);
  }
};
