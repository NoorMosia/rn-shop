import React from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';

import SearchItem from '../components/SearchItem';
import BasicButton from '../components/BasicButton';
import EmptyView from '../components/EmptyView';

import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { addToWishlist } from '../store/actions/wishlistActions';

// import bakery from '../store/reducers/initData';

const Search = props => {
    const pressHandler = item => props.navigation.navigate({
        routeName: 'productDetails',
        params: {
            product: item
        }
    });
    const data = []

    const dispatch = useDispatch();

    const addToCartHandler = item => {
        dispatch(addToCart(item))
    }
    const addToWishlistHandler = item => {
        dispatch(addToWishlist(item))
    }

    const List = data.length > 0
        ?
        <ScrollView contentContainerStyle={styles.container}>
            {
                data.map(item => {
                    return (<SearchItem
                        item={item}
                        key={item.title}
                        press={pressHandler.bind(this, item)}
                        addToCartHandler={addToCartHandler.bind(this, item)}
                        addToWishlistHandler={addToWishlistHandler.bind(this, item)}
                    >
                    </SearchItem>)
                })
            }
        </ScrollView>
        :
        <EmptyView iconName='search1'>

        </EmptyView>

    return (
        <View>
            <View style={styles.seachContainer}>
                <View style={styles.searchBox}>
                    <TextInput style={styles.input}></TextInput>
                </View>

                <BasicButton>Search</BasicButton>
            </View>

            {List}

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