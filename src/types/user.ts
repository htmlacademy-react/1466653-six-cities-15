export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};

// или лучше наследование через интерфейсы?
// тогда TUser extends THost, но вроде как нелогично
export type THost = Pick<TUser, 'name' | 'avatarUrl' | 'isPro'>;

export type TUserAuthorisationData = {
  email: string;
  password: string;
};
