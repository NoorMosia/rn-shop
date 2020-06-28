import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { addToWishlist } from '../store/actions/wishlistActions';

const ProductDetails = props => {
    const ProductDetails = props.navigation.getParam('product');

    const dispach = useDispatch();

    const addToCartHandler = item => {
        dispach(addToCart(item))
    }
    const addToWishlistHandler = item => {
        dispach(addToWishlist(item))
    }

    return (
        <View style={styles.ProductDetails}>
            <View style={styles.ImageContainer}>
                <Image style={styles.Image} source={{ uri: ProductDetails.imageUrl }}></Image>
            </View>

            <View style={styles.detailsTextContainer}>
                <View>
                    <View style={styles.text}>
                        <Text style={styles.text}>{ProductDetails.title}</Text>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.text}>R {ProductDetails.price.toFixed(2)}</Text>
                    </View>

                </View>

                <View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={addToCartHandler.bind(this, ProductDetails)} style={styles.Button}>
                            <Text>add to cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={addToWishlistHandler.bind(this, ProductDetails)} style={styles.Button}>
                            <Text>add to wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

ProductDetails.navigationOptions = navigationData => {
    const ProductDetails = navigationData.navigation.getParam('product');

    return {
        headerTitle: ProductDetails.title,
    };
};

const styles = StyleSheet.create({
    ProductDetails: {
        height: '100%',
        borderRadius: 3,
        backgroundColor: 'white'
    },
    ImageContainer: {
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Image: {
        height: '60%',
        width: "60%",
        overflow: 'visible'
    },
    detailsTextContainer: {
        backgroundColor: 'rgb(230, 230, 230)',
        height: '40%',
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        padding: 40,
        width: '100%',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 18,
        margin: 2,
        textTransform: 'capitalize'
    },
    buttonsContainer: {
        height: 36,
        width: '100%',
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        borderWidth: 1,
        borderRadius: 5
    }

})

export default ProductDetails;