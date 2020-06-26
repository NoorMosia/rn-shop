import React from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions/cartActions'

import CartItem from '../components/CartItem';

const Cart = props => {
    const pressHandler = item => props.navigation.navigate({
        routeName: 'productDetails',
        params: {
            product: item
        }
    });

    const dispatch = useDispatch();

    const removeFromCartHandler = itemId => {
        dispatch(removeFromCart(itemId))
    }

    const cartData = useSelector(state => state.cart);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {
                cartData.items.map(item => <CartItem
                    item={item}
                    key={item.title}
                    press={pressHandler.bind(this, item)}
                    removeFromCartHandler={removeFromCartHandler.bind(this, item.id)}
                ></CartItem>
                )
            }
            <View style={styles.total}>
                <Text style={styles.totalText}>
                    Total : R {cartData.totalAmount.toFixed(2)}
                </Text>
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