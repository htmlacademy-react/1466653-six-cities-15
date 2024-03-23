import { IFullOffer } from '../types/offer';
import { getRandomInteger, getRandomArrayElement } from '../utils';
import { IMG_URL, CITIES_DESCRIPTION, PLACE_NAMES, LATITUDES, LONGITUDES } from './mock';
import { cities } from '../const';

const createRandomOffer = (index: number):IFullOffer => ({
  id: `6af6f711-c28d-4121-82cd-e0b462a27f00${index}`,
  title: getRandomArrayElement(PLACE_NAMES),
  type: 'apartment',
  price: getRandomInteger(100, 1000),
  city: cities[0],
  location: {
    latitude: getRandomArrayElement(LATITUDES),
    longitude: getRandomArrayElement(LONGITUDES),
    zoom: 13,
  },
  isFavorite: !!(getRandomInteger(0, 1)),
  isPremium: !!(getRandomInteger(0, 1)),
  rating: getRandomInteger(1, 5),
  description: getRandomArrayElement(CITIES_DESCRIPTION),
  bedrooms: getRandomInteger(1, 4),
  goods: [
    'Heating',
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge',
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: `${IMG_URL}${index + 1}`,
    isPro: !!(getRandomInteger(0, 1)),
  },
  previewImage: `${IMG_URL}${(getRandomInteger(1, 100))}`,
  images: [
    `${IMG_URL}${(getRandomInteger(1, 100))}`,
    `${IMG_URL}${(getRandomInteger(1, 100))}`,
    `${IMG_URL}${(getRandomInteger(1, 100))}`,
  ],
  maxAdults: getRandomInteger(1, 5)
});

export const generateOffers = (offersNumber: number): IFullOffer[] => (
  Array.from(new Array(offersNumber), (_, index): IFullOffer => createRandomOffer(index)));
