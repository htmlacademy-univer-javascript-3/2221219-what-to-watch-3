import { Comment } from '../const';
import UserReview from './review';

type ReviewsProps = {
  comments: Comment[];
};

export default function Reviews({ comments }: ReviewsProps) {
  return (
    <div className="film-card__reviews-col">
      {comments.map((comment) => (
        <UserReview key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
