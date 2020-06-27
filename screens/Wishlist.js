import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import WishlistItem from '../components/WishlistItem';
import { drinks } from '../Data/data';
import { addToCart } from '../store/actions/cartActions';

const Wishlist = props => {
    const pressHandler = item => props.navigation.navigate({
        routeName: 'productDetails',
        params: {
            product: item
        }
    });

    const dispacth = useDispatch();

    const addToCartHandler = item => {
        dispacth(addToCart(item))
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                drinks.map(item => <WishlistItem
                    item={item}
                    key={item.title}
                    press={pressHandler.bind(this, item)}
                    addToCartHandler={addToCartHandler.bind(this, item)}
                ></WishlistItem>)
            }
        </ScrollView>
    );
}

Wishlist.navigationOptions = {
    HeaderTitle: 'Wish',
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingBottom: 100,
        alignItems: 'center',
        minHeight: '100%'
    }
})

export default Wishlist;