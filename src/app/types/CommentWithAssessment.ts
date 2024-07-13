export enum AssessmentEnum {
  POSITIVE = "POSITIVE",
  NEGATIVE = "NEGATIVE",
}

export type CommentWithAssessmentType = {
  text: string;
  author: string;
  label: AssessmentEnum;
  explanation: string;
};
