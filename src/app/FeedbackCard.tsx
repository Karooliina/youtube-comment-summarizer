"use server";

import { Suspense } from "react";
import { Card } from "./components/Card";
import { getFeedback } from "./lib/getFeedback";
import { CommentType } from "./types/Comment";

export const FeedbackCard = async ({
  comments,
}: {
  comments: CommentType[];
}) => {
  const feedback = comments.length ? await getFeedback(comments) : [];

  if (!feedback?.length) {
    return null;
  }

  return (
    <Suspense>
      <Card title="Feedback">
        <p>{feedback}</p>
      </Card>
    </Suspense>
  );
};
