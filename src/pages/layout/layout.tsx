import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header';

export const LayoutPage: FC = () => (
  <div className="page">
    <Header />
    <Outlet />
    {
      // hasFooter ? <Footer /> : ''
    }
  </div>
);
