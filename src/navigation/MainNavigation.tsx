import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useAppDispatch} from '../store';
import {fileSystemActions} from '../store/fileSystem';

import Home from '../screens/Home';
import Web from '../screens/Web';
import FileTransfer from '../screens/FileTransfer';
import Settings from '../screens/Settings';
import {MainStackParamsList} from './MainStack';

const BottomTabs = createBottomTabNavigator<MainStackParamsList>();

const MainNavigation = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchDirs = async () => {
      dispatch(fileSystemActions.getFilesFS('/'));
    };
    fetchDirs();
  }, [dispatch]);

  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Web"
        component={Web}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="web" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="FileTransfer"
        component={FileTransfer}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="file-replace" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="application-settings" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default MainNavigation;
