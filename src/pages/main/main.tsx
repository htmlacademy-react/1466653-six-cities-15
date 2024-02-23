import { FC } from 'react';
import { TAppProps } from '../../app';
import { TabList } from '../../components/tab-list';
import { OffersSection } from '../../components/offers-section';
import { OffersEmpty } from '../../components/offers-empty';

type TMainPageProps = Pick<TAppProps, 'offers'>;

export const MainPage: FC<TMainPageProps> = ({ offers }) => (
  <main className={`page__main page__main--index ${offers.length === 0 ?? 'page__main--index-empty'}`}>
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <section className="locations container">
        <TabList />
      </section>
    </div>
    <div className="cities">
      {
        offers.length > 0
          ? <OffersSection offers={offers} />
          : <OffersEmpty />
      }
    </div>
  </main>
);
