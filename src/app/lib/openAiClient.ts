import "server-only";

import { createOpenAI } from "@ai-sdk/openai";

export const openaiClient = createOpenAI({
  apiKey: process.env.OPENAI_KEY,
  compatibility: "strict",
});
