import { generateFavorites } from './mock-data/favorites';
import { generateOffers } from './mock-data/mock';
import { IFullOffer, IBaseOffer } from './types/offer';

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

export const offers: IFullOffer[] = generateOffers(Setting.CARDS_AMOUNT);
export const favorites: IBaseOffer[] = generateFavorites(Setting.FAVORITES_AMOUNT);
