import { FC, SyntheticEvent, useState } from 'react';
import { TCity } from '../../types/offer';
import { TAppProps } from '../../app';
import { Nullable } from 'vitest';

export type TLocation = {
  id: number;
  title: string;
  src: string;
};

type TTabListProps = Pick<TAppProps, 'cities'> & {
  selectHandler: (city: Nullable<TCity>) => void;
}

export const TabList: FC<TTabListProps> = ({ cities, selectHandler }) => {
  const [activeCity, setActiveCity] = useState<Nullable<TCity>>(null);

  const clickHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    const newCity: Nullable<TCity> = cities.find(
      (city: TCity) => city.name === (event.target as HTMLElement).textContent
    );

    setActiveCity(newCity);
    selectHandler(newCity);
  };

  return (
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
};
