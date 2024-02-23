import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './../pages/main/';
import { LoginPage } from '../pages/login';
import { FavoritesPage } from '../pages/favorites';
import { OfferPage } from '../pages/offer';
import { NotFoundPage } from '../pages/not-found';
import { LayoutPage } from '../pages/layout';
import { TOffer } from '../types/offer';
import { AppRoute } from './routes';

export type TAppProps = {
  offers: TOffer[];
};

export const App: FC<PropsWithChildren<TAppProps>> = ({ offers }) => (
  // как передать в Layout интформацию о наличии футера?
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Main} element={<LayoutPage />}>
        <Route index element={<MainPage offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Favorites} element={<FavoritesPage />} />
        <Route path={AppRoute.Offer} element={<OfferPage offers={offers} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
