import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WideCard = props => {
    return (
        <View style={styles.WideCard}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    WideCard: {
        backgroundColor: 'white',
        height: 130,
        width: '100%',
        margin: 10,
        borderRadius: 3,
        overflow: "hidden",
        flexDirection: 'row'
    }
})

export default WideCard;