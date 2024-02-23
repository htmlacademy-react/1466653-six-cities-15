import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';
import { TAppProps } from '../../app';

type TLayoutPageProps = Pick<TAppProps, 'authorizationStatus'>;

export const LayoutPage: FC<TLayoutPageProps> = ({ authorizationStatus }) => (
  <div className="page">
    <Header authorizationStatus={ authorizationStatus }/>
    <Outlet />
    {
      // hasFooter ? <Footer /> : ''
    }
  </div>
);
