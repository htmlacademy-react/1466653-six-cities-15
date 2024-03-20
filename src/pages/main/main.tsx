import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { IFullOffer, TCity } from '../../types/offer';
import { TabList } from '../../components/tab-list';
import { OffersSection } from '../../components/offers-section';
import { OffersEmpty } from '../../components/offers-empty';

type TMainPageProps = {
  offers: IFullOffer[];
  cities: TCity[];
};

export const MainPage: FC<TMainPageProps> = ({ offers, cities }) => {
  const emptyOffersClass = offers.length === 0 ? 'page__main--index-empty' : '';

  return (
    <main className={`page__main page__main--index ${emptyOffersClass}`}>
      <Helmet>
        <title>Cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <TabList cities={ cities } />
        </section>
      </div>
      <div className="cities">
        {
          offers.length > 0
            ? <OffersSection offers={ offers } city={ cities[0] }/>
            : <OffersEmpty />
        }
      </div>
    </main>
  );
};
