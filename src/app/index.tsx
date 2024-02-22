import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './../pages/main/';
import { LoginPage } from '../pages/login';
import { FavoritesPage } from '../pages/favorites';
import { OfferPage } from '../pages/offer';
import { NotFoundPage } from '../pages/not-found';
import { LayoutPage } from '../pages/layout';

export type TAppProps = {
  hasFooter?: boolean;
  cardAmount?: number;
};

export const App: FC<PropsWithChildren<TAppProps>> = ({ cardAmount, hasFooter }) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutPage hasFooter={ hasFooter } />}>
        <Route index element={<MainPage cardAmount={ cardAmount } />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="offer" element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
