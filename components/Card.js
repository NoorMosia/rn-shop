import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Card = props => {
    return (
        <View style={styles.Card}>
            <View style={styles.Top}>
                <Image
                    source={{ uri: props.image }}
                    style={styles.Image}
                />
            </View>
            <View style={styles.Bottom}>
                <View style={styles.Name}>
                    <Text style={styles.Name}>R {props.price.toFixed(2)}</Text>
                </View>
                <Text>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        height: '100%',
        width: 150,
        marginRight: 10,
        borderRadius: 3,
        overflow: "hidden"
    },
    Top: {
        backgroundColor: 'white',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        position: 'relative'
    },
    Bottom: {
        padding: 5
    },
    Name: {
        fontWeight: 'bold',
        paddingVertical: 1,
        textTransform: 'capitalize'
    },
    Image: {
        width: 80,
        height: 80,
        overflow: 'visible'
    }
})

export default Card;