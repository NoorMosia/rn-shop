import React from 'react';
import { View, StyleSheet } from 'react-native';

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
        width: '96%',
        margin: '2%',
        borderRadius: 3,
        overflow: "hidden",
        flexDirection: 'row'
    }
})

export default WideCard;