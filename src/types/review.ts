import { THost } from './user';

export type TReview = {
  id: string;
  date: Date;
  user: THost;
  comment: string;
  rating: number;
};
