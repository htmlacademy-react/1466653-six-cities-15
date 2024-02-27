import { IBaseOffer } from '../types/offer';
import { CITIES, IMG_URL } from './mock';
import { getRandomInteger, getRandomArrayElement } from '../utils';

const createRandomFavorite = (index: number):IBaseOffer => ({
  id: `6af6f711-c28d-4121-82cd-e0b462a27f01${index}`,
  title: 'Beautiful & luxurious studio at great location',
  type: 'house',
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
  previewImage: `${IMG_URL}${(getRandomInteger(1, 100))}`,
});

export const generateFavorites = (favoritesNumber: number): IBaseOffer[] => (
  Array.from(new Array(favoritesNumber), (_, index): IBaseOffer => createRandomFavorite(index)));
