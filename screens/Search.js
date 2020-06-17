import React from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';

import GeneralItem from '../components/SearchItem';
import BasicButton from '../components/BasicButton';

import { bakery } from '../Data/data';

const Search = () => {
    return (
        <View>
            <View style={styles.seachContainer}>
                <View style={styles.searchBox}>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <BasicButton>Search</BasicButton>
            </View>

            <ScrollView contentContainerStyle={styles.container}>
                {
                    bakery.map(item =>
                        <GeneralItem
                            item={item}
                            key={item.title}>
                        </GeneralItem>)
                }
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    seachContainer: {
        flexDirection: 'row'
    },
    input: {
        borderBottomColor: "rgb(172, 172, 172)",
        margin: 10,
        padding: 7,
        borderBottomWidth: 1,
        fontSize: 22
    },
    searchBox: {
        width: '75%'
    },
    container: {
        margin: 10,
        paddingBottom: 10,
        alignItems: 'center',
        minHeight: '130%'
    }
})

export default Search;