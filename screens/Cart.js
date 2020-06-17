import React from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import CartItem from '../components/CartItem';

import { food } from '../Data/data';

const Cart = props => {
    const pressHandler = item => props.navigation.navigate({
        routeName: 'productDetails',
        params: {
            product: item
        }
    });

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                food.map(item => <CartItem
                    item={item}
                    key={item.title}
                    press={pressHandler.bind(this, item)}
                ></CartItem>)
            }
            <View style={styles.total}>
                <Text style={styles.totalText}>Total : R 30.89</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text>
                    Checkout
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        paddingBottom: 100,
        alignItems: 'center'
    },
    checkoutButton: {
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: 'rgb(206, 206, 206)'
    },
    total: {
        marginVertical: 30
    },
    totalText: {
        fontSize: 22
    }
})

export default Cart;