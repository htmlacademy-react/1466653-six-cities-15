import { TReview } from './types/review';
import { IFullOffer, IBaseOffer, TCity } from './types/offer';
import { generateFavorites } from './mock-data/favorites';
import { generateOffers } from './mock-data/offers';
import { generateReviews } from './mock-data/reviews';
import { generateCities } from './mock-data/cities';

export const RATING: { value: number; title: string }[] = [
  {
    value: 5,
    title: 'perfect',
  },
  {
    value: 4,
    title: 'good',
  },
  {
    value: 3,
    title: 'not bad',
  },
  {
    value: 2,
    title: 'badly',
  },
  {
    value: 1,
    title: 'terribly',
  },
];

export const Setting = {
  CARDS_AMOUNT: 9,
  FAVORITES_AMOUNT: 5,
  REVIEWS_AMOUNT: 11,
  MAX_RATING: RATING.length,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities: TCity[] = generateCities();
export const offers: IFullOffer[] = generateOffers(Setting.CARDS_AMOUNT);
export const favorites: IBaseOffer[] = generateFavorites(Setting.FAVORITES_AMOUNT);
export const reviews: TReview[] = generateReviews(Setting.REVIEWS_AMOUNT);
