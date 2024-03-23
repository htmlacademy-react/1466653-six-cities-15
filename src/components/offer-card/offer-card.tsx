import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBaseOffer } from '../../types/offer';
import { AppRoute } from '../../app/routes';
import { Setting } from '../../const';
import { capitalizeFirstLetter } from './../../utils';

const classNameVariants = {
  nearPlaces: 'near-places__card',
  cities: 'cities__card',
};

type TOfferCardProps = {
  offer:IBaseOffer;
  cardClassName: keyof typeof classNameVariants;
  hoverHandler: (offer?: IBaseOffer) => void;
};

export const OfferCard: FC<TOfferCardProps> = ({ offer, cardClassName, hoverHandler }) => {
  const ratingWidthStyle = `${offer.rating * (100 / Setting.MAX_RATING)}%`;
  const previewImageLink = offer.previewImage || '';

  const mouseEnterHandler = () => {
    hoverHandler(offer);
  };
  const mouseLeaveHandler = () => {
    hoverHandler();
  };

  return (
    <Link to={`${AppRoute.Offer}/${offer.id}`} >
      <article
        className={`${classNameVariants[cardClassName]} place-card`}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        { offer.isPremium && (<div className="place-card__mark"><span>Premium</span></div>) }

        <div className="cities__image-wrapper place-card__image-wrapper">
          <img
            className="place-card__image"
            src={previewImageLink}
            width={260}
            height={200}
            alt="Place image"
          />
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€{ offer.price }</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}
              type="button"
            >
              <svg
                className="place-card__bookmark-icon"
                width={18}
                height={19}
              >
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: ratingWidthStyle }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            { offer.title }
          </h2>
          <p className="place-card__type">{ capitalizeFirstLetter(offer.type) }</p>
        </div>
      </article>
    </Link>
  );
};
