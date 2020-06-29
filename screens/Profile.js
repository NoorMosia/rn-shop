import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import ProfileListItem from '../components/ProfileListItem';

const Profile = props => {
    const pressHandler = route => props.navigation.navigate({
        routeName: route
    });
    return (
        <View style={styles.profileContainer}>
            <View style={styles.headerBanner}>
                <View style={styles.headerIconContainer}>
                    <EvilIcons name='user' style={styles.headerIcon} />
                </View>
                <View style={styles.HeaderTextContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Chris Martins</Text></View>
                    <View style={styles.emailContainer}>
                        <Text style={styles.email}>chrismartins@yahoo.com</Text>
                    </View>
                </View>
            </View>

            <View style={styles.linksContainer}>
                <ProfileListItem
                    name='orders'
                    icon='bars'
                    pressHandler={pressHandler.bind(this, 'Orders')}>
                </ProfileListItem>
                <ProfileListItem
                    name='orders'
                    icon='bars'
                    pressHandler={pressHandler.bind(this, 'Orders')}>
                </ProfileListItem>
                <ProfileListItem
                    name='orders'
                    icon='bars'
                    pressHandler={pressHandler.bind(this, 'Orders')}>
                </ProfileListItem>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        height: 160,
        padding: 10,
        // backgroundColor: 'blue'
    },
    headerBanner: {
        flexDirection: 'row',
    },
    headerIconContainer: {
        width: '33%',
        alignItems: 'center'
    },
    headerIcon: {
        fontSize: 150
    },
    HeaderTextContainer: {
        paddingVertical: 26,
        paddingHorizontal: 16
    },
    nameContainer: {
        paddingBottom: 5
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    // links

})

export default Profile;