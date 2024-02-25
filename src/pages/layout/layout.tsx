import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';
import { TAppProps } from '../../app';

type TLayoutPageProps = Pick<TAppProps, 'authorizationStatus'>;

const PageClass = {
  MAIN: 'page--gray page--main',
  LOGIN: 'page--gray page--login',
  FAVORITES_EMPTY: 'page--favorites-empty',
};

export const LayoutPage: FC<TLayoutPageProps> = ({ authorizationStatus }) => (
  <div className="page">
    <Header authorizationStatus={ authorizationStatus }/>
    <Outlet />
  </div>
);
