import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const BasicButton = props => {
    return (
        <TouchableOpacity onPress={props.searchHandler} activeOpacity={.6} style={styles.searchButton}>
            <Text>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    searchButton: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(200, 200, 200)',
        borderRadius: 3,
        margin: 10,
    },
});

export default BasicButton;