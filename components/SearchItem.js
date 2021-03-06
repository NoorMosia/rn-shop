import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import WideCard from './WideCard';

const SearchItem = props => {

    return (
        <WideCard>
            <TouchableOpacity
                onPress={props.press}
                style={styles.ImageContainer}
            >
                <Image
                    source={{ uri: props.item.imageUrl }}
                    style={styles.Image}

                />
            </TouchableOpacity>
            <View style={styles.TextBox}>
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

                <View style={styles.Buttons}>
                    <TouchableOpacity
                        onPress={props.addToCartHandler}
                        style={styles.addToCart}
                    >
                        <Text>add to cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={props.addToWishlistHandler}
                        style={styles.addToWishlist}
                    >
                        <Text>add to wishlist</Text>
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
        width: '55%',
        height: '55%',
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
    Buttons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    }

})

export default SearchItem;