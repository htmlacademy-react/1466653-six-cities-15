import { FC } from 'react';
import { AuthorizationStatus } from '../../const';
import { AppRoute } from '../../app/routes';
import { Navigate } from 'react-router-dom';
import { TAppProps } from '../../app';

// почему несмотря на то, что компоненты типизированы как PropsWithChildren в app/index
// в этом файле приходится принудительно задавать children в пропсы?
// иначе подсвечивается ошибка, что children на вход не ожидается

type TChildrenProps = {
  children: JSX.Element;
}

type TPrivateRouteProps = TChildrenProps & Pick<TAppProps, 'authorizationStatus'>;

export const PrivateRoute: FC<TPrivateRouteProps> = ({authorizationStatus, children}) => (
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoute.Login} />
);
