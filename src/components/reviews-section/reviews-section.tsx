import { FC } from 'react';
import { TAppProps } from '../../app';
import { AuthorizationStatus } from '../../const';
import { TReview } from '../../types/review';
import { ReviewsList } from '../reviews-list';
import { ReviewForm } from '../review-form';

type TReviewsSectionProps = Pick<TAppProps, 'authorizationStatus'> & {
  reviews: TReview[];
};

export const ReviewsSection: FC<TReviewsSectionProps> = ({authorizationStatus, reviews}) => {
  if (reviews.length < 1) {
    return null;
  }

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ReviewsList reviews={reviews} />

      {
        authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />
      }
    </section>
  );
};
