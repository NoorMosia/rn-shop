import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const EmptyWishlist = () => {
    return (
        <View style={styles.EmptyWishlistContainer}>
            <View style={styles.textContainer}>
                <AntDesign name='staro' size={100} />
                <View>
                    <Text>Your wishlist is empty</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    EmptyWishlistContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    textContainer: {
        alignItems: 'center',
    }
})



export default EmptyWishlist;