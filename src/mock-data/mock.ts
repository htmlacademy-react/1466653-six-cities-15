export const IMG_URL = 'https://loremflickr.com/248/152?random=';
export const CITIES: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const PLACE_NAMES: string[] = [
  'Nice, cozy, warm big bed apartment',
  'Beautiful & luxurious studio at great location',
  'White castle',
  'Wood and stone place',
];

export const CITIES_DESCRIPTION: string[] = [
  'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'The hotel is centrally located in Brussels, near to Midi Station, which offers connections to international destinations, and also 1 km away from Grand Place and Manneken Pis.',
  'An independent House, strategically located between Rembrandt Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.'
];

export const LOCATIONS: { id: number; title: string; src: string }[] = CITIES.map((item, index) => ({
  id: index + 1,
  title: item,
  src: '#'
}));

export const LATITUDES: number[] = [
  52.35514938496378,
  52.36593684070078,
  52.37294300389186,
  52.365781899712644,
  52.36361163893716,
];

export const LONGITUDES: number[] = [
  4.87309666406198,
  4.893189429198876,
  4.886170744413396,
  4.903743869768048,
  4.888066272541538,
];
