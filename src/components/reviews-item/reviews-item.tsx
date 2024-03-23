import { FC } from 'react';
import { Setting } from '../../const';
import DateHelper from '../../helpers/date';
import { TReview } from '../../types/review';

type TReviewsItemProps = {
  comment: TReview;
};

export const ReviewsItem: FC<TReviewsItemProps> = ({comment}) => {
  if (!comment) {
    return null;
  }
  const { comment: text, date, rating, user} = comment;
  const ratingWidthStyle = `${rating * (100 / Setting.MAX_RATING)}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingWidthStyle }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          { text }
        </p>
        <time className="reviews__time" dateTime={ DateHelper.formatDatetime(date) }>
          { DateHelper.formatMonthYear(date) }
        </time>
      </div>
    </li>
  );
};
