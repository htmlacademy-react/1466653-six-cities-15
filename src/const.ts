import { generateOffers } from './mock-data/mock';
import { TOffer } from './types/offer';

export const Setting = {
  CARDS_AMOUNT: 9,
  MAX_RATING: 5,
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const offers: TOffer[] = generateOffers(Setting.CARDS_AMOUNT);
