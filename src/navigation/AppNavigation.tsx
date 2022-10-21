import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../store';
import {authActions} from '../store/auth';
import {currentUser} from '../features/authentication';

import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import {RootState} from '../store';

const AppNavigation = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(authActions.logIn({user: currentUser}));
    }
  }, [dispatch]);

  return (
    <NavigationContainer>
      {auth.isLoggedIn ? <MainNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
