import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import WideCard from '../components/WideCard';

const Orders = () => {
    return (
        <ScrollView>
            <WideCard>
                <View style={styles.container}>
                    <View style={styles.cardTop}>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>R 300.00</Text>
                            <Text style={styles.priceText}>7 items</Text>
                        </View>
                        <View style={styles.date}>
                            <Text>27/06/19 12:34:45</Text>
                        </View>
                    </View>
                    <View style={styles.cardBottom}>
                        <TouchableOpacity style={styles.expandLink}>
                            <Text style={styles.expandLinkText}>Show details</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </WideCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
    },
    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 2
    },
    cardBottom: {
        alignItems: 'center',
        marginTop: 16,
        color: 'blue',
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 3
    },
    expandLinkText: {
        color: 'blue',
        fontSize: 22
    }
})

export default Orders;