import React, { useEffect } from 'react';
import HorizontalList from '../components/HorizontalList';
import { ScrollView } from 'react-native-gesture-handler';

import { useSelector, useDispatch, } from 'react-redux';
import { getItems } from '../store/actions/itemActions';

const Home = props => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getItems())
    // }, [dispatch])

    const foodItems = useSelector(state =>
        state.items.filter(prod => prod.category === 'fast food')
    );
    const drinkItems = useSelector(state =>
        state.items.filter(prod => prod.category === 'drinks')
    );
    const bakeryItems = useSelector(state =>
        state.items.filter(prod => prod.category === 'bakery')
    );

    const pressHandler = item => props.navigation.navigate({
        routeName: 'productDetails',
        params: {
            product: item
        }
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <HorizontalList
                category="Fast Food"
                select={pressHandler}
                data={foodItems}
            >

            </HorizontalList>
            <HorizontalList
                category="Drinks"
                select={pressHandler}
                data={drinkItems}
            >

            </HorizontalList>
            <HorizontalList
                category="Bakery Food"
                select={pressHandler}
                data={bakeryItems}
            >

            </HorizontalList>
        </ScrollView>

    );
}

export default Home;