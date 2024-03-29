import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Footer } from '../../components/footer';
import { FavoriteLocationsList } from '../../components/favorite-locations-list';
import { IBaseOffer } from '../../types/offer';

type TFavoritesProps = {
  favorites: IBaseOffer[];
};

export const FavoritesPage: FC<TFavoritesProps> = ({ favorites }) => (
  <>
    <Helmet>
      <title>Cities. Saved listing</title>
    </Helmet>
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoriteLocationsList favorites={favorites} />
        </section>
      </div>
    </main>
    <Footer />
  </>
);
