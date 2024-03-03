import { FC } from 'react';
import { TAppProps } from '../../app';
import { Setting } from '../../const';
import DateHelper from '../../helpers/date';

type TReviewsListProps = Pick<TAppProps, 'comments'>;

export const ReviewsList: FC<TReviewsListProps> = ({comments}) => (
  <ul className="reviews__list">
    {
      comments.map(({ user, comment, rating, date }, index) => {
        const ratingWidthStyle = `${rating * (100 / Setting.MAX_RATING)}%`;

        return (
          <li
            className="reviews__item"
            // eslint-disable-next-line react/no-array-index-key
            key={`${user.name}_${date.getTime()}_${index}`}
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
              <time className="reviews__time" dateTime="2019-04-24">
                { DateHelper.getDateTime(date) }
                <br />
                { DateHelper.humanizeMonthYear(date) }
              </time>
            </div>
          </li>
        )
      })
    }
  </ul>
);
