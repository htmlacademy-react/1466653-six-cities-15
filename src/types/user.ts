export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

export type THost = Pick<TUser, 'name' | 'avatarUrl' | 'isPro'>;

export type TUserAuthorisationData = {
  email: string;
  password: string;
};
