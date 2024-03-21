import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TAppProps } from '../../app';
import { AppRoute } from '../../app/routes';
import { HeaderNavList } from '../header-nav-list';
import { IBaseOffer } from '../../types/offer';

type THeaderProps = Pick<TAppProps, 'authorizationStatus'> & {
  favorites: IBaseOffer[];
};

export const Header: FC<THeaderProps> = ({ authorizationStatus, favorites }) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link
            className="header__logo-link header__logo-link--active"
            to={AppRoute.Main}
          >
            <img
              className="header__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width={81}
              height={41}
            />
          </Link>
        </div>
        <nav className="header__nav">
          <HeaderNavList authorizationStatus={authorizationStatus} favorites={favorites} />
        </nav>
      </div>
    </div>
  </header>
);
