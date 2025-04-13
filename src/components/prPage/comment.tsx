import { Comment } from "../../types";

export const CommentBlock: React.FC<{ comment: Comment }> = ({ comment }) => (
  <div className="mb-4 flex gap-2">
    <div className="w-8 h-8 bg-gray-300 rounded-full text-center text-sm flex items-center justify-center">
      {comment.isBot ? "🤖" : comment.author[0]}
    </div>
    <div className="bg-gray-50 border rounded p-3 w-full">
      <p className="text-sm font-semibold">{comment.author}</p>
      <p className="text-sm text-gray-700">{comment.content}</p>
      <p className="text-xs text-gray-400 mt-1">{comment.timestamp}</p>
    </div>
  </div>
);
