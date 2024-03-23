import { TReview } from '../types/review';
import { getRandomInteger, getRandomArrayElement } from '../utils';
import { IMG_URL } from './mock';

const COMMENTS: string[] = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'The hotel is centrally located in Brussels, near to Midi Station, which offers connections to international destinations, and also 1 km away from Grand Place and Manneken Pis.',
  'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
];

const createRandomReview = (index: number):TReview => ({
  id: `b67ddfd5-b953-4a30-8c8d-bd083cd6b62a${index}`,
  date: new Date(
    getRandomInteger(2022, 2024),
    getRandomInteger(0, 3),
    getRandomInteger(1, 29),
    getRandomInteger(0, 23),
    getRandomInteger(0, 59)
  ),
  user: {
    name: 'Oliver Conner',
    avatarUrl: `${IMG_URL}${index + 1}`,
    isPro: !!(getRandomInteger(0, 1)),
  },
  comment: getRandomArrayElement(COMMENTS),
  rating: 4
});

export const generateReviews = (offersNumber: number): TReview[] => (
  Array.from(new Array(offersNumber), (_, index): TReview => createRandomReview(index)));
