import { FC } from 'react';
import { TReview } from '../../types/review';
import { ReviewsItem } from '../reviews-item';

type TReviewsListProps = {
  reviews: TReview[];
};

const MAX_REVIEWS_NUMBER = 10;

export const ReviewsList: FC<TReviewsListProps> = ({reviews}) => {
  const renderedReviews = reviews
    .slice(0, (MAX_REVIEWS_NUMBER - 1))
    .sort((a, b) => (b.date.getTime() - a.date.getTime()));

  return (
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
  );
};
