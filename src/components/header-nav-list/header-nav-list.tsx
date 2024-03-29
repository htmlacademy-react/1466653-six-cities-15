import { FC } from 'react';
import { Link } from 'react-router-dom';
import { TAppProps } from '../../app';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../app/routes';
import { IBaseOffer } from '../../types/offer';

type THeaderNavListProps = Pick<TAppProps, 'authorizationStatus'> & {
  favorites: IBaseOffer[];
};

export const HeaderNavList: FC<THeaderNavListProps> = ({ authorizationStatus, favorites }) => (
  authorizationStatus === AuthorizationStatus.Auth
    ?
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
                Oliver.conner@gmail.com
          </span>
          <span className="header__favorite-count">
            {favorites.length}
          </span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to="#">
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
    :
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Login}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </ul>
);
