import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FeedScreen from '@screens/FeedScreen'
import MessagesScreen from '@screens/MessagesScreen'
import NotificationsScreen from '@screens/NotificationsScreen'
import ProfileScreen from '@screens/ProfileScreen'
import CustomTab from './CustomTab';


const TabNavigation = createBottomTabNavigator(
    {
        Feed: {
            screen: FeedScreen,
        },
        Messages: {
            screen: MessagesScreen,
        },
        Notifications: {
            screen: NotificationsScreen,
        },
        Profile: {
            screen: ProfileScreen,
        },
    },
    {
      initialRouteName: 'Feed',
      tabBarComponent: (props) => <CustomTab {...props} />,
    },
  );
  
export default TabNavigation;