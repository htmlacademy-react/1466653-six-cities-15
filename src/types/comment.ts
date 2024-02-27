import { THost } from './user';

export type TComment = {
  id: string;
  date: Date;
  user: THost;
  comment: string;
  rating: number;
};
