import React, {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {Appbar} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

import {
  AppStackNavigationProp,
  AppStackRouteProp,
} from '../../navigation/app-stack';
import {AuthStackNavigationProp} from '../../navigation/auth-stack';
import {getRightAction, getTitle} from './utils';

export type HeaderProps = {
  navigation: AuthStackNavigationProp | AppStackNavigationProp;
  back?: {title: string};
};

export const Header: React.FC<HeaderProps> = ({navigation, back}) => {
  const route = useRoute<AppStackRouteProp>();
  const dispatch = useDispatch();

  const title = useMemo(() => getTitle({route}), [route]);
  const {icon, onPress} = useMemo(
    () => getRightAction({route, dispatch}),
    [dispatch, route],
  );

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {Boolean(icon) && <Appbar.Action icon={icon!} onPress={onPress} />}
    </Appbar.Header>
  );
};
