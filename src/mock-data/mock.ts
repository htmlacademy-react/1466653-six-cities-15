export const IMG_URL = 'https://loremflickr.com/248/152?random=';
export const CITIES: string[] = ['Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const PLACE_NAMES: string[] = [
  'Nice, cozy, warm big bed apartment',
  'Beautiful & luxurious studio at great location',
  'White castle',
  'Wood and stone place',
];

export const CITIES_DESCRIPTION: string[] = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'The hotel is centrally located in Brussels, near to Midi Station, which offers connections to international destinations, and also 1 km away from Grand Place and Manneken Pis.',
  'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
];

export const LOCATIONS: { id: number; title: string; src: string }[] = CITIES.map((item, index) => ({
  id: index + 1,
  title: item,
  src: '#'
}));
