import React from 'react';
import { Button } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import CartScreen from '../screens/Cart';
import WishlistScreen from '../screens/Wishlist';
import ProfileScreen from '../screens/Profile';

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Search: SearchScreen,
    Cart: CartScreen,
    Wishlist: WishlistScreen,
    Profile: ProfileScreen,
},
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                tabBarIcon: ({ tintColor }) => {
                    const { routeName } = navigation.state;
                    let IconComponent = AntDesign;
                    let iconName;
                    if (routeName === 'Home') {
                        iconName = 'home'
                    } else if (routeName === 'Search') {
                        iconName = 'search1'
                    } else if (routeName === 'Cart') {
                        iconName = 'shoppingcart'
                    } else if (routeName === 'Wishlist') {
                        iconName = 'staro'
                    }
                    else if (routeName === 'Profile') {
                        iconName = 'user'
                    }

                    return <IconComponent name={iconName} size={25} color={tintColor} />;
                },
            }
        },
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        },
    }
);

TabNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    const headerTitle = routeName;

    return {
        headerTitle,
    };
};

export default TabNavigator;