import { TUser } from '../types/user';
import { getRandomInteger } from '../utils';
import { IMG_URL } from './mock';

const createRandomUser = (index: number) => ({
  name: 'Oliver Conner',
  avatarUrl: `${IMG_URL}${index + 1}`,
  isPro: !!(getRandomInteger(0, 1)),
  email: '',
  token: `T2xpdmVyLmNvbm5lckBnbWFpbC5jb2${index + 1}=`,
});

export const generateOffers = (offersNumber: number): TUser[] => (
  Array.from(new Array(offersNumber), (_, index): TUser => createRandomUser(index)));
