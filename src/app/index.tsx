import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './../pages/main/';
import { LoginPage } from '../pages/login';
import { FavoritesPage } from '../pages/favorites';
import { OfferPage } from '../pages/offer';
import { NotFoundPage } from '../pages/not-found';
import { LayoutPage } from '../pages/layout';
import { TOffer } from '../mock-data/mock';

export type TAppProps = {
  offers: TOffer[];
};

export const App: FC<PropsWithChildren<TAppProps>> = ({ offers }) => (
  // как передать в Layout интформацию о наличии футера?
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<MainPage offers={offers} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="offer/:id" element={<OfferPage offers={offers} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
