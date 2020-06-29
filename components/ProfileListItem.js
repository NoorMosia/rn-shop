import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ProfileListItem = props => {
    return (
        <TouchableOpacity onPress={props.pressHandler} style={styles.link}>
            <View style={styles.linkIconContainer}>
                <AntDesign name={props.icon} style={styles.linkIcon} />
            </View>
            <View style={styles.linkNameContainer}>
                <Text style={styles.linkName}>{props.name}</Text>
            </View>
            <View style={styles.arrowIconContainer}>
                <EvilIcons name='chevron-right' style={styles.arrowIcon} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        flexDirection: 'row',
        height: 50,
        borderBottomColor: 'rgb(230, 230, 230)',
        borderBottomWidth: 1,
        marginHorizontal: 24,
        marginVertical: 10
    },
    linkIconContainer: {
        width: '10%',
        height: '100%',
        marginRight: 20
    },
    linkIcon: {
        fontSize: 36
    },
    linkNameContainer: {
        width: '80%',
        height: '100%',
    },
    linkName: {
        fontSize: 26,
    },
    arrowIconContainer: {
        height: '100%',
        marginLeft: -20
    },
    arrowIcon: {
        fontSize: 46
    }
})

export default ProfileListItem;