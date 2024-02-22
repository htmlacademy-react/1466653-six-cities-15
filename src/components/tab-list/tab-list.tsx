import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { LOCATIONS } from './../../mock-data/mock';

export type TLocation = {
  id: number;
  title: string;
  src: string;
};

export const TabList: FC = () => (
  <ul className="locations__list tabs__list">
    {
      LOCATIONS.length > 0
        ? LOCATIONS.map((item: TLocation) => (
          <li className="locations__item" key={ item.id }>
            <NavLink className="locations__item-link tabs__item" to={item.src}>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))
        : ''
    }
  </ul>
);
