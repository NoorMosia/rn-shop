import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImagePropTypes } from 'react-native';

import Card from './Card';
import { ScrollView } from 'react-native-gesture-handler';

const HorizontalList = props => {

    return (
        <View style={styles.List}>
            <View style={styles.HeadingContainer}>
                <Text style={styles.Heading}>{props.category}</Text>
            </View>

            <View style={styles.CardsContainer}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>

                    {
                        props.data.map(item =>

                            <TouchableOpacity key={item.title} onPress={() => props.select(item)} >
                                <Card
                                    title={item.title}
                                    price={item.price}
                                    image={item.imageUrl}
                                />

                            </TouchableOpacity>)
                    }
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    List: {
        height: 250,
        padding: 10,
        marginBottom: 10,
        justifyContent: "center",
    },
    HeadingContainer: {
        height: '20%'
    },
    Heading: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    CardsContainer: {
        height: '80%',
    }
})


export default HorizontalList;