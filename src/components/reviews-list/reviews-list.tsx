import { FC } from 'react';
import { Setting } from '../../const';
import DateHelper from '../../helpers/date';
import { ReviewsItem } from '../reviews-item';

type TReviewsListProps = {
  comments: TComment[];
};

const MAX_REVIEWS_NUMBER = 10;

export const ReviewsList: FC<TReviewsListProps> = ({comments}) => {
  if (comments.length < 1) {
    return null;
  }

  const renderedComments = comments
    .slice(0, (MAX_REVIEWS_NUMBER - 1))
    .sort((a, b) => (b.date.getTime() - a.date.getTime()));

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>

      <ul className="reviews__list">
        {
          renderedComments.map((comment) => (
            <ReviewsItem
              key={comment.id}
              comment={comment}
            />
          ))
        }
      </ul>
    </section>
  );
};
