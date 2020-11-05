import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import WishlistItem from '../components/WishlistItem';
import { addToCart } from '../store/actions/cartActions';
import { removeFromWishlist } from '../store/actions/wishlistActions';
import EmptyView from '../components/EmptyView';

const Wishlist = props => {
    const pressHandler = item => props.navigation.navigate({
        routeName: 'productDetails',
        params: {
            product: item
        }
    });

    const wishlistItems = useSelector(state => state.wishlist)
    const dispacth = useDispatch();

    const addToCartHandler = item => {
        dispacth(addToCart(item))
    }
    const removeFromWishlistHandler = item => {
        dispacth(removeFromWishlist(item))
    }

    const List = wishlistItems.length > 0
        ?
        <ScrollView contentContainerStyle={styles.container}>
            {
                wishlistItems.map(item => <WishlistItem
                    item={item}
                    key={item.title}
                    press={pressHandler.bind(this, item)}
                    addToCartHandler={addToCartHandler.bind(this, item)}
                    removeFromWishlistHandler={removeFromWishlistHandler.bind(this, item.id)}
                ></WishlistItem>)
            }
        </ScrollView>
        :
        <EmptyView iconName='staro'>you wishlist is empty</EmptyView>

    return (
        List
    );
}

Wishlist.navigationOptions = {
    HeaderTitle: 'Wish',
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        paddingBottom: 100,
        alignItems: 'center',
        minHeight: '100%'
    }
})

export default Wishlist;