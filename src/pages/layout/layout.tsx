import { FC } from 'react';
import { TAppProps } from '../../app';
import {Outlet} from 'react-router-dom';
import { Header } from '../../components/header';

export const LayoutPage: FC<TAppProps> = () => (
  <div className="page">
    <Header />
    <Outlet />
    {
      // hasFooter ? <Footer /> : ''
    }
  </div>
);
