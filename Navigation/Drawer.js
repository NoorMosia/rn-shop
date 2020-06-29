import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CustomDrawerLink from '../components/CustomDrawerLink';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Stack from './Stack';
import Orders from '../screens/Orders';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Stack,
        navigationOptions: {
            drawerIcon: <AntDesign name='home' size={24} />
        }
    },
    Orders: {
        screen: Orders,
        navigationOptions: {
            drawerIcon: <AntDesign name='bars' size={24} />
        }
    },
    Category: {
        screen: Orders,
        navigationOptions: {
            drawerIcon: <AntDesign name='database' size={24} />
        }
    },
    Logout: {
        screen: Orders,
        navigationOptions: {
            drawerIcon: <AntDesign name='logout' home size={24} />
        }
    }
},
    {
        initialRouteName: 'Home',
        contentComponent: CustomDrawerLink,

    },
);


export default createAppContainer(MyDrawerNavigator);