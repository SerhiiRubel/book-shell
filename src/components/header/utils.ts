import {logout} from '../../redux/auth/slice';
import {AppDispatch} from '../../redux/store';
import {AppStackRouteProp} from '../../navigation/app-stack';
import {AuthStackRouteProp} from '../../navigation/auth-stack';
import {screenNames} from '../../constants';

export const getTitle = ({
  route,
}: {
  route: AuthStackRouteProp | AppStackRouteProp;
}) => {
  switch (route.name) {
    case screenNames.INITIAL:
      return 'Welcome';
    case screenNames.LOG_IN:
      return 'Log In';
    case screenNames.SIGN_UP:
      return 'Sign Up';
    case screenNames.DISCOVERY:
      return 'Discovery';
    case screenNames.DISCOVERY_DETAIL:
      return route.params?.title ?? 'Detail';
    default:
      return '';
  }
};

export const getRightAction = ({
  route,
  dispatch,
}: {
  route: AppStackRouteProp;
  dispatch: AppDispatch;
}) => {
  switch (route.name) {
    case screenNames.DISCOVERY:
    case screenNames.DISCOVERY_DETAIL: {
      return {icon: 'logout', onPress: () => dispatch(logout())};
    }
    default:
      return {};
  }
};
