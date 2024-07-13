"use server";

import { CommentsList } from "./CommentsList";
import { Form } from "./components/Form";
import { Video } from "./components/Video";
import { FeedbackCard } from "./FeedbackCard";
import { getVideoCommets } from "./lib/getVideoComments";
import { RatingIndicator } from "./RatingIndicator";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const videoId = (searchParams["videoId"] as string) ?? "";

  const comments = videoId.length ? await getVideoCommets(videoId) : [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-5">
      <Form label="Youtube video id" searchKey="videoId" initQuery={videoId} />
      <Video videoId={videoId} />
      <RatingIndicator comments={comments} />
      <div className="flex flex-col justify-center py-10 gap-2">
        <FeedbackCard comments={comments} />
        <CommentsList comments={comments} />
      </div>
    </main>
  );
}
