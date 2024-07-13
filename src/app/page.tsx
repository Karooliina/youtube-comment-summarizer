"use server";

import { Form } from "./components/form";
//import { getVideoCommets } from "./lib/getVideoComments";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const videoId = (searchParams["videoId"] as string) ?? "";
  //const comments = videoId ? await getVideoCommets(videoId) : [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form label="Youtube video id" searchKey="videoId" initQuery={videoId} />
    </main>
  );
}
