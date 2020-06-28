import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import WideCard from './WideCard';
import { addToCart } from '../store/actions/cartActions';

const wishListItem = props => {
    return (
        <WideCard>
            <TouchableOpacity onPress={props.press} style={styles.ImageContainer}>
                <Image
                    source={{ uri: props.item.imageUrl }}
                    style={styles.Image}
                />
            </TouchableOpacity>
            <View style={styles.TextBox}>
                <View style={styles.TopText}>
                    <View >
                        <View style={styles.Title}>
                            <Text style={styles.Title}>
                                {props.item.title}
                            </Text>
                        </View>
                        <View style={styles.Price}>
                            <Text>
                                R {props.item.price.toFixed(2)}
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={props.removeFromWishlistHandler}>
                        <Text style={styles.Remove}>
                            <EvilIcons name='trash' size={30} color='black' />
                        </Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.Buttons}>
                    <TouchableOpacity
                        style={styles.addToCart}
                        onPress={props.addToCartHandler}
                    >
                        <Text>add to cart</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </WideCard>
    )
}

const styles = StyleSheet.create({
    ImageContainer: {
        width: '33%',
        justifyContent: "center",
        alignItems: "center",
        overflow: 'visible'
    },
    Image: {
        width: '60%',
        height: '60%',
        overflow: 'visible'
    },
    TextBox: {
        width: '66%',
        padding: 10
    },
    Title: {
        paddingVertical: 5,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    TopText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Remove: {
        padding: 10,
        color: 'red',
        fontSize: 22
    },
    Buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 32
    },
    addToCart: {
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 1,
        width: 105,
        borderRadius: 3
    },
    addToWishlist: {
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 1,
        width: 105,
        borderRadius: 3,
        shadowColor: 'grey',
        shadowRadius: 3
    },
    blurred: {
        opacity: .1
    }

})

export default wishListItem;