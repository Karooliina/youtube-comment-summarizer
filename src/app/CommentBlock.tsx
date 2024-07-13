export const CommentBlock = ({
  author,
  text,
  label,
}: {
  author: string;
  text: string;
  label: string;
}) => {
  return (
    <span className="flex flex-col gap-1 bg-slate-400">
      <p>{author}</p>
      <p>{text}</p>
      <p>{label}</p>
    </span>
  );
};
