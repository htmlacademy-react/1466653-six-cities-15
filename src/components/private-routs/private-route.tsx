import { FC, PropsWithChildren } from 'react';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../app/routes';
import { Navigate } from 'react-router-dom';
import { TAppProps } from '../../app';

type TPrivateRouteProps = PropsWithChildren & Pick<TAppProps, 'authorizationStatus'>;

export const PrivateRoute: FC<TPrivateRouteProps> = ({authorizationStatus, children}) => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);
