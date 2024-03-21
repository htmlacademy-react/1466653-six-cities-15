export const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

export const getRandomInteger = (min: number, max: number): number => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const getRandomArrayElement = <T>(array: T[]): T => array[getRandomInteger(0, array.length - 1)];
