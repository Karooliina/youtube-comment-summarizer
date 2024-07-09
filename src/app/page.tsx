"use server";

import { getVideoCommets } from "./lib/getVideoComments";

export default async function Home() {
  const comments = await getVideoCommets("wFNTeZsA6vE");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <label>Youtube link</label>
        <input className="border-gray-400 w-full bg-slate-600" />
      </form>
    </main>
  );
}
