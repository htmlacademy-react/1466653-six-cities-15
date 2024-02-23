import { generateOffers } from './mock-data/mock';
import { TOffer } from './types/offer';

export const Setting = {
  CARDS_AMOUNT: 9,
  MAX_RATING: 5,
};

export const ratingRatio = 100 / Setting.MAX_RATING;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

// ?классы для page в Layout
export const PageClass = {
  MAIN: 'page--gray page--main',
  LOGIN: 'page--gray page--login',
  FAVORITES_EMPTY: 'page--favorites-empty',
};

export const offers: TOffer[] = generateOffers(Setting.CARDS_AMOUNT);
