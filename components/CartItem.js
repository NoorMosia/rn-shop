import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import WideCard from './WideCard';

const CartItem = props => {
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
                    <TouchableOpacity >
                        <Text style={styles.Remove}>
                            <EvilIcons name='trash' size={30} color='black' />
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Buttons}>
                    <TouchableOpacity style={styles.Increment}>
                        <Text>-</Text>
                    </TouchableOpacity>

                    <View>
                        <Text>1</Text>
                    </View>

                    <TouchableOpacity style={styles.Decrement}>
                        <Text>+</Text>
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
        paddingTop: 10,
        color: 'red',
        fontSize: 22
    },
    Buttons: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 32
    },
    Increment: {
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 1,
        width: 26,
        height: 26,
        borderRadius: 13,
    },
    Decrement: {
        justifyContent: 'center',
        alignItems: "center",
        borderColor: 'black',
        borderWidth: 1,
        width: 26,
        height: 26,
        borderRadius: 13,
    }

})

export default CartItem;