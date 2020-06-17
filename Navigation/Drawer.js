import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Stack from './Stack';
import Orders from '../screens/Orders';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Stack,
    },
    Orders: {
        screen: Orders,
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            drawerIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;

                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        drawerOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    },
);


export default createAppContainer(MyDrawerNavigator);