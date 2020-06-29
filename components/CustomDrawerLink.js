import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { DrawerItems } from 'react-navigation-drawer'

const CustomDrawerLink = props => {
    return (
        <View style={styles.CustomDrawerLink}>
            <View style={styles.textContainer}>
                <EvilIcons name='user' style={styles.icon} />
                <View>
                    <Text style={styles.name}>Chris Martins</Text>
                </View>
            </View>
            <View style={styles.DrawerItemsContainer}>
                <DrawerItems {...props}></DrawerItems>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CustomDrawerLink: {
        marginTop: 38,
        height: '100%',
        width: '100%'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    textContainer: {
        alignItems: 'center',
    },
    icon: {
        opacity: .2,
        fontSize: 200
    },
    DrawerItemsContainer: {
        marginTop: 22
    }
})



export default CustomDrawerLink;