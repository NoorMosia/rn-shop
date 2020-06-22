import React from 'react';
import HorizontalList from '../components/HorizontalList';
import { ScrollView } from 'react-native-gesture-handler';
import { bakery, food, drinks } from '../Data/data';

// import { useSelector } from 'react-redux';

const Home = props => {
    // const items = useSelector(state => state.items.items);
    // console.log("hi " + items)


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
                data={food}>

            </HorizontalList>
            <HorizontalList
                category="Drinks"
                select={pressHandler}
                data={drinks}>

            </HorizontalList>
            <HorizontalList
                category="Bakery Food"
                select={pressHandler}
                data={bakery}>

            </HorizontalList>
        </ScrollView>

    );
}

export default Home;