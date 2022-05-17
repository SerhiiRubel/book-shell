import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Appbar, Switch} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

import {selectDarkMode, setDarkMode} from '../../redux/app/slice';
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
  const isDarkMode = useSelector(selectDarkMode);

  const title = useMemo(() => getTitle({route}), [route]);
  const {icon, onPress} = useMemo(
    () => getRightAction({route, dispatch}),
    [dispatch, route],
  );

  const onToggleSwitch = useCallback(() => {
    dispatch(setDarkMode(!isDarkMode));
  }, [dispatch, isDarkMode]);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      <Switch value={isDarkMode} onValueChange={onToggleSwitch} />
      {Boolean(icon) && <Appbar.Action icon={icon!} onPress={onPress} />}
    </Appbar.Header>
  );
};
