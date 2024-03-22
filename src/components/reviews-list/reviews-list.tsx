import { FC } from 'react';
import { TReview } from '../../types/review';
import { ReviewsItem } from '../reviews-item';

type TReviewsListProps = {
  reviews: TReview[];
};

const MAX_REVIEWS_NUMBER = 10;

export const ReviewsList: FC<TReviewsListProps> = ({reviews}) => {
  if (reviews.length < 1) {
    return null;
  }

  const renderedReviews = reviews
    .slice(0, (MAX_REVIEWS_NUMBER - 1))
    .sort((a, b) => (b.date.getTime() - a.date.getTime()));

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ul className="reviews__list">
        {
          renderedReviews.map((comment) => (
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
