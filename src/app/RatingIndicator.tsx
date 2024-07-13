import { Suspense } from "react";
import { CommentType } from "./types/Comment";
import { getRating } from "./lib/getVideoRating";

export const RatingIndicator = async ({
  comments,
}: {
  comments: CommentType[];
}) => {
  const ratingResponse = comments.length ? await getRating(comments) : null;

  if (!ratingResponse) {
    return null;
  }

  return (
    <Suspense>
      <p className="font-semibold">Rating: {ratingResponse.rating}/10</p>
      <p className="font-light text-sm">{ratingResponse.explanation}</p>
    </Suspense>
  );
};
