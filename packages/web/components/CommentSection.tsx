import { CreateQuestion } from "./Question";
import { CommentProps, QuestionProps } from "../types/questionReplyTypes";
import { CreateQuestionReply } from "./QuestionReply";

interface AddCommentProps {
  onEditorSubmit: (T: any) => void;
  comments: CommentProps[];
  line: number;
  view: "code-view" | "repo-view";
}

export const AddComment: React.SFC<AddCommentProps> = ({
  comments,
  line,
  onEditorSubmit,
  view,
}) => {
  const isReply = comments.length > 0;
  const question = isReply ? (comments[0] as QuestionProps) : undefined;

  const commentProps = {
    isReply,
    endingLineNum: line,
    onEditorSubmit,
    view,
  };

  return isReply ? (
    <CreateQuestionReply
      {...commentProps}
      startingLineNum={question!.startingLineNum}
      questionId={question!.id}
    />
  ) : (
    <CreateQuestion {...commentProps} />
  );
};
