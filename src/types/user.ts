export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type TUserAuthorisationData = {
  email: string;
  password: string;
};
