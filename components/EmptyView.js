import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const EmptySearch = props => {
    return (
        <View style={styles.EmptySearchContainer}>
            <View style={styles.textContainer}>
                <AntDesign name={props.iconName} style={styles.icon} />
                <View>
                    <Text>{props.children}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    EmptySearchContainer: {
        justifyContent: 'center',
        height: '80%',
    },
    textContainer: {
        alignItems: 'center',
    },
    icon: {
        opacity: .2,
        fontSize: 100
    }
})



export default EmptySearch;