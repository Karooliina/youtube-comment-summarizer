"use server";

import axios, { AxiosError } from "axios";
import { CommentType } from "../types/Comment";

export const getVideoCommets = async (
  videoId: string
): Promise<CommentType[]> => {
  const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.YOUTUBE_API_KEY}`;

  const result = await axios
    .get(youtubeApiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .catch((error: AxiosError) => {
      console.log(error.message);
    });

  if (!result) {
    return [];
  }
  return result.data.items.map((item: Record<string, any>) => ({
    text: item.snippet.topLevelComment.snippet.textDisplay,
    author: item.snippet.topLevelComment.snippet.authorDisplayName,
  }));
};
