"use client";

export const Video = ({ videoId }: { videoId: string }) => {
  if (!videoId) {
    return null;
  }
  return (
    <iframe
      width={420}
      height={315}
      src={`https://www.youtube.com/embed/${videoId}`}
      allowFullScreen
    />
  );
};
