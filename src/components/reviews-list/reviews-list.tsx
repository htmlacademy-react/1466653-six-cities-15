import { FC } from 'react';
import { Setting } from '../../const';
import DateHelper from '../../helpers/date';
import { TComment } from '../../types/comment';

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
    <ul className="reviews__list">
      {
        renderedComments.map(({ user, comment, rating, date }) => {
          const ratingWidthStyle = `${rating * (100 / Setting.MAX_RATING)}%`;

          return (
            <li
              className="reviews__item"
              // eslint-disable-next-line react/no-array-index-key
              key={`${user.name}_${date.getTime()}`}
            >
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
                  { comment }
                </p>
                <time className="reviews__time" dateTime={ DateHelper.formatDatetime(date) }>
                  { DateHelper.formatMonthYear(date) }
                </time>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};
