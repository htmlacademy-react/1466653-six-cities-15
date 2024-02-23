import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainPage } from './../pages/main/';
import { LoginPage } from '../pages/login';
import { FavoritesPage } from '../pages/favorites';
import { OfferPage } from '../pages/offer';
import { NotFoundPage } from '../pages/not-found';
import { LayoutPage } from '../pages/layout';
import { TOffer } from '../types/offer';
import { AppRoute } from './routes';
import { AuthorizationStatus } from '../const';
import { PrivateRoute } from '../components/private-routs';

export type TAppProps = {
  offers: TOffer[];
  authorizationStatus: AuthorizationStatus;
};

export const App: FC<PropsWithChildren<TAppProps>> = ({ offers, authorizationStatus }) => (
  // как передать в Layout интформацию о наличии футера?
  // и доп стили к контейнеру 'page'
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<LayoutPage authorizationStatus={authorizationStatus} />}>
          <Route index element={<MainPage offers={offers} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Offer} element={<OfferPage offers={offers} authorizationStatus={authorizationStatus} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
