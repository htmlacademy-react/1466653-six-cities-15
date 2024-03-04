import { THost } from './user';

export type TApartmentType = 'apartment' | 'room' | 'house' | 'hotel';

export type TLocationCoordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type TCity = {
  name: string;
  location: TLocationCoordinates;
}

export interface IBaseOffer {
  id: string;
  title: string;
  type: TApartmentType;
  price: number;
  city: TCity;
  location: TLocationCoordinates;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string; // ???
}

export interface IFullOffer extends IBaseOffer {
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}
