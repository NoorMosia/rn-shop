import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const EmptyCart = () => {
    return (
        <View style={styles.emptyCartContainer}>
            <View style={styles.textContainer}>
                <AntDesign name='shoppingcart' size={100} />
                <View>
                    <Text>Your cart is empty</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    emptyCartContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    textContainer: {
        alignItems: 'center',
    }
})



export default EmptyCart;