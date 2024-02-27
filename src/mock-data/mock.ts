import { TFullOffer } from '../types/offer';
import { getRandomInteger, getRandomArrayElement } from '../utils';

export const IMG_URL = 'https://loremflickr.com/248/152?random=';
export const CITIES: string[] = ['Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const CITIES_DESCRIPTION: string[] = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'The hotel is centrally located in Brussels, near to Midi Station, which offers connections to international destinations, and also 1 km away from Grand Place and Manneken Pis.',
  'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
];

export const LOCATIONS = CITIES.map((item, index) => ({
  id: index + 1,
  title: item,
  src: '#'
}));

const createRandomOffer = (index: number):TFullOffer => ({
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

export const generateOffers = (offersNumber: number): TFullOffer[] => (
  Array.from(new Array(offersNumber), (_, index): TFullOffer => createRandomOffer(index)));
