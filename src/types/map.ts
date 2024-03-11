export type City = TLocationCoordinates & {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
