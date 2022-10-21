import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Web from '../screens/Web';
import FileTransfer from '../screens/FileTransfer';
import Settings from '../screens/Settings';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
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
