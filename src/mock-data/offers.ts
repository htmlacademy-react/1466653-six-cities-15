import { IFullOffer } from '../types/offer';
import { getRandomInteger, getRandomArrayElement } from '../utils';
import { IMG_URL, CITIES, CITIES_DESCRIPTION } from './mock';

const createRandomOffer = (index: number):IFullOffer => ({
  id: `6af6f711-c28d-4121-82cd-e0b462a27f00${index}`,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: getRandomInteger(100, 1000),
  city: {
    name: getRandomArrayElement(CITIES),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: getRandomInteger(4, 8)
    }
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: getRandomInteger(4, 8)
  },
  isFavorite: !!(getRandomInteger(0, 1)),
  isPremium: !!(getRandomInteger(0, 1)),
  rating: getRandomInteger(1, 5),
  description: getRandomArrayElement(CITIES_DESCRIPTION),
  bedrooms: getRandomInteger(1, 4),
  goods: [
    'Heating'
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: `${IMG_URL}${index + 1}`,
    isPro: !!(getRandomInteger(0, 1)),
  },
  images: [
    `${IMG_URL}${(getRandomInteger(1, 100))}`,
    `${IMG_URL}${(getRandomInteger(1, 100))}`,
    `${IMG_URL}${(getRandomInteger(1, 100))}`,
  ],
  maxAdults: getRandomInteger(1, 5)
});

export const generateOffers = (offersNumber: number): IFullOffer[] => (
  Array.from(new Array(offersNumber), (_, index): IFullOffer => createRandomOffer(index)));
