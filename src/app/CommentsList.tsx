import { getCommentsAssessments } from "./lib/getCommentsAssessment";
import { CommentType } from "./types/Comment";
import { CommentBlock } from "./CommentBlock";

export const CommentsList = async ({
  comments,
}: {
  comments: CommentType[];
}) => {
  const commentsWithAssessments = await getCommentsAssessments(comments);

  if (!commentsWithAssessments?.comments.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      {commentsWithAssessments?.comments.map(
        ({ author, text, label }, index) => (
          <CommentBlock key={index} author={author} text={text} label={label} />
        )
      )}
    </div>
  );
};
