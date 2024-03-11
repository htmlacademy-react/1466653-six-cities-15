import { FC, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TAppProps } from '../../app';
import { TCity } from '../../types/offer';
import { TabList } from '../../components/tab-list';
import { OffersSection } from '../../components/offers-section';
import { OffersEmpty } from '../../components/offers-empty';

type TMainPageProps = Pick<TAppProps, 'offers' | 'cities'>;

export const MainPage: FC<TMainPageProps> = ({ offers, cities }) => {
  const [activeCity, setActiveCity] = useState<TCity>(cities[0]);

  return (
    <main className={`page__main page__main--index ${offers.length === 0 ?? 'page__main--index-empty'}`}>
      <Helmet>
        <title>Cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <TabList />
        </section>
      </div>
      <div className="cities">
        {
          offers.length > 0
            ? <OffersSection offers={ offers } city={ activeCity }/>
            : <OffersEmpty />
        }
      </div>
    </main>
  );
};
