import { FC } from 'react';
import { TAppProps } from '../../app';
import { Setting } from '../../const';
import { capitalizeFirstLetter } from '../../utils';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../app/routes';

type TFavoriteOffersListProps = Pick<TAppProps, 'favorites'>;

export const FavoriteOffersList: FC<TFavoriteOffersListProps> = ({ favorites }) => (
  <div className="favorites__places">
    {
      favorites.map((item) => {
        const ratingWidthStyle = `${item.rating * (100 / Setting.MAX_RATING)}%`;

        return (
          <article className="favorites__card place-card" key={item.id}>
            {item.isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}

            <div className="favorites__image-wrapper place-card__image-wrapper">
              <Link to={`${AppRoute.Offer}/${item.id}`}>
                <img
                  className="place-card__image"
                  src="img/apartment-small-03.jpg"
                  width={150}
                  height={110}
                  alt="Place image"
                />
              </Link>
            </div>
            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">€{item.price.toLocaleString()}</b>
                  <span className="place-card__price-text">
                    /&nbsp;night
                  </span>
                </div>
                <button
                  className={`
                    place-card__bookmark-button
                    ${item.isFavorite && ('place-card__bookmark-button--active')}
                    button
                  `}
                  type="button"
                >
                  <svg
                    className="place-card__bookmark-icon"
                    width={18}
                    height={19}
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: ratingWidthStyle }} />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`${AppRoute.Offer}/${item.id}`}>
                  {item.title}
                </Link>
              </h2>
              <p className="place-card__type">{capitalizeFirstLetter(item.type)}</p>
            </div>
          </article>
        );
      })
    }
  </div>
);
