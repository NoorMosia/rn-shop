import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import WishlistItem from '../components/WishlistItem';
import { drinks } from '../Data/data';

const Wishlist = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            {
                drinks.map(item => <WishlistItem item={item} key={item.title}></WishlistItem>)
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