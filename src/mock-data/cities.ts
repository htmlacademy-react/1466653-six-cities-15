import { TCity } from '../types/offer';
import { getRandomInteger, getRandomArrayElement } from '../utils';
import { CITIES, LATITUDES, LONGITUDES } from './mock';

export const generateCities = (): TCity[] => (
  CITIES.map((cityName: string) => ({
    name: cityName,
    location: {
      latitude: getRandomArrayElement(LATITUDES),
      longitude: getRandomArrayElement(LONGITUDES),
      zoom: getRandomInteger(4, 8)
    },
  }))
);
