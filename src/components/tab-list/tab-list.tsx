import { FC } from 'react';
import { TCity } from '../../types/offer';
import { TAppProps } from '../../app';

export type TLocation = {
  id: number;
  title: string;
  src: string;
};

type TTabListProps = {
  cities:TCity[];
};

export const TabList: FC<TTabListProps> = ({ cities }) => (
  <ul className="locations__list tabs__list">
    {
      cities.length > 0 && (cities.map((item: TCity) => (
        <li className="locations__item" key={ item.name }>
          <a
            href='#'
            className={`
              locations__item-link
              tabs__item
              ${activeCity?.name === item.name && 'tabs__item--active'}` }
            onClick={clickHandler}
          >
            <span>{item.name}</span>
          </a>
        </li>
      )))
    }
  </ul>
);

