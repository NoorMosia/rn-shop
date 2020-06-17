import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import AntDesign from 'react-native-vector-icons/Feather'
import Tab from './Tab';
import Orders from '../screens/Orders';

import ProductDetails from '../screens/productDetails';

const MyStackNavigator = createStackNavigator({
    Home: {
        screen: Tab,
        navigationOptions: navData => ({
            headerLeft: () => (
                <AntDesign
                    name='menu' size={25}
                    style={{ marginLeft: 15 }}
                    onPress={() => navData.navigation.toggleDrawer()}
                />
            ),
        }),
    },
    Orders: {
        screen: Orders,
    },
    productDetails: ProductDetails,
});

export default createAppContainer(MyStackNavigator);