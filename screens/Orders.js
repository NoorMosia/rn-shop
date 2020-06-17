import React from 'react';
import { Text, ScrollView } from 'react-native';

import WideCard from '../components/WideCard';

const Orders = () => {
    return (
        <ScrollView>
            <WideCard></WideCard>
            <WideCard></WideCard>
            <WideCard></WideCard>
            <WideCard></WideCard>
        </ScrollView>
    );
}

export default Orders;