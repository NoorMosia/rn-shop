import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProductDetails = props => {
    const ProductDetails = props.navigation.getParam('product');
    return (
        <View style={styles.ProductDetails}>
            <View style={styles.ImageContainer}>
                <Image style={styles.Image} source={{ uri: ProductDetails.imageUrl }}></Image>
            </View>

            <View>
                <Text>{ProductDetails.title}</Text>
            </View>
            <View>
                <Text>R {ProductDetails.price.toFixed(2)}</Text>
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
        height: '60%',
        borderRadius: 3
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
    }

})

export default ProductDetails;