/* eslint-disable prettier/prettier */
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from '@screens/SplashScreen'
import LoginScreen from '@screens/LoginScreen'
import RegisterScreen from '@screens/RegisterScreen'
import PostcreateScreen from '@screens/PostcreateScreen'
import PostshowScreen from '@screens/PostshowScreen'
import TabNavigation from './TabNavigation';


const AppNavigation = createStackNavigator({

    Splash : {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Tab: {
        screen: TabNavigation,
        navigationOptions: {
            headerShown: false,
        }
    },
    Postcreate: {
        screen: PostcreateScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Postshow: {
        screen: PostshowScreen,
        navigationOptions: {
            headerShown: false,
        }  
    }
});

export default createAppContainer(AppNavigation);