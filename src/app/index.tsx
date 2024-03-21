import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MainPage } from './../pages/main/';
import { LoginPage } from '../pages/login';
import { FavoritesPage } from '../pages/favorites';
import { OfferPage } from '../pages/offer';
import { NotFoundPage } from '../pages/not-found';
import { LayoutPage } from '../pages/layout';
// import { IBaseOffer, IFullOffer, TCity } from '../types/offer';
// import { TComment } from '../types/comment';
import { AppRoute } from './routes';
import { AuthorizationStatus } from '../const';
import { PrivateRoute } from '../components/private-routs';
import { ScrollToTop } from '../components/scroll-to-top';
import { offers, favorites, comments, cities } from '../const';

export type TAppProps = {
  authorizationStatus: AuthorizationStatus;
};

export const App: FC<PropsWithChildren<TAppProps>> = ({
  authorizationStatus,
}) => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <LayoutPage authorizationStatus={authorizationStatus} favorites={favorites} />
          }
        >
          <Route index element={<MainPage offers={offers} cities={cities} />} />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesPage favorites={favorites} />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={
              <OfferPage
                offers={offers}
                comments={comments}
                authorizationStatus={authorizationStatus}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
