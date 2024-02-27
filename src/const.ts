import { generateFavorites } from './mock-data/favorites';
import { generateOffers } from './mock-data/mock';
import { TFullOffer, TBaseOffer } from './types/offer';

export const Setting = {
  CARDS_AMOUNT: 9,
  FAVORITES_AMOUNT: 5,
  MAX_RATING: 5,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const offers: TFullOffer[] = generateOffers(Setting.CARDS_AMOUNT);
export const favorites: TBaseOffer[] = generateFavorites(Setting.FAVORITES_AMOUNT);
