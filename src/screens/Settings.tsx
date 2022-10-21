import {Button, View} from 'react-native';
import React from 'react';

import {useAppDispatch} from '../store';
import {authActions} from '../store/auth';
import {logoutUser} from '../features/authentication';

const Settings = () => {
  const dispatch = useAppDispatch();
  const logout = () => {
    logoutUser();
    dispatch(authActions.logout());
  };
  return (
    <View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default Settings;
