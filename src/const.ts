import { TComment } from './types/comment';
import { IFullOffer, IBaseOffer, TCity } from './types/offer';
import { generateFavorites } from './mock-data/favorites';
import { generateOffers } from './mock-data/offers';
import { generateComments } from './mock-data/comments';
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
  COMMENTS_AMOUNT: 11,
  MAX_RATING: RATING.length,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const offers: IFullOffer[] = generateOffers(Setting.CARDS_AMOUNT);
export const favorites: IBaseOffer[] = generateFavorites(Setting.FAVORITES_AMOUNT);
export const comments: TComment[] = generateComments(Setting.FAVORITES_AMOUNT);
export const cities: TCity[] = generateCities();
