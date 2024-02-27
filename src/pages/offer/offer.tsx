import { FC } from 'react';
import { TAppProps } from '../../app';
import { useParams } from 'react-router-dom';
import { IFullOffer } from '../../types/offer';
import { AuthorizationStatus, Setting } from '../../const';
import { capitalizeFirstLetter } from '../../utils';
import { ReviewForm } from '../../components/review-form';
import { NearPlacesList } from '../../components/near-places-list';
import { ReviewsList } from '../../components/reviews-list';
import { NotFoundPage } from '../not-found';

type TOfferCardProps = Pick<TAppProps, 'offers' | 'authorizationStatus'>;

export const OfferPage: FC<TOfferCardProps> = ({ offers, authorizationStatus }) => {
  const { id } = useParams();
  const currentOffer: IFullOffer | undefined = offers.find((offer: IFullOffer) => offer.id === id);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const ratingWidthStyle = `${currentOffer.rating * (100 / Setting.MAX_RATING)}%`;
  const capacityTitle = `Max\u00a0${currentOffer.maxAdults}\u00a0${currentOffer.maxAdults > 1 ? 'adults' : 'adult'}`;
  const bedroomsTitle = `${currentOffer.bedrooms}\u00a0${currentOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}`;

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {
              currentOffer.images.map((src, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className="offer__image-wrapper" key={index} >
                  <img
                    className="offer__image"
                    src={src}
                    alt="Photo studio"
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            { currentOffer.isPremium && (<div className="offer__mark"><span>Premium</span></div>)}

            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                { currentOffer.title }
              </h1>
              <button
                className={`offer__bookmark-button ${currentOffer.isFavorite && 'offer__bookmark-button--active'} button`}
                type="button"
              >
                <svg className="offer__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: ratingWidthStyle }} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                { currentOffer.rating }
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                { capitalizeFirstLetter(currentOffer.type) }
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                { bedroomsTitle }
              </li>
              <li className="offer__feature offer__feature--adults">
                { capacityTitle }
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">€{currentOffer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                <li className="offer__inside-item">Wi-Fi</li>
                <li className="offer__inside-item">Washing machine</li>
                <li className="offer__inside-item">Towels</li>
                <li className="offer__inside-item">Heating</li>
                <li className="offer__inside-item">Coffee machine</li>
                <li className="offer__inside-item">Baby seat</li>
                <li className="offer__inside-item">Kitchen</li>
                <li className="offer__inside-item">Dishwasher</li>
                <li className="offer__inside-item">Cabel TV</li>
                <li className="offer__inside-item">Fridge</li>
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src={currentOffer.host.avatarUrl}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">{currentOffer.host.name}</span>
                <span className="offer__user-status">{currentOffer.host.isPro ?? 'Pro'}</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {currentOffer.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews · <span className="reviews__amount">1</span>
              </h2>
              <ReviewsList />
              {
                authorizationStatus === AuthorizationStatus.Auth ?? <ReviewForm />
              }
            </section>
          </div>
        </div>
        <section className="offer__map map" />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <NearPlacesList />
        </section>
      </div>
    </main>
  );
};

