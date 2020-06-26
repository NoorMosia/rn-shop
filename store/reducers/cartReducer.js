import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM
} from '../actions/cartActions';

const initialState = {
    items: [],
    totalAmount: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            state.items.push(action.item);
            const newItemsList = state.items
            const newTotal = state.totalAmount + 10;
            return { ...state, items: newItemsList, totalAmount: newTotal };

        case REMOVE_FROM_CART:
            const newItems = state.items.filter(item => item.id !== action.id)
            return { ...state, items: newItems };
        case INCREMENT_ITEM:
            return state;
        case DECREMENT_ITEM:
            return state;
        default:
            return state;
    }
}

export default reducer;