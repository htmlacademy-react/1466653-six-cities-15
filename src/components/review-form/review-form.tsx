import { FC, useState, SyntheticEvent, ChangeEvent, Fragment } from 'react';
import { RATING } from '../../const';

const REVIEW_MIN_LENGTH = 50;

export const ReviewForm: FC = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    review: '',
  });

  // const checkIsFormValid = (): boolean => ();

  const inputChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const btnSubmitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {
          RATING.map(({value, title}) => (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={`${value}-stars`}
                type="radio"
                onChange={ inputChangeHandler }
              />
              <label
                htmlFor={`${value}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">{REVIEW_MIN_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!formData.rating || formData.review.length < REVIEW_MIN_LENGTH}
          onClick={btnSubmitHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
